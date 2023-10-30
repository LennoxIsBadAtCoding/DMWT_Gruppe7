"use client";
import Link from 'next/link';
import useSWR from 'swr';
import React from 'react';
import styles from "styles/Formular.module.css";

export default function Formular () {
    const fetcher = (url) => fetch(url).then((res) => res.json()); // gets an url, then fetches data from url and sends the data to res.json();

    function FetchComments(){
        const { data : comments,   // the received data
                isLoading, // describes the current state of what to be fetched
                error } =          // for when an error occurs
                useSWR("https://jsonplaceholder.typicode.com/comments?_limit=10", fetcher); // the url with the limit of 10 and fetcher function
        if (error) return <div>failed to load</div>
        if (isLoading) return <div>loading...</div>
        return (
            <div id={styles.commentBox} className={styles.comment}> Kommentare:
                <ol>
                    {comments.map((comment, index) => (
                        <li id={styles.comment} key={index}>
                            {comment.name}
                        </li>
                    ))}
                </ol>
            </div>
        );
    }
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

    return (
        <main>

            <Link className={styles.linkStyle} href="/">Hier geht's wieder zurück zur Startseite</Link>

            <Rectangle></Rectangle>
            <FetchComments></FetchComments>


        </main>
    )
}