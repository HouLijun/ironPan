const React = require("react");
const ReactDOM=require("react-dom");
const common = require("./common.jsx");
//banner
var img_banner=[
    {img:'/public/images/zzt_listbanner.png',bg:"#efefef"}
]
var crumbs=[
    {name:"品牌简介",href:"javascript:;"}
];
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
var content=[
    {title:"公司地址",content:"太原清华科技园A座",icon:"/public/images/icon_address.png"},
    {title:"公司电话",content:"4000351186",icon:"/public/images/icon_phone.png"},
    {title:"公司邮箱",content:"foodtry@163.com",icon:"/public/images/icon_message.png"},
    {title:"联系QQ",content:"988492976",icon:"/public/images/icon_qq.png"}
];
class Brand extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <li className="ynn_titleli">
                <div className="ynn_bg">
                    <img src={this.props.v.img1} alt=""/>
                </div>
                <div className="ynn_coverall">
                    <div className="ynn_cover"/>
                    <div className="ynn_title">{this.props.v.title}</div>
                    <div className="ynn_cont"><pre>{this.props.v.cont}</pre></div>
                    <a href="javascript:;">MORE</a>
                </div>
            </li>

        );
    }
}
//品牌加盟
const math=[
    {img1:'/public/images/ynn_bg.png',title:'苏泊尔',cont:'我们生产的铁锅将会始终保持和食物接触面“无涂层”。免除涂层可能致癌的后顾之忧，铁锅将在实用、好用、安全的基础上兼顾我们生产的铁锅将会始终保持和食物接触面“无涂层”。' +
    '免除涂层可能致癌的后顾之忧，铁锅将在实用、好用、安全的基础上兼顾我们生产的铁锅将会始终保持和食物接触面“无涂层”。' +
    '免除涂层可能致癌的后顾之忧，铁锅将在实用、好用、安全的基础上兼顾我们生产的铁锅将会始终保持和食物接触面“无涂层”。'},
    {img1:'/public/images/ynn_bg.png',title:'苏泊尔',cont:'我们生产的铁锅将会始终保持和食物接触面“无涂层”。免除涂层可能致癌的后顾之忧，铁锅将在实用、好用、安全的基础上兼顾我们生产的铁锅将会始终保持和食物接触面“无涂层”。' +
    '免除涂层可能致癌的后顾之忧，铁锅将在实用、好用、安全的基础上兼顾我们生产的铁锅将会始终保持和食物接触面“无涂层”。' +
    '免除涂层可能致癌的后顾之忧，铁锅将在实用、好用、安全的基础上兼顾我们生产的铁锅将会始终保持和食物接触面“无涂层”。'},
    {img1:'/public/images/ynn_bg.png',title:'苏泊尔',cont:'我们生产的铁锅将会始终保持和食物接触面“无涂层”。免除涂层可能致癌的后顾之忧，铁锅将在实用、好用、安全的基础上兼顾我们生产的铁锅将会始终保持和食物接触面“无涂层”。' +
    '免除涂层可能致癌的后顾之忧，铁锅将在实用、好用、安全的基础上兼顾我们生产的铁锅将会始终保持和食物接触面“无涂层”。' +
    '免除涂层可能致癌的后顾之忧，铁锅将在实用、好用、安全的基础上兼顾我们生产的铁锅将会始终保持和食物接触面“无涂层”。'}
];
class Ynn_join extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        var row=[];
        this.props.math.forEach((v,i)=>{row.push(<Brand key={i} v={v}/>)});
        return(
            <div className="ynn_all2">
                {/*title*/}
                <div className="ynn_title">
                    <img src="/public/images/ynn_title.png" alt=""/>
                </div>
                {/*content*/}
                <div className="ynn_content">
                    <ul>
                        {row}
                    </ul>
                </div>
            </div>
        );
    }
}
//品牌历史
const history=[
    {id:0,
        title:'千年铁府，传承发展铁器文化',
        englishname:'One thousand iron house, iron cultural heritage development',
        chinese:'铁府，旨在传承发展中国“铁器文化”，并帮助更多的打铁和铸人申请'
    },
    {id:1,
        title:'千年铁府',
        englishname:'One thousand iron house',
        chinese:'铁府，旨在传承发展中国“铁器文化”，并帮助更多的打铁和铸人申请'
    },
    {id:2,
        title:'铁工坊',
        englishname:'Iron workshop',
        chinese:'铁府，旨在传承发展中国“铁器文化”，的打铁和铸人'
    },
    {id:3,
        title:'千年铁府，传承发展铁器文化',
        englishname:'One thousand iron house, iron cultural',
        chinese:'铁府，旨在传承发展中国“铁器文化”旨在传承发展中国“铁器文化'
    }

];
class History extends React.Component{
    render(){
        return (
            <div className="zzt_historybigbox">
                <div className="zzt_historyfather">
                    <div className="zzt_historytitlebox">
                        <div className="zzt_historytitle">
                            <img src="/public/images/zztgjls.png" alt=""/>
                        </div>
                        <div className="zzt_history">THE FIRST IRON CULTURE THE CULTURE HERITAGE OF IRON</div>
                        <div className="zzt_historyline"><img src="/public/images/zztfgx.png" alt=""/></div>
                    </div>
                    <div className="zzt_historycenterbox">
                        <div className="zzt_historycenterleftbox">
                            <div className="zzt_historycenterleft"><img src="/public/images/zzth1.png" alt=""/></div>
                            <div className="zzt_historycenterleft"><img src="/public/images/zzth2.png" alt=""/></div>
                            <div className="zzt_historycenterleft"><img src="/public/images/zzth3.png" alt=""/></div>
                        </div>
                        <div className="zzt_historycenterrightbox">
                            {this.props.data.map((v,i)=>
                                <div className="zzt_historycenterright">
                                    <div className="zzt_spot"></div>
                                    <span className="zzt_righttitle">{v.title}</span>
                                    <p className="zzt_eglsname">{v.englishname}</p>
                                    <p className="zzt_chinese">{v.chinese}</p>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
//锅具故事
const panList = [
    {id: 1,cname:"回飞炒锅",ename:'Return flight frying pan',cprice:'八八八',src: '/public/images/lx_iron_03.png'},
    {id: 2,cname:"回飞炒锅",ename:'Return flight frying pan',cprice:'九九九' ,src: '/public/images/Lx_iron_031.png'},
    {id: 3,cname:"平底炒锅",ename:'Return flight frying pan',cprice:'八八八' ,src: '/public/images/lx_iron_06.png'},
    {id: 4,cname:"回飞炒锅",ename:'Return flight frying pan',cprice:'七七七',src: '/public/images/lx_iron_03.png'},
    {id: 5, cname:"回飞炒锅",ename:'Return flight frying pan',cprice:'八八八',src: '/public/images/Lx_iron_031.png'}
];
class PanS extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index:0
        };
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
    }
    next() {
        this.setState((ps) => ({index: (ps.index + 1 >= this.props.data.length) ? 0 : (ps.index + 1)}))
    }
    prev() {
        this.setState((ps) => ({index: (ps.index - 1 < 0) ? (this.props.data.length - 1) : (ps.index - 1)}))
    }
    render() {
        const len=this.props.data.length;
        const index=this.state.index;
        const two=index+1>=len?(index+1-len):index+1;
        const three=index+2>=len?(index+2-len):index+2;
        return (
            <div className="Lx_tale">
                <div className="lx_iron_box">
                    <div className="lx_iron_title">
                        <img src="/public/images/lx_iron_tale_03.png" alt=""/>
                        <p>tHE FIRST IRON CULTURE THE CULTURE HERITAGE OF IRON </p>
                        <div className="Lx_adorn"></div>
                    </div>
                    <div className="lx_iron_show">
                        <ul>
                            <li>
                                <div>
                                    <img src={this.props.data[index].src} alt=""/>
                                </div>
                            </li>
                            <li>
                                <div className="lx_icon_l">
                                    <div className="lx_intro_chinese">{this.props.data[two].cprice}元整</div>
                                    <div className="lx_intro_english">{this.props.data[two].ename}</div>
                                    <div className="lx_intro_namebox">
                                        <div className="lx_intro_name">{this.props.data[two].cname}</div>
                                        <div className="lx_intro_logo">
                                            <img src="/public/images/lx_logos.png" alt=""/>
                                        </div>
                                    </div>
                                    <div className="lx_icon_l_top">
                                    </div>
                                    <div className="lx_icon_l_bottom">
                                        <img src={this.props.data[two].src} alt=""/>
                                    </div>
                                    <div className="lx_iron_shade"></div>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <img src={this.props.data[three].src} alt=""/>
                                </div>
                            </li>
                        </ul>
                        <div className="lx_iron_btn">
                            <div className="lx_iron_next" onClick={this.next}></div>
                            <div className="lx_iron_prev" onClick={this.prev}></div>
                        </div>
                    </div>
                    <div className="Lx_brand_tale">
                        <h1>品牌故事</h1>
                        <h3>tHE FIRST IRON CULTURE THE</h3>
                        <p>铁府，旨在传承发展中国“铁器文化”，并帮“非物质文化遗产”</p>
                        <p>民参与到项目中来，努力创造更多农民就业机会铁府，旨在传承发展中国“铁器文化”，</p>
                        <p>并帮“非物质文化遗产”项目，让更多的农</p>
                        <p>民参与到项目中来，努力创造更多农民就业机会铁府</p>
                        <p>民参与到项目中来，努力创造更会</p>
                    </div>
                </div>
            </div>
        )
    }

}
const footer=[
    {"partner":['中国紫砂协会','江苏省陶瓷行业协会','宜兴紫砂壶艺术研究所']},
    {"art":['顾绍培','吕尧臣','毛国强']},
    {"support":['上海市汇业律师事务所']}
];
var el=(
    <div>
        <common.ListBanner data={img_banner}/>
        <common.Header data={nav}/>
        <Ynn_join math={math}/>
        <History data={history}/>
        <PanS data={panList}/>
        <common.Lhh_contact_map />
        <common.Lhh_address />
        <common.Footer ynn_math={footer}/>
    </div>
)
ReactDOM.render(el,document.getElementById("page"));