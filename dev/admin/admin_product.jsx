const React = require('react');
const ReactDOM = require('react-dom');
const common = require('./admin_common.jsx');

class Content extends React.Component {
    render() {
        return (
            <div>修改这里代码即可（产品管理）</div>
        );
    }
}
ReactDOM.render(
    <common.AdminCommon>
        <Content/>
    </common.AdminCommon>
    , document.querySelector('#product'));