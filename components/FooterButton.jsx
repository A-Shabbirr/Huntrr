import React from 'react';
import styles from "../components/styles/FooterButtons.module.css";
import Image from 'next/image';

const FooterButton = ({ src, alt }) => {
    return (
        <button className={styles.FooterButtons}>
            <Image className={styles.button_logo}
                src={src}
                alt={alt}
                width={100}
                height={100}
                quality={100} />
        </button>
    );
}

export default FooterButton;
