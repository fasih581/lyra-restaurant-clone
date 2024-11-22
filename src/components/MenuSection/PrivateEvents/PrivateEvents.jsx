import React from 'react'
import Navbar from '../../NavBar/Navbar'
import FooterSec from '../../Footer/Footer'

import Css from './PrivateEvents.module.css'

import Img from '../../../assets/barimg.jpg'

function PrivateEvents() {
    return (
        <div className={Css.container}>
            <Navbar />
            <div className={Css.Container}>
                <dir className={Css.TextBox}>
                    <h4>PRIVATE DINING & EVENTS</h4>
                    <p>Lyra provides an ideal waterfront setting for corporate enents and special occasions.A particular
                        highlight is our private wine dining room,whic seats up to eight peaple and can host bespoke wine dinners curated by
                        our head chef and sommenier
                    </p>
                </dir>
                <div className={Css.ImgBox}>
                    <img src={Img} alt="" />
                </div>
            </div>
            <div className={Css.Footercontainer}>
                <div className={Css.container}>
                    <FooterSec />
                </div>
            </div>
        </div>
    )
}

export default PrivateEvents