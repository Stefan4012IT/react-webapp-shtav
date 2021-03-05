import React from 'react';
import Radium from 'radium';
import './menuBox.css';
import MenuContent from './MenuContent/menuContent';
import Languages from './Languages/languages';

const menuBoxRepresentation = () => {
    return (
        <div className="menu-box">
            <MenuContent />
            <Languages />
        </div>
    )
}


export default Radium(menuBoxRepresentation);