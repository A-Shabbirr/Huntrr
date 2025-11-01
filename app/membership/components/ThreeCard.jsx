import React from 'react';
import Three_card_comp from './Three_card_comp';
import styles from '../components/styles/Three_card.module.css';

const ThreeCard = () => {
    return (
        <div className={styles.Join_card}>
            <div className={styles.Join_card_top}>
                <p className={styles.Join_card_top_p}>Choose Your <span> Membership </span></p>
            </div>
            <div className={styles.Join_card_bot}>
                <Three_card_comp threecard={true} src='/JoinCard1.png' head='the HUNTR Tourist Membership ' price='99 AED' a='Tourist pass colour   ' b='Embossed effect suitcase ' c='Explore like a local  ' d='30 days access' />
                <Three_card_comp threecard={true} src='/JoinCard2.png' head='the HUNTR Annual Membership ' price='489 AED' a='Annual colour ' b='Embossed effect hand icon ' c='Unlock the best of your city ' d='1 year access' />
                <Three_card_comp threecard={true} src='/JoinCard3.png' head='the HUNTR Biannual Membership ' price='300 AED' a='Biannual colour  ' b='Embossed effect hand icon  ' c='Unlock the best of your city  ' d='6 months access' />
            </div>
        </div>
    );
}

export default ThreeCard;
