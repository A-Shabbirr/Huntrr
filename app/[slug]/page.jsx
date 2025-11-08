import React from 'react';
import styles from '../[slug]/LG.module.css';
import Image from 'next/image';
import Latest_guides from './components/Latest_guides';

const page = ({ params }) => {
    
    return (
        <div className={styles.LG}>
            <div className={styles.LG_Top}>
                <div className={styles.LG_hero}>
                    <Image className={styles.LG_hero_image}
                        src='/LG_hero.jpg'
                        alt='Guide Card'
                        width={1000}
                        height={1000}
                        quality={100} />
                </div>
                <div className={styles.LG_mid}>
                    <p className={styles.LG_mid_head}>Welcome to <span>the</span> HUNTR's curated guides</p>
                    <p className={styles.LG_mid_p}>Explore over 600% more with <span className={styles.the}>the</span> <span className={styles.HUNTR}>HUNTR</span>: City Guide app. Download below.</p>
                </div>
                <div className={styles.LG_bot}>
                    <button className={styles.LG_bot_B}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill='white' height='40' width='40'>
                            <path d="M389.6 298.3L168.9 77L449.7 238.2L389.6 298.3zM111.3 64C98.3 70.8 89.6 83.2 89.6 99.3L89.6 540.6C89.6 556.7 98.3 569.1 111.3 575.9L367.9 319.9L111.3 64zM536.5 289.6L477.6 255.5L411.9 320L477.6 384.5L537.7 350.4C555.7 336.1 555.7 303.9 536.5 289.6zM168.9 563L449.7 401.8L389.6 341.7L168.9 563z" />
                        </svg>
                        <p className={styles.LG_bot_B_p}>
                            Android App on <span>Goodle Play</span>
                        </p>
                    </button>
                    <button className={styles.LG_bot_B}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" fill='white' height='50' width='50'>
                            <path d="M447.1 332.7C446.9 296 463.5 268.3 497.1 247.9C478.3 221 449.9 206.2 412.4 203.3C376.9 200.5 338.1 224 323.9 224C308.9 224 274.5 204.3 247.5 204.3C191.7 205.2 132.4 248.8 132.4 337.5C132.4 363.7 137.2 390.8 146.8 418.7C159.6 455.4 205.8 545.4 254 543.9C279.2 543.3 297 526 329.8 526C361.6 526 378.1 543.9 406.2 543.9C454.8 543.2 496.6 461.4 508.8 424.6C443.6 393.9 447.1 334.6 447.1 332.7zM390.5 168.5C417.8 136.1 415.3 106.6 414.5 96C390.4 97.4 362.5 112.4 346.6 130.9C329.1 150.7 318.8 175.2 321 202.8C347.1 204.8 370.9 191.4 390.5 168.5z" />
                        </svg>
                        <p className={styles.LG_bot_B_p}>
                            Download on the <span>App Store</span>
                        </p>
                    </button>
                </div>
            </div>
            <div className={styles.second}>
                <Latest_guides />
            </div>
        </div>
    );
}

export default page;
