import React from 'react';
import styles from "../components/styles/bodyButton.module.css";

const Button = ({ para = '', mbr = false, exp = false }) => {
    return (
        <button className={`${mbr ? styles.bodyButton_mbr : styles.bodyButton} ${exp ? styles.bodyButton_exp : ''}`}>
            <p className={mbr ? styles.para_b_mbr : styles.para_b}>{para}</p>
        </button>
    );
}

export default Button;
