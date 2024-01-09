'use client'
import React, { useRef } from 'react';
import styles from "../styles/MainPage.module.css";
import truckGIF from '../public/TruckDrivingAway.gif';
import Image from "next/image";
import Infographics from "./components/Infographics";
import {DndProvider} from "react-dnd";
import {HTML5Backend} from "react-dnd-html5-backend";
export default function ImageChange() {
    const displayImageRef = useRef(null);

    const handleImageClick = () => {
        console.log(displayImageRef.current.src)
        console.log(displayImageRef.current)
        if (displayImageRef.current && displayImageRef.current.src.match('./HandyMitZerbrochenemGlas.svg')) {
            displayImageRef.current.src = './HandyMitAkku.svg';
        }else if(displayImageRef.current && displayImageRef.current.src.match('./HandyMitAkku.svg')){
            displayImageRef.current.src = './HandyMitPlatine.svg';
        }else if(displayImageRef.current && displayImageRef.current.src.match('./HandyMitPlatine.svg')){
            displayImageRef.current.src = 'Platine.svg';
            return (
                <p>HALOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO</p>
            );
        }
    };
    const handleButtonClick = () => {
        displayImageRef.current.src = './HandyMitZerbrochenemGlas.svg';
    };

    return (
        <div>
            <button onClick={handleButtonClick} id={styles.startSquare}>Starte von vorne</button>
            <Image ref={displayImageRef} src="./HandyMitZerbrochenemGlas.svg"
            alt="Kaputtes Handy" onClick={handleImageClick} id={styles.handyInfographic}
            width={100} height={100} ></Image>
         </div>
    );
}
