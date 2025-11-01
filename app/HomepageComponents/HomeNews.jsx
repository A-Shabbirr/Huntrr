import React from 'react';
import styles from '../HomepageComponents/styles/homenews.module.css';
import PublishCard from '../HomepageComponents/PublishCard';
import Image from "next/image";

const HomeNews = () => {
    return (
        <div className={styles.news_section}>
            <div className={styles.news_head}>
                <p className={styles.news_top_head_p}>Latest News</p>
                <p className={styles.news_top_head_vm}>view more</p>
            </div>
            <div className={styles.news_top}>
                <PublishCard
                    src='/Cafe1.png'
                    para1="FOOD & DRINK"
                    para2="Join the HUNTR for an exclusive preview of the One&Only Royal Mirage iftar experience"
                    para3="For those seeking a different ambiance, the Arabian Courtyard presents a bespoke Ramadan majlis beneath the stars..."
                />
                <PublishCard
                    src='/Cafe2.png'
                    para1="LOCAL NEWS"
                    para2="International breastfeeding summit to launch in Dubai Expo City this April"
                    para3="Dubai's Expo City will host the first International Breastfeeding Summit this April, bringing together leading experts in maternal health and breastfeeding innovation" />
                <PublishCard
                    src='/Cafe3.png'
                    para1="STYLE & BEAUTY"
                    para2="Piaget unveils limited edition Ramadan watch with Shamsa Alabbar"
                    para3="Piaget has partnered with Emirati designer Shamsa Alabbar to create an exclusive Ramadan timepiece that pays tribute to the UAE's maritime heritage." />
            </div>
            <div className={styles.news_section_div}>
                <Image className={styles.news_section_image}
                    src='/newscover.png'
                    alt='places'
                    width={900}
                    height={800}
                    quality={100} />
            </div>
        </div>
    );
}

export default HomeNews;
