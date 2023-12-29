"use client";
import Link from 'next/link';
import React, {useEffect} from 'react';
import stylesForm from "../../styles/Formular.module.css";
import { useState } from "react";
import {set, useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import HeaderWithLogo from "../components/HeaderWithLogo";


export default function Formular () {

    const SignupSchema = yup.object().shape({
        firstName: yup.string().required("Please tell us, how we should address you"),
        eMail: yup.string().required("Must be a valid E-Mail address")
            .email("Es muss eine gültige E-Mail sein =)"),
        userComment: yup.string().required("Bitte erzähl uns, was du wissen möchtest im Kommentarfeld")
            .max(300, "Kommentare können nicht länger als 300 Buchstaben sein")
    });

    // form for user input
    function App() {
        const {register,
            handleSubmit,
            formState: {errors}
        } = useForm({resolver: yupResolver(SignupSchema)});

        const [data, setData] = useState("");

        async function makeApiRequest(information:string) {
            try {
                if(information == ""){
                    return;
                }
                let jsonObject = JSON.parse(information);
                let stringo = window.location.href;
                stringo = stringo.substring(0, stringo.length - 8);
                const response = await fetch(`${stringo}api/create-pets-table?firstName=${jsonObject.firstName}&eMail=${jsonObject.eMail}&userComment=${jsonObject.userComment}`);
                if (!response.ok) {
                    throw new Error(`API request failed with status ${response.status}`);
                }
                const apiResponse = await response.json();
                console.log('API response:', apiResponse);

                // Process the data as needed
                return data;
            } catch (error) {
                console.error('Den Kommentar hast du uns schon einmal geschickt!');
            }
        }

        return (
            <form  onSubmit={handleSubmit((data) => makeApiRequest(
                JSON.stringify(data)).then(r => <p>Alles klar wir haben deine Nachricht erhalten</p>))}>
                <div>
                    <input {...register("firstName")} placeholder="Dein Name"
                           className={stylesForm.inputStyle}/>
                {errors.firstName && <p className={stylesForm.errorMessage}>{errors.firstName.message}</p>}
                </div>
                <div>
                <input {...register("eMail")} placeholder="Deine E-mail"
                       className={stylesForm.inputStyle}/>
                {errors.eMail && <p className={stylesForm.errorMessage}>{errors.eMail.message}</p>}
                </div>
                <div>
                <input {...register("userComment")} placeholder="Dein Comment an uns"
                       className={stylesForm.inputStyle}/>
                {errors.userComment && <p className={stylesForm.errorMessage}>{errors.userComment.message}</p>}
                </div>
                <input className={stylesForm.inputStyle} type="submit" value={"Daten abschicken"}/>
            </form>
        );
    }

    function ButtonToMainPage() {
        return (
                <a href="/" style={{textDecoration:"none"}}>
                    <button id={stylesForm.buttonToMainPage}>
                        ZUR STARTSEITE
                    </button>
                </a>
        )
    }

    return (
        <main>
            <HeaderWithLogo></HeaderWithLogo>
            <div className={stylesForm.centered}>
                <div className={stylesForm.transparentBox} id={stylesForm.smallBox}>
                    <div>
                    <h1 className={stylesForm.h1} style={{fontSize: 60}}>
                        Kontaktformular
                    </h1>
                    </div>
                    <App></App>
                </div>
            </div>
            <ButtonToMainPage></ButtonToMainPage>
        </main>
    )
}