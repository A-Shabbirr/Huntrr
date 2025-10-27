import React from 'react';
import Main_mbr from './components/Main_mbr';
import Join from './components/Join';
import Third from './components/Third';
import Fourth from './components/Fourth';
import styles from '../membership/membership.module.css';
import Testimonials_mbr from './components/Testimonials_mbr';
import ThreeCard from './components/ThreeCard';
import Choice from './components/Choice';
import QA from './components/QA';
import Mem_footer from './components/Mem_footer';


const page = () => {
    return (
        <div className={styles.membership}>
            <Main_mbr />
            <Join />
            <Third />
            <Fourth />
            <Testimonials_mbr />
            <ThreeCard />
            <Choice />
            <QA />
            <Mem_footer />
        </div>
    );
}

export default page;