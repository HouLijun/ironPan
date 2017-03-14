const React = require('react');
const ReactDOM = require('react-dom');
const editor=require('./wangEditor.jsx');
const common = require('./admin_common.jsx');

//富文本编辑器
function save(data){
    var arr = location.pathname.split('/');
    var id = arr[arr.length - 1];
    var cate_id = arr[arr.length - 2];
    const detail={
        detail:data,
        id:id
    };
    fetch("/admin/product_editor",{
        method: 'post',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body:JSON.stringify(detail)
    }).then((res) => res.json()).then((data) => {
       if(data=="ok"){
           location.href=`/admin/product/${cate_id}`
       }
    });
}

class Content extends React.Component {

    render() {
        return (
            <editor.WangEditor url={'/admin/editorImg'} save={save} style={{height:380,width:"100%"}}/>
        );
    }
}
ReactDOM.render(
    <common.AdminCommon>
        <Content/>
    </common.AdminCommon>
    , document.querySelector('#detail'));