import React from 'react';
import classes from './NavBar.module.css';
import BtnBurger from '../Header/BtnBurger/BtnBurger';
import LanguagesMob from '../Header/MenuBox/LanguagesMob/LanguagesMob';

const navBar = (props: any) => {

    let passedCheck = props.check;
    let passedOpen = props.open;

    return (
        <div className={classes.NavBar}>
            <BtnBurger clicked={props.clicked} open={props.open} check={props.check} />
            {passedCheck ? <LanguagesMob open={passedOpen} check={passedCheck} /> : null}
        </div>
    );

}

export default navBar;