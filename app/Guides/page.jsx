import React from 'react';
import Hero from '@/components/Hero';
import styles from '../Guides/guidesComp.module.css';
import Body from './components/Body';
import Location from './components/Location';
import Cafe from './components/Cafe';
import Guide from '../HomepageComponents/Guide';
import NewsFooter from '../news/NewsComponents/NewsFooter';

const page = () => {
    return (
        <div className={styles.guides}>
            <div className={styles.bgc}></div>
            <div className={styles.top}>
                <Hero src='/Homepage_cover.jpg' alt='Dowload our App' />
            </div>
            <Body />
            <Location />
            <Cafe />
            <Cafe />
            <Cafe />
            <div className={styles.cafe_guide_section}>
                <Guide
                    heading='Discover More Curated Guides'
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
