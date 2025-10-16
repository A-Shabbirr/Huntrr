import React from 'react';
import styles from '@/app/HomepageComponents/styles/content.module.css';
import Image from 'next/image';

const Content = (props) => {
    const { para, head, para2 } = props;
    return (
        <div className={styles.overview_section}>
            <Image className={styles.overview_image}
                src='/overview.jpg'
                alt='places'
                width={500}
                height={7000}
                quality={100} />
            <div className={styles.overview_cont}>
                <p className={styles.overview_cont_p}>{para}</p>
                <p className={styles.overview_cont_head}>{head}</p>
                <p className={styles.overview_cont_p}>{para2}</p>
            </div>
        </div>
    );
}

export default Content;
