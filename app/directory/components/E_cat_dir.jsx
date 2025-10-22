import React from 'react';
import styles from '../styles/e_cat_dir.module.css'
import Image from "next/image";
import Button from '@/components/Button';

const E_cat_dir = () => {
    return (
        <div className={styles.e_cat}>
            <div className={styles.e_cat_top}>
                <p className={styles.e_cat_top_head}>Explore by Category</p>
                <p className={styles.e_cat_top_p}>To unlock the full HUNTR Directory get a HUNTR Membership via the HUNTR: City Guide app </p>
                <div className={styles.e_cat_top_b}>  <Button para="Download App" /></div>
            </div>
            <div className={styles.e_cat_bot}>
                <div className={styles.e_cat_bot_1}>
                    <div className={styles.e_cat_bot_1_top}>
                        <div className={styles.e_cat_bot_1_head_div}>
                            <p className={styles.e_cat_bot_1_head_p}>Restaurants</p>
                            <div className={styles.e_cat_bot_1_head_arrow}>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 640 640"
                                >
                                    <path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z" />
                                </svg>
                            </div>
                        </div>
                        <p className={styles.e_cat_bot_1_p}>Lorem ipsum dolor sit amet consectetur. Quam consequat tortor sed quis ut gravida sit bibendum imperdiet. Diam morbi felis in arcu semper. Egestas ac volutpat sit hendrerit platea vel.</p>
                    </div>
                    <div className={styles.e_cat_bot_1_bot_div}>
                        <span className={styles.span_border}></span>
                        <div className={styles.e_cat_bot_1_bot_a_div}><p className={styles.e_cat_bot_1_bot_a}>Cafes & Specialty Coffee</p></div>
                        <span className={styles.span_border}></span>
                        <div className={styles.e_cat_bot_1_bot_a_div}><p className={styles.e_cat_bot_1_bot_a}>Outdoor & Adventure</p></div>
                        <span className={styles.span_border}></span>
                        <div className={styles.e_cat_bot_1_bot_a_div}><p className={styles.e_cat_bot_1_bot_a}>Lifestyle & Entertainment</p></div>
                        <span className={styles.span_border}></span>
                        <div className={styles.e_cat_bot_1_bot_a_div}><p className={styles.e_cat_bot_1_bot_a}>Hotels & Travel</p></div>
                        <span className={styles.span_border}></span>
                        <div className={styles.e_cat_bot_1_bot_a_div}><p className={styles.e_cat_bot_1_bot_a}>bars & nightlife</p></div>
                        <span className={styles.span_border}></span>
                        <div className={styles.e_cat_bot_1_bot_a_div}><p className={styles.e_cat_bot_1_bot_a}>(And so much more)</p></div>
                    </div>
                </div>
                <div className={styles.e_cat_bot_2}>
                    <div className={styles.e_cat_bot_2_tags}>
                        <div className={styles.e_cat_bot_2_tags_a_div}><p className={styles.e_cat_bot_2_tags_a}>Beautiful Places</p></div>
                        <div className={styles.e_cat_bot_2_tags_a_div}><p className={styles.e_cat_bot_2_tags_a}>Beautiful Places</p></div>
                    </div>
                    <div className={styles.e_cat_bot_2_scroll}>
                        <p className={styles.e_cat_bot_2_scroll_p}>Kokoro, Nad Al Sheba</p>
                        <div className={styles.e_cat_bot_2_scroll_svg}>
                            <div className={styles.e_cat_bot_2_scroll_svg_1}>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    fill='#F5F3DE'
                                    viewBox="0 0 640 640" className={styles.e_cat_bot_2_scroll_svg_arrow}>
                                    <path d="M73.4 297.4C60.9 309.9 60.9 330.2 73.4 342.7L233.4 502.7C245.9 515.2 266.2 515.2 278.7 502.7C291.2 490.2 291.2 469.9 278.7 457.4L173.3 352L544 352C561.7 352 576 337.7 576 320C576 302.3 561.7 288 544 288L173.3 288L278.7 182.6C291.2 170.1 291.2 149.8 278.7 137.3C266.2 124.8 245.9 124.8 233.4 137.3L73.4 297.3z" />
                                </svg>
                            </div>
                            <div className={styles.e_cat_bot_2_scroll_svg_1}>
                                <svg xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 640 640"
                                    fill='#F5F3DE'
                                    className={styles.e_cat_bot_2_scroll_svg_arrow}>
                                    <path d="M566.6 342.6C579.1 330.1 579.1 309.8 566.6 297.3L406.6 137.3C394.1 124.8 373.8 124.8 361.3 137.3C348.8 149.8 348.8 170.1 361.3 182.6L466.7 288L96 288C78.3 288 64 302.3 64 320C64 337.7 78.3 352 96 352L466.7 352L361.3 457.4C348.8 469.9 348.8 490.2 361.3 502.7C373.8 515.2 394.1 515.2 406.6 502.7L566.6 342.7z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className={styles.e_cat_bot_2_img}>
                        <Image
                            className={styles.e_cat_image}
                            src='/e_cat.png'
                            alt='Directory'
                            width={1000}
                            height={850} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default E_cat_dir;
