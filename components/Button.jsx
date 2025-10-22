import React from 'react';
import styles from "../components/styles/bodyButton.module.css";

const Button = ({ para = '', mbr = false }) => {
    return (
        <button className={mbr ? styles.bodyButton_mbr : styles.bodyButton}>
            <p className={mbr ? styles.para_b_mbr : styles.para_b}>{para}</p>
        </button>
    );
}

export default Button;
