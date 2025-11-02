import React from 'react';
import styles from '../styles/BS_comp.module.css';
import Image from 'next/image';


const BestSellers_p = ({ ImageSRC, altText, paragraph }) => {
    return (
        <div className={styles.BS_2}>

            {ImageSRC ? (
                <div className={styles.BS_2div}>
                    <Image className={styles.image_2}
                        src={ImageSRC}
                        alt={altText}
                        width={634}
                        height={600}
                        quality={100} />
                </div>
            )
                : paragraph ? (
                    <p className={styles.BS_2p}>{paragraph}</p>
                ) : null
            }
        </div>
    );
}

export default BestSellers_p;
