import React from 'react';
import styles from '../components/styles/MF.module.css';
import Image from "next/image";
import Membership_Button from './Membership_Button';

const Mem_footer = () => {
    return (
        <div className={styles.MF}>
            <div className={styles.MF_left}>
                <div className={styles.MF_left_top}>
                    <p className={styles.MF_left_top_head}>Get Your Membership Now</p>
                    <div className={styles.MF_left_top_div}>
                        <p className={styles.MF_left_top_p}>Your application will take around 15 minutes to complete. You can save your progress and return later.</p>
                        <div className={styles.MF_left_top_subdiv}>
                            <p className={styles.MF_left_top_subdiv_head}>Here’s what you'll need:</p>
                            <div className={styles.MF_left_top_subdiv_list}>
                                <div className={styles.MF_left_top_subdiv_list_1}>
                                    <div className={styles.MF_left_top_subdiv_list_1_img}>
                                        <Image className={styles.svg}
                                            src='/svg1.svg'
                                            alt='Icon'
                                            width={100}
                                            height={100} />
                                    </div>
                                    <p className={styles.MF_left_top_subdiv_list_1_para}>Download The HUNTR City Guide app</p>
                                </div>
                                <div className={styles.MF_left_top_subdiv_list_1}>
                                    <div className={styles.MF_left_top_subdiv_list_1_img}>
                                        <Image className={styles.svg}
                                            src='/svg2.svg'
                                            alt='Icon'
                                            width={100}
                                            height={100} />
                                    </div>
                                    <p className={styles.MF_left_top_subdiv_list_1_para}>Select your membership plan</p>
                                </div>
                                <div className={styles.MF_left_top_subdiv_list_1}>
                                    <div className={styles.MF_left_top_subdiv_list_1_img}>
                                        <Image className={styles.svg}
                                            src='/svg3.svg'
                                            alt='Icon'
                                            width={100}
                                            height={100} />
                                    </div>
                                    <p className={styles.MF_left_top_subdiv_list_1_para}>Start Enjoying exclusive perks & experiences </p>
                                </div>
                                <div className={styles.MF_left_top_subdiv_list_1}>
                                    <div className={styles.MF_left_top_subdiv_list_1_img}>
                                        <Image className={styles.svg}
                                            src='/svg4.svg'
                                            alt='Icon'
                                            width={100}
                                            height={100} />
                                    </div>
                                    <p className={styles.MF_left_top_subdiv_list_1_para}>Start Enjoying exclusive perks & experiences </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.MF_left_bot}>
                    <Membership_Button
                        MF={true}
                        className={styles.MF_Button}
                        para_className={styles.MF_para}
                        para='Join Today and Unlock the Best of Your City!' />
                </div>
            </div>
            <div className={styles.MF_center}>
                <div className={styles.MF_center_top}>
                    <div className={styles.MF_center_top_left}>
                        <Image className={styles.pos_img}
                            src="/MF1.png"
                            alt="icon"
                            width={50}
                            height={50}
                            quality={100}
                        />
                    </div>
                    <div className={styles.MF_center_top_right}>
                        <p className={styles.MF_center_top_right_head}>HUNTR Club Perks: Exclusive Collection</p>
                        <p className={styles.MF_center_top_right_para}>These spots have something special, just for you. Enjoy the extra perks of being in the<span> HUNTR Club.</span></p>
                    </div>
                </div>
                <div className={styles.MF_center_mid}>
                    <div className={styles.MF_center_mid_left}>
                        <Image className={styles.pos_img}
                            src="/MF2.png"
                            alt="icon"
                            width={50}
                            height={50}
                            quality={100}
                        />
                    </div>
                    <div className={styles.MF_center_mid_right}>
                        <p className={styles.MF_center_mid_right_head}><span> the </span> HUNTR Loyalty Rewards</p>
                        <p className={styles.MF_center_mid_right_para}>The insider's card for places beyond loyalty programs. Collect three stamps to unlock your<span> exclusive 20% reward on your fourth visit.</span></p>
                    </div>
                </div>
                <div className={styles.MF_center_bot}>
                    <div className={styles.MF_center_bot_left}>
                        <Image className={styles.pos_img}
                            src="/MF3.png"
                            alt="icon"
                            width={50}
                            height={50}
                            quality={100}
                        />
                    </div>
                    <div className={styles.MF_center_bot_right}>
                        <p className={styles.MF_center_bot_right_head}><span> the </span>HUNTR Coffee Card: Member Venues</p>
                        <p className={styles.MF_center_bot_right_para}>We've gathered the city's most exceptional specialty coffee destinations. Start collecting stamps on your <span> HUNTR Coffee Card.</span></p>
                    </div>
                </div>
            </div>
            <div className={styles.MF_bottom}>
                <Image className={styles.bottomimage}
                    src='/MF.png'
                    alt='place guide 2'
                    width={1000}
                    height={1000}
                    quality={100} />
            </div>
        </div>
    );
}

export default Mem_footer;
