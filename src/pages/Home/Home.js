import React, { Component } from 'react';
import './Home.css';
import Windmill from '../../components/Css/Windmill/Index'
export default class Home extends Component {

  render () {
    return (
      <div>
        <h1>啦啦啦</h1>
        <p>欢迎来到我的react学习小课堂，让我们一起愉快的学习吧</p>
        <div className="windmill-wrapper"><Windmill ></Windmill></div>
      </div>
    );
  }
}
