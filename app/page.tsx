import Link from "next/link"
import React from "react";
import styles from "styles/MainPage.module.css"
export default function MainPage() {
    function Hero() {
        const heroStyle = {
            width: '100%',
            height: '512px',
            margin:'0 auto',
            backgroundColor: 'darkblue',
            opacity: '90%',
        }
        return (
            <div style={heroStyle}>
                <div><h1 className={styles.WebsiteTitle}>RECHARGE THE</h1></div>
                <div><h1 className={styles.WebsiteTitle}>SOURCE</h1></div>
            </div>
        )
    }

    function RectangleResourceInformation(){
        const rectangleStyle = {
        width: '100%',
        height: '500px',
        backgroundColor: 'darkgrey',
    };
        return(
            <div style={rectangleStyle}>
            Informationen über die verfügbaren Ressourcen der Welt
            </div>
        )
    }
    function RectangleRecyclingInformation(){
        const rectangleStyle = {
            width: '100%',
            height: '500px',
            opacity: '80%',
            backgroundColor: 'darkgrey',
        };
        return(
            <div style={rectangleStyle}>
                Recycling Informationen
            </div>
        )
    }
    function RectangleFacts(){
        const rectangleStyle = {
            width: '100%',
            height: '500px',
            opacity: '60%',
            backgroundColor: 'darkgrey',
        };
        return(
            <div style={rectangleStyle}>
                Fakten über Smartphone + Ressourcen
            </div>
        )
    }
    function RectangleInfographics(){
        const rectangleStyle = {
            width: '100%',
            height: '500px',
            opacity: '40%',
            backgroundColor: 'darkgrey',
        };
        return(
            <div style={rectangleStyle}>
                Hier wird eine Infografik entstehen
            </div>
        )
    }



    return(
        <main>
            <Hero></Hero>
            <Link className={styles.linkStyle} href="/formular">Hier geht's zum Formular mit den Kommentaren</Link>
            <RectangleResourceInformation></RectangleResourceInformation>
            <RectangleRecyclingInformation></RectangleRecyclingInformation>
            <RectangleFacts></RectangleFacts>
            <RectangleInfographics></RectangleInfographics>


        </main>
    )
}