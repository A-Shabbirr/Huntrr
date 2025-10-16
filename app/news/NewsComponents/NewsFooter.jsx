import React from 'react';
import styles from "..//Styles/newsFooter.module.css";
import NewsFooterButton from "../NewsComponents/NewsFooterButton";
import Image from 'next/image';

const NewsFooter = ({ para = '' }) => {
    return (
        <div className={styles.newsFooter}>
            <div className={styles.newsFooter_content}>
                <div className={styles.news_image}>
                    <Image className={styles.newsF_image}
                        src='/logoN.png'
                        alt='cafe'
                        width={1000}
                        height={1000}
                        quality={100} />
                </div>
                <div className={styles.newsF_para_div}>
                    <p className={styles.newsF_para}>{para}</p>
                    <div className={styles.news_button}>
                        <NewsFooterButton src='/news_F_Google.png' alt='Android App on the Google Play' />
                        <NewsFooterButton src='/news_F_apple.png' alt='Download on the App store' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default NewsFooter;
