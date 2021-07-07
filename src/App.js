import React, { Component } from 'react';
import './App.css';
import { Layout } from 'antd';
import routeConfig from './router/index';
import { renderRoutes } from 'react-router-config';
import MySider from './components/Layout/Sider'

const { Content } = Layout;
export default class App extends Component {
  render () {
    const menus = routeConfig.map((item, index) => Object.assign([], item, { id: index }));
    // const menus = routeConfig;
    const location = window.location
    const siderProps = {
      menus,
      location,
    }

    return (
      <div className="App">
        <Layout>
          <MySider {...siderProps}></MySider>
          <Content style={{ margin: '24px 16px 0' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              {renderRoutes(routeConfig)}
            </div>
          </Content>
        </Layout>
      </div>
    )
  }
}
