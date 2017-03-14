const React = require("react");
const ReactDOM=require("react-dom");
const common = require("./common.jsx");
//banner
var img_banner=[
    {img:'/public/images/img_banner.png',bg:"#eee"}
]
//导航数据
const nav=[
    {title:"首页",url:"/"},
    {title:"关于我们",url:"/about"},
    {title:"新闻资讯",url:"/news"},
    {title:"产品展示",url:"/product"},
    {title:"铁锅保养",url:"/upkeep"},
    {title:"餐饮美食",url:"/food"},
    {title:"联系我们",url:"/contact"}
];
/*
var crumbs=[
    {name:"联系我们",href:"javascript:;"}
];*/
var content=[
    {title:"公司地址",content:"太原清华科技园A座",icon:"/public/images/icon_address.png"},
    {title:"公司电话",content:"4000351186",icon:"/public/images/icon_phone.png"},
    {title:"公司邮箱",content:"foodtry@163.com",icon:"/public/images/icon_message.png"},
    {title:"联系QQ",content:"988492976",icon:"/public/images/icon_qq.png"}
];
const ynn_math=[
    {"partner":['中国紫砂协会','江苏省陶瓷行业协会','宜兴紫砂壶艺术研究所']},
    {"art":['顾绍培','吕尧臣','毛国强']},
    {"support":['上海市汇业律师事务所']}
];
class Content extends React.Component{
    render(){
        const items=this.props.data.map((v,i)=><li key={i}><div><p className="icon"><img src={v.icon} alt=""/></p><h5>{v.title}</h5><h6>{v.content}</h6></div>
        </li>)
        return(
            <div className="container" >
                <div className="contentUs" style={{marginTop:"50px"}}>
                    <div className="title"><img src="/public/images/contentUs.png" alt=""/></div>
                    <ul className="information">
                        {items}
                    </ul>
                </div>
                <div className="traffic">
                    <div className="title"><img src="/public/images/howTo.png" alt=""/></div>
                    <ul>
                        <li>
                            <p><img src="/public/images/icon_bus.png" alt=""/></p>
                            <h4>公交</h4>
                            <h6>站点：太原清华科技园</h6>
                            <h6>18路、602路、38路</h6>
                        </li>
                        <li>
                            <p><img src="/public/images/icon_texi.png" alt=""/></p>
                            <h4>出租</h4>
                            <h6>地点：太原清华科技园A座</h6>
                        </li>
                        <li>
                            <p><img src="/public/images/icon_metro.png" alt=""/></p>
                            <h4>地铁</h4>
                            <h6>建设中...</h6>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}
var el=(
    <div>
        <common.ListBanner data={img_banner}/>
        <common.Header data={nav}/>
        <Content data={content}/>
        <common.Lhh_contact_map />
        <common.Lhh_address />
        <common.Footer ynn_math={ynn_math}/>
    </div>
)
ReactDOM.render(el,document.getElementById("contentUs"));