import React from 'react';
import Image from 'next/image';
import styles from '../components/styles/QA.module.css';

const QA = () => {
    return (
        <div className={styles.QA}>
            <div className={styles.QA_top}>
                <p className={styles.QA_top_p}>Your Questions,<span> Our Answers</span></p>
            </div>
            <div className={styles.QA_bot}>
                <div className={styles.QA_bot_left}>
                    <Image className={styles.card_img1}
                        src='/QA.png'
                        alt='Information'
                        height={1000}
                        width={1000}
                        quality={100}
                    />
                </div>
                <div className={styles.QA_bot_right}>
                    <div className={styles.QA_bot_right_para_div}>
                        <p className={styles.QA_bot_right_para_div_p}>How do I contact The HUNTR?
                        </p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" height='20' width='20'>
                            <path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z" /></svg>
                    </div>
                    <span className={styles.border}></span>
                    <div className={styles.QA_bot_right_para_div}>
                        <p className={styles.QA_bot_right_para_div_p}>What is a HUNTR Member Perk & how do I redeem one?
                        </p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" height='20' width='20'>
                            <path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z" /></svg>
                    </div>
                    <span className={styles.border}></span>
                    <div className={styles.QA_bot_right_para_div}>
                        <p className={styles.QA_bot_right_para_div_p}>How does the HUNTR Coffee Card work?
                        </p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" height='20' width='20'>
                            <path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z" /></svg>
                    </div>
                    <span className={styles.border}></span>
                    <div className={styles.QA_bot_right_para_div}>
                        <p className={styles.QA_bot_right_para_div_p}>Can I buy a HUNTR Membership as a gift?
                        </p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" height='20' width='20'>
                            <path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z" /></svg>
                    </div>
                    <span className={styles.border}></span>
                    <div className={styles.QA_bot_right_para_div}>
                        <p className={styles.QA_bot_right_para_div_p}>Can I transfer my membership to someone else?
                        </p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" height='20' width='20'>
                            <path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z" /></svg>
                    </div>
                    <span className={styles.border}></span>
                    <div className={styles.QA_bot_right_para_div}>
                        <p className={styles.QA_bot_right_para_div_p}>Can I share my membership to someone else?
                        </p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" height='20' width='20'>
                            <path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z" /></svg>
                    </div>
                    <span className={styles.border}></span>
                    <div className={styles.QA_bot_right_para_div}>
                        <p className={styles.QA_bot_right_para_div_p}>What is the HUNTR’s editorial policy?
                        </p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" height='20' width='20'>
                            <path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z" /></svg>
                    </div>
                    <span className={styles.border}></span>
                    <div className={styles.QA_bot_right_para_div}>
                        <p className={styles.QA_bot_right_para_div_p}>I spotted an error on one of your listings, how do I report it?
                        </p>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" height='20' width='20'>
                            <path d="M352 128C352 110.3 337.7 96 320 96C302.3 96 288 110.3 288 128L288 288L128 288C110.3 288 96 302.3 96 320C96 337.7 110.3 352 128 352L288 352L288 512C288 529.7 302.3 544 320 544C337.7 544 352 529.7 352 512L352 352L512 352C529.7 352 544 337.7 544 320C544 302.3 529.7 288 512 288L352 288L352 128z" /></svg>
                    </div>
                    <span className={styles.border}></span>
                </div>
            </div>
        </div >
    );
}

export default QA;
