import React from 'react'
import Css from './FoodSection.module.css'

import Img from '../../assets/food1.jpg'

function FoodSection() {
  return (
    <div className={Css.Container}>
      <dir className={Css.TextBox}>
        <h4>FOOD</h4>
        <p>From sizzling charcoal grills to shareable small,explore the traditional flavours of 
          the Mediterranean restaurant Bahrain,reinterpreted as a relaxed family dining experience.
        </p>
      </dir>
      <div className={Css.ImgBox}>
        <img src={Img} alt="" />
      </div>
    </div>
  )
}

export default FoodSection