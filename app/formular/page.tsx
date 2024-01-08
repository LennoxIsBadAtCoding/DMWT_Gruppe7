"use client";
import React from 'react';
import stylesForm from "../../styles/Formular.module.css";
import stylesLayout from "../../styles/Layout.module.css";
import { useState } from "react";
import {set, useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import HeaderWithLogo from "../components/HeaderWithLogo";
import toast, {Toaster} from "react-hot-toast";

export default function Form () {

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
                let currentWindowAsString = window.location.href;
                currentWindowAsString = currentWindowAsString.substring(0, currentWindowAsString.length - 8);
                const response = await fetch(`${currentWindowAsString}api/create-pets-table?firstName=${jsonObject.firstName}&eMail=${jsonObject.eMail}&userComment=${jsonObject.userComment}`);
                if (!response.ok) {
                    throw new Error(`API request failed with status ${response.status}`);
                }
                const apiResponse = await response.json();
                console.log('API response:', apiResponse);

                // Process the data as needed

                return data;
            } catch (error) {
               throw new Error();
            }
        }

        function correctInputResponse(userInformation){
            const userName = userInformation.firstName;
            setData("");
            document.forms['formInput'].reset();
           // console.log(JSON.stringify(userInformation));
            toast.promise(makeApiRequest(JSON.stringify(userInformation)).then(r => console.log("hm")),{
                loading: 'Verarbeite deine Nachricht',
                success: <b>Hey, wir haben deine Nachricht erhalten {userName}</b> ,
                error: <b>Hey, diese Nachricht kam nicht bei uns an oder du hast sie schonmal geschickt!</b>,
            } ,{
                style: {
                    padding: '16px',
                },
                success: {
                    iconTheme: {
                        primary: '#20D7C4',
                        secondary: '#FFFFFF',
                    }
                },
                error: {
                    iconTheme: {
                        primary: '#DD6E67',
                        secondary: '#FFFFFF',
                    }
                }
            } );
        }


        return (
            <form id= 'formInput' onSubmit={handleSubmit((data) => correctInputResponse(data))}>
                <div>
                    <input id= "inputName" {...register("firstName")} placeholder="Dein Name"
                           className={stylesForm.inputStyle}/>
                {errors.firstName && <p className={stylesForm.errorMessage}>{errors.firstName.message}</p>}
                </div>
                <div>
                <input id= "inputEmail" {...register("eMail")} placeholder="Deine E-mail"
                       className={stylesForm.inputStyle}/>
                {errors.eMail && <p className={stylesForm.errorMessage}>{errors.eMail.message}</p>}
                </div>
                <div>
                <textarea id= "inputComment" {...register("userComment")} placeholder="Dein Comment an uns"
                       className={stylesForm.inputStyle}/>
                {errors.userComment && <p className={stylesForm.errorMessage}>{errors.userComment.message}</p>}
                </div>
                <input className={stylesForm.inputStyle} id={stylesForm.submitButton} type="submit" value={"Daten abschicken"}/>
            </form>
        );
    }

    function ButtonToMainPage() {
        return (
            <div className={stylesLayout.buttonToOtherPageBox}>
                <a href="/" style={{textDecoration:"none"}}>
                    <button className={stylesLayout.buttonToOtherPage} id={stylesLayout.buttonToMainPage}>
                        ZUR STARTSEITE
                    </button>
                </a>
            </div>

        )
    }

    return (
        <main>
            <HeaderWithLogo></HeaderWithLogo>
            <div className={stylesForm.centered}>
                <div className={stylesForm.transparentBox} id={stylesForm.smallBox}>
                    <h1 className={stylesForm.h1} style={{fontSize: 60}}>
                        Kontaktformular
                    </h1>
                    <App></App>
                    <Toaster
                        position="top-center"
                        reverseOrder={false}
                        containerStyle={{fontFamily: 'Viga', fontSize: '1.5em'}}
                    />
                </div>
            </div>
            <ButtonToMainPage></ButtonToMainPage>
        </main>
    )
}