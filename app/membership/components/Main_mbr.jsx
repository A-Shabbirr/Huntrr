import React from 'react';
import styles from '../components/styles/main.module.css';
import Image from "next/image";
import Membership_Button from './Membership_Button';

const Main_mbr = () => {
    return (
        <div className={styles.main}>
            <div className={styles.mbr1}>
                <Image className={styles.mbr1_img}
                    src='/mbr_1.png'
                    alt='stamp'
                    height={600}
                    width={600}
                    quality={100}
                />
            </div>
            <div className={styles.mbr2}>
                <Image className={styles.mbr2_img}
                    src='/mbr2.png'
                    alt='card'
                    height={1000}
                    width={1000}
                    quality={100}
                />
            </div>
            <div className={styles.mbr3}>
                <Image className={styles.mbr3_img}
                    src='/mbr3.png'
                    alt='HUNTR Card'
                    height={1000}
                    width={1000}
                    quality={100}
                />
            </div>
            <div className={styles.mbr4}>
                <Image className={styles.mbr4_img}
                    src='/mbr4.png'
                    alt='key'
                    height={1000}
                    width={1000}
                    quality={100}
                />
            </div>
            <div className={styles.center}>
                <div className={styles.head}>
                    <p className={styles.head_p}>Discover Your City's</p>
                    <strong>Hidden Treasures</strong>
                    <p className={styles.head_p}>with HUNTR Membership</p>
                </div>
                <p className={styles.p}>Access exclusive deals, insider experiences, and curated guides that make exploring your city unforgettable.</p>
            </div>
            <div className={styles.mail}>
                <form className={styles.form}>
                    <input className={styles.mbr_input} placeholder='Enter Your Email'></input>
                    <Membership_Button para='Get Your Membership' />
                </form>
            </div>
        </div>
    );
}

export default Main_mbr;
