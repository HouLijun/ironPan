const React = require("react");
const ReactDOM = require("react-dom");
const common = require("./common.jsx"); //引入公共组件
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
//面包屑
var crumbs=[
    {name:"新闻资讯",href:"/news"}
];
//侧边导航和广告
var sideNav={
    category:{cn:"新闻资讯",en:"Product Categories"},
    list:[
        {cn:"媒体报道",en:"Chinese pan SERIES",href:"/news/1"},
        {cn:"专家观点",en:"FRYING PAN SERIES",href:"/news/2"},
        {cn:"美食活动",en:"Baking pan series",href:"/news/3"},
        {cn:"你问我答",en:"Stew pan series",href:"/news/4"}
    ]
}
var ContentLeft=(
    <div className="contentLeft">
        <common.SideNav data={sideNav}/>
    </div>
)
//详情
class Ynn_news extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="ynn_all4">
                {/*标题*/}
                <h1>炒菜用铁锅最安全 锅烧焦了怎么办？</h1>
                {/*来源 作者 时间*/}
                <div className="ynn_resource">
                    <p>
                        <span>来源:</span>
                        <i></i>
                    </p>
                    <p>
                        <span>作者:</span>
                        <i></i>
                    </p>
                    <p>
                        <span>发表时间:</span>
                        <i></i>
                    </p>
                </div>
                {/*新闻内容*/}
                <div className="ynn_content">
                    <pre>{this.props.ynn_conts}</pre>
                </div>
            </div>
        );
    }
}
const ynn_conts=['我不是来讲概念的，直接切入正题，图片的 base64 编码就是可以将一副图片数据编码成一串字符串，使用该字符串代替图像地址。' +
'我不是来讲概念的，直接切入正题，图片的 base64 编码就是可以将一副图片数据编码成一串字符串，使用该字符串代替图像地址。' +
'我不是来讲概念的，直接切入正题，图片的 base64 编码就是可以将一副图片数据编码成一串字符串，使用该字符串代替图像地址。' +
'我不是来讲概念的，直接切入正题，图片的 base64 编码就是可以将一副图片数据编码成一串字符串，使用该字符串代替图像地址。' +
'我不是来讲概念的，直接切入正题，图片的 base64 编码就是可以将一副图片数据编码成一串字符串，使用该字符串代替图像地址。'];

var ContentRight=(
    <div className="contentRight">
        <Ynn_news ynn_conts={ynn_conts}/>
    </div>
)
const ynn_math=[
    {"partner":['中国紫砂协会','江苏省陶瓷行业协会','宜兴紫砂壶艺术研究所']},
    {"art":['顾绍培','吕尧臣','毛国强']},
    {"support":['上海市汇业律师事务所']}
];
var el=(
    <div>
        <common.ListBanner data={img_banner}/>
        <common.Header data={nav}/>
        <common.Crumbs data={crumbs}/>
        <div className="container">
            {ContentLeft}
            {ContentRight}
        </div>
        <common.Footer ynn_math={ynn_math}/>
    </div>
)
ReactDOM.render(el,document.getElementById("show"));