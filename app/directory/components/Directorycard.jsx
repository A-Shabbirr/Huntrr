import React from 'react';
import styles from '@/app/directory/styles/dir_card.styles.module.css';
import Image from 'next/image';

const Directorycard = ({ src, center = false }) => {
    return (
        <div className={`${styles.dir} ${center ? styles.dirdiv : ''}`}>
            <div className={`${styles.dir_image} ${center ? styles.dirimage : ''}`}>
                <Image className={`${styles.place_image} ${center ? styles.centerimage : ''}`}
                    src={src}
                    alt='Restaurants & Cafes in Dubai & Sharjah'
                    width={1000}
                    height={1000} />
            </div>
            <div className={styles.dir_cont}>
                <p className={styles.para1}>Bolle Dubai: The best Nordic cinnamon rolls and homemade bakes in Al Manara</p>
            </div>
        </div>
    );
}

export default Directorycard;
