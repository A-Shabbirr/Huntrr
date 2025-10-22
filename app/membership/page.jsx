import React from 'react';
import Main_mbr from './components/Main_mbr';
import Join from './components/Join';
import Third from './components/Third';
import Fourth from './components/Fourth';
import styles from '../membership/membership.module.css';


const page = () => {
    return (
        <div className={styles.membership}>
            <Main_mbr />
            <Join />
            <Third />
            <Fourth />
        </div>
    );
}

export default page;