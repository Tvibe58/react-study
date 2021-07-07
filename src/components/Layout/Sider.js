import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import SiderMenu from './Menu'

import { Layout } from 'antd';

class Sider extends PureComponent {
  render () {
    const {
      menus,
      location
    } = this.props
    console.log('Sider', this.props)

    return (
      <Layout.Sider theme="light"
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
        style={{ minHeight: '100vh' }}>
        <SiderMenu menus={menus}></SiderMenu>
      </Layout.Sider>
    )
  }
}

Sider.propTypes = {
  menus: PropTypes.array,
  theme: PropTypes.string,
  collapsed: PropTypes.bool,
}

export default Sider
