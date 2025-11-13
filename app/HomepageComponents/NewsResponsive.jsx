import React from 'react';
import styles from '../HomepageComponents/styles/news_res.module.css';
import Image from 'next/image';

const NewsResponsive = ({ para1, para2, para3 }) => {
    return (
        <div className={styles.NS}>
            <div className={styles.NS_Image_div}>
                <Image className={styles.image}
                    src='/Cafe1.png'
                    alt='Special Offers'
                    width={1000}
                    height={1000} />
            </div>
            <div className={styles.NS_cont}>
                <p className={styles.para1}>{para1}</p>
                <p className={styles.para2}>
                    {para2}
                </p>
                <p className={styles.para3}>{para3}
                </p>
            </div>
        </div>
    );
}

export default NewsResponsive;
