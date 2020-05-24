import React, { Component } from 'react'
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { Link,Switch,Route,Redirect } from "react-router-dom";
import LayHeader from '../../common/LayoutHeader';
import index1 from './index1'
import index2 from './index2'
import index3 from './index3'
import menuConfig from '../../config/menu'
const { Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
      defaultSelectedKeys:'/index/index1',
      defaultOpenKeys:[]
    };
    
  }
  componentDidMount=()=>{
    const history = this.props.history;
    //在渲染完成后需要手动执行一次此方法设置当前菜单，因为此时不会触发history的listen函数
    this.setActiveMenu(history.location);
    this.unListen = history.listen(this.setActiveMenu);
  }

  componentWillUnmount = () => {
    //移除监听
    this.unListen();
  };

  setActiveMenu = location => {
    //拿到当前浏览器的hash路径
   const pathname = location.pathname;
    for(let i = 0;i<menuConfig.menu.length;i++){
      if(menuConfig.menu[i].children){
        for(let o = 0;o<menuConfig.menu[i].children.length;o++){
          if(pathname === menuConfig.menu[i].children[o].key){
            this.setState({
              defaultOpenKeys: [menuConfig.menu[i].key],
              defaultSelectedKeys: menuConfig.menu[i].children[o].key,
              name:menuConfig.menu[i].children[o].name
            });
            return;
          }
        }
      }
      
    }
   //如果一个路由都没有匹配上则关闭菜单
   this.setState({
     defaultSelectedKeys: [],
     defaultOpenKeys: []
   });
 };
 
  getMenu=()=>{
    const menuArray = [];
    const menu = menuConfig.menu;
    for (let i = 0; i < menu.length; i++) {
      if (menu[i].children) {
        const childrenMenu = [];
        for (let j = 0; j < menu[i].children.length; j++) {
          childrenMenu.push(
            <Menu.Item key={menu[i].children[j].key}>
              <Link to={menu[i].children[j].key}>
                {menu[i].children[j].icon && (
                  <Icon type={menu[i].children[j].icon} />
                )}
                <span>{menu[i].children[j].name}</span>
              </Link>
            </Menu.Item>
          );
        }
        menuArray.push(
          <SubMenu
            key={menu[i].key}
            title={
              <>
                {menu[i].icon && <Icon type={menu[i].icon} />}
                <span>{menu[i].name}</span>
              </>
            }
          >
            {childrenMenu}
          </SubMenu>
        );
      } else {
        menuArray.push(
          <Menu.Item key={menu[i].key}>
            <Link to={menu[i].key}>
              {menu[i].icon && <Icon type={menu[i].icon} />}
              <span>{menu[i].name}</span>
            </Link>
          </Menu.Item>
        );
      }
    }
    return menuArray;
  }

  getBreadcrumb = () =>{
    const myBreadcrumb = [];
    const location = this.props.history.location;
    const pathname = location.pathname;
    for(let i = 0;i<menuConfig.menu.length;i++){
      if(menuConfig.menu[i].children){
        for(let o = 0;o<menuConfig.menu[i].children.length;o++){
          if(pathname === menuConfig.menu[i].children[o].key){
            myBreadcrumb.push(<Breadcrumb.Item key={menuConfig.menu[i].key}>{menuConfig.menu[i].name}</Breadcrumb.Item>,<Breadcrumb.Item key={menuConfig.menu[i].children[o].key}>{menuConfig.menu[i].children[o].name}</Breadcrumb.Item>)
            return myBreadcrumb;
          }
        }
      } 
    }
    
  }
      
    
      onCollapse = collapsed => {
        this.setState({ collapsed });
      };
    
      render() {
        return (
          <Layout style={{ minHeight: '100vh' }}>
            <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
              <Menu theme="dark" selectedKeys={[this.state.defaultSelectedKeys]} mode="inline" defaultOpenKeys={['用户管理']}>
                {this.getMenu()}
              </Menu>
            </Sider>
            <Layout>
              <LayHeader />
              <Content style={{ margin: '0 16px' }}>
                <Breadcrumb style={{ margin: '16px 0' }}>
                  {this.getBreadcrumb()}
                </Breadcrumb>
                <h1>{this.state.name}</h1>
                <Switch>
                  <Route path="/index/index1" component={index1}></Route>
                  <Route path="/index/index2" component={index2}></Route>
                  <Route path="/index/index3" component={index3}></Route>
                  <Redirect to="/index/index1"></Redirect>
                </Switch>
              </Content>
              <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
          </Layout>
        );
      }
}
