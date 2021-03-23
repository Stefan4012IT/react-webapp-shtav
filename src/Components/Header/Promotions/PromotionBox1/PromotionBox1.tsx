import React from 'react';
import classes from './PromotionBox1.module.css';

const promotionBox1 = (props: any) => {

    let passedOpen = props.passOpen;
    let passedCheck = props.passCheck;


    return (
        <div className={!passedOpen ? classes.PromotionBox1Open : (passedCheck ? classes.PromotionBox1Close : 'null')} >
            <div className={classes.PromoImg1}></div>
        </div >
    );


}

export default promotionBox1;