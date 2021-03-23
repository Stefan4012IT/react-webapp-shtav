import React, { Component } from 'react';
import classes from './Header.module.css';
import SideBar from './SideBar/SideBar';
import NavBar from '../NavBarMobile/NavBar';
import MenuBox from './MenuBox/MenuBox';
import PromotionBox1 from './Promotions/PromotionBox1/PromotionBox1';
import PromotionBox2 from './Promotions/PromotionBox2/PromotionBox2';

class Header extends Component<any, any> {

    constructor(props: any) {
        super(props);

        this.state = {
            open: true,
            check: false
        }
    }

    changeButtonState = () => {
        this.setState((prevState: any) => {
            return { open: !prevState.open, check: true };
        });
    }


    render() {
        return (
            <header className={classes.Header}>
                <div className={classes.ImgFrame}>
                    <div className={classes.Img}></div>
                </div>
                <SideBar clicked={this.changeButtonState} open={this.state.open} check={this.state.check} />
                <NavBar clicked={this.changeButtonState} open={this.state.open} check={this.state.check} />
                <MenuBox passOpen={this.state.open} passCheck={this.state.check} />
                <PromotionBox1 passOpen={this.state.open} passCheck={this.state.check} />
                <PromotionBox2 passOpen={this.state.open} passCheck={this.state.check} />
            </header>
        )
    }
};


export default Header;

