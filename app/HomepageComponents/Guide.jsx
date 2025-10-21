import React from 'react';
import styles from '../HomepageComponents/styles/Guide.module.css';
import Image from 'next/image';
const Guide = ({ heading, leftpara1, leftpara2, para1a, para1b, para2a, para2b, explore, explore2, dir = false }) => {
    return (
        <div className={styles.guide}>
            <div className={styles.guide_top}>
                <div className={styles.guide_para}>
                    <p className={styles.guide_head_p}>{heading}</p>
                    <p className={styles.guide_head_vm}>view more</p>
                </div>
                <div className={`${styles.filter_g} ${dir ? styles.filter_g_dir : ''}`}>
                    <p className={styles.f_g_1}>Cafes</p>
                    <p className={styles.f_g_1}>Hidden Gems</p>
                    <p className={styles.f_g_1}>Entertainment</p>
                </div>
            </div>
            <div className={styles.filter_image_div}>
                <div className={styles.explore_circle}>Explore</div>
                <div className={styles.f_i_1}>
                    <div className={styles.explore_div}>
                        <p className={styles.explore}>{explore}</p>
                        <p className={`${styles.explore2} ${dir ? styles.explore_dir : ''}`}>{explore2}</p>
                    </div>
                    <Image className={styles.guide_image}
                        src='/guide1.png'
                        alt='place guide 1'
                        width={1000}
                        height={1000} />
                    <div className={styles.guide_image_para_div}>
                        <p className={styles.g_i_para1}>{leftpara1 ? leftpara1 : 'La Petite Café'}</p>
                        <p className={styles.g_i_para}>{leftpara2 ? leftpara2 : 'Cozy brunch spot with the best croissants in town.'}</p>
                    </div>
                </div>
                <div className={styles.f_i_2}>
                    <div className={styles.f_g_2a}>
                        <div className={styles.explore_div}>
                            <p className={styles.explore}>{explore}</p>
                            <p className={`${styles.explore2} ${dir ? styles.explore_dir : ''}`}>{explore2}</p>
                        </div>
                        <Image className={styles.guide_image2}
                            src='/guide2a.png'
                            alt='place guide 2'
                            width={1000}
                            height={1000} />
                        <div className={styles.guide_image_para_div}>
                            <p className={styles.g_i_para1}>{para1a}</p>
                            <p className={styles.g_i_para}>{para1b}</p>
                        </div>
                    </div>
                    <div className={styles.f_g_2a}>
                        <div className={styles.explore_div}>
                            <p className={styles.explore}>{explore}</p>
                            <p className={`${styles.explore2} ${dir ? styles.explore_dir : ''}`}>{explore2}</p>
                        </div>
                        <Image className={styles.guide_image2}
                            src='/guide2b.png'
                            alt='place guide 3'
                            width={1000}
                            height={1000} />
                        <div className={styles.guide_image_para_div}>
                            <p className={styles.g_i_para1}>{para2a}</p>
                            <p className={styles.g_i_para}>{para2b}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Guide;
