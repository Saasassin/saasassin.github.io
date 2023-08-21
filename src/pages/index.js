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
    <Section background="light">
      <div className="container">
        <TwoColumns
          columnOne={
            <div className="columnOne">
              <Heading text="Team and Individual Performance Scorecards" />
              <p>
                NitroIQ provides you with scorecards for your team and each individual on your team based on specific metrics like Sprint velocity, burndown, and issue churn.
              </p>
              <p>
                The scorecard uses advanced Machine Learning algorithms to analyze your JIRA data and provide each individual with a score based on their performance.
              </p>
            </div>
          }
          columnTwo={
            <div className="columnTwo">
              <div className="feature-image-container">
                <img className="feature-image"
                  src={useBaseUrl('/img/scorecards.png')}
                // width="1100"
                // height="250"
                /></div>
            </div>
          }
        />
      </div>
    </Section>
  );
};

const ChartingFeatures = () => {
  return (
    <Section background="tint">
      <div className="container">
        <TwoColumns
          reverse={true}
          columnOne={
            <div className="columnOne">
              <Heading text="Metrics that Matter" />
              <p>
                <b>Say NO to Vanity Metrics.</b>
              </p>
              <p>
                NitroIQ provides you with the metrics that matter to your team's performance. We expose the richness of data that is locked behind complicated JIRA dashboards, JQL queries, and reports and make them easily accessible with a single click.
              </p>
            </div>
          }
          columnTwo={
            <div className="columnTwo">
              <div className="feature-image-container">
                <img className="feature-image"
                  src={useBaseUrl('/img/metrics.png')}></img>
              </div>
            </div>
          }
        />
      </div>

    </Section>
  );
};

const OutliersFeatures = () => {
  return (
    <Section background="light">
      <div className="container">
        <TwoColumns
          reverse={false}
          columnOne={
            <div className="columnOne">
              <Heading text="Highlighting Outliers in JIRA Data" />
              <p>
                <b>Navigating JIRA data can be difficult.</b> NitroIQ will highlight outliers in your data to help you focus on the most important issues and sprints.
              </p>
              <p>
                Highlighted outliers are often accompanied by a detailed explanation of why the data is marked as an outlier and helpful recommendations on what you can do to improve it.
              </p>
            </div>
          }
          columnTwo={
            <div className="columnTwo">
              <div className="feature-image-container">
                <img className="feature-image"
                  src={useBaseUrl('/img/outliers.png')}></img>
              </div>
            </div>
          }
        />
      </div>

    </Section>
  );
};

const BacklogFeatures = () => {
  return (
    <Section background="tint">
      <div className="container">
        <TwoColumns
          reverse={true}
          columnOne={
            <div className="columnOne">
              <Heading text="Backlog Scoring and Analysis" />
              <p>
                Using advanced heuristics, we provide you with a score for each of your JIRA Backlog Issues, so you can focus on pruning or fixing those issues alone.
              </p>
              <p>
                The backlog score is a measure of how well the issue is defined and its likelihood of being completed in future sprints.
              </p>
            </div>
          }
          columnTwo={
            <div className="columnTwo">
              <div className="feature-image-container">
                <img className="feature-image"
                  src={useBaseUrl('/img/backlog.png')}></img>
              </div>
            </div>
          }
        />
      </div>

    </Section>
  );
};

const GetStarted = () => {
  return (
    <Section background="light">
      
    </Section>
  );
};

const HomePageSubtext = () => {
  return (
    <Section background="tint">
      <div className="container" style={{ textAlign: 'center' }}>
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

/** 
 * 
*/
export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomePageSubtext />
        <ScoreCardFeatures />
        <ChartingFeatures />
        <OutliersFeatures />
        <BacklogFeatures />
        <GetStarted />
      </main>
    </Layout>
  );
}
