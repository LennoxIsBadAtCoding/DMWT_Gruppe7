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
        }else{
            displayImageRef.current.src = './HandyMitZerbrochenemGlas.svg';
        }
            };
    return (
        <img ref={displayImageRef} src="./HandyMitZerbrochenemGlas.svg"
            alt="Kaputtes Handy" onClick={handleImageClick} id={styles.handyInfographic}/>
    );
}
