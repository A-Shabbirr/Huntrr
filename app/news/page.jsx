import React from 'react';
import styles from "../news/news.module.css";
import Image from 'next/image';
import Hero from '@/components/Hero';
import PublishCard from '@/app/HomepageComponents/PublishCard';
import NewsFilter from '@/app/news/NewsComponents/NewsFilter';
import PageNumber from '@/app/news/NewsComponents/PageNumber';
import NewsFooter from '@/app/news/NewsComponents/NewsFooter';

const page = () => {
    return (
        <div className={styles.news_section}>
            <div className={styles.news_space}>
                <Hero src='/newshome.png' alt='ad space' />
            </div>
            <div className={styles.news_head}>
                <div className={styles.news_para}>
                    <p className={styles.published_top_head_p}>Latest News & Features</p>
                    <div className={styles.input_div_news}>
                        <input className={styles.news_i} placeholder='what are you looking for'></input>
                        <svg xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 640 640"
                            height='25'
                            width='25'>
                            <path d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" />
                        </svg>
                    </div>
                </div>
                <div className={styles.news_f}>
                    <NewsFilter w={false} para='Filter & Sort by' />
                    <NewsFilter w={false} para='Latest' />
                    <NewsFilter w={false} para='Trending Now' />
                    <NewsFilter w={false} para='Adventure' />
                    <NewsFilter w={false} para='Outdoor' />
                    <NewsFilter w={false} para='Food & Drink' />
                    <NewsFilter w={false} para='Shopping' />
                    <NewsFilter w={false} para='Editors Choice' />
                    <NewsFilter w={false} para='Cafe' />
                    <NewsFilter w={false} para='5 Star Hotel' />
                    <div className={styles.arrow_f}>
                        <svg className={styles.arrow} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" width='15' height='15'>
                            <path d="M147.7 98.5C164 91.7 182.7 99.4 189.5 115.7L320 428.8L450.5 115.7C457.3 99.4 476 91.7 492.3 98.5C508.6 105.3 516.3 124 509.5 140.3L349.5 524.3C344.5 536.2 332.9 544 320 544C307.1 544 295.4 536.2 290.5 524.3L130.5 140.3C123.7 124 131.4 105.3 147.7 98.5z" />
                        </svg>
                    </div>
                </div>
                <div className={styles.news_1}>
                    <div className={styles.news1_top}>
                        <Image className={styles.news1_image}
                            src='/news_1.png'
                            alt='cafe'
                            width={1000}
                            height={1000}
                            quality={100} />
                        <div className={styles.news1_para}>
                            <p className={styles.news_1_p}>local news</p>
                            <p className={styles.news_1_h}>Bolle Dubai: The best Nordic cinnamon rolls and homemade bakes in Al Manara</p>
                            <p className={styles.news_1_p2}>Fresh-baked Scandinavian treats in Dubai: From cardamom-spiced cinnamon rolls to za'atar buns, ...</p>
                        </div>
                    </div>
                    <div className={styles.news2}>
                        <PublishCard src='/Cafe1.png' para1="CAFE & SPECIALTY COFFEE IN DUBAI" />
                        <PublishCard src='/Cafe2.png' para1="RESTAURANT IN ABU DHABI" />
                        <PublishCard src='/Cafe3.png' para1="CAFE IN SHARJAH" />
                    </div>
                    <div className={styles.news2}>
                        <PublishCard src='/Cafe1.png' para1="CAFE & SPECIALTY COFFEE IN DUBAI" />
                        <PublishCard src='/Cafe2.png' para1="RESTAURANT IN ABU DHABI" />
                        <PublishCard src='/Cafe3.png' para1="CAFE IN SHARJAH" />
                    </div>
                </div>
                <div className={styles.news_page_button}>
                    <PageNumber />
                </div>
                <div className={styles.news_Trending}>
                    <div className={styles.news_trend_para}>
                        <p className={styles.published_top_head_p}>Trending news</p>
                    </div>
                    <div className={styles.news_trending_div}>
                        <PublishCard src='/cafe1.png' para1="CAFE & SPECIALTY COFFEE IN DUBAI" />
                        <PublishCard src='/cafe2.png' para1="RESTAURANT IN ABU DHABI" center />
                        <PublishCard src='/cafe3.png' para1="CAFE IN SHARJAH" />
                    </div>

                </div>
            </div>
            <NewsFooter para='' />
        </div >
    );
}

export default page;
