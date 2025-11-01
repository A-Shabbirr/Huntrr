import React from 'react';
import styles from '../components/styles/membership_button.module.css';

const Membership_Button = ({ para, para_className, className, threecard = false, MF = false }) => {
    return (
        <button className={`${styles.mbr_b} ${threecard ? className : ''} ${MF ? styles.MF_Button : ''}`}>
            <p className={`${styles.mbr_b_p} ${threecard ? para_className : ''} ${MF ? styles.MF_para : ''}`}>{para}</p>
        </button>
    );
}

export default Membership_Button;
