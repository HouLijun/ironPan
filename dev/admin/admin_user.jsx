const React = require('react');
const ReactDOM = require('react-dom');
const common = require('./admin_common.jsx');
const crypto=require('crypto');

import { Table, Input, Popconfirm } from 'antd';

class EditableCell extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            value: this.props.value,
            editable: this.props.editable || false
        };

    }
    componentWillReceiveProps(nextProps) {
        if (nextProps.editable !== this.state.editable) {
            this.setState({ editable: nextProps.editable });
            if (nextProps.editable) {
                this.cacheValue = this.state.value;
            }
        }
        if (nextProps.status && nextProps.status !== this.props.status) {
            if (nextProps.status === 'save') {
                this.props.onChange(this.state.value);
            } else if (nextProps.status === 'cancel') {
                this.setState({ value: this.cacheValue });
                this.props.onChange(this.cacheValue);
            }
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.editable !== this.state.editable ||
            nextState.value !== this.state.value;
    }
    handleChange(e) {
        const value = e.target.value;
        this.setState({ value });
    }
    render() {
        const { value, editable } = this.state;
        return (
            <div>
                {
                    editable ?
                        <div>
                            <Input
                                value={value}
                                onChange={e => this.handleChange(e)}
                            />
                        </div>
                        :
                        <div className="editable-row-text">
                            {value.toString() || ' '}
                        </div>
                }
            </div>
        );
    }
}

class AdminUser extends React.Component {
    constructor(props) {
        super(props);
        this.columns = [{
            title: 'account',
            dataIndex: 'account',
            width: '25%',
            render: (text, record, index) => this.renderColumns(this.state.data, index, 'account', text),
        }, {
            title: 'Password',
            dataIndex: 'password',
            width: '25%',
            render: (text, record, index) => this.renderColumns(this.state.data, index, 'password', text),
        }, {
            title: 'operation',
            dataIndex: 'operation',
            render: (text, record, index) => {
                const { editable } = this.state.data[index].account;
                return (
                    <div className="editable-row-operations">
                        {
                            editable ?
                                <span>
                  <a onClick={() => this.editDone(index, 'save')}>保存</a>
                  <Popconfirm title="确定取消?" onConfirm={() => this.editDone(index, 'cancel')}>
                      <a>取消</a>
                  </Popconfirm>
                </span>
                                :
                                <span>
                  <a onClick={() => this.edit(index)}>修改</a>
                </span>
                        }
                    </div>
                );
            },
        }];
        this.state={
            data:[],
            num:[]
        };
    }
    //发送数据
    componentDidMount(){
        fetch('/admin/admin_user/select',{
            method:'post',
            headers:{
                'Content-Type':'application/json'
            },
            credentials:'same-origin',
            body:JSON.stringify(this.state.num)
        }).then((res)=>res.json()).then((data)=>{
            this.setState({
                num:data
            });
            this.state.num.map((v,i)=>{
                this.setState({
                    data: [{
                        key: i,
                        account: {
                            editable: false,
                            value: v.account,
                        },
                        password: {
                            editable: false,
                            value: v.pw,
                        }
                    }],
                })
            })
        })
    }
    renderColumns(data, index, key, text) {
        const { editable, status } = data[index][key];
        if (typeof editable === 'undefined') {
            return text;
        }
        return (<EditableCell
            editable={editable}
            value={text}
            onChange={value => {
                this.handleChange(key, index, value);
            }}
            status={status}
        />);
    }
    handleChange(key, index, value) {
        const { data } = this.state;
        data[index][key].value = value;
        this.setState({ data });
    }
    edit(index) {
        const { data } = this.state;
        Object.keys(data[index]).forEach((item) => {
            if (data[index][item] && typeof data[index][item].editable !== 'undefined') {
                data[index][item].editable = true;
            }
        });
        this.setState({ data });
    }
    editDone(index, type) {
        const { data } = this.state;
        Object.keys(data[index]).forEach((item) => {
            if (data[index][item] && typeof data[index][item].editable !== 'undefined') {
                data[index][item].editable = false;
                data[index][item].status = type;
            }
        });
        this.setState({ data }, () => {
            Object.keys(data[index]).forEach((item) => {
                if (data[index][item] && typeof data[index][item].editable !== 'undefined') {
                    delete data[index][item].status;
                }
            });
            //声明一些
            var acs=data[index]['account'].value;
            var pws=data[index]['password'].value;
            var hasx=acs+'+'+pws;
            const encrypt=(text)=>{
                return crypto.createHash("md5").update(String(text)).digest("hex");    //定义加密
            };
            var jpws=encrypt(pws);
            var jhasx=encrypt(hasx);
            var sourceData={
                account:acs,
                password:jpws,
                pw:pws,
                hash:jhasx
            };
            if(type=="save"){
                fetch('/admin/admin_user/update',{
                    method:'post',
                    headers:{
                        'Content-Type':'application/json'
                    },
                    credentials:'same-origin',
                    body:JSON.stringify(sourceData)
                }).then((res)=>res.json()).then((data)=>{
                    alert(data);
                    location.href="/admin/out";
                })
            }
        });
    }
    render() {
        const { data } = this.state;
        const dataSource = data.map((item) => {
            const obj = {};
            Object.keys(item).forEach((key) => {
                obj[key] = key === 'key' ? item[key] : item[key].value;
            });
            return obj;
        });
        const columns = this.columns;
        return <Table bordered dataSource={dataSource} columns={columns} />;
    }
}
ReactDOM.render(
    <common.AdminCommon>
        <AdminUser/>
    </common.AdminCommon>
    , document.querySelector('#user'));

