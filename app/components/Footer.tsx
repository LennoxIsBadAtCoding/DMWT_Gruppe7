import styles from "../../styles/Layout.module.css";
import React from "react";

function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.footerContent}>
                Datenschutz
            </div>
            <div className={styles.footerContent}>
                Impressum
            </div>
            <div className={styles.footerContent}>
                Kontakt
            </div>
        </div>
    )
}

export default Footer;
