import React from 'react';
import styles from '../HomepageComponents/styles/maroon.module.css';
import Image from "next/image";
const Maroon = () => {
    return (
        <div className={styles.maroon}>
            <div className={styles.maroon_para}>
                <p className={styles.m_p_1}>The City’s Best – Now in Your Pocket</p>
                <p className={styles.m_p_2}>Discover, explore, and experience the best places with the Hunter app.</p>
            </div>
            <div className={styles.marooN_image_div}>
                <div className={styles.m_i_div}>
                    <div className={styles.guide_image_div2}>
                        <Image className={styles.guide_image2}
                            src='/mbl_footer.png'
                            alt='place guide 2'
                            width={1000}
                            height={1000} />
                    </div>
                </div>
                <div className={styles.button_home}>
                    <button className={styles.b1}>
                        <Image className={styles.b1image}
                            src='/googlelogoend.png'
                            alt='place guide 2'
                            width={100}
                            height={100} />
                    </button>
                    <button className={styles.b1}>
                        <Image className={styles.b1image}
                            src='/googlelogo1.png'
                            alt='place guide 2'
                            width={100}
                            height={100} />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Maroon;
