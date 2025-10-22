import React from 'react';
import styles from '../HomepageComponents/styles/downloadButton.module.css';
import Button from '@/components/Button';


const DownloadButton = () => {
    return (
        <div className={styles.downloadButton}>
            <p className={styles.main_heading}>Unlock the Best of UAE with <span className={styles.span}>the</span> HUNTR </p>
            <p className={styles.sub_head}>Your insider guide to the city’s top restaurants, hidden gems, and exclusive experiences.</p>
            <div className={styles.app_button}>
                <Button para="Download App" />
            </div>
        </div>
    );
}

export default DownloadButton;
