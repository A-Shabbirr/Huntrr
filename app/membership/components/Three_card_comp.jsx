import React from 'react';
import Image from 'next/image';
import Membership_Button from './Membership_Button';
import styles from '../components/styles/Threecard_comp.module.css';


const Three_card_comp = ({ head, price, a, b, c, d, src }) => {
    return (

        <div className={styles.Join_card_bot_card}>
            <div className={styles.Join_card_bot_card_hover}>
                <p className={styles.Join_card_bot_card_hover_p}>Best value</p>
            </div>
            <div className={styles.Join_card_bot_card_div}>
                <div className={styles.Join_card_bot_card_div_img}>
                    <Image className={styles.card_img}
                        src={src}
                        alt='card'
                        height={300}
                        width={300}
                        quality={100}
                    />
                </div>
                <div className={styles.Join_card_bot_card_div_cnt}>
                    <div className={styles.Join_card_bot_card_div_cnt_top}>
                        <p className={styles.Join_card_bot_card_div_cnt_top_p_l}>{head}</p>
                        <p className={styles.Join_card_bot_card_div_cnt_top_p_r}>{price}</p>
                    </div>
                    <span className={styles.Join_card_bot_card_div_cnt_border}></span>
                    <div className={styles.Join_card_bot_card_div_cnt_bot}>
                        <div className={styles.Join_card_bot_card_div_cnt_bot_a}>
                            <p className={styles.Join_card_bot_card_div_cnt_bot_a_p}>{a}</p>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                className={styles.Join_card_bot_card_div_cnt_bot_a_tick}
                                height='24'
                                width='18'
                                viewBox="0 0 640 640">
                                <path d="M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" />
                            </svg>
                        </div>
                        <div className={styles.Join_card_bot_card_div_cnt_bot_a}>
                            <p className={styles.Join_card_bot_card_div_cnt_bot_a_p}>{b}</p>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                className={styles.Join_card_bot_card_div_cnt_bot_a_tick}
                                height='24'
                                width='18'
                                viewBox="0 0 640 640">
                                <path d="M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" />
                            </svg>
                        </div>
                        <div className={styles.Join_card_bot_card_div_cnt_bot_a}>
                            <p className={styles.Join_card_bot_card_div_cnt_bot_a_p}>{c}</p>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                className={styles.Join_card_bot_card_div_cnt_bot_a_tick}
                                height='24'
                                width='18'
                                viewBox="0 0 640 640">
                                <path d="M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" />
                            </svg>
                        </div>
                        <div className={styles.Join_card_bot_card_div_cnt_bot_a}>
                            <p className={styles.Join_card_bot_card_div_cnt_bot_a_p}>{d}</p>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                className={styles.Join_card_bot_card_div_cnt_bot_a_tick}
                                height='24'
                                width='18'
                                viewBox="0 0 640 640">
                                <path d="M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" />
                            </svg>
                        </div>
                    </div>
                    <div className={styles.Join_card_bot_card_div_cnt_bot_button}>
                        <Membership_Button
                            threecard={true}
                            className={styles.Join_card_bot_card_button}
                            para_className={styles.Join_card_bot_card_button_p}
                            para='Join Now' />
                    </div>
                </div>

            </div>
        </div>

    );
}

export default Three_card_comp;
