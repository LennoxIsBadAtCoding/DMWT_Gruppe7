import Link from "next/link"
import React from "react";
import styles from "../styles/MainPage.module.css"

export default function MainPage() {
    function Hero() {
        const heroStyle = {
            width: '100%',
            height: '512px',
            paddingTop: '5%',
            backgroundColor: 'darkblue',
        }
        return (
            <div style={heroStyle}>
                <h1 className={styles.WebsiteTitle}>RECHARGE THE</h1>
                <h1 className={styles.WebsiteTitle}>SOURCE</h1>
            </div>
        )
    }

    function BoxVerschwenderischerLebenstil() {
        return (
            <div className={styles.centered}>
                <div className={styles.transparentBox} id={styles.smallBox}>
                    <h1 style={{fontSize: 60}}>
                        Unser verschwenderischer Lebensstil
                    </h1>
                    <p style={{fontSize: 40}}>
                        Bitte hier Text für "Unser verschwenderischer Lebensstil" einfügen.
                    </p>
                </div>
            </div>
        )
    }

    function BoxRecyclingAlsLoesung() {
        return (
            <div className={styles.centered}>
                <div className={styles.transparentBox} id={styles.smallBox}>
                    <h1 style={{fontSize: 60}}>
                        Recycling als Lösung
                    </h1>
                    <p style={{fontSize: 40}}>
                        Bitte hier Text für "Recycling als Lösung" einfügen.
                    </p>
                </div>
            </div>
        )
    }

    function BoxFacts() {
        return (
            <div className={styles.centered}>
                <div className={styles.transparentBox} id={styles.largeBox}>
                    <h1 style={{fontSize: 60}}>
                        Facts
                    </h1>
                </div>
            </div>
        )
    }

    function BoxInfografik() {
        return (
            <div className={styles.centered}>
                <div className={styles.transparentBox} id={styles.largeBox}>
                    <h1 style={{fontSize: 60}}>
                        {/*Hier Header einfügen, falls notwendig*/}
                    </h1>
                </div>
            </div>
        )
    }

    const handleFormButtonClick = () => {
        window.location.href = './formular/page.tsx';
    };

    function ButtonToFormPage() {
        return (
            <div className={styles.centered}>
                <a href="/formular">
                    <button id={styles.buttonToForm}>
                        ZUM KONTAKTFORMULAR
                    </button>
                </a>
            </div>
        )
    }

    return(
        <main>
            <Hero></Hero>
            <BoxVerschwenderischerLebenstil></BoxVerschwenderischerLebenstil>
            <BoxRecyclingAlsLoesung></BoxRecyclingAlsLoesung>
            <BoxFacts></BoxFacts>
            <BoxInfografik></BoxInfografik>
            <ButtonToFormPage></ButtonToFormPage>
        </main>
    )
}
