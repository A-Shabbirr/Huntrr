import React from 'react';
import styles from '../styles/filter.module.css';

const Filter = ({ para }) => {
    return (
        <div className={styles.filter}>
            <p className={styles.filter_p}>{para}</p>
        </div>
    );
}

export default Filter;
