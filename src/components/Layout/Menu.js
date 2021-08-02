import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Menu } from 'antd'
import { Link } from 'react-router-dom';
import { getPathName } from '../../utils/index';
const { SubMenu } = Menu;
class SiderMenu extends PureComponent {
  generateMenus = data => {
    return data.map(item => {
      if (item.routes) {
        if (item.menu && item.menu.isShow) {
          return (
            <SubMenu
              key={item.id}
              icon={item.menu.icon}
              title={
                <span>
                  <span>{item.menu.name} </span>
                </span>
              }
            >
              {this.generateMenus(item.routes)}
            </SubMenu>
          )
        } else {
          return null
        }
      }
      if (item.menu && item.menu.isShow) {
        return (
          <Menu.Item key={item.id} icon={item.menu.icon}>
            <Link to={item.path}>
              <span>{item.menu.name}</span>
            </Link>
          </Menu.Item>
        )
      } else {
        return null
      }
    })
  }

  render () {
    const {
      menus,
      // location
    } = this.props

    const pathname = getPathName()

    return (
      <Menu theme="light" mode="inline" defaultSelectedKeys={[pathname]}>
        {this.generateMenus(menus)}
      </Menu>
    )
  }
}

SiderMenu.propTypes = {
  menus: PropTypes.array
}

export default SiderMenu
