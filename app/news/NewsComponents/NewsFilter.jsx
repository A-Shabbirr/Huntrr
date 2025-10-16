import React from 'react';
import styles from "../Styles/newsfilter.module.css";

const NewsFilter = ({ para }) => {
    return (
        <div className={styles.filter}>
            <p className={styles.p_filter}>{para}</p>
        </div>
    );
}

export default NewsFilter;
