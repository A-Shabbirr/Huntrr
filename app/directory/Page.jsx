import React from 'react';
import styles from '../directory/dir.styles.module.css';
import Hero from '@/components/Hero';
import Directorycard from './components/Directorycard';
import Image from 'next/image';
import Publish_section from '../HomepageComponents/Publish_section';
import NewsFilter from '../news/NewsComponents/NewsFilter';
import Guide from "../HomepageComponents/Guide";
import AboutUs_dir from './components/AboutUs_dir';
import Explore_dir from './components/Explore_dir';
import E_cat_dir from './components/E_cat_dir';

const page = () => {
    return (
        <div className={styles.directory}>
            <div className={styles.top}>
                <Hero src="/dir_hero.png" alt="ad space" />
            </div>
            <div className={styles.directory_head}>
                <p className={styles.directory_heading}>
                    <span className={styles.s_t}> the</span>
                    <span className={styles.s_h}> HUNTR</span>
                    <span className={styles.s_d}> Directory</span>
                </p>
            </div>
            <div className={styles.directory_card}>
                <div className={styles.cards}>
                    <Directorycard src="/dir_1.png" />
                    <Directorycard src="/cafe3.png" center={true} />
                    <Directorycard src="/dir_3.png" />
                </div>
            </div>
            <AboutUs_dir />
            <div className={styles.Newly_add}>
                <div className={styles.new_read}>Read</div>
                <div className={styles.new_filter}>
                    <NewsFilter w={true} para='Filter & Sort by' />
                    <NewsFilter w={true} para='The Huntr Club Benefits' />
                    <NewsFilter w={true} para='Trending Places' />
                    <NewsFilter w={true} para='Cafes' />
                    <NewsFilter w={true} para='Restaurants' />
                    <NewsFilter w={true} para='Speciality Coffee' />
                    <NewsFilter w={true} para='Bars & Nightlife' />
                    <NewsFilter w={true} para='Outdoor Activities' />
                </div>
                <div className={styles.new_publish}>
                    <Publish_section heading='Newly added' cc={true} />
                </div>

            </div>
            <div className={styles.dir_Trending}>
                <Guide
                    dir={true}
                    heading='Trending Now: Discover the best of the UAE'
                    para1a='Hidden gems'
                    para1b='Dubai’s newest rooftop bar with stunning skyline views.'
                    para2a='Sky Lounge'
                    para2b='Dubai’s newest rooftop bar with stunning skyline views.'
                    explore='Beautiful views'
                    explore2='Beautiful views'
                />
            </div>
            <div className={styles.Adspace}>
                <Image
                    className={styles.Adspace_img}
                    src='/Adspace.png'
                    alt='Ad Space'
                    width={1400}
                    height={1400} />
            </div>
            <Explore_dir />
            <E_cat_dir />
            <div className={styles.Adspace2}>
                <Image
                    className={styles.Adspace_img2}
                    src='/adspace2.png'
                    alt='Ad Space'
                    width={1400}
                    height={1400} />
            </div>
            <div className={styles.dir_cur}>
                <Guide
                    dir={true}
                    heading='Curated Guides'
                    para1a='Food & Drink'
                    para1b='Your ultimate guide to Ramadan 2025 in DUbai'
                    para2a='Outdoor Activities'
                    para2b='23 of the best winter activities to enjoy in dubai'
                    leftpara1='Food & Drink'
                    leftpara2='Your ultimate guide to Ramadan 2025 in DUbai'
                    explore='10 Places'
                />
            </div>
        </div>
    );
}
export default page;
