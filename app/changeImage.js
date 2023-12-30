'use client'
import React, { useRef } from 'react';
import styles from "../styles/MainPage.module.css"
export default function ImageChange() {
    const displayImageRef = useRef(null);

    const handleImageClick = () => {
        if (displayImageRef.current && displayImageRef.current.src.match('./HandyMitZerbrochenemGlas.svg')) {
            displayImageRef.current.src = './HandyMitAkku.svg';
        }else if(displayImageRef.current && displayImageRef.current.src.match('./HandyMitAkku.svg')){
            displayImageRef.current.src = './HandyMitPlatine.svg';
        }
            };
    const handleButtonClick = () => {
        displayImageRef.current.src = './HandyMitZerbrochenemGlas.svg';
    };

    return (
        <div>
            <button onClick={handleButtonClick} id={styles.startSquare}>Starte von vorne</button>
            <img ref={displayImageRef} src="./HandyMitZerbrochenemGlas.svg"
            alt="Kaputtes Handy" onClick={handleImageClick} id={styles.handyInfographic}/>
         </div>
    );
}
