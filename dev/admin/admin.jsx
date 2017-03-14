const React = require('react');
const ReactDOM = require('react-dom');
const common = require('./admin_common.jsx');

class Content extends React.Component {
    render() {
        return (
            <h1 style={{textAlign:"center",margin:"10px 0"}}>欢迎来到铁锅之家后台管理系统！</h1>
        );
    }
}
ReactDOM.render(
    <common.AdminCommon>
        <Content/>
    </common.AdminCommon>
    , document.querySelector('#admin'));

