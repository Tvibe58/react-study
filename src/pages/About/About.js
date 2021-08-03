import React from 'react'
import './About.css'
import AnalogClock from '../../components/Css/AnalogClock/index'

const About = () => (
  <div>
    <h1>关于</h1>
    <p>本网站仅供学习</p>
    <div className='analogClock-wrapper'>
      <AnalogClock></AnalogClock>
    </div>
  </div>
)

export default About
