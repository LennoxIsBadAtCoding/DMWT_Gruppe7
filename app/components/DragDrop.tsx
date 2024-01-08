import React from 'react';
import Image from "next/image";
import oven from "../../public/Ofen.svg";
import workingOven from "../../public/WorkingOven.gif";
import battery from "../../public/HandyMitPlatine.svg";
import {useDrag, useDrop} from "react-dnd";

function DragDrop() {

    const [showElement, setShowElement] = React.useState(true);

    const [{ isDragging }, drag] = useDrag(() => ({
        type: "image",
        item: { id: "smartphone" },
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
        document.getElementById("oven").setAttribute("src", "../WorkingOven.gif");
        LetPhoneDisappear();
        LetOvenDisappear();
    };
    const LetPhoneDisappear = () => {
        document.getElementById("Draggable").style.display = "none";
    }
    const LetOvenDisappear = () =>{
        setTimeout(( () => {
            document.getElementById("DropPlace").style.display = "none";
             }),3000);
    }
    return (
        <>
            {showElement ? (
        <div id = "Draggable" style={{opacity: showElement ? 1 : 0}}>
            <Image ref={drag} id="smartphone" src={battery} alt={"smartphone"} width={300} height={300}></Image>
        </div>
                ) : (<div></div>)}
        <div id = "DropPlace">
            <Image ref={drop} id="oven" src={oven} alt={"oven"} width={300} height={300}></Image>
        </div>
        </>
    )
}
export default DragDrop