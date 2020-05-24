import React, { Component } from 'react'
import { Layout, Menu, Dropdown, Icon, message } from 'antd';
import '../css/layoutHeader.css';
const { Header } = Layout;
const onClick = ({ key }) => {
    message.info('退出登录，该返回登陆界面了');
};
const menu = (
    <Menu onClick={onClick} style={{padding:0}}>
        <Menu.Item key="1" style={{paddingTop:'12px',paddingBottom:"12px"}}>退出登陆</Menu.Item>
    </Menu>
);
export default class LayoutHeader extends Component {
    
    render() {
        return (
            <Header style={{ background: '#fff', padding: 0, display:'flex', justifyContent:'flex-end', paddingRight:'20px' }} >
                <Dropdown className="Dropdown" overlay={menu} overlayStyle={{minWidth:'160px'}}>
                    <a className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                        <Icon className="userName" type="user" style={{color:"rgba(0,0,0,.65)"}} />
                        <span className="userName" style={{marginLeft:'16px',color:'rgba(0,0,0,.65)'}}>用户名</span>
                    </a>
                </Dropdown>
            </Header>
        )
    }
}
