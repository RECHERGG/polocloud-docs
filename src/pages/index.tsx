import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import styles from './index.module.css';
import Projects from "../components/Projects";

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={styles.heroBanner}>
      <div className="container">
        <h1 className="hero__title">{siteConfig.title}</h1>
        <p className="hero__subtitle">{siteConfig.tagline}</p>
      </div>
    </header>
  );
}

export default function Home(): JSX.Element {
  const {
    siteConfig: { customFields },
  } = useDocusaurusContext();

  const { description } = customFields as { description: string };

  return (
    <Layout title="Home" description={description}>
      <HomepageHeader />
      {/* TODO Search bar */}
      <main>
        <Projects />
      </main>
    </Layout>
  );
}
