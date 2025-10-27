import React from 'react';
import styles from "../components/styles/Test_mbr.module.css";
import Image from 'next/image';

const Testimonials_mbr = () => {
    return (
        <div className={styles.Test}>
            <div className={styles.Test_top}>
                <p className={styles.p}>Real Member</p></div>
            <div className={styles.Test_center}>
                <div className={styles.Test_center1}></div>
                <div className={styles.Test_center2}></div>
                <div className={styles.Test_center3}>
                    <p className={styles.Test_center3_p}>"the <span> HUNTR </span> has completely changed the way I explore the city. I never waste time choosing where to go!"</p>
                    <p className={styles.Test_center3_p_end}>- HUNTR Member</p>
                </div>
            </div>
            <div className={styles.Test_bot}>
                <p className={styles.p}>Testimonials</p></div>

        </div>
    );
}

export default Testimonials_mbr;
