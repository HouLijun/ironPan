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
    {name:"铁锅保养",href:"/upkeep"}
];
//侧边导航和广告
var sideNav={
    category:{cn:"铁锅保养",en:"Product Categories"},
    list:[
        {cn:"锅具特点",en:"Chinese pan SERIES",href:"/upkeep/1"},
        {cn:"如何开锅",en:"FRYING PAN SERIES",href:"/upkeep/2"},
        {cn:"如何除锈",en:"Baking pan series",href:"/upkeep/3"},
        {cn:"如何防锈",en:"Stew pan series",href:"/upkeep/4"},
        {cn:"注意事项",en:"THE OLD IRON PAN",href:"/upkeep/5"}
    ]
}
var ContentLeft=(
    <div className="contentLeft">
        <common.SideNav data={sideNav}/>
    </div>
)
//新闻列表
const newsList=[
    {   id:0,
        title:'这7种食物不宜适用铁锅烹饪',
        time:'2017.2.20',
        writer:'By Lixin',
        picture:'/public/images/zzt_img1.png',
        introduce:'我们日常烹饪所用的锅有很多的材质，其中铁锅是很多家庭的选择，但是有些食物不是。宜用铁锅烹饪的，同时还应该要注意避免提过生锈。在这里，教教大家使用铁锅应该注意的细节吧。我们日常烹饪所用的锅有很多的材质，其中铁锅是很多家庭的选择，但是有些食物是不宜用铁锅烹饪的，同时还应该要注。'

    },
    {   id:1,
        title:'生铁锅做菜补铁 ? 4饮食技巧助跑者训练',
        time:'2017.2.21',
        writer:'By ZhangSan',
        picture:'/public/images/zzt_img2.png',
        introduce:'对于跑者来说，铁元素是非常重要的，因为它会关系到跑者的耐力和表现。当铁含量低时，会影响到跑者的训练和比赛。用生铁锅做菜是一种补铁的好办法，而且它还能防止因使用不粘锅而摄入一些致癌物质。'
    },
    {   id:2,
        title:'炒菜用铁锅最安全 锅烧焦了怎么办 ?',
        time:'2017.2.22',
        writer:'By Lixin',
        picture:'/public/images/zzt_img3.png',
        introduce:'想要吃的健康，就要先问锅肯不肯,选一口好锅就是饮食养生的第一步，炒菜锅什么材质的好？还是传统的铁锅最好，第二部就是明确各种锅的食用方法只有锅用对了，健康才能无虑。'
    }

];
class Content extends React.Component{
    render(){
        return (
            <div className="zzt_protectfather">
                <div className="zzt_protectbigbox">
                    {this.props.data.map((v,i)=>
                        <div className="zzt_protectbox" key={i}>
                            <div className="zzt_titlebox">
                                {v.title}
                            </div>
                            <div className="zzt_borderbox"></div>
                            <div className="zzt_details">
                                <div className="zzt_timebox">
                                    <img src="/public/images/zzt_shijian.png" alt=""/>
                                    <div className="zzt_time">
                                        {v.time}
                                    </div>
                                </div>
                                <div className="zzt_writerbox">
                                    <img src="/public/images/zzt_zuozhe.png" alt=""/>
                                    <div className="zzt_writer">
                                        {v.writer}
                                    </div>
                                </div>
                            </div>
                            <div className="zzt_picturebox">
                                <img src={v.picture} alt=""/>
                            </div>
                            <div className="zzt_introducebox">
                                <p className="zzt_introducetitle">{v.introduce}</p>
                            </div>
                            <a href="" className="zzt_morebox">
                                <div className="zzt_more">
                                    <div className="zztmore"></div>
                                    <div className="zztmore"></div>
                                    <div className="zztmore"></div>
                                </div>
                            </a>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}
var ContentRight=(
    <div className="contentRight">
        <Content data={newsList}/>
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