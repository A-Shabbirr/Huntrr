import React from 'react';
import styles from '../styles/location.module.css';
import Image from 'next/image';

const Location = () => {
    return (
        <div className={styles.Location}>
            <div className={styles.top}>
                <p className={styles.top_p}>Join us as we present the best restaurant openings of the year, so far, in Dubai. From independent, homegrown gems, to international big-name bangers. This curated list serves as your essential guide to Dubai's NEW, must-visit dining destinations</p>
                <p className={styles.top_p}>Insider Tip: This guide is part of a “2024 Half Way Point” series. We are also spotlighting the best openings in Abu Dhabi, and the <span className={styles.u}>best cafe openings in Dubai.</span></p>
                <p className={styles.top_p}>Ps. <span className={styles.u}> Have you downloaded our new app?</span> Explore the best of your city with The HUNTR: City Guide – the first app to combine a premium city guide with exclusive member perks and a specialty coffee loyalty card. A limited number of members are available now 🏃‍♂️ don't miss out, be quick...<span className={styles.red}>read more</span></p>
            </div>
            <div className={styles.mid}>
                <div className={styles.mid_top}>
                    <p className={styles.mid_top_head}>Filter by location</p>
                    <div className={styles.mid_top_f}>
                        <p className={styles.mid_top_p_active}>Jumeirah</p>
                        <p className={styles.mid_top_p}>Umm Suqeim</p>
                        <p className={styles.mid_top_p}>Business bay</p>
                        <p className={styles.mid_top_p}>Umm Suqeim</p>
                        <p className={styles.mid_top_p}>Business bay</p>
                        <p className={styles.mid_top_p}>Business bay</p>
                    </div>
                </div>
                <div className={styles.mid_bot}>
                    <p className={styles.mid_bot_p}>Somewhere</p>
                    <p className={styles.mid_bot_p}>Salt</p>
                    <p className={styles.mid_bot_p}>Somewhere</p>
                    <p className={styles.mid_bot_p}>Burj Al Arab</p>
                    <p className={styles.mid_bot_p}>Somewhere</p>
                    <p className={styles.mid_bot_p}>Burj Al Arab</p>
                </div>
            </div>
            <div className={styles.bot}>
                <div className={styles.bot_image}>
                    <Image className={styles.image}
                        src='/guide_location.png'
                        alt='Location'
                        width={1000}
                        height={1000}
                        quality={100} />
                </div>
                <button className={styles.bot_b}>
                    <p className={styles.bot_b_p}>View on Map </p>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" height='20' width='20'>
                        <path d="M256 160L256 224L384 224L384 160C384 124.7 355.3 96 320 96C284.7 96 256 124.7 256 160zM192 224L192 160C192 89.3 249.3 32 320 32C390.7 32 448 89.3 448 160L448 224C483.3 224 512 252.7 512 288L512 512C512 547.3 483.3 576 448 576L192 576C156.7 576 128 547.3 128 512L128 288C128 252.7 156.7 224 192 224z" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default Location;
