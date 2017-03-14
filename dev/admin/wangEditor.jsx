const React = require('react');
class WangEditor extends React.Component {
    constructor(props){
        super(props);
        this.state={
            content:"Loading..."
        }
    }
    componentDidMount(){
        const that=this;
        var arr=location.pathname.split("/")
        var data={
            cate:arr[3],
            id:arr[5]
        }
        fetch("/admin/getEditorContent",{
            method: 'post',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify(data)
        }).then((res) => res.json()).then((data) => {
            console.log(data);
            that.setState({
                content: data
            })
            if(this.state.content!=="Loading..."){
                // 初始化内容
                this.editor.$txt.html(this.state.content);
            }
        });
        this.editor = new window.wangEditor(this.e);
        this.editor.config.uploadImgUrl = this.props.url;
        this.editor.config.menus=$.map(wangEditor.config.menus,function (item,key) {
            if(item==='location'){
                return null;
            }
            return item;
        })
        this.editor.create();

        console.log(this.state.content);
    }


    render() {
        return (
            <div style={{height:"100%"}}>
                <div ref={(el)=>{this.e=el}} style={this.props.style}></div>
                <div className="btn-save" onClick={()=>{this.props.save(this.editor.$txt.html())}}>保存</div>
            </div>
        );
    }
}
exports.WangEditor=WangEditor;