import React from 'react';
import styles from "../Styles/newsfilter.module.css";

const NewsFilter = ({ para, w = false }) => {
    return (
        <div className={`${styles.filter} ${w ? styles.filter_w : ''}`}>
            <p className={`${styles.p_filter} ${w ? styles.p_filter_w : ''}`}>{para}</p>
        </div>
    );
}

export default NewsFilter;
