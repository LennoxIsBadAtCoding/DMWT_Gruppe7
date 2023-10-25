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
        )
    }
    return(
        <main>
            <div><h1 className={styles.WebsiteTitle}>RECHARGE THE SOURCE</h1></div>
            <h1> Hallo </h1>
            <Link href="/formular">Hier geht's zum Formular</Link>
            <Button></Button>
        </main>
    )
}