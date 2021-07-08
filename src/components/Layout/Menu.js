import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Menu } from 'antd'
import { Link } from 'react-router-dom';
import { config } from '../../config/index'
class SiderMenu extends PureComponent {
  generateMenus = data => {
    return data.map(item => {
      if (item.menu && item.menu.isShow) {
        return <Menu.Item key={item.path} icon={item.menu.icon}><Link to={item.path}>{item.menu.name}</Link></Menu.Item>
      }
    })
  }

  render () {
    const {
      menus,
      location
    } = this.props

    const index = config.baseName.length
    const pathname = location.pathname.substring(index)

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
