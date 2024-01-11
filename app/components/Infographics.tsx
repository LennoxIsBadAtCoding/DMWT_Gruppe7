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
    const [variableText, setVariableText] = useState("Hey! Lass uns ein Smartphone recyclen! Klicke auf das Handy um zu starten.");
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
        setVariableText("So, wir sind fast am Ende!")
         setTimeoutID(setTimeout(( () => {
             document.getElementById("dropPlace").style.display = "none";
             repositionOven();
             setVariableText("BING! Der Ofen ist fertig! Rechts siehst du die Metalle, die Du erzeugt hast." +
                 " Kupfer, Silber, Palladium, Gold und Platin sind hierbei die Metalle, die du mit einem " +
                 "einfachen Standardrecycling durch eine Schmelze hergstellt hast. Nach der Schmelze wird " +
                 "üblicherweise noch eine Elektrolyse durchgeführt, um die einzelnen Metalle von einander " +
                 "zu trennen. Dank dir konnten wir bis zu 98% dieser Metalle zurückgewinnen." +
                 " Falls du weitere Fragen haben solltest, schreibe uns gerne über das Kontaktformular " +
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
             setVariableText("So jetzt haben wir erstmal das Display gelöst und schauen uns das Innere vom Smartphone an. " +
                 "Das gelöste Display, der Akku und die darunterliegende Leiterplatte können recyclet werden. " +
                 "Aus dem Display kann das Metall Idium gewonnen werden." +
                 " Aus dem Akku können Metalle wie Lithium und Kobalt und auch Seltene Erden zurückgewonnen werden." +
                 "Im nächsten Schritt schauen wir uns jedoch das Recycling der Leiterplatte aufgrund der hohen Metallwerte genauer an. " +
                 "Klicke dafür auf das Handy!");
        }else if(displayImageRef.current && displayImageRef.current.src.match(insideOfPhoneWithAll.src)){
            displayImageRef.current.src = insideOfPhoneOnlyCircuitBoard.src;
            setVariableText("Die Leiterplatte enthält 90% des Goldes, 98% des Kupfers," +
                " 99% des Palladiums, 86% des Indiums und 93% des Tantals, die insgesamt in einem Handy verbaut sind. " +
                "Aufgrund der vielen verschiedenen verbauten Metalle und ihrem hohen Metallwert" +
                " ist sie für den Recyclingprozess sehr attraktiv." +
                " Um die Leiterplatte zu recyclen, musst du sie aus dem Handy nehmen." +
                " Um sie rauszunehmen, klicke auf das Handy ");
        }else if(displayImageRef.current && displayImageRef.current.src.match(insideOfPhoneOnlyCircuitBoard.src)){
            document.getElementById("clickableInfographics").style.display = "none";
            setVariableText("Jetzt aber genug Infos! Lass uns die Leiterplatte recyceln!" +
                " Dafür musst du die Platte in den Ofen legen, damit wir ihre Metalle einschmelzen können!\n")
            LetOvenAndPhoneAppear();
        }
    };
    const handleButtonClick = () => {
        setVariableText("Hey! Lass uns ein Smartphone recyclen! Klicke auf das Handy um zu starten.");
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

                            <div id = "draggable"  className={styles.circuitBoard}>
                                <Image ref={drag} id="circuitBoard" src={battery} alt={"smartphone"} width={300} height={300}></Image>
                            </div>

                            <div id = "dropPlace">
                                <Image ref={drop} id="oven" src={oven} alt={"oven"} width={300} height={300}></Image>
                            </div>

                        </div>
                        <div id ="truckBox">
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