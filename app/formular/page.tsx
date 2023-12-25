"use client";
import Link from 'next/link';
import React from 'react';
import styles from "../../styles/Formular.module.css";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

export default function Formular () {

    function Rectangle(){
        const rectangleStyle = {
            width: '900px',
            height: '400px',
            backgroundColor: 'darkgrey',
        };
        return(
            <div style={rectangleStyle}>
                <h1>Formular</h1>

                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" />
                <br/>
                <label htmlFor="email">Email:</label>
                <input type="text" id="email" name="email" />
                <br/>
                <label htmlFor="anmerkungen">Anmerkungen:</label>
                <input type="text" id="anmerkungen" name="anmerkungen" />
            </div>
        )
    }

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

        return (
            <form onSubmit={handleSubmit((data) => setData(JSON.stringify(data)))}>
                <div>
                <input {...register("firstName")} placeholder="First name"/>
                {errors.firstName && <p className={styles.errorMessage}>{errors.firstName.message}</p>}
                </div>
                <div>
                <input {...register("eMail")} placeholder="E-mail"/>
                {errors.eMail && <p className={styles.errorMessage}>{errors.eMail.message}</p>}
                </div>
                <div>
                <input {...register("userComment")} placeholder="Comment"/>
                {errors.userComment && <p className={styles.errorMessage}>{errors.userComment.message}</p>}
                </div>
                <p id={styles.inputData}>{data}</p>
                <input type="submit"/>
            </form>
        );
    }

    return (
        <main>
            <App></App>
            <Link className={styles.linkStyle} href="/">Hier geht's wieder zurück zur Startseite</Link>
        </main>
    )
}