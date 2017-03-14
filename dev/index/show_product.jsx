const React=require('react');
const ReactDOM=require('react-dom');
const common=require('./common.jsx');

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
/*sells*/
const ynn_give=[{'src':['/public/images/1.jpg','/public/images/2.jpg','/public/images/3.jpg','/public/images/4.jpg']},{'name':'铁府铁匠铺铸铁砂锅'},{'english':'Blacksminth shop'},{'chara':['无涂层','不粘锅','健康补铁','山西原生铁矿','古法铸铁']},{'before':'519'},{'now':'350'}];
var productDetailData=[
    {name:'32CM圆底炒锅',english:' HIGH using advanced',pic:'/public/images/swm_newProduct1.png',context1:'-70%',context2:'3折促销中'},
    {name:'42CM圆底炒锅',english:'flat frying pan',pic:'/public/images/swm_newProduct2.png',context1:'-80%',context2:'二折促销中'},
    {name:'42CM圆底炒锅',english:'flat frying pan',pic:'/public/images/swm_newProduct3.png',context1:'-60%',context2:'四折促销中'},
    {name:'42CM圆底炒锅',english:'flat frying pan',pic:'/public/images/swm_newProduct4.png',context1:'-70%',context2:'3折促销中'},
]
//底部
const ynn_math=[
    {"partner":['中国紫砂协会','江苏省陶瓷行业协会','宜兴紫砂壶艺术研究所']},
    {"art":['顾绍培','吕尧臣','毛国强']},
    {"support":['上海市汇业律师事务所']}
];
class Ynn_sells extends React.Component{
    constructor(props){
        super(props);
        this.state={
            index:0
        };
        this.click=this.click.bind(this);
    }
    click(i){
        this.setState((ps)=>({index:i}))
    }
    render(){
        const ynn_img1=this.props.ynn_give[0].src;
        const ynn_before=this.props.ynn_give[4].before;
        const ynn_today=this.props.ynn_give[5].now;
        const ynn_chara=this.props.ynn_give[3].chara;
        const ynn_name=this.props.ynn_give[1].name;
        const ynn_english=this.props.ynn_give[2].english;
        //小图片遍历
        const ynn_lis1=ynn_img1.map((v,i)=><li key={i} style={{background:`url(${v}) no-repeat`}} onClick={()=>{this.click(i)}} className={(i===this.state.index)?'active':''}/>);
        //大图片遍历
        const ynn_lis2=ynn_img1.map((v,i)=><li key={i} style={{background:`url(${v}) no-repeat center center`}} className={(i===this.state.index)?'active':''}/>);
        //特点遍历
        const ynn_lis3=ynn_chara.map((v,i)=><li key={i}>{v}<span key={i}/></li>);
        return(
            <div className="ynn_all3">
                <div className="ynn_left">
                    <div className="ynn_des">{ynn_name}</div>
                    <div className="ynn_eng">{ynn_english}</div>
                    <ul className="ynn_character">
                        {ynn_lis3}
                    </ul>
                    <div className="ynn_now">{ynn_today}</div>
                    <div className="ynn_before">
                        <img src="/public/images/ynn_money.png" alt="图片加载失败"/>
                        <del>{ynn_before}</del>
                    </div>
                    <a href="javascript:;" className="ynn_buy">立即购买</a>
                </div>

                <div className="ynn_right">
                    <ul className="ynn_cont">
                        {ynn_lis2}
                    </ul>
                    <ul className="ynn_title">
                        {ynn_lis1}
                    </ul>
                </div>
            </div>
        );
    }
}
class NewProductList extends React.Component{
    render(){
        return(
            <li>
                <div className="swm_newProductImg">
                    <img src={this.props.data.pic} alt=""/>
                    <a href='' className="swm_newProductActive">
                        <div className="swm_newProductLineBox">
                            <div className="swm_newProductLineLeft"></div>
                            <div className="swm_newProductLineRight"></div>
                            <div className="swm_newProductSale">
                                <span>S</span><span>A</span><span>L</span><span>E</span>
                            </div>
                            <p className="swm_newProductContext1">{this.props.data.context1}</p>
                            <p className="swm_newProductContext2">{this.props.data.context2}</p>
                        </div>
                    </a>
                </div>
                <p className="swm_newProductName">
                    {this.props.data.name}
                </p>
                <p className="swm_newProductEnglish">
                    {this.props.data.english}
                </p>
            </li>
        )
    }
}
class Swm_newProduct extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        var rows=[];
        this.props.data.forEach((v,i)=>{
            rows.push(<NewProductList data={v} key={i}/>)
        })
        return(
            <div className="swm_newProductBox">
                <div className="swm_newProduct">
                    <div className="swm_newProductTitle">
                        <img src="/public/images/swm_newProductTitle.png" alt=""/>
                    </div>
                    <ul className="swm_newProductCon">
                        {rows}
                    </ul>
                </div>
            </div>
        )
    }
}
var el=(
    <div>
        <common.Header data={nav}/>
        <div className="container" style={{width:"1200px",margin:"0 auto"}}>
            <common.Crumbs data={crumbs}/>
        </div>
        <hr color="#eee"/>
        <Ynn_sells ynn_give={ynn_give}/>
        <Swm_newProduct data={productDetailData}/>
        <common.Lhh_contact_map/>
        <common.Lhh_address/>
        <common.Footer ynn_math={ynn_math}/>
    </div>
)
ReactDOM.render(el,document.getElementById('productDetail'));