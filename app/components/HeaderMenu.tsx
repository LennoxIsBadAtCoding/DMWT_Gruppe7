'use client'

import styles from "../../styles/Layout.module.css";
import React from "react";
import { Button, Link } from 'react-scroll'
import logo from '../../public/recharge-the-source-logo.svg'
import Image from "next/image";

function HeaderMenu() {
    const menuBarStyle = {
        width: '100%',
        height: '5rem',
        backgroundColor: '#101118'
    }
    return (
        <>
            <div style={menuBarStyle} className={styles.menuBarContainer}>
                <div id={styles.left}>
                    <Link activeClass="active" to="top" spy={true} smooth={true} offset={50} duration={500}>
                        <Image
                            src={logo}
                            alt="socket in earth"
                            width={90}
                        ></Image>
                    </Link>
                </div>
                <div id={styles.right}>
                    <nav className={styles.navigationContent}>
                        <Button className={styles.menuButton}>
                            <Link className={styles.menuText} activeClass="active" to="recycling" spy={true} smooth={true} offset={50} duration={500}>
                                Recycling
                            </Link>
                        </Button>
                        <div className={styles.separator}></div>
                        <Button className={styles.menuButton}>
                            <Link className={styles.menuText} activeClass="active" to="facts" spy={true} smooth={true} offset={50} duration={500}>
                                &nbsp;&nbsp;&nbsp;Facts
                            </Link>
                        </Button>
                        <div className={styles.separator}></div>
                        <Button className={styles.menuButton}>
                            <Link className={styles.menuText} activeClass="active" to="infografik" spy={true} smooth={true} offset={50} duration={500}>
                                Infografik
                            </Link>
                        </Button>
                        <div className={styles.separator}></div>
                        <Button className={styles.menuButton}>
                            <Link className={styles.menuText} activeClass="active" to="contactButton" spy={true} smooth={true} offset={50} duration={500}>
                                Kontakt
                            </Link>
                        </Button>
                    </nav>
                </div>
            </div>
            <div id="top" className={styles.blocker}></div>
        </>
    )
}

export default HeaderMenu;
