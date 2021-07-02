// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import { Layout, Menu } from 'antd';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import routeConfig from './router/index';
import { renderRoutes } from 'react-router-config';

const { Header, Content, Footer, Sider } = Layout;

const App = () => (
  <div className="App">
    {/* <Layout>
      <Header className="App-header">React</Header>
    </Layout> */}
    <Layout>
      <Sider theme="light"
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}>
        <Menu theme="light" mode="inline" defaultSelectedKeys={['4']}>
          <Menu.Item key="1" icon={<UserOutlined />}>nav 1</Menu.Item>
          <Menu.Item key="2" icon={<VideoCameraOutlined />}>nav 2</Menu.Item>
          <Menu.Item key="3" icon={<UploadOutlined />}>nav 3</Menu.Item>
          <Menu.Item key="4" icon={<UserOutlined />}>nav 4</Menu.Item>
          <Menu.Item key="5" icon={<UserOutlined />}><Link to="/">home</Link></Menu.Item>
          <Menu.Item key="6" icon={<UserOutlined />}><Link to="/react-study/about">about</Link></Menu.Item>
        </Menu>
      </Sider>
      <Content style={{ margin: '24px 16px 0' }}>
        <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
          content
          {renderRoutes(routeConfig)}
        </div>
      </Content>
    </Layout>
    <Layout>
      <Footer>仅供学习使用</Footer>
    </Layout>
  </div>
)
export default App
