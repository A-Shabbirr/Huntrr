import React from 'react';
import styles from '../Guides/guidesComp.module.css';
import Body from './components/Body';
import Location from './components/Location';
import Cafe from './components/Cafe';
import Guide from '../HomepageComponents/Guide';
import NewsFooter from '../news/NewsComponents/NewsFooter';
import Image from 'next/image';
import Filter from '../[slug]/components/Filter';

const page = () => {
    return (
        <div className={styles.guides}>
            <div className={styles.bgc}></div>
            <div className={styles.top}>
                <p className={styles.top_p}>Download our App . Download our App . Download our App</p>
                <div className={styles.top_Image_div}>
                    <Image className={styles.top_Image}
                        src='/Hero.png'
                        alt='Dowload our App'
                        width={1000}
                        height={1000}
                        quality={100} />
                </div>
            </div>
            <Body />
            <div className={styles.filter}>
                <Filter para='Food & Drink' />
                <Filter para='Outdoor Activities' />
                <Filter para='Outdoor Activities' />
            </div>
            <Location />
            <Cafe />
            <Cafe />
            <Cafe />
            <div className={styles.cafe_guide_section}>
                <Guide
                    heading1='Discover More Curated Guides'
                    heading2=''
                    leftpara1='Cafes & Coffee Shops'
                    leftpara2='Trending dining spots across the UAE'
                    para1a='Hidden Gems'
                    para1b='Trending dining spots across the UAE'
                    para2a='Nightlife & Entertainment'
                    para2b='Lounges, rooftop bars & events'
                    explore='20 Places'
                    cafe={true}
                    dir={false}
                />
            </div>
            <div className={styles.Footer}>
                <NewsFooter para='the Hunter: City Guide App Has 600% More Content, Exclusively For Members' />
            </div>
        </div>
    );
}

export default page;
