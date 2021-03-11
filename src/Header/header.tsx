import React from 'react';
import Radium from 'radium';

import './header.css';
import SideBar from './SideBar/sideBar';
import NavBar from './NavBar/navbar';
import MenuBox from './MenuBox/menuBox';
import PromoBox1 from './PromotionBox1/promotionBox1';
import PromoBox2 from './promotionBox2/promotionBox2';

const hedaderRepresentation = () => {

    const windowWidth = window.innerWidth;

    if (windowWidth > 800) {
        return (
            <header className="header">
                <div className="img-frame">
                    <div className="img"></div>
                </div>
                <SideBar />
                <MenuBox />
                <PromoBox1 />
                <PromoBox2 />
            </header>

        )
    } else {
        return (
            <header className="header">
                <div className="img"></div>
                <NavBar />
                <MenuBox />
            </header>

        )
    }
}


export default Radium(hedaderRepresentation);