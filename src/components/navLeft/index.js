import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { Menu } from 'antd';
import '../navLeft/index.less'
const SubMenu = Menu.SubMenu;
const MenuItem = Menu.Item
export class navLeft extends Component {
  render() {
    return (
      <div className="nav-left">
       <Menu mode="vertical" theme="dark">
          <MenuItem key="/admin/home">
            <Link to="/admin/home">首页</Link>
          </MenuItem>
          <SubMenu
            title="订单管理"
          >
            <MenuItem key="/admin/order_demo">
              <Link to="/admin/order_demo">订单管理</Link>
            </MenuItem>
          </SubMenu>
          <SubMenu title="图例">
            <MenuItem key="/admin/echarts/pie">
              <Link to="/admin/echarts/pie">条形图</Link>
            </MenuItem>
            <MenuItem key="/admin/echarts/bar">
              <Link to="/admin/echarts/bar">柱状图</Link>
            </MenuItem>
          </SubMenu>
       </Menu>
      </div>
    )
  }
}

export default navLeft
