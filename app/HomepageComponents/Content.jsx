import React from 'react';
import styles from '@/app/HomepageComponents/styles/content.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Content = (props) => {
    const { para, head, para2, link } = props;
    return (
        <Link className={styles.overview_section} href={link}>
            <div className={styles.overview_image_div}>
                <Image className={styles.overview_image}
                    src='/overview.jpg'
                    alt='places'
                    width={500}
                    height={700}
                    quality={100} />
            </div>
            <div className={styles.overview_cont}>
                <p className={styles.overview_cont_p}>{para}</p>
                <p className={styles.overview_cont_head}>{head}</p>
                <p className={styles.overview_cont_p}>{para2}</p>
            </div>
        </Link>
    );
}

export default Content;
