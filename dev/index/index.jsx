const React = require("react");
const ReactDOM = require("react-dom");
const common = require("./common.jsx");
//首页banner数据
const indexBanner = [
    {id: 1, src: '/public/images/banner_1.png', color: '#eee'},
    {id: 2, src: '/public/images/banner_2_02.png', color: '#eaeaea'},
    {id: 3, src: '/public/images/banner3_04.png', color: '#eee'}
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
//品牌简介
const brand=[
    {id:1,pic:'../public/images/hx_1.png',content:'我们生产的铁锅将会始终保持和食物接触面“无涂层”。免除涂层可能致癌的后顾之忧，铁锅将在实用、好用、安全的基础上兼顾造型美观，方便大家在各种炉具上的使用。让用户真切感受到“铁锅做饭好吃”的锅具特点。',title:'品牌介绍',Etitle:'INTRODUCE'},
    {id:2,pic:'../public/images/hx_2.png',content:'我们生产的铁锅将会始终保持和食物接触面“无涂层”。免除涂层可能致癌的后顾之忧，铁锅将在实用、好用、安全的基础上兼顾造型美观，方便大家在各种炉具上的使用。让用户真切感受到“铁锅做饭好吃”的锅具特点。',title:'品牌历史',Etitle:'HISTORY'},
    {id:3,pic:'../public/images/hx_3.png',content:'我们生产的铁锅将会始终保持和食物接触面“无涂层”。免除涂层可能致癌的后顾之忧，铁锅将在实用、好用、安全的基础上兼顾造型美观，方便大家在各种炉具上的使用。让用户真切感受到“铁锅做饭好吃”的锅具特点。',title:'品牌故事',Etitle:'STORY'}
]
class Hxintroduce extends React.Component {
    constructor(props){
        super(props);
        this.state={
            height:0
        }
    }
    componentDidMount(){
        const self=this;
        var m=0;

        $(document).scroll(function () {
            m=$(this).scrollTop()
            var word=$('.hx_word');
            word.each(function (i,v) {
                if(m+150>=$(this).offset().top){
                    if(i%2===0){
                        $(this).children().addClass('hx_leftFlyIn');
                    }else{
                        $(this).children().addClass('hx_rightFlyIn');
                    }
                    $('.hx_word .hx_label').removeClass('hx_leftFlyIn');
                    $('.hx_word .hx_label').removeClass('hx_rightFlyIn');
                }
            })
            self.setState({
                height:m
            })
        })
    }
    render() {
        return (
            <div className="hx_introduce">
                {/*描述*/}
                <div className="hx_title">
                    <h1>品牌简介</h1>
                    <h4>BRAND CULTRUE</h4>
                    <ul>
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                    <p>铁府，旨在传承发展中国“铁器文化”
                    </p>
                    <p>并帮助更多的打铁和铸造手艺人申请“非物质文化遗产”项目，让更多的农民参与</p>
                    <p>到项目中来，努力创造更多农民就业机会。</p>

                </div>
                {/*图和文字*/}
                <div className="hx_content">
                    {this.props.data.map((v,i)=>
                        <div className={'hx_part'+v.id} key={i} >
                            <div className="hx_word">
                                <div className="hx_chinese">{v.title}</div>
                                <div className="hx_english"><span className="hx_brand">BRAND</span>
                                 <span
                                     className="hx_little_title">{v.Etitle}</span>
                                </div>
                                <div className="hx_label"></div>
                                <div className="hx_des">
                                    <p>{v.content}</p>
                                </div>
                            </div>
                            <div className="hx_pic">
                                <img src={v.pic} alt=""/>
                            </div>
                        </div>
                    )}

                </div>
                <div className="hx_more"><a style={{background:"inherit",color:"inherit",fontWeight:"bold"}} href="/about">MORE</a></div>
            </div>
        )
    }
}
//video
var video = [{img:"zq_video.png",video:"http://player.youku.com/player.php/sid/XNzM5MTIyMjIw/v.swf"}];
class Video extends React.Component {
    constructor(props){
        super(props)
        this.state={
            flag:false
        }
        this.play=this.play.bind(this);
        this.close=this.close.bind(this);
    }
    render() {
        return (
            <div id="zq_video_box">
                <img className="zq_video_img" src={`../public/images/${this.props.data[0].img}`} alt=""/>
                <div className="zq_video_back"></div>
                {/*按钮 开始*/}
                <div className="zq_video_btn" onClick={this.play}></div>
                {/*按钮 结束*/}
                <div className="zq_video_bag" style={{display:this.state.flag?"block":"none"}}>
                    <div className="zq_video_close" onClick={this.close}></div>
                    <video className="zq_video" src={`${this.props.data[0].video}`} controls></video>
                </div>
            </div>
        )
    }
    play(){
        this.setState(()=>({flag:true}));
    }
    close(){
        this.setState(()=>({flag:false}));
        var video=$(".zq_video").get(0);
        video.pause();
    }
}
//产品展示
const product=[
    {id:1,pic:'../public/images/hx_show1.png',des:'我们生产的铁锅将会始终保持和食物接触面“无涂层”。免除涂层可能致癌的后顾。'},
    {id:2,pic:'../public/images/hx_show2.png',des:'你的手覅的话覅的南方科技大会上科技孵化，你的手机话费返还。'},
    {id:3,pic:'../public/images/hx_show3.png',des:'很健康然后呢客户缴纳罚款加厚短款'},
    {id:4,pic:'../public/images/hx_show4.png',des:'麻烦如果你看了当你看到你，房牛市来了付款了让你疯狂'},
    {id:5,pic:'../public/images/hx_show5.png',des:'东南风卡了几句的看法你打开jfk绝对是你付款就好拉俄'},
]
class Hxshow extends React.Component{
    constructor(props){
        super(props);
        this.state={
            index:0
        }
        this.click=this.click.bind(this);
    }
    click(num){
        this.setState(
            {
                index:num
            }
        )
    }
    render(){
        return(
            <div className="hx_content1">
                <div className="hx_title1">
                    <img src="../public/images/hx_display.png" alt=""/>
                </div>
                <div className="hx_container">
                    <div className="hx_inner_width">
                        <ul className="hx_show1">
                            <li onMouseOver={()=>{this.click(0)}}>
                                <img src={this.props.data[0].pic} alt=""/>
                                <div className={`${this.state.index===0?"active":"hx_shadow"}`}></div>
                            </li>
                            <li onMouseOver={()=>{this.click(1)}}>
                                <img src={this.props.data[1].pic} alt=""/>
                                <div className={`${this.state.index===1?"active":"hx_shadow"}`}></div>
                            </li>
                        </ul>
                        <div className="hx_show2">
                            <ul>
                                <li onMouseOver={()=>{this.click(2)}}>
                                    <img src={this.props.data[2].pic} alt=""/>
                                    <div className={`${this.state.index===2?"active":"hx_shadow"}`}></div>
                                </li>
                                <li onMouseOver={()=>{this.click(4)}}>
                                    <img src={this.props.data[4].pic} alt=""/>
                                    <div className={`${this.state.index===4?"active":"hx_shadow"}`}></div>
                                </li>
                            </ul>
                            <div className="hx_big">
                                <img src={this.props.data[this.state.index].pic} alt=""/>
                                <div className="hx_des1">
                                    <div className="hx_decorate"></div>
                                    <div className="hx_contain">
                                        {this.props.data[this.state.index].des}
                                    </div>
                                </div>
                            </div>
                            <div className="hx_sm"  onMouseOver={()=>{this.click(3)}}>
                                <img src={this.props.data[3].pic} alt=""/>
                                <div className={`${this.state.index===3?"active":"hx_shadow"}`}></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hx_more"><a style={{background:"inherit",color:"inherit",fontWeight:"bold"}} href="/about">MORE</a></div>
            </div>
        )
    }
}
//美食推荐
var foodList=[
    {title:'香辣鲜虾',content:'鲜虾用剪子将虾须、虾枪剪掉，开背将虾线去除，用刀将虾背切开',pic:'/public/images/swm_food1.png'},
    {title:'麻辣豆腐',content:'鲜虾用剪子将虾须、虾枪剪掉，开背将虾线去除，用刀将虾背切开',pic:'/public/images/swm_food2.png'},
    {title:'干炸蘑菇',content:'鲜虾用剪子将虾须、虾枪剪掉，开背将虾线去除，用刀将虾背切开',pic:'/public/images/swm_food3.png'}
]
class FoodLi extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <div className="swm_food_conLi">
                <a href="">
                    <img src={this.props.foodli.pic} alt=""/>
                </a>
                <div className="swm_food_text">
                    <h3 className="swm_food_textTitle">
                        {this.props.foodli.title}
                    </h3>
                    <div className="swm_food_textLine"></div>
                    <p className="swm_food_textDes">
                        {this.props.foodli.content}
                    </p>
                </div>
                <div className="swm_food_deco">
                    <div className="swm_food_decoLeft"></div>
                    <div className="swm_food_decoRight"></div>
                </div>
            </div>
        )
    }
}
class Food extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        var rows=[];
        this.props.data.forEach((v,i)=>{
            rows.push(<FoodLi foodli={v} key={i} />);
        });
        return(
            <div className="swm_food_box">
                <div className="swm_food">
                    <div className="swm_food_title">
                        <img src="/public/images/swm_foodTitle.png" alt=""/>
                    </div>
                    <div className="swm_food_con">
                        {rows}
                    </div>
                    <div className="swm_more">
                        <a id="swm_more" href="/food">MORE</a>
                    </div>
                </div>
            </div>
        )
    }
}
//底部
const ynn_math=[
    {"partner":['中国紫砂协会','江苏省陶瓷行业协会','宜兴紫砂壶艺术研究所']},
    {"art":['顾绍培','吕尧臣','毛国强']},
    {"support":['上海市汇业律师事务所']}
];
const el = (
    <div>
        <common.Banner data={indexBanner}/>
        <common.Header data={nav}/>
        <Hxintroduce data={brand}/>
        <Video data={video}/>
        <Hxshow data={product}/>
        <Food data={foodList}/>
        <common.Lhh_contact_map/>
        <common.Lhh_address/>
        <common.Footer ynn_math={ynn_math}/>
    </div>
)
ReactDOM.render(el, document.getElementById("page"));