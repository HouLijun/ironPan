const React = require('react');
const ReactDOM = require('react-dom');
const common = require('./admin_common.jsx');


import {Card, Col, Row, Input, Tag, Button, Icon, Upload, message } from 'antd';
class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id:this.props.data.id,
            cate_id: this.props.data.cate_id,
            title: this.props.data.title,
            sources: this.props.data.sources,
            author: this.props.data.author,
            insertTime: this.props.data.insertTime,
            detail: this.props.data.detail,
            thumb: this.props.data.thumb
        };
        this.title=this.title.bind(this);
        this.sources=this.sources.bind(this);
        this.author=this.author.bind(this);
        this.insert=this.insert.bind(this);
        this.detail=this.detail.bind(this);
        this.thumb=this.thumb.bind(this);
        this.delete=this.delete.bind(this);
    }

    /*标题*/
    title(e) {
        var value = e.currentTarget.value;
        this.setState({
            title: value
        })
        var data={
            value:value,
            index:'title',
            id:this.state.id
        };
        fetch('/admin/food_update',{
            method:'post',
            credentials: 'same-origin',
            headers:{
                'content-Type':'application/json'
            },
            body:JSON.stringify(data)
        }).then((res)=>res.json()).then((data)=>{
            console.log(data);
        })
    }

    /*来源*/
    sources(e) {
        var value = e.currentTarget.value;
        this.setState({
            sources: value
        })
        var data={
            value:value,
            index:'sources',
            id:this.state.id
        };
        fetch('/admin/food_update',{
            method:'post',
            credentials: 'same-origin',
            headers:{
                'content-Type':'application/json'
            },
            body:JSON.stringify(data)
        }).then((res)=>res.json()).then((data)=>{
            console.log(data);
        })
    }

    /*作者*/
    author(e) {
        var value = e.currentTarget.value;
        this.setState({
            author: value
        })
        var data={
            value:value,
            index:'author',
            id:this.state.id
        };
        fetch('/admin/food_update',{
            method:'post',
            credentials: 'same-origin',
            headers:{
                'content-Type':'application/json'
            },
            body:JSON.stringify(data)
        }).then((res)=>res.json()).then((data)=>{
            console.log(data);
        })
    }

    /*上传时间*/
    insert(e) {
        var value = e.currentTarget.value;
        this.setState({
            inertTime: value
        })
        var data={
            value:value,
            index:'inertTime',
            id:this.state.id
        };
        fetch('/admin/food_update',{
            method:'post',
            credentials: 'same-origin',
            headers:{
                'content-Type':'application/json'
            },
            body:JSON.stringify(data)
        }).then((res)=>res.json()).then((data)=>{
            console.log(data);
        })
    }

    /*详情*/
    detail(e) {
        var value = e.currentTarget.value;
        this.setState({
            detail: value
        })
        var data={
            value:value,
            index:'detail',
            id:this.state.id
        };
        fetch('/admin/food_update',{
            method:'post',
            credentials: 'same-origin',
            headers:{
                'content-Type':'application/json'
            },
            body:JSON.stringify(data)
        }).then((res)=>res.json()).then((data)=>{
            console.log(data);
        })
    }
    /*缩略图*/
    thumb(e){
        var value=e.currentTarget.value;
        this.setState({
            thumb:value
        })
        var data={
            value:value,
            index:'thumb',
            id:this.state.id
        };
        fetch('/admin/food_update',{
            method:'post',
            credentials: 'same-origin',
            headers:{
                'content-Type':'application/json'
            },
            body:JSON.stringify(data)
        }).then((res)=>res.json()).then((data)=>{
            console.log(data);
        })
    }

    /*删除*/
    delete(){
        fetch(`/admin/food/${this.state.cate_id}/${this.state.id}`,{
            method:"POST",
            credentials: 'same-origin',
            headers:{
                "Content-Type":"application/json"
            }
        }).then((res)=>res.json()).then((data)=>{
            if(data=="ok"){
                console.log(1);
            }
        })
    }

    render() {
        const data={id:this.state.id,cate_id:this.state.cate_id};
        var cate=this.state.cate_id;
        const nnn = {
            name: 'file',
            action: '/admin/food_thumb',
            headers: {
                authorization: 'authorization-text',
            },
            data:data,
            onChange(info) {
                if (info.file.status !== 'uploading') {
                    console.log(info.file, info.fileList);
                }
                if (info.file.status === 'done') {
                    message.success(`${info.file.name} file uploaded successfully`);
                    location.href=`/admin/food/${cate}`
                } else if (info.file.status === 'error') {
                    message.error(`${info.file.name} file upload failed.`);
                }

            },
        };
        var category=location.pathname.split("/")[2];
        return (
            <Col span="8" key={1}>
                <Card bordered={false}>
                    <form action="" method="post">
                        <div className="inputName">
                            标题: <Input type="text" name='title' onChange={this.title} value={this.state.title}/>
                        </div>
                        <div className="inputName">
                            来源: <Input type="text" name="source" onChange={this.sources} value={this.state.sources}/>
                        </div>
                        <div className="inputName">
                            作者: <Input type="text" name='author' onChange={this.author}
                                       value={this.state.author}/>
                        </div>
                        <div className="inputName">
                            上传时间: <Input type="text" name='insertTime' onChange={this.insertTime}
                                         value={this.state.insertTime}/>
                        </div>
                    </form>
                    <div className="custom-image">
                        <img src={`/public/images/${this.state.thumb}`} alt="图片加载失败！"
                             style={{width: '50%', height: '50%', display: 'table', margin: ' 8px auto'}}/>
                        <Upload {...nnn}>
                            <Button>
                                <Icon type="upload" /> 更改图片
                            </Button>
                        </Upload>
                    </div>
                    <div className="custom-card">
                        <Button><a href={`/admin/detail/${category}/${this.state.cate_id}/${this.state.id}`}>点击编辑文章</a></Button>
                        <Input type="textarea" rows={5} onChange={this.detail} value={this.state.detail}/>
                    </div>
                    <div className="inputName btn-delete" onClick={this.delete}>
                        <a href={`/admin/food/${this.state.cate_id}`}>
                            <Button>删除</Button>
                        </a>
                    </div>
                </Card>
            </Col>
        )
    }
}

class Content extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            cate_id:null
        }
        this.add=this.add.bind(this);
    }

    componentDidMount() {
        var arr = location.pathname.split('/');
        var id = arr[arr.length - 1];
        fetch(`/admin/food/${id}`, {
            method: 'post',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((res) => res.json()).then((data) => {
            this.setState({
                data: data
            })
        });
        this.setState({
            cate_id:id
        })
    }
    /*增加*/
    add(e){
        fetch(`/admin/food_add/${this.state.cate_id}`,{
            method: 'POST',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((res) => res.json()).then((data) => {
            console.log(data);
        });
    }
    render() {
        var lists = this.state.data.map((v, i) => <List data={v} key={i}/>)
        return (
            <common.AdminCommon>
                <div className="zq_box">
                    <div className="zq_add" onClick={this.add}>
                        <a href={`/admin/food/${this.state.cate_id}`}>
                            <button className="add">增加</button>
                        </a>
                    </div>
                    <div style={{overflow:"hidden"}}>
                        {lists}
                    </div>

                </div>
            </common.AdminCommon>
        );
    }
}
ReactDOM.render(<Content/>, document.querySelector('#food'));