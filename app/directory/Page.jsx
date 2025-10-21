import React from 'react';
import styles from '../directory/dir.styles.module.css';
import Hero from '@/components/Hero';
import Directorycard from './components/Directorycard';
import Button from '@/components/Button';
import Image from 'next/image';
import Publish_section from '../HomepageComponents/Publish_section';
import NewsFilter from '../news/NewsComponents/NewsFilter';
import Guide from "../HomepageComponents/Guide";
const Page = () => {
    return (
        <div className={styles.directory}>
            <div className={styles.top}>
                <Hero src="/dir_hero.png" alt="ad space" />
            </div>

            <div className={styles.directory_head}>
                <p className={styles.directory_heading}>
                    <span className={styles.s_t}> the</span>
                    <span className={styles.s_h}> HUNTR</span>
                    <span className={styles.s_d}> Directory</span>
                </p>
            </div>

            <div className={styles.directory_card}>
                <div className={styles.cards}>
                    <Directorycard src="/dir_1.png" />
                    <Directorycard src="/cafe3.png" center={true} />
                    <Directorycard src="/dir_3.png" />
                </div>
            </div>

            <div className={styles.d_app}>
                <div className={styles.left_d_app}>
                    <div className={styles.top_d_app}>
                        <div className={styles.top_d_circle}></div>
                        <p className={styles.top_d_para}>About us</p>
                    </div>

                    <div className={styles.center_d_app}>
                        <p className={styles.center_d_para}>
                            the <span>HUNTR</span> Directory is the UAE's most selective guide, featuring over 1,000+ carefully chosen places across Dubai and the Emirates – with new discoveries added weekly. Every establishment here has earned the <span>HUNTR's</span> coveted Seal of Approval.
                        </p>
                        <p className={styles.center_d_para}>
                            What you see here is just a preview. The full experience – complete with granular search, member perks, and exclusive content – lives on the <span>HUNTR</span>: City Guide app.
                        </p>
                    </div>

                    <div className={styles.bottom_d_app}>
                        <Button para="Download App" />
                    </div>
                </div>
                <div className={styles.right_d_app}>
                    <div className={styles.right_d_app_mbl}>
                        <Image
                            className={styles.d_app_image}
                            src='/d_app_mobile.png'
                            alt='Directory'
                            width={700}
                            height={1000} />
                    </div>
                    <div className={styles.right_d_app_logo}>
                        <Image src='/d_app_logo.png'
                            className={styles.d_app_logo}
                            alt='Directory'
                            width={1000}
                            height={1000} />
                    </div>
                </div>
            </div>

            <div className={styles.Newly_add}>
                <div className={styles.new_read}>Read</div>
                <div className={styles.new_filter}>
                    <NewsFilter w={true} para='Filter & Sort by' />
                    <NewsFilter w={true} para='The Huntr Club Benefits' />
                    <NewsFilter w={true} para='Trending Places' />
                    <NewsFilter w={true} para='Cafes' />
                    <NewsFilter w={true} para='Restaurants' />
                    <NewsFilter w={true} para='Speciality Coffee' />
                    <NewsFilter w={true} para='Bars & Nightlife' />
                    <NewsFilter w={true} para='Outdoor Activities' />
                </div>
                <div className={styles.new_publish}>
                    <Publish_section heading='Newly added' cc={true} />
                </div>

            </div>

            <div className={styles.dir_Trending}>
                <Guide
                    dir={true}
                    heading='Trending Now: Discover the best of the UAE'
                    para1a='Hidden gems'
                    para1b='Dubai’s newest rooftop bar with stunning skyline views.'
                    para2a='Sky Lounge'
                    para2b='Dubai’s newest rooftop bar with stunning skyline views.'
                    explore='Beautiful views'
                    explore2='Beautiful views'
                />
            </div>

            <div className={styles.Adspace}>
                <Image
                    className={styles.Adspace_img}
                    src='/Adspace.png'
                    alt='Ad Space'
                    width={1400}
                    height={1400} />
            </div>

            <div className={styles.explore_dir}>
                <div className={styles.explore_drag}>
                    <p className={styles.explore_drag_p}>Drag</p>
                </div>
                <div className={styles.exp_top}>
                    <p className={styles.exp_top_head}>Explore UAE’s Best Spots</p>
                    <p className={styles.exp_top_vm}>View more</p>
                </div>
                <div className={styles.exp_bot}>
                    <div className={styles.explore_1}>
                        <div className={styles.explore_img_div}>
                            <Image
                                className={styles.explore_image}
                                src='/publish_image.png'
                                alt='Explore Cafes & Restaurants'
                                width={1000}
                                height={1000} />
                        </div>
                        <div className={styles.explore_cnt_div}>
                            <p className={styles.exp_head}>Cafes & Specialty Coffee</p>
                            <p className={styles.exp_p}>Cozy brunch spot with the best croissants in town.</p>
                        </div>
                    </div>
                    <div className={styles.explore_2}>
                        <div className={styles.explore_img_div_c}>
                            <Image
                                className={styles.explore_image_c}
                                src='/guide2a.png'
                                alt='Explore Cafes & Restaurants'
                                width={1000}
                                height={1000} />
                        </div>
                        <div className={styles.explore_cnt_div}>
                            <p className={styles.exp_head}>Hidden Gems</p>
                            <p className={styles.exp_p}>Trending dining spots across the UAE</p>
                        </div>
                    </div>
                    <div className={styles.explore_1}>
                        <div className={styles.explore_img_div}>
                            <Image
                                className={styles.explore_image}
                                src='/explore_1.png'
                                alt='Explore Cafes & Restaurants'
                                width={1000}
                                height={1000} />
                        </div>
                        <div className={styles.explore_cnt_div}>
                            <p className={styles.exp_head}>Homegrown Heroes</p>
                            <p className={styles.exp_p}>Cozy brunch spot with the best croissants in town.</p>
                        </div>
                    </div>
                    {/* <div className={styles.explore_2}>
                        <div className={styles.explore_img_div_c}>
                            <Image
                                className={styles.explore_image_c}
                                src='/guide2a.png'
                                alt='Explore Cafes & Restaurants'
                                width={1000}
                                height={1000} />
                        </div>
                        <div className={styles.explore_cnt_div}>
                            <p className={styles.exp_head}>Cafes & Specialty Coffee</p>
                            <p className={styles.exp_p}>Cozy brunch spot with the best croissants in town.</p>
                        </div>
                    </div> */}
                </div>
            </div>

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

            <div className={styles.Adspace2}>
                <Image
                    className={styles.Adspace_img2}
                    src='/adspace2.png'
                    alt='Ad Space'
                    width={1400}
                    height={1400} />
            </div>

            <div className={styles.dir_cur}>
                <Guide
                    dir={true}
                    heading='Curated Guides'
                    para1a='Food & Drink'
                    para1b='Your ultimate guide to Ramadan 2025 in DUbai'
                    para2a='Outdoor Activities'
                    para2b='23 of the best winter activities to enjoy in dubai'
                    leftpara1='Food & Drink'
                    leftpara2='Your ultimate guide to Ramadan 2025 in DUbai'
                    explore='10 Places'
                />
            </div>




        </div>
    );
};

export default Page;
