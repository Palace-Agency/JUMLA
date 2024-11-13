import styles from "./style.module.scss";
import React from "react";

export default function Footer() {
    return (
        <div className={styles.footer}>
            <a>Instagram</a>
            <a>Facebook</a>
            <a>Tiktok</a>
        </div>
    );
}
