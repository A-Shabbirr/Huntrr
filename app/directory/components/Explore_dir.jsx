import React from 'react';
import styles from '../styles/explore_dir.module.css'
import Image from "next/image";


const Explore_dir = () => {
    return (
        <div className={styles.explore_dir}>
            <div className={styles.explore_drag}>
                <p className={styles.explore_drag_p}>Drag</p>
            </div>
            <div className={styles.exp_top}>
                <p className={styles.exp_top_head}>Explore UAE’s Best Spots</p>
                <p className={styles.exp_top_vm}>View more</p>
            </div>
            <div className={styles.exp_bot}>
                <div className={styles.explore_1}>
                    <div className={styles.explore_img_div}>
                        <Image
                            className={styles.explore_image}
                            src='/publish_image.png'
                            alt='Explore Cafes & Restaurants'
                            width={1000}
                            height={1000} />
                    </div>
                    <div className={styles.explore_cnt_div}>
                        <p className={styles.exp_head}>Cafes & Specialty Coffee</p>
                        <p className={styles.exp_p}>Cozy brunch spot with the best croissants in town.</p>
                    </div>
                </div>
                <div className={styles.explore_2}>
                    <div className={styles.explore_img_div_c}>
                        <Image
                            className={styles.explore_image_c}
                            src='/guide2a.png'
                            alt='Explore Cafes & Restaurants'
                            width={1000}
                            height={1000} />
                    </div>
                    <div className={styles.explore_cnt_div}>
                        <p className={styles.exp_head}>Hidden Gems</p>
                        <p className={styles.exp_p}>Trending dining spots across the UAE</p>
                    </div>
                </div>
                <div className={styles.explore_1}>
                    <div className={styles.explore_img_div}>
                        <Image
                            className={styles.explore_image}
                            src='/explore_1.png'
                            alt='Explore Cafes & Restaurants'
                            width={1000}
                            height={1000} />
                    </div>
                    <div className={styles.explore_cnt_div}>
                        <p className={styles.exp_head}>Homegrown Heroes</p>
                        <p className={styles.exp_p}>Cozy brunch spot with the best croissants in town.</p>
                    </div>
                </div>
                {/* <div className={styles.explore_2}>
                        <div className={styles.explore_img_div_c}>
                            <Image
                                className={styles.explore_image_c}
                                src='/guide2a.png'
                                alt='Explore Cafes & Restaurants'
                                width={1000}
                                height={1000} />
                        </div>
                        <div className={styles.explore_cnt_div}>
                            <p className={styles.exp_head}>Cafes & Specialty Coffee</p>
                            <p className={styles.exp_p}>Cozy brunch spot with the best croissants in town.</p>
                        </div>
                    </div> */}
            </div>
        </div>
    );
}

export default Explore_dir;
