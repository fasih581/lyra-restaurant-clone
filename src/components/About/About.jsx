import React from 'react'
import Css from './About.module.css'

import Img from '../../assets/about.jpg'

function About() {
  return (
    <div className={Css.AboutContainer}>
        <div className={Css.ImgBox}>
            <img src={Img} alt="" />
        </div>
        <dir className={Css.TextBox}>
            <h4>ABOUT</h4>
            <p>From the Mediterranean to the shores of Bahrain,Lyra brings the wonders of Greek dining to a beautifuul new setting over looking Marassi Beach in the vida Hotel</p>
        </dir>
    </div>
  )
}

export default About