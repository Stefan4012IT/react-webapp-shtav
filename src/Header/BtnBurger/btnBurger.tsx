import React from 'react';
import Radium from 'radium';
import './btnBurger.css';

const btnBurgerRepresentation = () => {



    let klik = true;
    const windowWidth = window.innerWidth;



    const makeAction = () => {

        const btnHamburger = document.querySelector('.btn-hamburger') as HTMLElement;
        const btnHBefore = document.querySelector('.btn-hamburger-before') as HTMLElement;
        const btnHAfter = document.querySelector('.btn-hamburger-after') as HTMLElement;

        const promo1 = document.querySelector('.promotion-box-1') as HTMLElement;
        const promo2 = document.querySelector('.promotion-box-2') as HTMLElement;

        const menuBox = document.querySelector('.menu-box') as HTMLElement;

        const linkovi = document.getElementsByClassName('menu-sections') as HTMLCollection;

        const name = document.querySelector('.name') as HTMLElement;
        const languages = document.querySelector('.languages') as HTMLElement;

        if (klik) {
            changeButton(btnHamburger, btnHBefore, btnHAfter, promo1, promo2,
                menuBox, linkovi, name, languages);
        } else {
            backChange(btnHamburger, btnHBefore, btnHAfter, promo1, promo2,
                menuBox, linkovi, name, languages);
        }
    }

    const makeMobileAction = () => {
        const btnHamburger = document.querySelector('.btn-hamburger') as HTMLElement;
        const btnHBefore = document.querySelector('.btn-hamburger-before') as HTMLElement;
        const btnHAfter = document.querySelector('.btn-hamburger-after') as HTMLElement;

        const promo1 = document.querySelector('.promotion-box-1') as HTMLElement;
        const promo2 = document.querySelector('.promotion-box-2') as HTMLElement;

        const menuBox = document.querySelector('.menu-box') as HTMLElement;

        const linkovi = document.getElementsByClassName('menu-sections') as HTMLCollection;

        const name = document.querySelector('.name') as HTMLElement;
        const languages = document.querySelector('.languages') as HTMLElement;

        if (klik) {
            changeButtonMobile(btnHamburger, btnHBefore, btnHAfter,
                menuBox, linkovi, name, languages);
        } else {
            backChangeMobile(btnHamburger, btnHBefore, btnHAfter,
                menuBox, linkovi, name, languages);
        }
    }


    /************************************************************************************************** */
    /***************************************MOBILE CHANGES********************************************* */
    /************************************************************************************************** */
    /************************************************************************************************** */
    const changeButtonMobile = (btnHamburger: HTMLElement, btnHBefore: HTMLElement, btnHAfter: HTMLElement,
        menuBox: HTMLElement, linkovi: HTMLCollection, name: HTMLElement, languages: HTMLElement) => {
        btnHamburger.style.display = "none";
        btnHAfter.style.width = "24px";
        btnHAfter.style.top = "50%";
        btnHBefore.style.top = "50%";
        btnHAfter.style.transform = "rotate(-135deg)";
        btnHBefore.style.transform = "rotate(135deg)";

        menuBox.style.display = "block";
        menuBox.style.animation = "moveFromUp 1s forwards";

        name.style.animation = "liftUp .7s forwards";


        languages.style.display = "block";  
        languages.style.animation = "liftUp .7s forwards";


        for (var i = 0; i < linkovi.length; i++) {
            const link = linkovi[i] as HTMLElement;
            link.style.animation = "textUp .7s forwards";
        }

        klik = false;
    }

    const backChangeMobile = (btnHamburger: HTMLElement, btnHBefore: HTMLElement, btnHAfter: HTMLElement,
        menuBox: HTMLElement, linkovi: HTMLCollection, name: HTMLElement, languages: HTMLElement) => {
        btnHBefore.style.top = "1.5px";
        btnHAfter.style.width = "34px";
        btnHAfter.style.top = "auto";
        btnHAfter.style.bottom = "0";
        btnHAfter.style.transform = "rotate(0deg)";
        btnHBefore.style.transform = "rotate(0deg)";
        btnHamburger.style.display = "inline";

        menuBox.style.animation = "moveToUp .75s forwards";

        name.style.animation = "fadeOut .6s forwards";

        languages.style.animation = "fadeOut .7s forwards";


        for (var i = 0; i < linkovi.length; i++) {
            const link = linkovi[i] as HTMLElement;
            link.style.animation = "textPu .7s forwards";
        }

        klik = true;
    }


    /************************************************************************************************** */
    /**************************************REGULAR CHANGES********************************************* */
    /************************************************************************************************** */
    /************************************************************************************************** */

    const changeButton = (btnHamburger: HTMLElement, btnHBefore: HTMLElement, btnHAfter: HTMLElement, promo1: HTMLElement, promo2: HTMLElement,
        menuBox: HTMLElement, linkovi: HTMLCollection, name: HTMLElement, languages: HTMLElement) => {
        btnHamburger.style.display = "none";
        btnHAfter.style.width = "24px";
        btnHAfter.style.top = "50%";
        btnHBefore.style.top = "50%";
        btnHAfter.style.transform = "rotate(-135deg)";
        btnHBefore.style.transform = "rotate(135deg)";

        promo1.style.display = "block";
        promo1.style.animation = "moveFromUp 1.3s forwards";
        promo2.style.display = "block";
        promo2.style.animation = "moveFromUpHalf 1.3s forwards";

        menuBox.style.display = "block";
        menuBox.style.animation = "moveFromUp 1s forwards";

        name.style.animation = "liftUp .7s forwards";
        languages.style.animation = "liftUp .7s forwards";


        for (var i = 0; i < linkovi.length; i++) {
            const link = linkovi[i] as HTMLElement;
            link.style.animation = "textUp .7s forwards";
        }

        klik = false;
    }

    const backChange = (btnHamburger: HTMLElement, btnHBefore: HTMLElement, btnHAfter: HTMLElement, promo1: HTMLElement, promo2: HTMLElement,
        menuBox: HTMLElement, linkovi: HTMLCollection, name: HTMLElement, languages: HTMLElement) => {
        btnHBefore.style.top = "1.5px";
        btnHAfter.style.width = "34px";
        btnHAfter.style.top = "auto";
        btnHAfter.style.bottom = "0";
        btnHAfter.style.transform = "rotate(0deg)";
        btnHBefore.style.transform = "rotate(0deg)";
        btnHamburger.style.display = "inline";

        promo1.style.animation = "moveToUp 1.2s forwards";
        promo2.style.animation = "moveToUpForHalf 1.2s forwards";

        menuBox.style.animation = "moveToUp .75s forwards";

        name.style.animation = "fadeOut .6s forwards";
        languages.style.animation = "fadeOut .7s forwards";


        for (var i = 0; i < linkovi.length; i++) {
            const link = linkovi[i] as HTMLElement;
            link.style.animation = "textPu .7s forwards";
        }

        klik = true;
    }
    if (windowWidth > 800) {
        return (

            <div className="btn-ham-back" onClick={() => makeAction()}>
                <div className="btn-hamburger-before"></div>
                <div className="btn-hamburger"></div>
                <div className="btn-hamburger-after"></div>
            </div>
        )


    } else {
        return (
            <div className="btn-ham-back-mobile" onClick={() => makeMobileAction()}>
                <div className="btn-hamburger-before"></div>
                <div className="btn-hamburger"></div>
                <div className="btn-hamburger-after"></div>
            </div>
        )
    }
}

export default Radium(btnBurgerRepresentation);