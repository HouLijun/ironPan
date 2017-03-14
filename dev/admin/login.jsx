const React = require('react');
const ReactDOM = require('react-dom');
//antd  拷贝+改代码  this改   组件可以写样式，可嵌套，stat,props
import {Layout} from 'antd';
const {Header, Footer, Sider, Content} = Layout;

import {Form, Icon, Input, Button, Checkbox} from 'antd';
const FormItem = Form.Item;

class NormalLoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                var body='';
                for(var k in values){
                    body+=`${k}=${values[k]}&`;
                }
                fetch('/login/check',{
                    method:'post',
                    headers:{
                        'Content-Type':'application/json'
                    },
                    credentials: 'same-origin',
                    body:JSON.stringify(values)
                })
                    .then((res) => res.json())//服务器回应信息
                    .then((data) => {
                        if(data=='ok'){
                         location.href='/admin';
                         }
                    })//发送ajax
            }
        });
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        return (
            <Form style={{    width: 400,
                margin: 'auto',
                padding: '30px 50px 20px 50px',
                background: 'rgb(240, 240, 240)',
                borderRadius: '10px',
                boxShadow: '0 0 18px rgba(0,0,0,0.2)'}} onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    {getFieldDecorator('userName', {
                        rules: [{required: true, message: 'Please input your username!'}],
                    })(
                        <Input addonBefore={<Icon type="user"/>} placeholder="请输入账号"/>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('password', {
                        rules: [{required: true, message: 'Please input your Password!'}],
                    })(
                        <Input addonBefore={<Icon type="lock"/>} type="password" placeholder="请输入密码"/>
                    )}
                </FormItem>
                <FormItem>
                    {getFieldDecorator('remember', {
                        valuePropName: 'checked',
                        initialValue: true,
                    })(
                        <Checkbox>记住我</Checkbox>
                    )}
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        点击登录
                    </Button>
                </FormItem>
            </Form>
        );
    }
}

const WrappedNormalLoginForm = Form.create()(NormalLoginForm);

class Page extends React.Component {
    render() {
        return (
            <div>
                <Layout>
                    <Header/>
                    <Content style={{padding: '140px 0'}}>
                        <WrappedNormalLoginForm/>
                    </Content>
                    <Footer style={{position:'absolute',left:0,right:0,bottom:'30px',margin:'0 auto'}}><p style={{textAlign: 'center'}}>copyright 1608-6 group @ 2017</p></Footer>
                </Layout>
            </div>

        )
    }
}
ReactDOM.render(<Page/>, document.querySelector('#login'));