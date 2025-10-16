import React from 'react';
import styles from "../components/styles/bodyButton.module.css";

const Button = ({ para = '' }) => {
    return (
        <button className={styles.bodyButton}>
            <p className={styles.para_b}>{para}</p>
        </button>
    );
}

export default Button;
