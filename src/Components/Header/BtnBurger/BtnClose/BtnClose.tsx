import React from 'react';
import Aux from '../../../../hoc/Auxiliary/Auxiliary';
import classes from './BtnClose.module.css';


const btnClose = (props: any) => {

    /*if (!props.closeBtn) {
        console.log('close');
    }*/
    return (
        <Aux>
            <div className={classes.BtnBurgerBefore}></div>
            <div className={classes.BtnBurgerAfter}></div>
        </Aux>
    )
};


export default btnClose;