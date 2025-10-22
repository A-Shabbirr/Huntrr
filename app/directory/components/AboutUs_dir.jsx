import React from 'react';
import styles from '../styles/about.module.css'
import Image from "next/image";
import Button from '@/components/Button';

const AboutUs_dir = () => {
    return (
        <div className={styles.d_app}>
            <div className={styles.left_d_app}>
                <div className={styles.top_d_app}>
                    <div className={styles.top_d_circle}></div>
                    <p className={styles.top_d_para}>About us</p>
                </div>

                <div className={styles.center_d_app}>
                    <p className={styles.center_d_para}>
                        the <span>HUNTR</span> Directory is the UAE's most selective guide, featuring over 1,000+ carefully chosen places across Dubai and the Emirates – with new discoveries added weekly. Every establishment here has earned the <span>HUNTR's</span> coveted Seal of Approval.
                    </p>
                    <p className={styles.center_d_para}>
                        What you see here is just a preview. The full experience – complete with granular search, member perks, and exclusive content – lives on the <span>HUNTR</span>: City Guide app.
                    </p>
                </div>

                <div className={styles.bottom_d_app}>
                    <Button para="Download App" />
                </div>
            </div>
            <div className={styles.right_d_app}>
                <div className={styles.right_d_app_mbl}>
                    <Image
                        className={styles.d_app_image}
                        src='/d_app_mobile.png'
                        alt='Directory'
                        width={700}
                        height={1000} />
                </div>
                <div className={styles.right_d_app_logo}>
                    <Image src='/d_app_logo.png'
                        className={styles.d_app_logo}
                        alt='Directory'
                        width={1000}
                        height={1000} />
                </div>
            </div>
        </div>
    );
}

export default AboutUs_dir;
