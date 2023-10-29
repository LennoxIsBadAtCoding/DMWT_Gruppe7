import Link from "next/link"
import React from "react";
import styles from "styles/MainPage.module.css"
export default function MainPage() {
    function Button(){
        let text = "Hi";
        if(20 + 5 === 25){
            text = "Nee"
        }
        return(
            <button>{text}</button>
        ) }
    function Rectangle(){
        const rectangleStyle = {
        width: '400px',
        height: '300px',
        backgroundColor: 'darkgrey',
    };
        return(
            <div style={rectangleStyle}>
            Hier wird Text stehen
            </div>
        )
    }


    return(
        <main>
            <header className={styles.Navigationbar}>Recycling | Facts | Überraschung | Kontakt</header>

            <div><h1 className={styles.WebsiteTitle}>RECHARGE THE</h1></div>
            <div><h1 className={styles.WebsiteTitle}>SOURCE</h1></div>

            <h1> Hallo </h1>
            <Link href="/formular">Hier geht's zum Formular</Link>
            <Button></Button>



            <Rectangle></Rectangle>

            <div>
                <p className={styles.Text}>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,<br />
                    sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam<br />
                    voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, <br />
                    no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur <br />
                    sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, <br />
                    sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd <br />
                    gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
            </div>

        </main>
    )
}