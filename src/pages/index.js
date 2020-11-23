import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl'


function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Home`}
      description="Learn C, Python, Flutter For free.">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
        </div>
      </header>
      <main>
        <section>
          <div className={styles.detailedFeatures}>
            <div class="container">
              <div class="row">
                <div className="col">
                  <h2>C - Language</h2>
                  <p>
                    <b>C</b> is a general-purpose, high-level language.
                    It can be use to develop softwares like OS, Databases, compiles, etc...
                    <br></br>
                  </p>
                </div>
                <div className="col">
                  <a href='/docs/c/intro'>
                    <img height='150'
                      src={useBaseUrl('img/c.svg')}
                      alt="C programming language"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.detailedFeatures}>
            <div class="container">
              <div class="row">
                <div className="col">
                  <a href='/docs/py/intro'>
                    <img height='150'
                      src={useBaseUrl('img/python.svg')}
                      alt="Python"/>
                  </a>
                </div>
                <div className="col">
                  <h2>Python</h2>
                  <p>
                    <b>Python</b> is a general-purpose interpreted, interactive,
                    object-oriented, and high-level programming language.
                    <br></br>
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.detailedFeatures}>
            <div class="container">
              <div class="row">
                <div className="col">
                  <h2>Flutter</h2>
                  <b>Flutter</b> is Google's UI toolkit for crafting natively
                  compiled applications for mobile, web, and desktop from a single codebase.
                  <br></br>
                </div>
                <div className="col">
                  <a href='/docs/flutter/get-started'>
                    <img height='150'
                      src={useBaseUrl('img/flutter.svg')}
                      alt="Flutter"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}

export default Home;
