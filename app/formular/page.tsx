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


export default function FormPage () {

    const SignupSchema = yup.object().shape({
        firstName: yup.string().required("Erzähl uns bitte, wie wir dich nennen sollen"),
        eMail: yup.string().required("Es muss eine gültige E-Mail sein =)")
            .email("Es muss eine gültige E-Mail sein =)"),
        userComment: yup.string().required("Bitte erzähl uns im Kommentarfeld, was du wissen möchtest")
            .max(300, "Kommentare können nicht länger als 300 Buchstaben sein")
    });

    // form for user input
    function Form() {
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
            console.log(userInformation);
            //setData("");

            document.forms['formInput'].reset();
            toast.promise(makeApiRequest(JSON.stringify(userInformation)),{
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
            userInformation.firstName = "";
            userInformation.eMail = "";
            userInformation.userComment = "";
        }


        return (
            <div className={stylesForm.centered}>
                <div className={stylesForm.greyBox} id={stylesForm.smallBox}>
                    <h1 className={stylesForm.h1}>
                        Kontaktformular
                    </h1>
                    <div>
                        <form id= 'formInput' onSubmit={handleSubmit((data) => correctInputResponse(data))}>
                            <div id={stylesForm.inputAndButtonContainer}>
                                <div id={stylesForm.inputContainer}>
                                    <input id= "inputName" {...register("firstName")} placeholder="Dein Name"  className={stylesForm.inputStyle}/>
                                        {errors.firstName && <p className={stylesForm.errorMessage}>{errors.firstName.message}</p>}

                                    <input id= "inputEmail" {...register("eMail")} placeholder="Deine E-mail" className={stylesForm.inputStyle}/>
                                        {errors.eMail && <p className={stylesForm.errorMessage}>{errors.eMail.message}</p>}

                                    <textarea id= "inputComment" {...register("userComment")} placeholder="Dein Comment an uns" className={stylesForm.inputStyleComment}/>
                                        {errors.userComment && <p className={stylesForm.errorMessage}>{errors.userComment.message}</p>}
                                </div>
                                <div id={stylesForm.buttonContainer}>
                                    <input id={stylesForm.submitButton} type="submit" value={"Absenden"}/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        );
    }

    function ButtonToMainPage() {
        return (
            <div className={stylesLayout.buttonToOtherPageBox} id={stylesForm.buttonToMainPageBox}>
                <a href="/" style={{textDecoration:"none"}} >
                    <button className={stylesLayout.buttonToOtherPage} id={stylesForm.buttonToMainPage}>
                        ZUR STARTSEITE
                    </button>
                </a>
            </div>

        )
    }

    return (
        <main>
            <HeaderWithLogo></HeaderWithLogo>
            <Form></Form>
            <Toaster
                position="top-center"
                reverseOrder={false}
                containerStyle={{fontFamily: 'Viga', fontSize: '1.5em'}}/>
            <ButtonToMainPage></ButtonToMainPage>
        </main>
    )
}