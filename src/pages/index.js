import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import styles from './index.module.css';

export default function Home() {
  return (
    <Layout
      title="Nox Vitae Documentation"
      description="Policies, Bot Guides, and Support Resources for the Nox Vitae ecosystem.">

      <main className={styles.heroSection}>
        {/* Cinematic background photo */}
        <div className={styles.heroBg}>
          <img
            src="/img/VRChat_2025-06-13_18-17-23.157_3840x2160.webp"
            alt=""
            aria-hidden="true"
          />
          <div className={styles.heroBgOverlay} />
        </div>

        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>Nox Vitae<br />Documentation Hub</h1>

          <p className={styles.heroSubtitle}>
            Your central source for <strong>Policies</strong>, <strong>Bot Guides</strong>, and <strong>Support</strong>.
          </p>

          <div className={styles.buttonGroup}>
            <Link className={styles.primaryButton} to="/about-credits/">
              View All Documentation
            </Link>
            <Link className={styles.secondaryButton} to="/policies/terms-of-service">
              Legal Center
            </Link>
          </div>
        </div