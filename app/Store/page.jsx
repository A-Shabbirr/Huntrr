import React from 'react';
import styles from '../Store/store.module.css';
import Image from 'next/image';

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
        </div >
    );
}

export default page;
