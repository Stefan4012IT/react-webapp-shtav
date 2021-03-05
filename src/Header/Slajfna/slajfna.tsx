import React from 'react';
import Radium from 'radium';
import './slajfna.css';
import BtnBurger from '../BtnBurger/btnBurger';

const slajfnaRepresentation = () => {
    return (
        <div className="slajfna">
            <BtnBurger />
            <h2 className="naziv">Штав</h2>
        </div>
    )
}


export default Radium(slajfnaRepresentation);