import React from 'react'
import Css from './DetailSection.module.css'

import Img from '../../assets/food2.jpg'

function DetailSection() {
  return (
    <div className={Css.Container}>
      <dir className={Css.TextBox}>
            <p>From the Mediterranean to the shores of Bahrain,Lyra brings the wonders of Greek dining to a beautifuul new setting over looking Marassi Beach in the vida Hotel</p>
        </dir>
        <div className={Css.ImgBox}>
            <img src={Img} alt="" />
        </div>
    </div>
  )
}

export default DetailSection