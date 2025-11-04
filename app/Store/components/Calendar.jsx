import React from 'react';
import styles from '../styles/Calendar.module.css';
import Image from 'next/image';
import Button from '@/components/Button';
import Date_Comp from './Date_Comp';

const Calendar = () => {
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
                    <Date_Comp date='04' events='Summer music Festival' src='/calendar4.png' />
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
        </div>
    );
}

export default Calendar;
