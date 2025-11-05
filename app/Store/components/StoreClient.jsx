"use client";

import React, { useState } from "react";
import styles from "../store.module.css";
import BestSellers from "../components/BestSellers";
import BestSellers_p from "../components/BestSellers_p";

export default function StoreClient() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className={styles.storeClient}>
            {/* Content that should blur */}
            <div className={`${styles.storeContent} ${isModalOpen ? styles.blurred : ""}`}>
                <div className={styles.BS}>
                    <p className={styles.BS_p}>Best Sellers</p>
                    <div className={styles.BS_div}>
                        <BestSellers
                            src="/BS1.jpg"
                            alt="Shop Now"
                            Title="Guide Name"
                            EC
                            onLookInside={() => setIsModalOpen(true)}
                        />
                        <BestSellers_p paragraph="Born to Sail ??? Get the Shirt now" />
                        <BestSellers
                            src="/BS2.png"
                            alt="Born to Sail"
                            Title="Dubai Shirt"
                            EC
                            onLookInside={() => setIsModalOpen(true)}
                        />
                    </div>
                </div>
            </div>

            {/* The modal itself */}
            {isModalOpen && (
                <div
                    className={styles.modalOverlay}
                    onClick={() => setIsModalOpen(false)}
                >
                    <div
                        className={styles.modalWindow}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <h2>Look Inside 👀</h2>
                        <img src="/LI.png" alt="Look Inside" width="150" height="150" />
                        <button onClick={() => setIsModalOpen(false)}>Close</button>
                    </div>
                </div>
            )}
        </div>
    );
}
