import React from 'react';
import styles from "../Styles/pageNumber.module.css";

const PageNumber = () => {
    return (
        <div className={styles.pageNumber}>
            <button className={styles.backButton}>
                <p className={styles.number_p}>Back</p>
            </button>
            <button className={styles.activenumber}>
                <p className={styles.activenumber_p}>1</p>
            </button>
            <button className={styles.number}>
                <p className={styles.number_p}>2</p>
            </button>
            <button className={styles.number}>
                <p className={styles.number_p}>...</p>
            </button>
            <button className={styles.nextButton}>
                <p className={styles.activenumber_p}>Next</p>
            </button>
        </div>
    );
}

export default PageNumber;
