import Link from "next/link"
import React from "react";
export default function () {
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
            <h1> Hallo </h1>
            <Link href="/formular">Hier geht's zum Formular</Link>
            <Button></Button>
        </main>
    )
}