import React from 'react';

import classes from './LanguagesMob.module.css';

const languagesMob = (props: any) => {

    let linkOpen = props.open;
    let linkCheck = props.check;

    return (
        <ul className={!linkOpen ? classes.LangOpen : (linkCheck ? classes.LangClose : 'null')}>
            <li className={classes.LangList}><a href="" className={classes.LangLink}>SR</a></li>
            <li className={classes.LangList}><a href="" className={classes.LangLink}>EN</a></li>
        </ul>
    );
}

export default languagesMob;