import React from 'react';
import Radium from 'radium';

import './header.css';
import Slajfna from './Slajfna/slajfna';
import MenuBox from './MenuBox/menuBox';
import PromoBox1 from './PromotionBox1/promotionBox1';
import PromoBox2 from './promotionBox2/promotionBox2';

const hedaderRepresentation = () => {
    return (
        <header className="header">
            <Slajfna />
            <MenuBox />
            <PromoBox1 />
            <PromoBox2 />
        </header>

    )
}


export default Radium(hedaderRepresentation);