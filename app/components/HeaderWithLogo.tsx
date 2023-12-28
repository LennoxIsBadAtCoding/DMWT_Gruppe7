'use client'

import styles from "../../styles/Layout.module.css";
import React from "react";
import { Button, Link } from 'react-scroll'
import logo from '../../public/recharge-the-source-logo.svg'
import Image from "next/image";

function HeaderWithLogo() {
    const menuBarStyle = {
        width: '100%',
        height: '5rem',
        backgroundColor: '#101118'
    }
    return (
        <>
            <div style={menuBarStyle} className={styles.menuBarContainer}>
                <div id={styles.left}>
                    <a href="/">
                        <Image
                            src={logo}
                            alt="socket in earth"
                            width={90}
                        ></Image>
                    </a>
                </div>
            </div>
            <div id="top" className={styles.blocker}></div>
        </>
    )
}

export default HeaderWithLogo;
