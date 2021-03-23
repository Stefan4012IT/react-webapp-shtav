import React, { Component } from 'react';
import classes from './SideBar.module.css';
import BtnBurger from '../BtnBurger/BtnBurger';


const sideBar = (props: any) => {


    /*console.log(props.check);*/

    return (
        <div className={classes.SideBar}>
            <h2 className={classes.Title}>Штав</h2>
            <BtnBurger clicked={props.clicked} open={props.open} check={props.check} />
        </div>
    );

}


export default sideBar;