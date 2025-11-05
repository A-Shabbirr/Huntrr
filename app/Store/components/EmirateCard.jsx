'use client'
import React from 'react';
import styles from '../styles/EmiratesCard.module.css';
import BestSellers from './BestSellers';
import BestSellers_p from './BestSellers_p';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const EmirateCard = () => {
    const [isOpen, setIsOpen] = useState(false);
    const handleLookInside = () => {
        setIsOpen(true)
    }
    const close = () => {
        setIsOpen(false)
    }
    useEffect(() => {
        if (isOpen) {
            const scrollY = window.scrollY;
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            document.body.style.left = '0';
            document.body.style.right = '0';
        } else {
            const scrollY = document.body.style.top;
            document.body.style.position = '';
            document.body.style.top = '';
            window.scrollTo(0, parseInt(scrollY || '0') * -1);
        }
    }, [isOpen]);


    return (
        <>
            <div className={isOpen ? styles.EC_blur : styles.EC}>
                <BestSellers src={null} alt={null} EC={true} bgImage='/EC1.png' Title='Guide Name' handleLookInside={handleLookInside} />
                <BestSellers_p paragraph='Dubai? don’t miss a bit with the Guide' />
                <BestSellers_p paragraph='Sharjah? you won’t get lost with the Guide' />
                <BestSellers EC={true} src={null} alt={null} bgImage='/EC2.png' Title='Guide Name' handleLookInside={handleLookInside} />
            </div>
            {isOpen && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modalWindow}>
                        <p className={styles.LI_P}>Look Inside</p>
                        <div className={styles.LI_image}>
                            <Image
                                className={styles.LI_picture}
                                src='/LI.png'
                                alt='Look Inside'
                                width={1000}
                                height={1000}
                                quality={100} />
                        </div>
                        <div className={styles.close} onClick={close}>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 640 640"
                                width='20'
                                height='20'
                                fill='white'>
                                <path d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z" />
                            </svg>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}

export default EmirateCard;
