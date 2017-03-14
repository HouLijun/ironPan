const React = require("react");
//首页banner 外部接收banner图片数组和背景颜色
class Item extends React.Component{
    render(){
        return(
            <li style={{opacity:this.props.isActive?'1':'0',background:`url(${this.props.s}) 50% 0 /contain no-repeat`,backgroundColor:`${this.props.color}`}}>
            </li>
        )
    }
}
class  Btn extends React.Component {
    render() {
        return (
            <li className={(this.props.isActive)?'active':''} onClick={()=>{this.props.click(this.props.index)}}></li>
        )
    }
}
class Banner extends React.Component{
    constructor(props){
        super(props);
        this.state={
            index:0
        };
        this.next = this.next.bind(this);
        this.click=this.click.bind(this);
        this.prev=this.prev.bind(this);
    }

    componentDidMount() {
        this.ts = setInterval((ps) => {
            var v = (this.state.index + 1) > (this.props.data.length - 1) ? 0 : (this.state.index + 1);
            this.setState({index: v});
        }, 2000);}
    next(){

        this.setState((ps) => ({index: (ps.index + 1 >= this.props.data.length) ? 0 : (ps.index + 1)}))
    }
    click(i){
        this.setState((ps)=>({index:i}))
    }
    prev() {
        this.setState((ps) => ({index: (ps.index - 1 < 0) ? (this.props.data.length-1): (ps.index - 1)}))
    }
    render(){
        const items=this.props.data.map((v,i)=><Item key={i} s={v.src} color={v.color} isActive={i===this.state.index}/>);
        const Btns=this.props.data.map((v,i)=><Btn click={this.click} key={i} index={i} isActive={i===this.state.index} />);
        return(
            <div id="lx_banner">
                <div className="Lx_banners" onMouseOver={()=>clearInterval(this.ts)} onMouseOut={()=>this.componentDidMount()}>
                    <ul className="Lx_content" >
                        {items}
                    </ul>
                    <div className="Btnbox">
                        <ul className="Lx_btn">
                            {Btns}
                        </ul>
                    </div>
                    <div className="next" onClick={this.next}>
                    </div>
                    <div className="prev" onClick={this.prev}>
                    </div>
                </div>
            </div>

        )
    }
}
exports.Banner=Banner;
//二级页面banner,外部接收banner图片和背景颜色
class ListBanner extends React.Component{
    render(){
        return(
            <div id="banner" style={{backgroundColor:this.props.data[0].bg}}>
                <div className="top_banner">
                    <img src={this.props.data[0].img} alt=""/>
                </div>
            </div>
        )
    }
}
exports.ListBanner=ListBanner;
//导航，外部接收一级导航
class Zzt_Item extends React.Component{
    render(){
        const current=location.pathname.split("/")[1];
        return(
            <li className={`zzt_header_sortbox ${current==this.props.data.url.split('/')[1]?'nav_current':''}`}>
                <a href={this.props.data.url} className="zzt_header_sor">{this.props.data.title}</a>
            </li>
        )
    }
}
class Header extends React.Component{
    render(){
        const items=this.props.data.map((v,i)=><Zzt_Item data={v} key={i}/>);
        return (
            <div className="zzt_headerbox">
                <div className="zzt_logo">
                    <img src="/public/images/zztlogo.png" alt=""/>
                </div>
                <ul className="zzt_headerright">
                    {items}
                </ul>
            </div>
        )
    }
}
exports.Header=Header;
//面包屑，外部接收面包屑栏目名称
class Crumbs extends React.Component{
    render(){
        const data=this.props.data;
        const len=data.length;
        const items=data.map((v,i)=><li className={i==len-1?"current":""} key={i}><b className="arrow">&#xe603;</b><i className="icon_crumbs">&#xe600;</i><a href={v.href}>{v.name}</a></li>)
        return(
            <div className="container">
                <ul className="crumbs">
                    <li>
                        <i className="icon_crumbs">&#xe600;</i>
                        <a href="/">首页</a>
                    </li>
                    {items}
                </ul>
            </div>
        )
    }
}
exports.Crumbs=Crumbs;
//侧边导航，外部接收二级导航内容，内部状态index用来描述导航当前选中下标
class ItemSideNav extends React.Component {
    render() {
        const data = this.props.data;
        return (
            <li onClick={()=>{this.props.click(this.props.index)}} className={`item_sideNav ${this.props.isActive?'active':''}`}>
                <a href={data.href}>
                    <h5>{data.cn}</h5>
                    <h6>{data.en.toUpperCase()}</h6>
                    <div className="arrow"></div>
                </a>
            </li>
        )
    }
}
class SideNav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        }
        this.click = this.click.bind(this);
    }
    click(i) {
        this.setState(()=>({index: i}));
    }
    render() {
        const data = this.props.data;
        var items = data.list.map((v, i)=><ItemSideNav data={v} index={i} key={i} isActive={i==this.state.index} click={this.click}/>)
        return (
            <dl className="sideNav">
                <dt className="header">
                    <div className="header_img">
                        <img src="/public/images/icon_sideNav.png" alt=""/>
                    </div>
                    <div className="category">
                        <h5>{data.category.cn}</h5>
                        <h6>{data.category.en}</h6>
                    </div>
                </dt>
                <dd className="sideNav_list">
                    <ul className="inner">
                        {items}
                    </ul>
                    <img src="/public/images/spoon.jpg" alt=""/>
                </dd>
            </dl>
        )
    }
}
exports.SideNav = SideNav;    //导出
//左边推荐模块，外部接收推荐热门数据
class Recommend extends React.Component {
    render() {
        const data = this.props.data;
        return (
            <dl className="recommend">
                <dt className="header">
                    <div className="header_img">
                        <img src="/public/images/icon_sideNav.png" alt=""/>
                    </div>
                    <div className="category">
                        <h5>{data.classifyCn}</h5>
                        <h6>{data.classifyEn}</h6>
                    </div>
                </dt>
                <dd className="content">
                    <div className="img_recommend">
                        <img src={data.img} alt=""/>
                    </div>
                    <div className="information">
                        <h5>{data.nameCn}</h5>
                        <h6>{data.nameEn}</h6>
                    </div>
                </dd>
            </dl>
        )
    }
}
exports.Recommend = Recommend;
/*分页导航 开始  */
//作者 ：张琪
//功能 ：分页导航
/*参数 ：id为页数。 函数：changeselect(select){函数内部用来设置当前的页数的内部状态值}
 pages={pages};

 var pages = [
 {id: 0, name: "nin"},
 {id: 1, name: "nin"},
 {id: 2, name: "nin"},
 {id: 3, name: "nin"},
 {id: 4, name: "nin"},
 {id: 5, name: "nin"},
 {id: 6, name: "nin"},
 {id: 7, name: "nin"},
 {id: 8, name: "nin"}
 ];
 */
class Page extends React.Component {
    render() {
        return (
            <div className={`zq_page_circle ${this.props.select == this.props.data ? "active" : ""}`} onClick={() => {
                this.props.change(this.props.data)
            }}>
                <div className="zq_page_mincircle">{this.props.data + 1}</div>
            </div>
        )
    }
}
class Paging extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            select: 0
        }
        this.first = this.first.bind(this);
        this.end = this.end.bind(this);
        this.prev = this.prev.bind(this);
        this.next = this.next.bind(this);
        this.go = this.go.bind(this);
        this.change = this.change.bind(this);
    }

    /*第一页*/
    first() {
        this.setState((ps)=>({
            select: 0
        }));
        this.props.changeselect(0);
    }

    /*最后一页*/
    end() {
        const val=this.props.pages.length - 1;
        this.setState(()=>({
            select: val
        }));
        this.props.changeselect(val);
    }

    /*上一页*/
    prev() {
        const prevPage = this.state.select;
        const val= (prevPage - 1) < 0 ? 0 : prevPage - 1;
        this.setState(()=>({
            select:val
        }))
        this.props.changeselect(val);
    }

    /*下一页*/
    next() {
        const nextPage = this.state.select;
        const pageLen = this.props.pages.length;
        const val=(nextPage + 1) >= pageLen ? pageLen - 1 : nextPage + 1;
        this.setState(()=>({
            select: val
        }))
        this.props.changeselect(val);
    }

    /*搜索*/
    go(e) {
        const len=this.props.pages.length;
        const target=e.currentTarget;
        const input_btn=$(target).closest(".zq_paging_box").find(".zq_page_input");
        var val=input_btn.val();
        var math_val=parseInt(val);
        if(isNaN(math_val)||math_val==0){
            input_btn.val("输入页数");
        }else{
            if(math_val>len){
                input_btn.val("共"+len+"页");
            }else{
                this.setState(()=>({
                    select: math_val-1
                }));
                this.props.changeselect( math_val-1);
            }

        }

    }
    remove(e){
        const target=e.currentTarget;
        $(target).val("");
    }

    /*点击页数*/
    change(num) {
        this.setState(()=>({
            select: num
        }));
        this.props.changeselect(num);
    }

    render() {
        /*总页数*/
        const len = this.props.pages.length;
        const select = this.state.select;
        const pages = this.props.pages;

        /*总页数少于6*/
        const fiveDate=pages.map((v, i) => <Page data={v.id} key={i} change={this.change} select={select}></Page>);

        /*判断开始的页数*/
        const startdata = select > 1 && select < len - 2 ? pages.filter((v, i) => v.id < 1) : pages.filter((v, i) => v.id <= 1);
        /*判断结尾的页数*/
        const lastdata = select > 1 && select < len - 2 ? pages.filter((v, i) => v.id >= len - 1) : pages.filter((v, i) => v.id >= len - 2);

        /*循环数组*/
        const start = startdata.map((v, i) => <Page data={v.id} key={i} change={this.change} select={select}></Page>);
        const last = lastdata.map((v, i) => <Page data={v.id} key={i} change={this.change} select={select}></Page>)
        return (
            <div>
                {/*页数少于8页*/}
                <div className="zq_paging_box"
                     style={{display:len<9? "block" : "none"}}>
                    <div className="zq_page_minbox">{fiveDate}</div>
                </div>
                {/*页数大于等于8页*/}
                <div className="zq_paging_box" style={{display:len>=9? "block" : "none"}}>
                    {/*第一页*/}
                    <div className="zq_page_first zq_page_oval" onClick={this.first}>
                        <div className="zq_page_minoval">第一页</div>
                    </div>
                    {/*上一页*/}
                    <div className="zq_page_prev zq_page_circle" onClick={this.prev}>
                        <div className="zq_page_mincircle iconfont">&#xe61c;</div>
                    </div>
                    {/*页数*/}
                    <div className="zq_page_page">
                        {start}
                        <div className="zq_page_hidden">...</div>
                        <div className="zq_page_circle active"
                             style={{display: select > 1 && select < len - 2 ? "block" : "none"}}>
                            <div className="zq_page_mincircle">{select + 1}</div>
                        </div>
                        <div className="zq_page_hidden"
                             style={{display: select > 1 && select < len - 2 ? "block" : "none"}}>
                            ...
                        </div>
                        {last}
                    </div>
                    {/*下一页*/}
                    <div className="zq_page_next zq_page_circle" onClick={this.next}>
                        <div className="zq_page_mincircle iconfont">&#xe6f2;</div>
                    </div>
                    {/*最后一页*/}
                    <div className="zq_page_end zq_page_oval" onClick={this.end}>
                        <div className="zq_page_minoval">最后页</div>
                    </div>
                    {/*搜索 跳转*/}
                    <div className="zq_page_search">
                        <span className="zq_page_span">至</span>
                        <div className="zq_page_inputbox">
                            <input className="zq_page_input" type="text" onFocus={this.remove}/>
                        </div>
                        <span className="zq_page_span">页</span>
                    </div>

                    {/*go*/}
                    <div className="zq_page_circle zq_page_go" onClick={this.go}>
                        <div className="zq_page_mincircle">GO</div>
                    </div>
                </div>
            </div>
        )
    }
}
exports.Paging=Paging;
/*分页导航 结束*/
//底部联系我们
const bottomStyle={
    marginTop:68
}
/*联系我们：使用时用下面的Lhh_contact_map*/
class Lhh_contact extends React.Component{
    render(){
        return(
            <div className="lhh_index_contact">
                <div className="lhh_contact_header">
                </div>
                <ul className="lhh_contact_con">
                    <li className="lhh_contact_item">
                        <div className="lhh_title">

                        </div>
                        <ul>
                            <li><a href="">上门服务</a></li>
                            <li><a href="">送货服务</a></li>
                            <li><a href="">体验服务</a></li>
                            <li><a href="">粉丝服务</a></li>
                        </ul>
                    </li>
                    <li className="lhh_contact_item">
                        <div className="lhh_title">

                        </div>
                        <ul>
                            <li><a href="">上门服务</a></li>
                            <li><a href="">送货服务</a></li>
                            <li><a href="">体验服务</a></li>
                            <li><a href="">粉丝服务</a></li>
                        </ul>
                    </li>
                    <li className="lhh_contact_item">
                        <div className="lhh_title">

                        </div>
                        <ul>
                            <li><a href="">上门服务</a></li>
                            <li><a href="">送货服务</a></li>
                            <li><a href="">体验服务</a></li>
                            <li><a href="">粉丝服务</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        )
    }
}
/*地图：使用时用下面的Lhh_contact_map*/
class Lhh_map extends React.Component{
    render(){
        return(
            <div className="lhh_map">
                <div>
                    <div id="map1">
                    </div>
                </div>
                <div id="mapdynamic"></div>
            </div>
        )
    }
}
/*联系我们和地图：在主jsx中引入即可<Lhh_contact_map>*/
class Lhh_contact_map extends React.Component{
    render(){
        return(
            <div className="lhh_contact_map">
                <div className="lhh_contact1">
                    <Lhh_contact/>
                </div>
                <div className="lhh_map1">
                    <Lhh_map/>
                </div>
            </div>
        )
    }
}
exports.Lhh_contact_map=Lhh_contact_map;
class Lhh_address extends React.Component{
    render(){
        return(
            <div className="lhh_address">
                <ul className="lhh_address_li">
                    <li>
                        <a href="" className="lhh_icon">
                            <img src="/public/images/lhh_address.png" alt=""/>
                        </a>
                        <div className="lhh_address_text">
                            <p className="lhh_address_des">
                                ADD/你可以在这里找到我
                            </p>
                            <p className="lhh_address_detail">
                                太原清华科技园A座
                            </p>
                        </div>
                    </li>
                    <li>
                        <a href="" className="lhh_icon">
                            <img src="/public/images/lhh_phone.png" alt=""/>
                        </a>
                        <div className="lhh_address_text">
                            <p className="lhh_address_des">
                                TEL/你可以拨这个联系我
                            </p>
                            <p className="lhh_address_detail">
                                400-0351-186
                            </p>
                        </div>
                    </li>
                    <li>
                        <a href="" className="lhh_icon">
                            <img src="/public/images/lhh_email.png" alt=""/>
                        </a>
                        <div className="lhh_address_text">
                            <p className="lhh_address_des">
                                MAL/你可以发这个咨询我
                            </p>
                            <p className="lhh_address_detail">
                                foodtry@163.com
                            </p>
                        </div>
                    </li>
                </ul>
            </div>
        )
    }
}
exports.Lhh_address=Lhh_address;
class Lhh_bottom extends React.Component{
    render(){
        return(
            <div className="lhh_bottom" style={bottomStyle}>
                铁锅王——选铁锅上铁锅网——汇集国内外优质铁锅品牌
            </div>
        )
    }
}
exports.Lhh_bottom=Lhh_bottom;
//底部
class Footer extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        const ynn_partner=this.props.ynn_math[0].partner;
        const ynn_art=this.props.ynn_math[1].art;
        const ynn_support=this.props.ynn_math[2].support;
        const ynn_span1=ynn_partner.map((v,i)=><span key={i}>{v}</span>);
        const ynn_span2=ynn_art.map((v,i)=><span key={i}>{v}</span>);
        const ynn_span3=ynn_support.map((v,i)=><span key={i}>{v}</span>);
        return(
            <div className="ynn_all">
                {/*inner*/}
                <div className="ynn_inner">
                    {/*logo*/}
                    <div className="ynn_logo">
                        <img src="/public/images/ynn_footer.png" alt=""/>
                    </div>
                    {/*middle*/}
                    <ul className="ynn_middle">
                        <li>
                            <span>合作伙伴 :</span>
                            {ynn_span1}
                        </li>
                        <li>
                            <span>壶艺顾问 :</span>
                            {ynn_span2}
                        </li>
                        <li>
                            <span>法律支持 :</span>
                            {ynn_span3}
                        </li>
                        <li>
                            <span>晋ICP备14008682号</span>
                        </li>
                    </ul>
                    {/*right*/}
                    <div className="ynn_right">
                        <img src="/public/images/ynn_code.jpg" alt=""/>
                    </div>
                </div>
            </div>
        );
    }
}
exports.Footer=Footer;