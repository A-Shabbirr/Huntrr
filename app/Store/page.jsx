import React from 'react';
import styles from '../Store/store.module.css';
import Image from 'next/image';
import BestSellers from './components/BestSellers';
import BestSellers_p from './components/BestSellers_p';
import Membership_store_comp from './components/Membership_store_comp';
import EmirateCard from './components/EmirateCard';
import Calendar from './components/Calendar';

const page = () => {
    return (
        <div className={styles.main}>
            <div className={styles.head}>
                <p className={styles.main_p}>
                    <span className={styles.main_p_THE}> the </span>
                    <span className={styles.main_p_store}> Store </span>
                </p>
                <p className={styles.main_span}>
                    <span className={styles.main_p_span_by}> by </span>
                    <span className={styles.main_p_span_the}> the </span>
                    <span className={styles.main_p_span_huntr}> HUNTR </span>
                </p>
            </div>
            <div className={styles.img}>
                <div className={styles.top}>
                    <div className={styles.img1}>
                        <Image className={styles.img1_image}
                            src='/store1.jpg'
                            alt='Card'
                            width={290}
                            height={290}
                            quality={100} />
                    </div>
                    <div className={styles.img2}>
                        <Image className={styles.img2_image}
                            src='/S2.png'
                            alt='People'
                            width={329}
                            height={400}
                            quality={100} />
                    </div>
                    <div className={styles.img3}>
                        <Image className={styles.img3_image}
                            src='/S3.png'
                            alt='Guide'
                            width={360}
                            height={440}
                            quality={100} />
                    </div>
                    <div className={styles.img4}>
                        <Image className={styles.img4_image}
                            src='/S4.png'
                            alt='Sail'
                            width={347}
                            height={347}
                            quality={100} />
                    </div>
                </div>
                <div className={styles.bot}>
                    <p className={styles.p_img}>Exclusive access to</p>
                    <p className={styles.p_img}>guides, merch, and events.</p>
                </div>
            </div>
            <div className={styles.BS}>
                <p className={styles.BS_p}>Best Sellers</p>
                <div className={styles.BS_div}>
                    <BestSellers src='/BS1.jpg' alt='Shop Now' Title='Guide Name' />
                    <BestSellers_p paragraph='Born to Sail ??? Get the Shirt now' />
                    <BestSellers_p ImageSRC='/S4.png' altText='Sail' />
                    <BestSellers src='/BS2.png' alt='Born to Sail' Title='Dubai Shirt' size='Size:' detail='S,M,L,XL' />
                </div>
            </div>
            <div className={styles.YB_H}>
                <p className={styles.YB_H_p}>Gift Yourself and beloved ones now from <span>the</span> HUNTR</p>
                <div className={styles.YB_H_div}>
                    <Membership_store_comp src='/C1.png' Title='Annual Membership' alt='Annual Membership' />
                    <Membership_store_comp src='/C2.png' Title='Tourist Pass' alt='Tourist Pass' />
                    <Membership_store_comp src='/C3.png' Title='Biannual Membership' alt='Biannual Membership' />
                </div>
            </div>
            <div className={styles.maroon_box}>
                <p className={styles.maroon_box_p}>Your curated destination for <span>stylish,</span> thoughtful, and one-of-a-kind products inspired by the spirit, skyline, and soul of Dubai. each item celebrates the city's bold contrasts, modern <span>luxury</span> meets timeless tradition. </p>
                <div className={styles.maroon_box_1}>
                    <Image className={styles.mb1_image}
                        src='/mb1.png'
                        alt='Card'
                        width={290}
                        height={290}
                        quality={100} />
                </div>
                <div className={styles.maroon_box_2}>
                    <Image className={styles.mb2_image}
                        src='/mb2.png'
                        alt='Card'
                        width={290}
                        height={290}
                        quality={100} />
                </div>
                <div className={styles.maroon_box_3}>
                    <Image className={styles.mb3_image}
                        src='/mb3.png'
                        alt='Card'
                        width={264}
                        height={330}
                        quality={100} />
                </div>
            </div>
            <div className={styles.Emirates}>
                <p className={styles.Emirates_p} >Each Emirates Covered</p>
                <EmirateCard />
            </div>
            <div className={styles.Calendar}>
                <p className={styles.Calendar_p}><span>events</span> with <span>the</span> HUNTR</p>
                <Calendar />
            </div>
            <div className={styles.end_store}>
                <p className={styles.end_store_p}>Extra ways to show your love for UAE</p>
                <div className={styles.end_store_div}>
                    <BestSellers end={true} src='/BS2.png' alt='Guide' Title='Guide Name' />
                    <BestSellers end={true} src='/end4.png' alt='Guide' Title='Guide Name' />
                    <BestSellers end={true} src='/end3.png' alt='Guide' Title='Guide Name' />
                </div>
                <div className={styles.end_store_div_res}>
                    <Membership_store_comp src='/C1.png' Title='Annual Membership' alt='Annual Membership' />
                    <Membership_store_comp src='/C2.png' Title='Tourist Pass' alt='Tourist Pass' />
                    <Membership_store_comp src='/C3.png' Title='Biannual Membership' alt='Biannual Membership' />
                </div>
            </div>
        </div >
    );
}

export default page;
