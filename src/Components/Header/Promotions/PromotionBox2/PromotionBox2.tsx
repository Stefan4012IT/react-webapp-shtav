import React from 'react';
import classes from '../PromotionBox2/PromotionBox2.module.css';

const promotionBox2 = (props: any) => {

    let passedOpen = props.passOpen;
    let passedCheck = props.passCheck;

    return (
        <div className={!passedOpen ? classes.PromotionBox2Open : (passedCheck ? classes.PromotionBox2Close : 'null')}>
            <div className={classes.PromoImg1}></div>
        </div>
    );
}

export default promotionBox2;