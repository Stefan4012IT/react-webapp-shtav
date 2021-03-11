import React from 'react';
import Radium from 'radium';
import './navBar.css';
import BtnBurger from '../BtnBurger/btnBurger';
import Languages from '../MenuBox/Languages/languages';

const navBarRepresentation = () => {

    const windowWidth = window.innerWidth;

    return (
        <div className="mobile-nav-bar">
            <BtnBurger />
            <Languages />
        </div>
    )

}


export default Radium(navBarRepresentation);