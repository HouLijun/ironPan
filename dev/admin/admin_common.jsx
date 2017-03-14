const React = require('react');
import {Layout, Menu, Icon,Dropdown,Button,message} from 'antd';
const {Header, Content, Footer, Sider} = Layout;
const SubMenu = Menu.SubMenu;
function handleMenuClick(e) {
    message.info('Click on menu item.');
}
const menu = (
    <Menu onClick={handleMenuClick}>
        <Menu.Item key="1"><a href="/admin/out">退出登录</a></Menu.Item>
    </Menu>
);
class Down extends React.Component{
    render(){
        return(
            <div style={{display:"inline-block",margin:"0 16px"}}>
                <Dropdown overlay={menu}>
                    <Button style={{ marginLeft: 8 }}>
                        超级管理员 <Icon type="down" />
                    </Button>
                </Dropdown>
            </div>
        )
    }
}
class AdminCommon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            collapsed: false,
            mode: 'inline',
            news:[],
            food:[],
            upkeep:[],
            product:[]
        };
        this.onCollapse = this.onCollapse.bind(this);
    }
    componentDidMount() {
        fetch('/admin/getNews', {
            credentials: 'same-origin'
        }).then((res)=>res.json()).then((data)=> {
            this.setState({
                news: data
            });
        });
        fetch('/admin/getFood', {
            credentials: 'same-origin'
        }).then((res)=>res.json()).then((data)=> {
            this.setState({
                food: data
            });
        });
        fetch('/admin/getUpkeep', {
            credentials: 'same-origin'
        }).then((res)=>res.json()).then((data)=> {
            this.setState({
                upkeep: data
            });
        });
        fetch('/admin/getProduct', {
            credentials: 'same-origin'
        }).then((res)=>res.json()).then((data)=> {
            this.setState({
                product: data
            });
        });
    }

    onCollapse(collapsed) {
        this.setState({
            collapsed,
            mode: collapsed ? 'vertical' : 'inline',
        });
    }

    render() {
        const urlInfo = location.pathname.split('/');
        urlInfo.shift();
        const openKeys = [urlInfo.slice(0, 2).join('/')];
        if (location.pathname.indexOf('/admin/message') !== -1) {
            var selectKeys = [urlInfo.slice(0, 2).join('/')];
        } else {
            var selectKeys = [urlInfo.slice(0, urlInfo.length).join('/')];
        }
        const news=this.state.news.map((v,i)=><Menu.Item key={`admin/news/${i+1}`}><a href={`/admin/news/${i+1}`}>{v}</a></Menu.Item>);
        const upkeep=this.state.upkeep.map((v,i)=><Menu.Item key={`admin/upkeep/${i+1}`}><a href={`/admin/upkeep/${i+1}`}>{v}</a></Menu.Item>);
        const food=this.state.food.map((v,i)=><Menu.Item key={`admin/food/${i+1}`}><a href={`/admin/food/${i+1}`}>{v}</a></Menu.Item>);
        const product=this.state.product.map((v,i)=><Menu.Item key={`admin/product/${i+1}`}><a href={`/admin/product/${i+1}`}>{v}</a></Menu.Item>);
        return (
            <Layout style={{height:"100%"}}>
                <Sider
                    collapsible
                    collapsed={this.state.collapsed}
                    onCollapse={this.onCollapse}
                >
                    <div className="logo" style={{padding:"24px"}}>
                        <img src="/public/images/zztlogo.png" alt="" style={{width:"100%"}}/>
                    </div>
                    <Menu theme="dark" mode={this.state.mode} defaultOpenKeys={openKeys}
                          defaultSelectedKeys={selectKeys}>
                        <Menu.Item key="admin/user">
                            <a href="/admin/user">
                              <span>
                                <Icon type="user" />
                                <span className="nav-text">管理员信息</span>
                              </span>
                            </a>
                        </Menu.Item>
                        <SubMenu
                            key="admin/news"
                            title={<span><Icon type="exception"  /><span className="nav-text">新闻资讯</span></span>}
                        >
                            {news}
                        </SubMenu>
                        <SubMenu
                            key="admin/upkeep"
                            title={<span><Icon type="eye-o"  /><span className="nav-text">铁锅保养</span></span>}
                        >
                            {upkeep}
                        </SubMenu>
                        <SubMenu
                            key="admin/food"
                            title={<span><Icon type="heart-o" /><span className="nav-text">美食推荐</span></span>}
                        >
                            {food}
                        </SubMenu>
                        <SubMenu
                            key="admin/product"
                            title={<span><Icon type="shopping-cart"  /><span className="nav-text">产品展示</span></span>}
                        >
                            {product}
                        </SubMenu>
                        <Menu.Item key="admin/banner">
                            <a href="/admin/banner">
                              <span>
                                <Icon type="picture" />
                                <span className="nav-text">Banner管理</span>
                              </span>
                            </a>
                        </Menu.Item>
                        <Menu.Item key="admin/video">
                            <a href="/admin/video">
                              <span>
                                  <Icon type="video-camera"  />
                                <span className="nav-text">video管理</span>
                              </span>
                            </a>
                        </Menu.Item>
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#ececec', padding: 0 ,textAlign:"right"}}>
                        <Down/>
                    </Header>
                    <Content style={{ margin: '0 16px',position:"relative" }}>
                        <div style={{ padding: 24, background: '#fff', position:"absolute",top:0,bottom:0,left:0,right:0 ,overflowY:"auto"}}>
                            {this.props.children}
                        </div>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>
                        IronPan WEB ©2017 Created by Home Of IronPan .
                    </Footer>
                </Layout>
            </Layout>
        );
    }
}
exports.AdminCommon = AdminCommon;
