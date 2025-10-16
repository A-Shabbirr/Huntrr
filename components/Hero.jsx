import React from 'react';
import styles from '@/components/styles/Hero.module.css';
import Image from 'next/image';
const Hero = ({ src, alt }) => {
    return (
        <Image className={styles.one}
            src={src}
            alt={alt}
            fill
            quality={100} />

    );
}

export default Hero;
