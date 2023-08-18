import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import { useEffect } from 'react';
import styles from './index.module.css';
import Head from '@docusaurus/Head';
import useBaseUrl from '@docusaurus/useBaseUrl';

function Heading({ text }) {
  return <h2 className="Heading">{text}</h2>;
}

function Section({
  element = 'section',
  children,
  className,
  background = 'dark',
}) {
  const El = element;
  return (
    <El
      className={
        className
          ? `Section ${className} ${background}`
          : `Section ${background}`
      }>
      {children}
    </El>
  );
}

function TwoColumns({ columnOne, columnTwo, reverse }) {
  return (
    <div className={`TwoColumns ${reverse ? 'reverse' : ''}`}>
      <div className={`column first ${reverse ? 'right' : 'left'}`}>
        {columnOne}
      </div>
      <div className={`column last ${reverse ? 'left' : 'right'}`}>
        {columnTwo}
      </div>
    </div>
  );
}

const ScoreCardFeatures = () => {

  return (
    <Section background="tint">
      {/* <div className="container">
        <Heading text="How it works" />
        <TwoColumns
          columnOne={
            <div className="columnOne">
              <h3>1. Connect to JIRA</h3>
              <p>
                Connect to your JIRA instance and select the project you want to analyze.
              </p>
              <h3>2. Analyze</h3>
              <p>
                NitroIQ will analyze your JIRA data and provide you with a scorecard for your team.
              </p>
              <h3>3. Improve</h3>
              <p>
                NitroIQ will provide you with recommendations to improve your team's performance.
              </p>
            </div>
          }
          columnTwo={
            <div className="columnTwo">
            </div>
          }
        />
      </div> */}
    </Section>
  );
};

const ChartingFeatures = () => {
  return (
    <Section background="tint">
    </Section>
  );
};

const GetStarted = () => {
  return (
    <Section background="tint">
    </Section>
  );
};

const HomePageSubtext = () => { 
  return (
    <Section background="tint">
      <div className="container" style={{ textAlign: 'center'}}>
        <p className="beta-invite-text">
          NitroIQ is currently in an invite-only Beta program. 
        </p>
      </div>
    </Section>
  );
};

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <div className="hero__logo">
          <img src={useBaseUrl('img/nitroiq_logo.png')} style={{ width: "200px" }} />
        </div>
        <div className="hero__content">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <p className="hero__subtext">
            NitroIQ monitors, scores, and improves your Team's Sprint performance using sophisticated machine learning.
          </p>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomePageSubtext />
        {/* <HomepageFeatures /> */}
{/* 
        <ScoreCardFeatures />
        <ChartingFeatures />
        <GetStarted /> */}
      </main>
    </Layout>
  );
}
