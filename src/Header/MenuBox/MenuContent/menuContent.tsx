import React from 'react';
import Radium from 'radium';
import './menuContent.css';

const menuContentRepresentation = () => {
    return (
        <ul className="menu-content">
            <li><h3 className="name">Штав</h3></li>
            <li><a href="#" className="menu-content-link"><h3 className="menu-sections">Proizvodi</h3></a></li>
            <li><a href="#" className="menu-content-link"><h3 className="menu-sections">O nama</h3></a></li>
            <li><a href="#" className="menu-content-link"><h3 className="menu-sections">Budimo u kontaktu</h3></a></li>
            <li><a href="#" className="menu-content-link"><h3 className="menu-sections">Kontakt</h3></a></li>
        </ul>
    )
}


export default Radium(menuContentRepresentation);