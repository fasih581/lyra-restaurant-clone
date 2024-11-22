import React from 'react'
import Css from './BarSectaion.module.css'

import Img from '../../assets/barimg.jpg'

function BarSectaion() {
  return (
    <div className={Css.Container}>
        <div className={Css.ImgBox}>
            <img src={Img} alt="" />
        </div>
        <dir className={Css.TextBox}>
            <h4>BAR</h4>
            <p>Inspired by the rich mytholagy of Greek flora,our signature cocktails 
              are served inluminous surroundings evoking the sense of being cradled 
              in a magical oyster shell</p>
        </dir>
    </div>
  )
}

export default BarSectaion