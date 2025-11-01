import React from 'react';
import styles from "../components/styles/Footer.module.css";
import Image from 'next/image';
import Input from '../components/input';
import FooterButton from './FooterButton';

const Footer = () => {
    return (
        <div className={styles.Footer}>
            <div className={styles.top}>
                <div className={styles.one}>
                    <div className={styles.first}>
                        <p className={styles.lead_p}>Explore</p>
                        <div className={styles.type_p_div}>
                            <p className={styles.type_p}>the Directory</p>
                            <p className={styles.type_p}>News</p>
                            <p className={styles.type_p}>Membership</p>
                        </div>
                    </div>
                    <div className={styles.first}>
                        <p className={styles.lead_p}>the Huntrr</p>
                        <div className={styles.type_p_div}>
                            <p className={styles.type_p}>About</p>
                            <p className={styles.type_p}>Meet the Huntrr</p>
                            <p className={styles.type_p}>Contact</p>
                            <p className={styles.type_p}>FAQs</p>
                            <p className={styles.type_p}>Editorial Policy</p>
                        </div>
                    </div>
                    <div className={styles.first}>
                        <p className={styles.lead_p}>Legal</p>
                        <div className={styles.type_p_div}>
                            <p className={styles.type_p}>Terms of Use(EULA)</p>
                            <p className={styles.type_p}>Privacy Policy</p>
                            <p className={styles.type_p}>Terms of Sale</p>
                            <p className={styles.type_p}>Rule of Use</p>
                            <p className={styles.type_p}>Editorial Policy</p>
                        </div>
                    </div>
                </div>
                <div className={styles.two}>
                    <div className={styles.two_A}>
                        <p className={styles.input_head}>Get the best of your city straight to your inbox</p>
                        <Input
                            className={styles.inputWrapper}
                            inputClass={styles.input_box}
                            buttoninputClass={styles.b_input}
                            vector={styles.vector}
                            placeholder="Enter your email"
                        />

                    </div>
                    <div className={styles.buttons}>
                        <FooterButton src='/Google_logo.png' alt='Playstore' />
                        <FooterButton src='/applepng.png' alt='apple' />
                    </div>
                </div>
            </div>
            <div className={styles.third}>
                <Image
                    src="/FooterLogo.png"
                    alt="Hunterr"
                    width={1000}
                    height={400} />
            </div>
        </div>
    );
}

export default Footer;
