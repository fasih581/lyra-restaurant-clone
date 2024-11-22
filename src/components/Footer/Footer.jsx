import React from 'react'

import Css from './Footer.module.css'

function Footer() {
    return (
        <div className={Css.Container}>
            <div className={Css.TopSec}>
                <div className={Css.TopSecDiv}>
                <div className={Css.Sec}>
                    <h3>OPENING HOURS</h3>
                    <div className={Css.SecDiv}>
                        <h4>BAR</h4>
                        <div className={Css.Description}>
                            <h5>SATURDAY - WEDNESDAY</h5>
                            <h6>12PM - 12AM</h6>
                            <h5>THURSDAY - FRIDAY</h5>
                            <h6>12PM - 12AM</h6>
                        </div>
                    </div>
                    <div className={Css.SecDiv}>
                        <h4>RESTAURANT</h4>
                        <div className={Css.Description}>
                            <h5>SATURDAY - THURSDAY</h5>
                            <h6>LUNCH 12PM - 3PM</h6>
                            <h6>DINNER 6:30PM - 11:30PM</h6>
                            <h5>FRIDAY</h5>
                            <h6>LUNCH 12PM - 4PM</h6>
                            <h6>DINNER 6:30PM - 11:30PM</h6>
                        </div>
                    </div>
                </div>
                <div className={Css.ContactSec}>
                    <h3>CONTACT US</h3>
                    <div className={Css.ContactSecDiv}>
                        <h5>+973 12121212</h5>
                        <h5>reservations@lyrarestaurant.com</h5>
                        <p>PO Box 10289,Buliding 176,
                            Road 6403,Block 264,
                            Diyar Al Muharraq,Bahrain
                        </p>
                        <div className={Css.ContactSecLink}>
                            <h6>Instagram</h6>
                            <h6>Facebook</h6>
                            <h6>Tiktok</h6>
                            <h6>Snapchat</h6>
                        </div>
                    </div>
                </div>
                </div>
                <div className={Css.NameSec}>
                <h2>LYRA</h2>
                </div>
            </div>
        </div>
    )
}

export default Footer