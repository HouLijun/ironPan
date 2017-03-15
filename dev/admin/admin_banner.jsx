const React = require('react');
const ReactDOM = require('react-dom');
const common = require('./admin_common.jsx');

import { Table, Input, Icon, Button, Popconfirm,Select ,Upload,Modal} from 'antd';
const Option = Select.Option;
class PicturesWall extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            previewVisible: false,
            previewImage: '',
            fileList: [{
                uid: -this.props.id,
                name: this.props.url,
                status: 'done',
                url: this.props.url?`/public/images/${this.props.url}`:null,
            }],
        };
        this.handleCancel=this.handleCancel.bind(this);
        this.handlePreview=this.handlePreview.bind(this);
        this.handleChange=this.handleChange.bind(this);
    }
    componentDidMount(){
        if(!this.props.url){
            this.setState({fileList:[]})
        }
    }
    handleCancel(){this.setState({ previewVisible: false })};
    handlePreview(file){
        this.setState({
            previewImage: file.url || file.thumbUrl,
            previewVisible: true,
        });
    };
    handleChange({ fileList }){this.setState({ fileList })}
    render() {
        const { previewVisible, previewImage, fileList } = this.state;
        const uploadButton = (
            <div>
                <Icon type="plus" />
                <div className="ant-upload-text">Upload</div>
            </div>
        );
        return (
            <div className="clearfix">
                <Upload
                    action="/admin/uploadBanner"
                    listType="picture-card"
                    fileList={fileList}
                    onPreview={this.handlePreview}
                    onChange={this.handleChange}
                    data={{id:this.props.id}}
                >
                    {fileList.length >= 1 ? null : uploadButton}
                </Upload>
                <Modal visible={previewVisible} footer={null} onCancel={this.handleCancel}>
                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </Modal>
            </div>
        );
    }
}
class EditableCell extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: this.props.value,
            editable: false,
        }
        this.handleChange=this.handleChange.bind(this);
        this.check=this.check.bind(this);
        this.edit=this.edit.bind(this);
    }
    handleChange(e){
        const value = e.target.value;
        this.setState({ value });
    }
    check(){
        this.setState({ editable: false });
        if (this.props.onChange) {
            this.props.onChange(this.state.value);
        }
    }
    edit(){
        this.setState({ editable: true });
    }
    render() {
        const { value, editable } = this.state;
        return (
            <div className="editable-cell">
                {
                    editable ?
                        <div className="editable-cell-input-wrapper">
                            <Input
                                value={value}
                                onChange={this.handleChange}
                                onPressEnter={this.check}
                            />
                            <Icon
                                type="check"
                                className="editable-cell-icon-check"
                                onClick={this.check}
                            />
                        </div>
                        :
                        <div className="editable-cell-text-wrapper">
                            {value || ' '}
                            <Icon
                                type="edit"
                                className="editable-cell-icon"
                                onClick={this.edit}
                            />
                        </div>
                }
            </div>
        );
    }
}
class EditableTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dataSource: [{
                key: '',
                url: '',
                position: '0',
                bgColor: '',
            }],
            updateId:0
        };
        this.columns = [ {
            title: '图片',
            dataIndex: 'url',
            width:"32%",
            render: (text, record, index) =>(
                <PicturesWall id={this.state.dataSource[index].key} url={this.state.dataSource[index].url}/>
            )
        }, {
            title: '展示位置',
            dataIndex: 'position',
            width:"30%",
            render: (text, record, index) => (
                <Select labelInValue defaultValue={{ key: `${this.state.dataSource[index].position}` }} style={{ width: 100 }}
                        onFocus={()=>{this.changeState(this.state.dataSource[index].key)}}
                        onChange={this.handleChange}>
                    <Option value="0">首页</Option>
                    <Option value="1">关于我们</Option>
                    <Option value="2">新闻资讯</Option>
                    <Option value="3">产品展示</Option>
                    <Option value="4">铁锅保养</Option>
                    <Option value="5">餐饮美食</Option>
                    <Option value="6">联系我们</Option>
                </Select>
            )
        },{
            title: '背景颜色',
            dataIndex: 'bgColor',
            width:"20%",
            render: (text, record, index) => (
                <EditableCell
                    value={text}
                    onChange={this.onCellChange(index, 'bgColor',this.state.dataSource[index].key)}
                />
            )
        }, {
            title: 'operation',
            dataIndex: 'operation',
            width:"18%",
            render: (text, record, index) => {
                var id = this.state.dataSource[index].key;
                return (
                    <Popconfirm title="Sure to delete?" onConfirm={() => this.onDelete(id)}>
                        <a href="#">Delete</a>
                    </Popconfirm>
                );
            },
        }];
        this.handleChange=this.handleChange.bind(this);
        this.changeState=this.changeState.bind(this);
        this.onCellChange=this.onCellChange.bind(this);
        this.onDelete=this.onDelete.bind(this);
        this.handleAdd=this.handleAdd.bind(this);
    }
    componentDidMount() {
        fetch('/admin/getBanner', {
            credentials: 'same-origin'
        }).then((res)=>res.json()).then((data)=> {
            var arr = []
            data.forEach((v, i)=> {
                var obj = {key: v.id, url: v.url,position:v.position,bgColor:v.color};
                arr.push(obj);
            })
            this.setState({dataSource: arr});
        });
    }
    changeState(id){
        this.setState({
            updateId:id
        })
    }
    handleChange(value) {
        value.id=this.state.updateId;
        fetch("/admin/chBannerPosition",{
            method:"post",
            headers: {
                'Content-type': 'application/json'
            },
            credentials: 'same-origin',
            body: JSON.stringify(value)
        }).then((res)=>{res.json()}).then((data)=>{
            if(data==200){

            }
        })
    }
    onCellChange(index, key, id) {
        return (value) => {
            const that=this;
            var dataSource = [...this.state.dataSource];
            var id = dataSource[index].key;
            var data = {
                id: id,
                bgColor: value
            }
            fetch("/admin/chBannerBg", {
                method: "post",
                headers: {
                    'Content-type': 'application/json'
                },
                credentials: 'same-origin',
                body: JSON.stringify(data)
            }).then((res)=>
                res.json()
            ).then((data)=> {
                if(data==200){
                    dataSource[index][key] = value;
                    that.setState({dataSource});
                }
            })
        };
    }
    onDelete(index){
        var id = {id: index};
        var arr = [...this.state.dataSource];
        const that=this;
        fetch('/admin/delBanner', {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin',
            body: JSON.stringify(id)
        }).then((res)=>
            res.json()
        ).then((data)=> {
            if(data==200){
                arr.forEach((v, i)=> {
                    if (v.key == index) {
                        arr.splice(i, 1);
                    }
                })
                that.setState({dataSource: arr});
            }
        })
    }
    handleAdd(){
        const { dataSource } = this.state;
        const that = this;
        fetch('/admin/addBanner', {
            credentials: 'same-origin'
        }).then((res)=>res.json()).then((data)=> {
            const newData = {
                key: data,
                url: '',
                position: '0',
                bgColor: '',
            };
            that.setState({
                dataSource: [...dataSource, newData]
            });
        });
    }
    render() {
        const { dataSource } = this.state;
        const columns = this.columns;
        return (
            <div>
                <Button className="editable-add-btn" onClick={this.handleAdd}>Add</Button>
                <Table bordered dataSource={dataSource} columns={columns} />
            </div>
        );
    }
}

ReactDOM.render(
    <common.AdminCommon>
        <EditableTable />
    </common.AdminCommon>
    , document.querySelector('#banner'));