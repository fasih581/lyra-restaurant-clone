import React, { useState } from 'react';
import Navbar from '../../NavBar/Navbar';
import FooterSec from '../../Footer/Footer';

import foodData from './foodData';
import drinksData from './drinksData';

import Button from '@mui/joy/Button';

import Css from './FoodDrinks.module.css';

function FoodDrinks() {

    const [menuData, setMenuData] = useState(foodData);

    return (
        <>
            <div className={Css.container}>
                <Navbar />
                <div className={Css.containerBox}>
                    <h1>Explore A Menu That Reminds You of Your Mother's Cooking.</h1>
                    <div className={Css.BtnBox}>
                        <Button
                            className={menuData === foodData ? Css.OutlineBtn : ""}
                            onClick={() => setMenuData(foodData)}
                        >
                            Food
                        </Button>
                        <Button
                            className={menuData === drinksData ? Css.OutlineBtn : ""}
                            onClick={() => setMenuData(drinksData)}
                        >
                            Drinks
                        </Button>
                    </div>
                    <div className={Css.DetailsBox}>
                        {menuData.map((item) => (
                            <div key={item.id} className={Css.Details}>
                                <div className={Css.DetailsImg}>
                                    <img src={item.image} alt={item.name} />
                                </div>
                                <div className={Css.DetailsText}>
                                    <h6>{item.name}</h6>
                                    <p>{item.price}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className={Css.Footercontainer}>
                <div className={Css.container}>
                    <FooterSec />
                </div>
            </div>
        </>
    );
}

export default FoodDrinks;

