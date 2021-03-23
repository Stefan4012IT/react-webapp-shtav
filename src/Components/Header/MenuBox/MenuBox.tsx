import React from 'react';
import classes from './MenuBox.module.css';
import MenuContent from './MenuContent/MenuContent';
import Languages from './Languages/Languages';

const menuBox = (props: any) => {

    let passedOpen = props.passOpen;
    let passedCheck = props.passCheck;

    /*console.log('open: ' + passedOpen + '-- check: ' + passedCheck);*/

    return (
        <div className={!passedOpen ? classes.MenuBoxOpen : (passedCheck ? classes.MenuBoxClose : 'null')}>
            {passedCheck ? <MenuContent open={passedOpen} check={passedCheck} /> : null}
            {passedCheck ? <Languages open={passedOpen} check={passedCheck} /> : null}
        </div>
    );
}

export default menuBox;