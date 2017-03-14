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
    {name:"产品展示",href:"/product"}
];
//侧边导航和广告
const sideNav={
    category:{cn:"产品分类",en:"Product Categories"},
    list:[
        {cn:"炒锅系列",en:"Chinese pan SERIES",href:"/product/1"},
        {cn:"煎锅系列",en:"FRYING PAN SERIES",href:"/product/2"},
        {cn:"烤锅系列",en:"Baking pan series",href:"/product/3"},
        {cn:"炖锅系列",en:"Stew pan series",href:"/product/4"},
        {cn:"老式铁锅",en:"THE OLD IRON PAN",href:"/product/5"},
        {cn:"珐琅铸铁锅",en:"ENAMEL IRON PAN",href:"/product/6"},
    ]
}
/*var recommend={
 classifyCn:"热门产品",
 classifyEn:"Hot Product",
 img:"/public/images/img_recommend.jpg",
 nameCn:"手工加厚铁铸铁煎锅",
 nameEn:"Manual with thick iron cast iron frying pan"
 }*/
var ContentLeft=(
    <div className="contentLeft">
        <common.SideNav data={sideNav}/>
    </div>
)

//产品列表
const list=[
    {id:0,cname:"回飞砂锅",ename:"Return flight frying pan",eprice:122,cprice:"八八八",imgurl:"/public/images/zq_product2.png" },
    {id:1,cname:"回飞砂锅",ename:"Return flight frying pan",eprice:455,cprice:"八八八",
        imgurl:"/public/images/zq_product2.png" },
    {id:2,cname:"回飞砂锅",ename:"Return flight frying pan",eprice:645,cprice:"八八八"},
    {id:3,cname:"回飞砂锅",ename:"Return flight frying pan",eprice:565,cprice:"八八八"},
    {id:4,cname:"回飞砂锅",ename:"Return flight frying pan",eprice:787,cprice:"八八八"},
    {id:5,cname:"回飞砂锅",ename:"Return flight frying pan",eprice:142,cprice:"八八八"},
    {id:6,cname:"回飞砂锅",ename:"Return flight frying pan",eprice:362,cprice:"八八八"},
    {id:7,cname:"回飞砂锅",ename:"Return flight frying pan",eprice:789,cprice:"八八八"},
]
const list1=[
    {id:0,cname:"铁锅",ename:"Return flight frying pan",eprice:122,cprice:"八八八",imgurl:"/public/images/zq_product2.png" },
    {id:1,cname:"铁锅",ename:"Return flight frying pan",eprice:455,cprice:"八八八",
        imgurl:"/public/images/zq_product2.png" },
    {id:2,cname:"铁锅",ename:"Return flight frying pan",eprice:645,cprice:"八八八"},
    {id:3,cname:"铁锅",ename:"Return flight frying pan",eprice:565,cprice:"八八八"},
    {id:4,cname:"铁锅",ename:"Return flight frying pan",eprice:787,cprice:"八八八"},
    {id:5,cname:"铁锅",ename:"Return flight frying pan",eprice:142,cprice:"八八八"},
    {id:6,cname:"铁锅",ename:"Return flight frying pan",eprice:362,cprice:"八八八"},
    {id:7,cname:"铁锅",ename:"Return flight frying pan",eprice:789,cprice:"八八八"},
]
const pages = [
    {id: 0, name:list},
    {id: 1, name:list1},
    {id: 2, name:list},
    {id: 3, name:list1},
    {id: 4, name:list},
    {id: 5, name:list},
    {id: 6, name: list1},
    {id: 7, name:list},
    {id: 8, name:list1},
    {id: 9, name:list1},
    {id: 10, name:list},
    {id: 11, name:list},
    {id: 12, name: list1},
    {id: 13, name:list},
    {id: 14, name:list1}
];
class Product extends React.Component {
    constructor(props){
        super(props)
        this.state={
            select:0
        };
        this.changeselect=this.changeselect.bind(this);
    }
    changeselect(select){
        this.setState({
            select:select
        })
    }
    render() {
        const lists=this.props.pages[this.state.select].name.map((v,i)=>
            <div className="zq_product_box" key={i}>
                <div className="zq_product_show">
                    <div className="zq_product_img">
                        <img src={`${v.imgurl}`}alt=""/>
                        <div className="zq_intro_chinese">{v.cprice}元整</div>
                        <div className="zq_intro_english">{v.ename}</div>
                        <div className="zq_intro_namebox">
                            <div className="zq_intro_name">{v.cname}</div>
                            <div className="zq_intro_logo">
                                <img src="/public/images/zq_logo.png" alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="zq_product_detail">
                        <div className="zq_product_guide zq_product_price">
                            ￥: {v.eprice} 元
                        </div>
                        <div className="zq_product_guide">
                            <a href="">了解详情</a>
                        </div>
                    </div>
                </div>
            </div>
        )
        return (
            <div className="zq_product_list">
                <div style={{overflow:"hidden"}}>{lists}</div>
                <common.Paging pages={this.props.pages} changeselect={this.changeselect}/>
            </div>
        )
    }
}
var ContentRight=(
    <div className="contentRight">
        <Product pages={pages}/>
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
ReactDOM.render(el,document.getElementById("pageList"));