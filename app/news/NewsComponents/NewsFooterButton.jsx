import Image from 'next/image';
import React from 'react';
import styles from '@/app/news/Styles/news_F_Button.module.css';

const NewsFooterButton = ({ src, alt }) => {
    return (
        <button className={styles.new_F_B}>
            <div className={styles.news_button_image}>
                <Image className={styles.newsF_image}
                    src={src}
                    alt={alt}
                    width={1000}
                    height={42}
                    quality={100} />
            </div>
        </button>
    );
}

export default NewsFooterButton;
