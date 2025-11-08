import React from 'react';
import styles from '../styles/Body.module.css';
import Image from 'next/image';

const Body = () => {
    return (
        <div className={styles.Body}>
            <div className={styles.top}>
                <p className={styles.top_head}>Discover the best independent restaurants in the Burj Khalifa Area</p>
                <p className={styles.top_para}>small gems tucked away inside the glittering skyscrapers </p>
            </div>
            <div className={styles.bot}>
                <Image className={styles.bot_image}
                    src='/guide_body.png'
                    alt='Guide Dubai'
                    width={1000}
                    height={1000}
                    quality={100}></Image>
            </div>
        </div>
    );
}

export default Body;
