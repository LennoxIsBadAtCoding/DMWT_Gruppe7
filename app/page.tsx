'use client'
import React from "react";
import styles from "../styles/MainPage.module.css";
import stylesLayout from "../styles/Layout.module.css";
import hero from '/public/Unbenannt-4.gif';
import Image from "next/image";
import HeaderMenu from "./components/HeaderMenu";
import {constants} from "os";
import {Button, Link} from 'react-scroll';

export default function MainPage() {
    function Hero() {
        return (
            <>
                <Image
                    priority = {true}
                    id={styles.Hero}
                    width={"1920"}
                    height={"1080"}
                    src={hero}
                    alt="Animated hero, that shows the space with an earth with stars. Sometimes smartphones pass by"
                ></Image>
            </>
        )
    };

    function BoxVerschwenderischerLebenstil() {
        return (
            <div className={styles.centered} style={{position:"relative"}}
                 id="ourLifestyle">
                <div className={styles.transparentBox} id={styles.smallBox}>
                    <h1 className={styles.headerFont} style={{fontSize: 60}}>
                        Unser verschwenderischer Lebensstil
                    </h1>
                    <p style={{fontSize: 40}}>
                        Bitte hier Text für "Unser verschwenderischer Lebensstil" einfügen.
                    </p>
                </div>
            </div>
        )
    };

    function BoxRecyclingAlsLoesung() {
        return (
            <div className={styles.centered} id="recycling">
                <div className={styles.transparentBox} id={styles.smallBox}>
                    <h1 className={styles.headerFont} style={{fontSize: 60}}>
                        Recycling als Lösung
                    </h1>
                    <p style={{fontSize: 40}}>
                        Bitte hier Text für "Recycling als Lösung" einfügen.
                    </p>
                </div>
            </div>
        )
    };

    function BoxFacts() {
        return (
            <div className={styles.centered} id="facts">
                <div className={styles.transparentBox} id={styles.largeBox}>
                    <h1 className={stylesLayout.Text} style={{fontSize: 60}}>
                        Facts
                    </h1>
                </div>
            </div>
        )
    };

    function BoxInfografik() {
        return (
            <div className={styles.centered} id="infografik">
                <div className={styles.transparentBox} id={styles.largeBox}>
                    <h1 className={styles.headerFont} style={{fontSize: 60}}>
                        {/*Hier Header einfügen, falls notwendig*/}
                    </h1>
                </div>
            </div>
        )
    };

    const handleFormButtonClick = () => {
        window.location.href = './formular/page.tsx';
    };

    function ButtonToFormPage() {
        return (
            <div className={styles.centered} id="contactButton">
                <a href="/formular">
                    <button id={styles.buttonToForm}>
                        ZUM KONTAKTFORMULAR
                    </button>
                </a>
            </div>
        )
    };
    function HeroButton(){
        return(
            <>
                <div className={styles.centered} style={{transform: "translateY(-250px)"}}>
                    <Button to={"ourLifestyle"} activeClass="active" className={styles.HeroButton}>
                        <Link activeClass="active" to="ourLifestyle" spy={true} smooth={true} offset={50} duration={500}>
                            <div >
                                <svg width="150" height="95" viewBox="0 0 150 95" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect id={styles.ButtonForm} width="150" height="95" rx="25" fill="#8A9FAA" fillOpacity="0.5"/>
                                    <rect id={styles.ArrowLeft} x="32.5978" y="39.2603" width="13.3937" height="53.575" rx="6.69687" transform="rotate(-50 32.5978 39.2603)" fill="white"/>
                                    <rect id={styles.ArrowRight} x="105.449" y="29" width="13.3937" height="53.575" rx="6.69687" transform="rotate(50 105.449 29)" fill="white"/>
                                </svg>
                            </div>
                        </Link>
                    </Button>
                </div>
            </>
        )
    };

    return(
        <main>
            <HeaderMenu></HeaderMenu>
            <Hero></Hero>
            <HeroButton></HeroButton>
            <BoxVerschwenderischerLebenstil></BoxVerschwenderischerLebenstil>
            <BoxRecyclingAlsLoesung></BoxRecyclingAlsLoesung>
            <BoxFacts></BoxFacts>
            <BoxInfografik></BoxInfografik>
            <ButtonToFormPage></ButtonToFormPage>
        </main>
    )
}
