'use client'
import React from 'react';
import styles from '../styles/Calendar.module.css';
import Button from '@/components/Button';
import Date_Comp from './Date_Comp';
import Image from 'next/image';
import { useState, useEffect } from 'react';

const Calendar = () => {
    const [isOpen, setisOpen] = useState(false);
    const handleOpen = () => {
        setisOpen(true)
    }
    const handleclose = () => {
        setisOpen(false)
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
        <div className={styles.calendar}>
            <div className={styles.calendar_top}>
                <button className={styles.calendar_previous}>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 640"
                        height='25'
                        width='25'>
                        <path d="M73.4 297.4C60.9 309.9 60.9 330.2 73.4 342.7L233.4 502.7C245.9 515.2 266.2 515.2 278.7 502.7C291.2 490.2 291.2 469.9 278.7 457.4L173.3 352L544 352C561.7 352 576 337.7 576 320C576 302.3 561.7 288 544 288L173.3 288L278.7 182.6C291.2 170.1 291.2 149.8 278.7 137.3C266.2 124.8 245.9 124.8 233.4 137.3L73.4 297.3z" />
                    </svg>
                </button>
                <p className={styles.calendar_p}>May 2025</p>
                <button className={styles.calendar_next}>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 640 640"
                        height='25'
                        width='25'
                    >
                        <path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z" />
                    </svg>
                </button>
            </div>
            <div className={styles.calendar_cen}>
                <div className={styles.calendar_cen_days}>
                    <p className={styles.days}>Sun</p>
                    <p className={styles.days}>Mon</p>
                    <p className={styles.days}>Tue</p>
                    <p className={styles.days}>Wed</p>
                    <p className={styles.days}>Thu</p>
                    <p className={styles.days}>Fri</p>
                    <p className={styles.days}>Sat</p>
                </div>
                <div className={styles.calendar_cen_dates}>
                    <Date_Comp date='01' events='No Event' />
                    <Date_Comp date='02' events='Event name here..' />
                    <Date_Comp date='03' events='No Event' />
                    <Date_Comp date='04' events='Summer music Festival' src='/calendar4.png' handleOpen={handleOpen} />
                    <Date_Comp date='05' events='No Event' />
                    <Date_Comp date='06' events='No Event' src='/calendar6.png' />
                    <Date_Comp date='07' events='No Event' />
                    <Date_Comp date='08' events='No Event' />
                    <Date_Comp date='09' events='No Event' />
                    <Date_Comp date='10' events='Event name here..' src='/S2.png' />
                    <Date_Comp date='11' events='No Event' />
                    <Date_Comp date='12' events='No Event' />
                    <Date_Comp date='13' events='No Event' />
                    <Date_Comp date='14' events='No Event' />
                    <Date_Comp date='15' events='Event name here..' />
                    <Date_Comp date='16' events='No Event' />
                    <Date_Comp date='17' events='No Event' />
                    <Date_Comp date='18' events='Event name here..' src='/calendar18.png' />
                    <Date_Comp date='19' events='No Event' />
                    <Date_Comp date='20' events='No Event' />
                    <Date_Comp date='21' events='No Event' />
                    <Date_Comp date='22' events='No Event' />
                    <Date_Comp date='23' events='No Event' />
                    <Date_Comp date='24' events='Event name here..' />
                    <Date_Comp date='25' events='No Event' />
                    <Date_Comp date='26' events='No Event' />
                    <Date_Comp date='27' events='No Event' src='/calendar27.png' />
                    <Date_Comp date='28' events='Event name here..' />
                    <Date_Comp date='29' events='No Event' />
                    <Date_Comp date='30' events='Event name here..' />
                </div>
            </div>
            <div className={styles.calendar_bot}>
                <Button para='Download App' />
            </div>
            {
                isOpen &&
                <div className={styles.modalOverlay}>
                    <div className={styles.modalWindow}>
                        <div className={styles.C_top}>
                            <div className={styles.C_top_P_X}>
                                <p className={styles.C_top_p}>Summer Music Festival</p>
                                <div className={styles.close} onClick={handleclose}>
                                    <svg xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 640 640"
                                        width='15'
                                        height='15'>
                                        <path d="M183.1 137.4C170.6 124.9 150.3 124.9 137.8 137.4C125.3 149.9 125.3 170.2 137.8 182.7L275.2 320L137.9 457.4C125.4 469.9 125.4 490.2 137.9 502.7C150.4 515.2 170.7 515.2 183.2 502.7L320.5 365.3L457.9 502.6C470.4 515.1 490.7 515.1 503.2 502.6C515.7 490.1 515.7 469.8 503.2 457.3L365.8 320L503.1 182.6C515.6 170.1 515.6 149.8 503.1 137.3C490.6 124.8 470.3 124.8 457.8 137.3L320.5 274.7L183.1 137.4z" />
                                    </svg>
                                </div>
                            </div>
                            <div className={styles.C_image}>
                                <Image
                                    className={styles.C_picture}
                                    src='/C.png'
                                    alt='Summer Music Festival'
                                    width={1000}
                                    height={1000}
                                    quality={100} />
                            </div>
                        </div>
                        <div className={styles.C_mid}>
                            <div className={styles.C_mid_top}>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 640 640"
                                    width='20'
                                    height='20'
                                >
                                    <path d="M216 64C229.3 64 240 74.7 240 88L240 128L400 128L400 88C400 74.7 410.7 64 424 64C437.3 64 448 74.7 448 88L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 88C192 74.7 202.7 64 216 64zM216 176L160 176C151.2 176 144 183.2 144 192L144 240L496 240L496 192C496 183.2 488.8 176 480 176L216 176zM144 288L144 480C144 488.8 151.2 496 160 496L480 496C488.8 496 496 488.8 496 480L496 288L144 288z" />
                                </svg>
                                <p className={styles.C_mid_top_p}>April 25, 2025</p>
                            </div>
                            <div className={styles.C_mid_mid}>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 640 640"
                                    width='20'
                                    height='20'
                                >
                                    <path d="M528 320C528 434.9 434.9 528 320 528C205.1 528 112 434.9 112 320C112 205.1 205.1 112 320 112C434.9 112 528 205.1 528 320zM64 320C64 461.4 178.6 576 320 576C461.4 576 576 461.4 576 320C576 178.6 461.4 64 320 64C178.6 64 64 178.6 64 320zM296 184L296 320C296 328 300 335.5 306.7 340L402.7 404C413.7 411.4 428.6 408.4 436 397.3C443.4 386.2 440.4 371.4 429.3 364L344 307.2L344 184C344 170.7 333.3 160 320 160C306.7 160 296 170.7 296 184z" />
                                </svg>
                                <p className={styles.C_mid_top_p}>18:00</p>
                            </div>
                            <div className={styles.C_mid_bot}>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 640 640"
                                    width='20'
                                    height='20'
                                >
                                    <path d="M216 64C229.3 64 240 74.7 240 88L240 128L400 128L400 88C400 74.7 410.7 64 424 64C437.3 64 448 74.7 448 88L448 128L480 128C515.3 128 544 156.7 544 192L544 480C544 515.3 515.3 544 480 544L160 544C124.7 544 96 515.3 96 480L96 192C96 156.7 124.7 128 160 128L192 128L192 88C192 74.7 202.7 64 216 64zM216 176L160 176C151.2 176 144 183.2 144 192L144 240L496 240L496 192C496 183.2 488.8 176 480 176L216 176zM144 288L144 480C144 488.8 151.2 496 160 496L480 496C488.8 496 496 488.8 496 480L496 288L144 288z" />
                                </svg>
                                <p className={styles.C_mid_top_p}>Expo City</p>
                            </div>
                        </div>
                        <div className={styles.C_bot}>
                            <button className={styles.C_bot_B}>
                                <p className={styles.C_bot_B_p}>Book Ticket</p>
                            </button>
                            <p className={styles.C_bot_p}>Join us for an evening of live music under the stars! </p>
                        </div>
                    </div>
                </div>
            }
        </div>
    );
}

export default Calendar;
