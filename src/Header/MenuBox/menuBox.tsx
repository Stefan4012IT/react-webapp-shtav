import React from 'react';
import Radium from 'radium';
import './menuBox.css';
import MenuContent from './MenuContent/menuContent';
import Languages from './Languages/languages';

const menuBoxRepresentation = () => {

    const windowWidth = window.innerWidth;

    if (windowWidth > 800) {
        return (
            <div className="menu-box">
                <MenuContent />
                <Languages />
            </div>
        )
    }else {
        return (
            <div className="menu-box">
                <MenuContent />
            </div>
        )
    }
}


export default Radium(menuBoxRepresentation);