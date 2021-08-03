import React, { Component } from 'react';
import style from './AnalogClock.module.css';
export default class AnalogClock extends Component {
  constructor(props) {
    super(props);
    this.secondHand = React.createRef();
    this.minsHand = React.createRef();
    this.hourHand = React.createRef();
    this.setDateInterval = null;
  }
  secondHandRef = element => {
    this.secondHand = element;
  };
  minsHandRef = element => {
    this.minsHand = element;
  };
  hourHandRef = element => {
    this.hourHand = element;
  };

  setDate = () => {
    const now = new Date();

    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    this.secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

    const mins = now.getMinutes();
    const minsDegrees = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
    this.minsHand.style.transform = `rotate(${minsDegrees}deg)`;

    const hour = now.getHours();
    const hourDegrees = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;
    this.hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  }

  componentDidMount () {
    this.setDateInterval = setInterval(this.setDate, 1000);

    this.setDate();
  }

  componentWillUnmount () {
    clearInterval(this.setDateInterval)
  }
  render () {
    return (
      <div className={style.clock}>
        <div className={style.outer_clock_face}>
          <div className={`${style.marking} ${style.marking_one}`}></div>
          <div className={`${style.marking} ${style.marking_two}`}></div>
          <div className={`${style.marking} ${style.marking_three}`}></div>
          <div className={`${style.marking} ${style.marking_four}`}></div>
        </div>
        <div className={style.inner_clock_face}>
          <div className={`${style.hand} ${style.hour_hand}`} ref={this.hourHandRef}></div>
          <div className={`${style.hand} ${style.min_hand}`} ref={this.minsHandRef}></div>
          <div className={`${style.hand} ${style.second_hand}`} ref={this.secondHandRef}></div>
        </div>
      </div>
    );
  }
}

