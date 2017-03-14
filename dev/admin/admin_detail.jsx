const React = require('react');
const ReactDOM = require('react-dom');
const editor=require('./wangEditor.jsx');
const common = require('./admin_common.jsx');

//富文本编辑器
function save(data){
    console.log(data)
}
var editorContent="Loading...";
class Content extends React.Component {
    render() {
        return (
            <editor.WangEditor url={'/admin/editorImg'} content={editorContent} save={save} style={{height:380,width:"100%"}}/>
        );
    }
}
ReactDOM.render(
    <common.AdminCommon>
        <Content/>
    </common.AdminCommon>
    , document.querySelector('#detail'));