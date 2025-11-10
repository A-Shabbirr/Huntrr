import React from 'react';
import styles from '../HomepageComponents/styles/downloadButton.module.css';
import Button from '@/components/Button';
import Image from 'next/image';


const DownloadButton = () => {
    return (
        <div className={styles.downloadButton}>
            <p className={styles.main_heading}>Unlock the Best of UAE with <span className={styles.span}>the</span> HUNTR </p>
            <p className={styles.sub_head}>Your insider guide to the city’s top restaurants, hidden gems, and exclusive experiences.</p>
            <div className={styles.app_button}>
                <Button para="Download App" />
            </div>
            <div className={styles.app_seal}>
                <Image className={styles.lock_image}
                    src='/app_seal.png'
                    alt='Lock'
                    width={100}
                    height={100}
                    quality={100} />
            </div>
        </div>
    );
}

export default DownloadButton;
