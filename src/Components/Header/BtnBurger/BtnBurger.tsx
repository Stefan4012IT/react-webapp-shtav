import React from 'react';
import classes from './BtnBurger.module.css';
import BtnOpen from './BtnOpen/BtnOpen';
import BtnClose from './BtnClose/BtnClose';


const btnBurger = (props: any) => {




    /*showCloseButton = () => {
        this.setState({ open: false });
    }*/
    /*
    openState = () => {
        return this.setState({ open: true });
    }
    */

    return (
        <div className={classes.BtnPosition} onClick={props.clicked}>
            {props.open ? <BtnOpen openBtn={props.check} /> : <BtnClose />}
        </div>
    );

}

export default btnBurger;