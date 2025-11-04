import React from 'react';
import styles from '../styles/Mem_store_comp.module.css';
import Image from 'next/image';


const Membership_store_comp = ({ src, alt, Title }) => {
    return (
        <div className={styles.MS_comp}>
            <div className={styles.MS_comp_top}>
                <div className={styles.MS_comp_1}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 640"
                        height='20'
                        width='20'>
                        <path d="M442.9 144C415.6 144 389.9 157.1 373.9 179.2L339.5 226.8C335 233 327.8 236.7 320.1 236.7C312.4 236.7 305.2 233 300.7 226.8L266.3 179.2C250.3 157.1 224.6 144 197.3 144C150.3 144 112.2 182.1 112.2 229.1C112.2 279 144.2 327.5 180.3 371.4C221.4 421.4 271.7 465.4 306.2 491.7C309.4 494.1 314.1 495.9 320.2 495.9C326.3 495.9 331 494.1 334.2 491.7C368.7 465.4 419 421.3 460.1 371.4C496.3 327.5 528.2 279 528.2 229.1C528.2 182.1 490.1 144 443.1 144zM335 151.1C360 116.5 400.2 96 442.9 96C516.4 96 576 155.6 576 229.1C576 297.7 533.1 358 496.9 401.9C452.8 455.5 399.6 502 363.1 529.8C350.8 539.2 335.6 543.9 320 543.9C304.4 543.9 289.2 539.2 276.9 529.8C240.4 502 187.2 455.5 143.1 402C106.9 358.1 64 297.7 64 229.1C64 155.6 123.6 96 197.1 96C239.8 96 280 116.5 305 151.1L320 171.8L335 151.1z" />
                    </svg>
                </div>
            </div>
            <div className={styles.MS_comp_2}>
                <Image className={styles.imageMS}
                    src={src}
                    alt={alt}
                    width={490}
                    height={150}
                    quality={100} />
            </div>
            <div className={styles.MS_comp_3}>
                <div className={styles.MS_comp_3a}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 640"
                        height='20'
                        width='20'
                        fill='maroon'
                    >
                        <path d="M341.5 45.1C337.4 37.1 329.1 32 320.1 32C311.1 32 302.8 37.1 298.7 45.1L225.1 189.3L65.2 214.7C56.3 216.1 48.9 222.4 46.1 231C43.3 239.6 45.6 249 51.9 255.4L166.3 369.9L141.1 529.8C139.7 538.7 143.4 547.7 150.7 553C158 558.3 167.6 559.1 175.7 555L320.1 481.6L464.4 555C472.4 559.1 482.1 558.3 489.4 553C496.7 547.7 500.4 538.8 499 529.8L473.7 369.9L588.1 255.4C594.5 249 596.7 239.6 593.9 231C591.1 222.4 583.8 216.1 574.8 214.7L415 189.3L341.5 45.1z" />
                    </svg>
                    <p className={styles.MS_comp_3a_p}>4.9/5</p>
                </div>
                <div className={styles.MS_comp_3b}>
                    <p className={styles.MS_comp_3b_p}>{Title}</p>
                    <p className={styles.MS_comp_3b_p}>$400.00</p>
                </div>
            </div>
        </div>
    );
}

export default Membership_store_comp;
