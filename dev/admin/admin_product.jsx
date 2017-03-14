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
            cName: this.props.data.cName,
            eName: this.props.data.eName,
            original_price: this.props.data.original_price,
            current_price: this.props.data.current_price,
            cn_price: this.props.data.cn_price,
            link: this.props.data.link,
            thumb: this.props.data.thumb,
            label: this.props.data.label,
            detail:this.props.data.detail
        }
        this.cname=this.cname.bind(this);
        this.ename=this.ename.bind(this);
        this.orPrice=this.orPrice.bind(this);
        this.curPrice=this.curPrice.bind(this);
        this.cnPrice=this.cnPrice.bind(this);
        this.link=this.link.bind(this);
        this.label=this.label.bind(this);
        this.delete=this.delete.bind(this);
        this.detail=this.detail.bind(this);
    }

    /*中文名*/
    cname(e) {
        var value = e.currentTarget.value;
        this.setState({
            cName: value
        })
        var data={
            value:value,
            index:'cName',
            id:this.state.id
        };
        fetch('/admin/product_update',{
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

    /*英文名*/
    ename(e) {
        var value = e.currentTarget.value;
        this.setState({
            eName: value
        })
        var data={
            value:value,
            index:'eName',
            id:this.state.id
        };
        fetch('/admin/product_update',{
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

    /*原价*/
    orPrice(e) {
        var value = e.currentTarget.value;
        this.setState({
            original_price: value
        })
        var data={
            value:value,
            index:'original_price',
            id:this.state.id
        };
        fetch('/admin/product_update',{
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

    /*打折价格*/
    curPrice(e) {
        var value = e.currentTarget.value;
        this.setState({
            current_price: value
        })
        var data={
            value:value,
            index:'current_price',
            id:this.state.id
        };
        fetch('/admin/product_update',{
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

    /*中文价格*/
    cnPrice(e) {
        var value = e.currentTarget.value;
        this.setState({
            cn_price: value
        })
        var data={
            value:value,
            index:'cn_price',
            id:this.state.id
        };
        fetch('/admin/product_update',{
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
    /*商铺地址*/
    link(e){
        var value=e.currentTarget.value;
        this.setState({
            link:value
        })
        var data={
            value:value,
            index:'link',
            id:this.state.id
        };
        fetch('/admin/product_update',{
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
    /*商品标签*/
    label(e){
        var value=e.currentTarget.value;
        this.setState({
            label:value
        })
        var data={
            value:value,
            index:'label',
            id:this.state.id
        };
        fetch('/admin/product_update',{
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
    /*产品详情*/
    detail(e){
        var value=e.currentTarget.value;
        this.setState({
            detail:value
        })
        var data={
            value:value,
            index:'detail',
            id:this.state.id
        };
        fetch('/admin/product_update',{
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
        fetch(`/admin/product/${this.state.cate_id}/${this.state.id}`,{
            method:"POST",
            credentials: 'same-origin',
            headers:{
                "Content-Type":"application/json"
            },
            credentials:"same-origin"
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
            action: '/admin/product_thumb',
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
                    location.href=`/admin/product/${cate}`
                } else if (info.file.status === 'error') {
                    message.error(`${info.file.name} file upload failed.`);
                }

            },
        };
        var category=location.pathname.split("/")[2];
        return (
            <Col span="12" key={1}>
                <Card bordered={false}>
                    <form action="" method="post">
                        <div className="inputName">
                            中文名称: <Input type="text" name='title' onChange={this.cname} value={this.state.cName}/>
                        </div>
                        <div className="inputName">
                            英文名称: <Input type="text" name="source" onChange={this.ename} value={this.state.eName}/>
                        </div>
                        <div className="inputName">
                            原始价格: <Input type="text" name='author' onChange={this.orPrice}
                                         value={this.state.original_price}/>
                        </div>
                        <div className="inputName">
                            打折价格: <Input type="text" name='time' onChange={this.curPrice}
                                         value={this.state.current_price}/>
                        </div>
                        <div className="inputName">
                            中文价格: <Input type="text" name='time' onChange={this.cnPrice} value={this.state.cn_price}/>
                        </div>
                        <div className="inputName">
                            商铺地址: <Input type="text" name='time' onChange={this.link} value={this.state.link}/>
                        </div>
                        <div className="inputName">
                            商品标签: <Input type="text" name='time' onChange={this.label} value={this.state.label}/>
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
                        <a href={`/admin/product/${this.state.cate_id}`}>
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
        fetch(`/admin/product/${id}`, {
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
       fetch(`/admin/product_add/${this.state.cate_id}`,{
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
                        <a href={`/admin/product/${this.state.cate_id}`}>
                            <Button>增加</Button>
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
ReactDOM.render(<Content/>, document.querySelector('#product'));