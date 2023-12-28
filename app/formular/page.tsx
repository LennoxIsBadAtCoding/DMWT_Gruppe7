"use client";
import Link from 'next/link';
import React, {useEffect} from 'react';
import stylesForm from "../../styles/Formular.module.css";
import { useState } from "react";
import {set, useForm} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import styles from "../../styles/MainPage.module.css";


export default function Formular () {

    const SignupSchema = yup.object().shape({
        firstName: yup.string().required("Please tell us, how we should address you"),
        eMail: yup.string().required("Must be a valid E-Mail address")
            .email("Must be a valid E-Mail address"),
        userComment: yup.string().required("Please tell us what you want to know in the comment input")
            .max(300, "The comment can't be longer than 300 characters")
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
                const response = await fetch(`http://localhost:3000/api/create-pets-table?firstName=${jsonObject.firstName}&eMail=${jsonObject.eMail}&userComment=${jsonObject.userComment}`);
                if (!response.ok) {
                    throw new Error(`API request failed with status ${response.status}`);
                }
                const apiResponse = await response.json();
                console.log('API response:', apiResponse);

                // Process the data as needed
                return data;
            } catch (error) {
                console.error('Error making API request:', error.message);
                throw error; // Re-throw the error if needed
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
                <input className={stylesForm.inputStyle} type="submit"/>
            </form>
        );
    }

    function ButtonToMainPage() {
        return (
            <div  className={stylesForm.centered} id={stylesForm.returnButton}>
                <a href="/">
                    <button id={styles.buttonToForm}>
                        Zur Startseite
                    </button>
                </a>
            </div>
        )
    }

    return (
        <main>
            <div className={stylesForm.centered}>
                <div className={stylesForm.transparentBox} id={stylesForm.smallBox}>
                    <div>
                    <h1 className={stylesForm.h1} style={{fontSize: 60}}>
                        Formular
                    </h1>
                    </div>
                    <App></App>
                </div>
            </div>
            <ButtonToMainPage></ButtonToMainPage>
        </main>
    )
}