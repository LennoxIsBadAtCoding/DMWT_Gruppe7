import Link from "next/link"
import React from "react";
export default function Formular () {
    function Rectangle(){
        const rectangleStyle = {
            width: '900px',
            height: '400px',
            backgroundColor: 'darkgrey',
        };
        return(
            <div style={rectangleStyle}>
                <h1>Formular</h1>

                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" />
                <br/>
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" />
                <br/>
                <label htmlFor="anmerkungen">Anmerkungen:</label>
                <input type="text" id="anmerkungen" name="anmerkungen" />
            </div>
        )
    }

    return (
        <main>
            <h1>Hier wird das Formular sein</h1>
            <Link href="/">Hier geht's wieder zurück zur Startseite</Link>

            <Rectangle></Rectangle>


        </main>
    )
}