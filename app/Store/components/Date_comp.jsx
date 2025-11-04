import React from 'react';
import styles from '../styles/date.module.css';
import Image from 'next/image';

const Date_comp = ({ date, events, src, alt }) => {
    return (
        <div className={styles.date}>
            <div className={styles.date_top}>
                <p className={styles.date_top_p}>
                    {date}
                </p>
            </div>
            <div className={styles.date_mid}>
                {
                    src && (
                        <Image className={styles.image}
                            src={src}
                            alt={alt || 'Events'}
                            width={75}
                            height={100}
                            quality={100} />
                    )
                }
            </div>
            <div className={styles.date_bot}>
                <p className={styles.date_bot_p}>
                    {events}
                </p>
            </div>
        </div>
    );
}
export default Date_comp;
