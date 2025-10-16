import Image from 'next/image';
import React from 'react';
import styles from '@/app/HomepageComponents/styles/card.module.css';

const Editor_card = ({ src, name = '', para_classname_3 = '', }) => {
    return (
        <div className={styles.main_div}>
            <svg viewBox="0 0 300 100" className={styles.curved_svg}>
                <defs>
                    <path
                        id="curve"
                        d="M 30 80 A 110 90 0 0 1 270 80"
                        fill="transparent"
                    />
                </defs>
                <text width="100%">
                    <textPath
                        xlinkHref="#curve"
                        startOffset="30%"
                        textAnchor="middle"
                        className={styles.curved_text}
                    >
                        {name}
                    </textPath>
                </text>
            </svg>
            <Image
                className={styles.image_card}
                src={src}
                alt='name'
                width={210}
                height={210}
                quality={100} />
            <div className={styles.para_div}>
                <p className={styles.para_2}>Best pizza ever!</p>
                <p className={styles.para_2}>and top notch service</p>
                <p className={styles.para_3}>{para_classname_3}</p>
            </div>
        </div>
    );
}

export default Editor_card;
