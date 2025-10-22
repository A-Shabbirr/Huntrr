import React from 'react';
import styles from '../components/styles/fourth.module.css';

const Fourth = () => {
    return (
        <div className={styles.Fourth}>
            <div className={styles.fourth_content}>
                <p className={styles.p}><span>the </span>HUNTR Membership is for You If</p>
                <div className={styles.para_div}>
                    <p className={styles.para}>You love discovering new places</p>
                    <div className={styles.span}></div>
                    <p className={styles.para}>You want insider access to hidden gem</p>
                    <div className={styles.span}></div>
                    <p className={styles.para}>You enjoy exclusive perks & savings</p>
                    <div className={styles.span}></div>
                    <p className={styles.para}>You want a seamless way to explore the city</p>
                    <div className={styles.span}></div>
                </div>
            </div>

        </div>
    );
}

export default Fourth;
