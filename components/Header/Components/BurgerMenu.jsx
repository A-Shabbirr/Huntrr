'use client';

import React, { useState, useEffect, useRef } from 'react';
import styles from '../styles/BurgerMenu.module.css';
import Image from 'next/image';
import Link from 'next/link';

const BurgerMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef();
    const toggleMenu = (e) => {
        setIsOpen(prev => !prev);
        if (e?.stopPropagation) e.stopPropagation();
    };
    useEffect(() => {
        if (isOpen) {
            document.body.classList.add('no-scroll');
        } else {
            document.body.classList.remove('no-scroll');
        }
    }, [isOpen]);
    useEffect(() => {
        if (isOpen) {
            menuRef.current?.focus();
        }
    }, [isOpen]);

    return (
        <div className={styles.burgerMenu} >
            <svg
                className={styles.svg}
                onClick={toggleMenu}
                xmlns="http://www.w3.org/2000/svg"
                fill='black' viewBox="0 0 640 640">
                <path d="M96 160C96 142.3 110.3 128 128 128L512 128C529.7 128 544 142.3 544 160C544 177.7 529.7 192 512 192L128 192C110.3 192 96 177.7 96 160zM96 320C96 302.3 110.3 288 128 288L512 288C529.7 288 544 302.3 544 320C544 337.7 529.7 352 512 352L128 352C110.3 352 96 337.7 96 320zM544 480C544 497.7 529.7 512 512 512L128 512C110.3 512 96 497.7 96 480C96 462.3 110.3 448 128 448L512 448C529.7 448 544 462.3 544 480z" />
            </svg>
            {
                isOpen && (
                    <div
                        ref={menuRef}
                        tabIndex={0}
                        className={styles.veil}
                        onClick={(e) => e.stopPropagation()}
                        onMouseDown={(e) => {
                            if (e.button === 1) e.preventDefault();
                        }}
                        onKeyDown={(e) => {
                            if (e.key === "Escape") toggleMenu();
                            if (e.key === "ArrowDown") {
                                e.preventDefault();
                                e.currentTarget.scrollTop += 40;
                            }
                            if (e.key === "ArrowUp") {
                                e.preventDefault();
                                e.currentTarget.scrollTop -= 40;
                            }
                        }}
                    >

                        <div className={styles.close} >
                            <>
                                <Image
                                    className={styles.menuImage}
                                    src='/hunterMenu.png'
                                    alt='Hntrr'
                                    width={300}
                                    height={300}
                                    quality={100} />
                            </>
                            <p onClick={toggleMenu}>×</p>
                        </div>
                        <div className={styles.menuList}
                            onClick={(e) => {
                                e.stopPropagation()
                                toggleMenu()
                            }}>
                            <div className={styles.Header_links}>
                                <p className={styles.link1}>
                                    <Link href='/directory'
                                        onClick={(e) => {
                                            e.stopPropagation()
                                            toggleMenu()
                                        }}>
                                        <span>the</span> Directory
                                    </Link>
                                </p>
                                <p className={styles.link1}>
                                    <Link href='/news' onClick={(e) => {
                                        e.stopPropagation()
                                        toggleMenu()
                                    }}>
                                        News
                                    </Link>
                                </p>
                                <p className={styles.link1}>
                                    <Link href='/guides' onClick={(e) => {
                                        e.stopPropagation()
                                        toggleMenu()
                                    }}>
                                        Guides
                                    </Link>
                                </p>
                            </div>
                            <div className={styles.menu}>
                                <p className={styles.head}>Explore Places</p>
                                <div className={styles.para}>
                                    <p className={styles.list}>Trending Places</p>
                                    <p className={styles.list}>HUNTR Coffee Card</p>
                                    <p className={styles.list}>HUNTR Member Perks</p>
                                    <p className={styles.list}>Greatest of All Time</p>
                                    <p className={styles.list}>Cafes</p>
                                    <p className={styles.list}>Restaurants</p>
                                    <p className={styles.list}>Specialty Coffee</p>
                                    <p className={styles.list}>Bars & Nightlife</p>
                                    <p className={styles.list}>Great for Breakfast</p>
                                    <p className={styles.list}>Great for Lunch</p>
                                    <p className={styles.list}>Great for Dinner</p>
                                    <p className={styles.list}>Outdoor Activities</p>
                                    <p className={styles.list}>Beach Clubs & Pools</p>
                                    <p className={styles.list}>Lifestyle & Entertainment</p>
                                    <p className={styles.list}>Art & Culture</p>
                                </div>
                            </div>
                            <div className={styles.menu}>
                                <p className={styles.head}>News & Features</p>
                                <div className={styles.para}>
                                    <p className={styles.list}>Latest News & Features</p>
                                    <p className={styles.list}>Trending News & Features</p>
                                    <p className={styles.list}>Events & Pop-Ups</p>
                                    <p className={styles.list}>New Opening</p>
                                    <p className={styles.list}>Food & Drink</p>
                                    <p className={styles.list}>Style & Beauty</p>
                                    <p className={styles.list}>Lifestyle & Entertainment</p>
                                    <p className={styles.list}>Arts & Culture</p>
                                    <p className={styles.list}>Hotels & Travel</p>
                                </div>
                            </div>
                            <div className={styles.menu}>
                                <p className={styles.head}>Guides</p>
                                <div className={styles.para}>
                                    <p className={styles.list}>Latest Guide</p>
                                    <p className={styles.list}>Trending Guide</p>
                                    <p className={styles.list}>Outdoor Activities</p>
                                    <p className={styles.list}>Arts & Culture</p>
                                    <p className={styles.list}>Lifestyle & Entertainment</p>
                                </div>
                            </div>
                            <div className={styles.menu}>
                                <p className={styles.head}>About</p>
                                <div className={styles.para}>
                                    <p className={styles.list}>Meet the <span>HUNTR</span></p>
                                    <p className={styles.list}>Contacts</p>
                                    <p className={styles.list}>FAQs</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>

    );
};

export default BurgerMenu;
