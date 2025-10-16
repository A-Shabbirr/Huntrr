import React from 'react';
import styles from '@/app/HomepageComponents/styles/storecard.module.css';
import Image from 'next/image';

const Storecard = ({ src = { src }, para1 = '', para2 = '' }) => {
    return (
        <div className={styles.storecard}>
            <div className={styles.image_div}>
                <Image className={styles.place_image}
                    src={src}
                    alt='Items in our Store'
                    width={1000}
                    height={1000} />
            </div>
            <div className={styles.paraDiv}>
                <p className={styles.para1}>{para1}</p>
                <p className={styles.para2}>{para2}</p>
            </div>
        </div>
    );
}

export default Storecard;
