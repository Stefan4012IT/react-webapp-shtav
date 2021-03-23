import React from 'react';
import Aux from '../../../../hoc/Auxiliary/Auxiliary';
import classes from './BtnOpen.module.css';


const btnOpen = (props: any) => {


    if (props.openBtn) {
        return (
            <Aux>
                <div className={classes.BtnBurgerAnimated}></div>
                <div className={classes.BtnBurgerBeforeAnimated}></div>
                <div className={classes.BtnBurgerAfterAnimated}></div>
            </Aux>
        )
    } else {

        return (
            <Aux>
                <div className={classes.BtnBurger}></div>
                <div className={classes.BtnBurgerBefore}></div>
                <div className={classes.BtnBurgerAfter}></div>

            </Aux>
        )
    }
};


export default btnOpen;