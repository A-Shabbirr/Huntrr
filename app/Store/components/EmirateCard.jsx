import React from 'react';
import styles from '../styles/EmiratesCard.module.css';
import BestSellers from './BestSellers';
import BestSellers_p from './BestSellers_p';

const EmirateCard = () => {
    return (
        <div className={styles.EC}>
            <BestSellers src={null} alt={null} EC={true} bgImage='/EC1.png' Title='Guide Name' />
            <BestSellers_p paragraph='Dubai? don’t miss a bit with the Guide' />
            <BestSellers_p paragraph='Sharjah? you won’t get lost with the Guide' />
            <BestSellers EC={true} src={null} alt={null} bgImage='/EC2.png' Title='Guide Name' />
        </div>
    );
}

export default EmirateCard;
