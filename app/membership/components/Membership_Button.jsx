import React from 'react';
import styles from '../components/styles/membership_button.module.css';
import styles from '../components/styles/MF.module.css';
import styles from '../components/styles/Threecard_comp.module.css';

const Membership_Button = ({ para, threecard = false, className, para_className, MF = false }) => {
    return (
        <button className={`${styles.mbr_b} ${threecard || MF ? className : ''}`}>
            <p className={`${styles.mbr_b_p} ${threecard || MF ? para_className : ''}`}>{para}</p>
        </button>
    );
}

export default Membership_Button;
