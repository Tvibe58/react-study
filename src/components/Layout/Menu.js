import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { Menu } from 'antd'

import { Link } from 'react-router-dom';
import { HomeOutlined, TagsOutlined } from '@ant-design/icons';


class SiderMenu extends PureComponent {

  render () {
    const {
      menus
    } = this.props

    return (
      <Menu theme="light" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<HomeOutlined />}><Link to="/">home</Link></Menu.Item>
        <Menu.Item key="2" icon={<TagsOutlined />}><Link to="/about">about</Link></Menu.Item>
      </Menu>
    )
  }
}

SiderMenu.propTypes = {
  menus: PropTypes.array
}

export default SiderMenu
