import React from 'react';
import classes from './MenuContent.module.css';


const menuContent = (props: any) => {

    let linkOpen = props.open;
    let linkCheck = props.check;


    return (
        <ul className={classes.MenuContent}>
            <li><h3 className={!linkOpen ? classes.NameOpen : (linkCheck ? classes.NameClose : 'null')}>Штав</h3></li>
            <li><a href="" className={classes.МenuContetLink}><h3 className={!linkOpen ? classes.MenuSectionsOpen : (linkCheck ? classes.MenuSectionsClose : 'null')}>Proizvodi</h3></a></li>
            <li><a href="" className={classes.МenuContetLink}><h3 className={!linkOpen ? classes.MenuSectionsOpen : (linkCheck ? classes.MenuSectionsClose : 'null')}>O nama</h3></a></li>
            <li><a href="" className={classes.МenuContetLink}><h3 className={!linkOpen ? classes.MenuSectionsOpen : (linkCheck ? classes.MenuSectionsClose : 'null')}>Budimo u kontaktu</h3></a></li>
            <li><a href="" className={classes.МenuContetLink}><h3 className={!linkOpen ? classes.MenuSectionsOpen : (linkCheck ? classes.MenuSectionsClose : 'null')}>Kontakt</h3></a></li>
        </ul>
    );
}

export default menuContent;