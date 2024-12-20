import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Router } from "react-router";
import { createBrowserHistory } from "history";
import { config } from './config/index';
import { ConfigProvider } from 'antd';
import zhCN from 'antd/es/locale/zh_CN';
const history = createBrowserHistory({
  basename: config.baseName
})

ReactDOM.render(
  // <React.StrictMode>
  //   <Router history={history}>
  //     <App />
  //   </Router>
  // </React.StrictMode>,
  <Router history={history}>
    <ConfigProvider locale={zhCN}>
      <App />
    </ConfigProvider>
  </Router>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
