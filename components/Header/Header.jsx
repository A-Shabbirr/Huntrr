'use client'
import React from 'react';
import styles from "../Header/Header.module.css";
import Image from 'next/image';
import BurgerMenu from './Components/BurgerMenu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Button from '../Button';



const Header = () => {
    const pathname = usePathname();
    const isDirectory = pathname.startsWith('/directory')
    const ismembership = pathname.startsWith('/membership')
    const isStore = pathname.startsWith('/Store')
    return (
        <div className={styles.header}>
            <div className={styles.navbar}>
                <Link href="/"
                    className={styles.logo}
                >
                    <Image src={isDirectory || isStore ? "/dir_logo.png" : "/logo.png"}
                        alt="Hunterr"
                        width={isDirectory || isStore ? 50 : 132}
                        height={isDirectory || isStore ? 60 : 32}
                    />
                </Link>
                <div className={isStore ? styles.center_store : styles.center}>
                    <Link href="/directory">
                        <h6 className={styles.center_heading}>the Directory</h6>
                    </Link>
                    <Link href="/news">
                        <h6 className={styles.center_heading}>News</h6>
                    </Link>
                    <Link href="/membership">
                        <h6 className={styles.center_heading}>Membership</h6>
                    </Link>
                </div>
                <div className={ismembership ? styles.last_mbr : styles.last}>
                    {!ismembership && !isStore ? (
                        <>
                            <svg xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 640 640"
                                width='20'
                                height='20'
                            >
                                <path d="M480 272C480 317.9 465.1 360.3 440 394.7L566.6 521.4C579.1 533.9 579.1 554.2 566.6 566.7C554.1 579.2 533.8 579.2 521.3 566.7L394.7 440C360.3 465.1 317.9 480 272 480C157.1 480 64 386.9 64 272C64 157.1 157.1 64 272 64C386.9 64 480 157.1 480 272zM272 416C351.5 416 416 351.5 416 272C416 192.5 351.5 128 272 128C192.5 128 128 192.5 128 272C128 351.5 192.5 416 272 416z" />
                            </svg>
                            <BurgerMenu />
                        </>
                    ) : ismembership ?
                        (
                            <Button mbr={true} para='Download App' />
                        ) : isStore ?
                            (
                                <p>Cart (0)</p>
                            ) : ''
                    }
                </div>
                <div className={styles.veil}>
                    <div className={styles.closeButton} >
                        <p>X</p>
                        <ul>
                            <li>Home</li>
                            <li>About</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </div>
            </div >
        </div >
    );
}

export default Header;
