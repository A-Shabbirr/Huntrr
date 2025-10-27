import React from 'react';
import Image from 'next/image';
import styles from '../components/styles/choice.module.css';

const Choice = () => {
    return (
        <div className={styles.choice}>
            <div className={styles.left}>
                <div className={styles.left_para_div}>
                    <p className={styles.para}>Not Sure Which</p>
                    <p className={styles.para_span}>Membership to Choose?</p>
                    <p className={styles.para_last}>Take this quick quiz and find out which HUNTR Membership is perfect for you.</p>
                </div>
                <div className={styles.left_button_div}>
                    <button className={styles.left_button}>
                        <p className={styles.para_B}>Take Test</p>
                    </button>
                </div>
            </div>
            <div className={styles.right}>
                <div className={styles.right1}>
                    <Image className={styles.card_img1}
                        src='/C1.png'
                        alt='card'
                        height={1000}
                        width={1000}
                        quality={100}
                    />
                </div>
                <div className={styles.right2}>
                    <Image className={styles.card_img2}
                        src='/C2.png'
                        alt='card'
                        height={1000}
                        width={1000}
                        quality={100}
                    />
                </div>
                <div className={styles.right3}>
                    <Image className={styles.card_img3}
                        src='/C3.png'
                        alt='card'
                        height={1000}
                        width={1000}
                        quality={100}
                    />
                </div>
            </div>
        </div>
    );
}

export default Choice;
