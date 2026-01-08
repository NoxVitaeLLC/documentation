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
        <div className={styles.heroInner}>
          <h1 className={styles.heroTitle}>Nox Vitae<br />Documentation Hub</h1>

          <p className={styles.heroSubtitle}>
            Your central source for <strong>Policies</strong>, <strong>Bot Guides</strong>, and <strong>Support</strong>.
          </p>

          <div className={styles.buttonGroup}>
            {/* Link directly to your Markdown intro page */}
            <Link className={styles.primaryButton} to="/docs/how-tos/cross-verification">
              📚 "How to?"
            </Link>

            {/* Link to another Markdown doc */}
            <Link className={styles.secondaryButton} to="/docs/policies/terms-of-service">
              ⚖️ Legal Center
            </Link>
          </div>
        </div>
      </main>
    </Layout>
  );
}
