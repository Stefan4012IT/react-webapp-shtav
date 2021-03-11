import React from 'react';
import Radium from 'radium';
import './sideBar.css';
import BtnBurger from '../BtnBurger/btnBurger';

const sideBarRepresentation = () => {

    const windowWidth = window.innerWidth;
    
    if(windowWidth > 800){
        return (
            <div className="side-bar">
                <BtnBurger />
                <h2 className="title">Штав</h2>
            </div>
        )
    }else {
        return (
            <div className="mobile-nav-bar">
                <BtnBurger />
            </div>
        )
    }
}


export default Radium(sideBarRepresentation);