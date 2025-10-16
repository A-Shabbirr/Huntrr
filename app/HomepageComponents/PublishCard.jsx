import React from 'react';
import styles from '@/app/HomepageComponents/styles/publish.module.css';
import Image from 'next/image';

const PublishCard = ({ src, para1 = '', para2 = '', para3 = '', center = false }) => {
    return (
        <div className={styles.publish}>
            <div className={`${styles.publish_image} ${center ? styles.publishimage : ''}`}>
                <Image className={`${styles.place_image} ${center ? styles.centerimage : ''}`}
                    src={src}
                    alt='Restaurants & Cafes in Dubai & Sharjah'
                    width={1000}
                    height={1000} />
            </div>
            <div className={styles.publish_cont}>
                <p className={styles.newspara1 ? styles.newspara1 : styles.para1}>{para1}</p>
                <p className={styles.newspara2 ? styles.newspara2 : styles.para2}>
                    {
                        para2 ? para2 :
                            'Bolle Dubai: The best Nordic cinnamon rolls and homemade bakes in Al Manara'
                    }
                </p>
                <p className={styles.newspara3 ? styles.newspara3 : styles.para3}>
                    {para3 ? para3 : 'Fresh-baked Scandinavian treats in Dubai: From cardamom-spiced cinnamon rolls to zaatar buns, ...'
                    }
                </p>
            </div>
        </div>
    );
}

export default PublishCard;
