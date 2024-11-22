import React from 'react'
import Navbar from '../NavBar/Navbar'
import About from '../About/About'
import Details from '../DetailSection/DetailSection'
import FoodSec from '../FoodSection/FoodSection'
import BarSec from '../BarSectaion/BarSectaion'
import FooterSec from '../Footer/Footer'

import Img from '../../assets/img.jpg'

import Css from './Home.module.css'

function Home() {
    return (
        <>
            <div className={Css.HomeContainer}>
                <div className={Css.container}>
                    <Navbar />
                    <div className={Css.Heading}>
                        <h1>LYRA</h1>
                    </div>
                </div>
            </div>
            <div className={Css.container}>
                <About />
                <Details />
                <FoodSec />
            </div>
            <div className={Css.ImgContainer}>
                <img src={Img} alt="" />
            </div>
            <div className={Css.container}>
                <BarSec />
            </div>
            <div className={Css.Footercontainer}>
                <div className={Css.container}>
                    <FooterSec />
                </div>
            </div>
        </>
    )
}

export default Home