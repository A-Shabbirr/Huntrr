import React from 'react';
import styles from '../components/styles/join.module.css';
import Image from "next/image";


const Join = () => {
    return (
        <div className={styles.join}>
            <div className={styles.mbr1}>
                <Image className={styles.mbr1_img}
                    src='/join1.jpg'
                    alt='R1'
                    height={1000}
                    width={1000}
                    quality={100}
                />
            </div>
            <div className={styles.mbr2}>
                <Image className={styles.mbr2_img}
                    src='/join2.jpg'
                    alt='R2'
                    height={1000}
                    width={1000}
                    quality={100}
                />
            </div>
            <div className={styles.mbr3}>
                <Image className={styles.mbr3_img}
                    src='/join3.jpg'
                    alt='R3'
                    height={1000}
                    width={1000}
                    quality={100}
                />
            </div>
            <div className={styles.mbr4}>
                <Image className={styles.mbr4_img}
                    src='/join4.jpg'
                    alt='R4'
                    height={1000}
                    width={1000}
                    quality={100}
                />
            </div>
            <div className={styles.para}>
                <p className={styles.para_p}>Why Join the <span>HUNTR</span> Club</p>
                <p className={styles.p}>Whether you're a curious local or new to the city, the<span> HUNTR </span> offers a fresh perspective on Dubai and the UAE. We're here to help you discover the places that make this city special.</p>
            </div>

        </div>
    );
}

export default Join;