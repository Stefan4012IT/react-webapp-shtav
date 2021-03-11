import React from 'react';
import Radium from 'radium';
import './languages.css';

const languagesRepresentation = () => {
    return (
        <ul className="languages">
            <li className="languages-li"><a href="#" className="languages-links">SR</a></li>
            <li className="languages-li"><a href="#" className="languages-links">EN</a></li>
        </ul>
    )
}


export default Radium(languagesRepresentation);