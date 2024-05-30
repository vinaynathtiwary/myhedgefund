// pages/index.js
"use client"
import Head from 'next/head';
import styles from '@/css/Assurance.module.css';

export default function AssurancePage() {
    return (
        <section className={styles.container}>
            <section className={styles.backgroundSection}>
                <div>
                    <h1>Assurance Services</h1>
                </div>
            </section>
            <section className={styles.ContentBgSection}>
                <section className={styles.mainContentSection}>
                    <p>
                        HMF delivers tailor-made assurance and auditing services in India accentuated by impeccable quality to our clients in local and global marketplace. Our aim is to assist our clients in steering through complex professional requirements with clarity and agility.
                    </p>
                    <div className={styles.services}>
                        <h2>Our assurance services cover the following:</h2>
                        <ul>
                            <li>Attest services under Indian and international standards (ISA, IFRS, PCAOB, AICPA)</li>
                            <ul>
                                <li>Auditing services in India and reviews of local GAAP/ US GAAP/ IFRS financial statements</li>
                                <li>SOX attestation</li>
                                <li>Agreed-upon procedures</li>
                                <li>Certification services</li>
                                <li>Financial Reporting Advisory services</li>
                            </ul>
                        </ul>
                    </div>
                    <h2 className={styles.differenceHeader}>What makes us different?</h2>
                    <div className={styles.difference}>
                        <p><strong>Risk-based global audit methodology:</strong> We use a global audit methodology with consistent application across our international network. Our auditing services in India uses state-of-the-art tools and technological innovation further complement our methodology</p>
                        <ul>
                            <li><strong>Independence:</strong> We have invested in automated systems that ensure our firm complies with highest ethical standards to deliver credible and quality audits</li>
                            <li><strong>Partner-led service:</strong> With more hands-on accessibility at senior level, every client engagement partner draws upon the firm’s depth of specialist resources to deliver prompt, decisive and consistent service</li>
                            <li><strong>Technical knowledge:</strong> We have focused sector groups with dedicated audit and financial reporting specialists. Sector-specific audit work enables us to streamline our approach to enhance audit efficiency and relevance for all stakeholders by identifying key industry trends</li>
                            <li><strong>Market credibility:</strong> The firm is a trusted partner in growth for dynamic Indian businesses and is ideally placed to offer the choices and solutions it demands</li>
                        </ul>
                    </div>
                </section>
            </section>
            <section className={styles.ourConsulting}>
                <h1>Our Services</h1>
                <div className={styles.serviceCard}>
                    <div className={styles.card}>
                        <h2>Financial Reporting Advisory Services</h2>
                        <p>Financial Reporting Advisory Services</p>
                        <hr />
                        <a href="#">Go For This</a>

                    </div>
                    <div className={styles.card}>
                        <h2>Financial Statement Audit and Attestation Services</h2>
                        <p>Financial Statement Audit and Attestation Services</p>
                        <hr />
                        <a href="#">Go For This</a>

                    </div>
                    <div className={styles.card}>
                        <h2>Financial Statement Audit and Attestation Services</h2>
                        <p>Financial Statement Audit and Attestation Services</p>
                        <hr />
                        <a href="#">Go For This</a>

                    </div>
                    <div className={styles.card}>
                        <h2>Financial Statement Audit and Attestation Services</h2>
                        <p>Financial Statement Audit and Attestation Services</p>
                        <hr />
                        <a href="#">Go For This</a>

                    </div>
                </div>
            </section>
        </section>
    );
}