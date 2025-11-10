import React from 'react';
import styles from '../styles/Latest_guides.module.css';
import Image from 'next/image';
import Filter from '../components/Filter';

const Latest_guides = () => {
    return (
        <div className={styles.Latest_guides}>
            <div className={styles.Latest_guides_top}>
                <div className={styles.Latest_guides_para}>
                    <p className={styles.Latest_guides_head_p}>Latest Guides</p>
                </div>
                <div className={styles.LG_search}>
                    <input className={styles.LG_search_p} placeholder='Discover guides tailored to you...'></input>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" height='20' width='20'>
                        <path d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" />
                    </svg>
                </div>
            </div>
            <div className={styles.filter_g}>
                <Filter para='Filter & sort by' />
                <Filter para='Food & Drink' />
                <Filter para='Outdoor Activities' />
                <Filter para='Arts & Culture' />
                <Filter para='Lifestyle & Entertainment' />
                <Filter para='Hotels & Travel' />
            </div>
            <div className={styles.filter_image_div}>
                <div className={styles.explore_circle}>Explore</div>
                <div className={styles.f_i_1}>
                    <div className={styles.explore_div}>
                        <p className={styles.explore}>20 Places</p>
                    </div>
                    <div className={styles.Latest_guides_image}>
                        <Image className={styles.image_left}
                            src='/LAT_G1.png'
                            alt='place Latest_guides 1'
                            width={1000}
                            height={1000} />
                    </div>
                    <div className={styles.Latest_guides_image_para_div}>
                        <p className={styles.g_i_para1}>The ultimate guide to date night in Dubai: 118 gems to explore</p>
                        <p className={styles.g_i_para}>Something to suit all moods and tastes...</p>
                    </div>
                </div>
                <div className={styles.f_i_2}>
                    <div className={styles.f_g_2a}>
                        <div className={styles.explore_div}>
                            <p className={styles.explore}>20 Places</p>
                        </div>
                        <div className={styles.Latest_guides_image2}>
                            <Image className={styles.image_right_top}
                                src='/LAT_G2.png'
                                alt='place Latest_guides 2'
                                width={1000}
                                height={1000} />
                        </div>
                        <div className={styles.Latest_guides_image_para_div}>
                            <p className={styles.g_i_para1}>The best fine dining restaurants that opened in the UAE in 2024</p>
                            <p className={styles.g_i_para}>The ultimate guide to fine dining restaurant openings in Dubai and Abu Dhabi...</p>
                        </div>
                    </div>
                    <div className={styles.f_g_2a}>
                        <div className={styles.explore_div}>
                            <p className={styles.explore}>20 Places</p>
                        </div>
                        <div className={styles.Latest_guides_image2b}>
                            <Image className={styles.image_right_bot}
                                src='/LAT_G3.png'
                                alt='place Latest_guides 3'
                                width={1000}
                                height={1000} />
                        </div>
                        <div className={styles.Latest_guides_image_para_div}>
                            <p className={styles.g_i_para1}>The best homegrown Japanese restaurants in Dubai</p>
                            <p className={styles.g_i_para}>Local & independent Japanese restaurants in Dubai worth your time</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Latest_guides;
