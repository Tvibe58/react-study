import React from 'react'
import style from './Windmill.module.css'

const Windmill2 = () => (
  <div className={style.windmill_body_wrapper}>
    <div className={style.window}>
      <div className={style.windmill}>
        <div className={style.pillar}></div>
        <div className={style.dome}>
          <div className={style.dome_window}></div>
        </div>
        <div className={style.windmill_window}></div>
        <div className={style.blades}>
          <div className={`${style.blade} ${style.blade_1}`}></div>
          <div className={`${style.blade} ${style.blade_2}`}></div>
          <div className={`${style.blade} ${style.blade_3}`}></div>
          <div className={`${style.blade} ${style.blade_4}`}></div>
        </div>
        <div className={style.ramp}>
          <div className={style.grill}></div>
          <div className={`${style.hook} ${style.hook_1}`}></div>
          <div className={`${style.hook} ${style.hook_2}`}></div>
          <div className={`${style.hook} ${style.hook_3}`}></div>
          <div className={`${style.hook} ${style.hook_4}`}></div>
        </div>
      </div>
      <div className={style.sun}></div>
      <div className={style.land}></div>
      <div className={`${style.grass} ${style.grass_1}`}></div>
      <div className={`${style.grass} ${style.grass_2}`}></div>
    </div>
  </div>
)

export default Windmill2
