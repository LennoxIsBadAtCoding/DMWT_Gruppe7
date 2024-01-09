import React, {useRef, useState} from 'react';
import Image from "next/image";
import oven from "../../public/Ofen.svg";
import workingOven from "../../public/WorkingOven.gif";
import battery from "../../public/Platine.svg";
import brokenPhone from "../../public/HandyMitZerbrochenemGlas.svg";
import insideOfPhoneWithAll from "../../public/HandyMitAkku.svg";
import insideOfPhoneOnlyCircuitBoard from "../../public/HandyMitPlatine.svg";
import drivingTruck from "../../public/TruckDrivingAway.gif";
import earth from "../../public/Erde.svg";
import {useDrag, useDrop} from "react-dnd";
import styles from "../../styles/MainPage.module.css";



function Infographics() {
    const [variableText, setVariableText] = useState("Klicke auf das Handy und schau was passiert");
    const [timeoutID, setTimeoutID] = useState(undefined);

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "image",
        item: { id: "circuitBoard" },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));
    const [{ isOver }, drop] = useDrop(() => ({
        accept: "image",
        drop: (item) =>  StartOven(),
        collect: (monitor) => ({
            isOver: !!monitor.isOver(),
        }),
    }));
    const StartOven = () => {
        document.getElementById("oven").setAttribute("src", workingOven.src);
        LetPhoneDisappear();
        LetOvenDisappear();
    };
    const LetOvenAndPhoneAppear = () => {
        document.getElementById("draggable").style.display = "contents";
        document.getElementById("dropPlace").style.display = "contents";
        document.getElementById("circuitBoardAndOven").style.display = "contents";
    }
    const LetPhoneDisappear = () => {
        document.getElementById("draggable").style.display = "none";
    }
    const LetOvenDisappear = () =>{
        setVariableText("Wir warten kurz bis der Ofen fertig ist, oder?")
         setTimeoutID(setTimeout(( () => {
            document.getElementById("dropPlace").style.display = "none";
            setVariableText("Jetzt ist der Ofen fertig und wir haben bla bla zurückgewonnen, falls du weitere Fragen haben, dann schreib uns über das Kontaktformular");
            document.getElementById("wonResources").style.display = "contents";
         }),3000));
    }
    const LetPhoneAndOvenDisappear = () =>{
        clearTimeout(timeoutID);
        LetPhoneDisappear();

        document.getElementById("truck").setAttribute("src", "");
        document.getElementById("circuitBoardAndOven").style.display = "none";
        document.getElementById("dropPlace").style.display = "none";
        document.getElementById("oven").setAttribute("src", oven.src);
        setTimeout(() => (document.getElementById("truck").setAttribute("src", drivingTruck.src)), 1);

    }
    const displayImageRef = useRef(null);
    const handleImageClick = () => {

        if (displayImageRef.current && displayImageRef.current.src.match(brokenPhone.src)) {
            displayImageRef.current.src = insideOfPhoneWithAll.src;
             setVariableText("Nachdem wir das Touchscreen recycelt haben  stoßen wir auf den Akku der ebenfalls recycelt werden kann.\n" +
                 "...\n" +
                 "Doch das recyceln der Leiterplatte wollen wir uns im nächsten Schritt genauer anschauen aufgrund der hohen Metallwerte die sie aufweist");
        }else if(displayImageRef.current && displayImageRef.current.src.match(insideOfPhoneWithAll.src)){
            displayImageRef.current.src = insideOfPhoneOnlyCircuitBoard.src;
            setVariableText("Die Leiterplatte enthält  90% des Goldes, 98% des Kupfers, 99% des Paladiums, 86% des Indiums und 93% des Tantals das im Handy insgesamt verbaut wurde. Aufgrund der vielen verschiedenen verbauten Metalle  ist sie sehr interessant für den Recyclingprozess ");
        }else if(displayImageRef.current && displayImageRef.current.src.match(insideOfPhoneOnlyCircuitBoard.src)){
            document.getElementById("clickableInfographics").style.display = "none";
            setVariableText("Jetzt müssen wir die Platine einschmelzen, dafür musst du sie in den Ofen legen!")
            LetOvenAndPhoneAppear();
        }
    };
    const handleButtonClick = () => {
        setVariableText("Klicke auf das Handy und schau was passiert");
        if(document.getElementById("clickableInfographics").style.display == "none") {
            document.getElementById("wonResources").style.display = "none";
            document.getElementById("clickableInfographics").style.display = "contents";
            LetPhoneAndOvenDisappear();
        }
        displayImageRef.current.src = brokenPhone.src;
    };

    return (
        <>
            <div className={styles.infographicsBox}>
                <div className={styles.infographicsTextBox}>
                    <button onClick={handleButtonClick} id={styles.startSquare}>Starte von vorne</button>
                    <p className={styles.infographicsTextSettings}>
                        {variableText}
                    </p>
                </div>
                <div className={styles.infographicsInteractiveContentBox}>
                    <div>
                            <div id="clickableInfographics">
                                <Image ref={displayImageRef} src= {brokenPhone} id= "clickPhone"
                                       alt="Kaputtes Handy" onClick={handleImageClick} className={styles.handyInfographic}
                                       width={500} height={500}>
                                </Image>
                            </div>
                    </div>


                    <div id = "circuitBoardAndOven" style={{display : "none"}}>
                        <div className={styles.ovenAndCBoardBox}>
                            <div id = "draggable">
                                <Image ref={drag} id="circuitBoard" src={battery} alt={"smartphone"} width={300} height={300}></Image>
                            </div>
                            <div id = "dropPlace">
                                <Image ref={drop} id="oven" src={oven} alt={"oven"} width={300} height={300}></Image>
                            </div>
                        </div>
                        <div>
                            <Image id = "truck" src={drivingTruck} alt={"Truck driving away with smartphone parts"} width={900} height={740}></Image>
                        </div>
                    </div>
                </div>
                <div id = "wonResources" style={{display : "none"}}>
                    <Image src={earth} alt={"picture of won resources through the recycling of one circuit board"} width={300} height={300}></Image>
                </div>
            </div>
        </>
    )
}
export default Infographics;