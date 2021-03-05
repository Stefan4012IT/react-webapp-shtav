import React from 'react';
import Radium from 'radium';
import './languages.css';

const languagesRepresentation = () => {
    return (
        <ul className="jezici">
            <li className="jezici-li"><a href="#" className="jezici-links">SR</a></li>
            <li className="jezici-li"><a href="#" className="jezici-links">EN</a></li>
        </ul>
    )
}


export default Radium(languagesRepresentation);