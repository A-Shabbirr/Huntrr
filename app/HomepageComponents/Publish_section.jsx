import React from 'react';
import PublishCard from "../HomepageComponents/PublishCard";
import styles from '../HomepageComponents/styles/Publish_section.module.css';
import Image from 'next/image';

const Publish_section = ({ heading = '', cc = false }) => {
    return (
        <div className={styles.published_section}>
            <div className={`${styles.published_top} ${cc ? styles.published_top_cc : ''}`}>
                <p className={`${styles.published_top_head_p} ${cc ? styles.published_top_head_p_cc : ''}`}>{heading}</p>
                <p className={`${styles.published_top_head_vm} ${cc ? styles.published_top_head_vm_cc : ''}`}>view more</p>
            </div>
            <div className={styles.published_bottom}>
                <div className={styles.published_bottom1}>
                    <div className={styles.published_bottom1_cont}>
                        <p className={`${styles.published_bottom1_p1} ${cc ? styles.published_bottom1_p1_cc : ''}`}>NIGHTLIFE IN DUBAI</p>
                        <p className={`${styles.published_bottom1_p2} ${cc ? styles.published_bottom1_p2_cc : ''}`}>Bolle Dubai: The best Nordic cinnamon rolls and homemade bakes in Al Manara</p>
                        <p className={`${styles.published_bottom1_p3} ${cc ? styles.published_bottom1_p3_cc : ''}`}>Fresh-baked Scandinavian treats in Dubai: From cardamom-spiced cinnamon rolls to za'atar buns, ...</p>
                    </div>
                    <div className={styles.published_bottom1_image}>
                        <Image className={styles.bottom1_image}
                            src='/publish_image.png'
                            alt='places'
                            width={900}
                            height={800}
                            quality={100} />
                    </div>
                </div>
                <div className={`${styles.published_bottom2} ${cc ? styles.published_bottom2_cc : ''}`}
                // <div className={styles.published_bottom2}
                // style={{ color: 'white' }}
                >
                    <PublishCard src='/Cafe1.png' para1="CAFE & SPECIALTY COFFEE IN DUBAI" />
                    <PublishCard src='/Cafe2.png' para1="RESTAURANT IN ABU DHABI" />
                    <PublishCard src='/Cafe3.png' para1="CAFE IN SHARJAH" />
                </div>
            </div>
        </div>
    );
}

export default Publish_section;
