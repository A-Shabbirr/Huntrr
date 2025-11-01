import React from 'react';
import styles from './styles/place.module.css';
import Image from 'next/image';

const Place = ({ para = '', src }) => {
    return (
        <div className={styles.place_div}>
            <div className={styles.place_head}>
                <p className={styles.place_head_p}> <span>the</span> breakfast</p>
            </div>
            <div className={styles.place_mid}>
                <p className={styles.place_p}>{para}</p>
                <div className={styles.place_image_div}>
                    <Image className={styles.place_image}
                        src={src}
                        alt='Discounted Product'
                        width={900}
                        height={900}
                        quality={100} />
                </div>
            </div>
            <div className={styles.place_bottom}>
                <p className={styles.place_head_p}>Become a member</p>
            </div>
        </div>
    );
}

export default Place;
