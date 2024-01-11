import React, {useRef, useState} from 'react';
import Image from "next/image";
import oven from "../../public/Ofen.svg";
import workingOven from "../../public/WorkingOven.gif";
import battery from "../../public/Platine.svg";
import brokenPhone from "../../public/HandyMitZerbrochenemGlas.svg";
import insideOfPhoneWithAll from "../../public/HandymitAkku.svg";
import insideOfPhoneOnlyCircuitBoard from "../../public/HandyMitPlatine.svg";
import drivingTruck from "../../public/TruckDrivingAway.gif";
import metalsAsResult from "../../public/MetalsAsCoins.svg";
import {useDrag, useDrop} from "react-dnd";
import styles from "../../styles/MainPage.module.css";
import {string} from "yup";


function Infographics() {
    const [variableText, setVariableText] = useState("Klicke auf das Handy um den Recycling Prozess zu starten.");
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
        document.getElementById("oven").style.marginLeft = "300px";
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
        setVariableText("Nun müssen wir warten, bis der Ofen fertig ist.")
         setTimeoutID(setTimeout(( () => {
             document.getElementById("dropPlace").style.display = "none";
             repositionOven();
             setVariableText("Der Ofen ist fertig! Rechts siehst du die Metalle, die Du erzeugt hast." +
                 "Dank dir konnten wir rund 85% des Metallwerts vom Smartphone wiedergewinnen." +
                 " Kupfer, Silber, Palladium, Gold und Platin sind hierbei die Metalle, die du mit " +
                 "einfachem Standardrecycling durch eine Schmelze hergstellt hast. Nach der Schmelze wird " +
                 "üblicherweise noch eine Elektrolyse durchgeführt, um die einzelnen Metalle von einander " +
                 "zu trennen. Falls du weitere Fragen haben solltest, schreibe uns gerne über das Kontaktformular " +
                 "weiter unten!");
            document.getElementById("wonResources").style.display = "contents";
         }),3000));
    }
    const LetPhoneAndOvenDisappear = () =>{
        clearTimeout(timeoutID);
        LetPhoneDisappear();

        document.getElementById("truck").setAttribute("src", "");
        repositionOven();
        document.getElementById("circuitBoardAndOven").style.display = "none";
        document.getElementById("dropPlace").style.display = "none";
        document.getElementById("oven").setAttribute("src", oven.src);
        setTimeout(() => (document.getElementById("truck").setAttribute("src", drivingTruck.src)), 1);

    }
    const repositionOven = () => {
        document.getElementById("oven").style.marginLeft = "0px";
    }
    const displayImageRef = useRef(null);
    const handleImageClick = () => {

        if (displayImageRef.current && displayImageRef.current.src.match(brokenPhone.src)) {
            displayImageRef.current.src = insideOfPhoneWithAll.src;
             setVariableText("Sowohl das Display als auch der Akku können recycelt werden. Aus dem Display kann das Metall Idium gewonnen werden," +
                 " das als Leiter für die Touchscreen-Funktion verwendet wird. Aus dem Akku können Metalle wie Lithium und Kobalt, aber auch Seltene Erden zurückgewonnen werden.\n" +
                  + "Im nächsten Schritt schauen wir uns jedoch das Recycling der Leiterplatte aufgrund der hohen Metallwerte genauer an.");
        }else if(displayImageRef.current && displayImageRef.current.src.match(insideOfPhoneWithAll.src)){
            displayImageRef.current.src = insideOfPhoneOnlyCircuitBoard.src;
            setVariableText("Die Leiterplatte enthält 90% des Goldes, 98% des Kupfers," +
                " 99% des Palladiums, 86% des Indiums und 93% des Tantals, die insgesamt im Handy verbaut sind. " +
                "Aufgrund der vielen verschiedenen verbauten Metalle ist sie für den Recyclingprozess sehr interessant.");
        }else if(displayImageRef.current && displayImageRef.current.src.match(insideOfPhoneOnlyCircuitBoard.src)){
            document.getElementById("clickableInfographics").style.display = "none";
            setVariableText("Um die Leiterplatte zu recyceln, muss sie eingeschmolzen werden. Dafür musst du sie in den Ofen legen!\n")
            LetOvenAndPhoneAppear();
        }
    };
    const handleButtonClick = () => {
        setVariableText("Klicke auf das Handy um den Recycling Prozess zu starten.");
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
                    <button onClick={handleButtonClick} id={styles.startSquare}>
                        Starte von vorne
                    </button>
                    <p className={styles.infographicsTextSettings}>
                        {variableText}
                    </p>
                </div>
                <div className={styles.infographicsInteractiveContentBox}>
                    <div>
                            <div id="clickableInfographics">
                                <Image ref={displayImageRef} src= {brokenPhone.src} id= "clickPhone"
                                       alt="Kaputtes Handy" onClick={handleImageClick} className={styles.handyInfographic}
                                       width={500} height={500}>
                                </Image>
                            </div>
                    </div>


                    <div id = "circuitBoardAndOven" style={{display : "none"}}>
                        <div className={styles.ovenAndCBoardBox}>

                            <div id = "draggable" >
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
                    <Image src={metalsAsResult} className={styles.wonResourcesBox} alt={"picture of won resources through the recycling of one circuit board"}></Image>
                </div>
            </div>
        </>
    )
}
export default Infographics;