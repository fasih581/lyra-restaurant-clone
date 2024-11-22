import React from 'react'
import Navbar from '../../NavBar/Navbar'
import FooterSec from '../../Footer/Footer'

import Css from './Contact.module.css'

function Contact() {
    return (
        <div className={Css.Footercontainer}>
            <div className={Css.container}>
                <Navbar />
                <FooterSec />
            </div>
        </div>
    )
}

export default Contact