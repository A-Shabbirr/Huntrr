import React from 'react';
import styles from '../components/styles/third.module.css';
import Image from "next/image";
import Button from '@/components/Button';

const Third = () => {
    return (
        <div className={styles.Third}>
            <div className={styles.top}>
                <div className={styles.para}>
                    <p className={styles.para_p}>Ready to explore? Download the <span> HUNTR</span>: City Guide app
                        and join our community of people who appreciate quality.</p>
                    <Button para='Download App' />
                </div>
            </div>
            <div className={styles.img}>
                <Image className={styles.main_img}
                    src='/third3.png'
                    alt='card'
                    height={1000}
                    width={1000}
                    quality={100}
                />
            </div>
            <div className={styles.imga}>
                <Image className={styles.img_a}
                    src='/thirda.png'
                    alt='card'
                    height={1000}
                    width={1000}
                    quality={100}
                />
            </div>
            <div className={styles.imgb}>
                <Image className={styles.img_b}
                    src='/thirdb.png'
                    alt='card'
                    height={1000}
                    width={1000}
                    quality={100}
                />
            </div>
            <div className={styles.imgc}>
                <Image className={styles.img_c}
                    src='/thirdc.png'
                    alt='card'
                    height={1000}
                    width={1000}
                    quality={100}
                />
            </div>
            <div className={styles.imgd}>
                <Image className={styles.img_d}
                    src='/third_4.png'
                    alt='card'
                    height={1000}
                    width={1000}
                    quality={100}
                />
            </div>
        </div>
    );
}

export default Third;
