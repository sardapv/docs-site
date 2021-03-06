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
      description="Learn C, Python, Dart, Flutter For free. This is an open-source site, 
      Anyone can contribute."
      img={useBaseUrl("img/metaImage.png")}>
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <div class="row">
            <div className="col">
              <img src={useBaseUrl('img/whiteLogo.svg')} height="100"/>
            </div>
            <div className="col">
              <h1 className="hero__title">{siteConfig.title}</h1>
              <p className="hero__subtitle">{siteConfig.tagline}</p>
            </div>
          </div>
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
                  <a href='/docs/C/'>
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
                  <a href='/docs/Python/'>
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
                  <h2>Dart</h2>
                  <b>Dart</b> is a client-optimized programming language for apps on multiple platforms. 
                  It is developed by Google and is used to build mobile, desktop, server, and web applications. 
                  Dart can compile to either native code or JavaScript.
                  <br></br>
                </div>
                <div className="col">
                  <a href='/docs/Dart/'>
                    <img height='150'
                      src={useBaseUrl('img/dart.svg')}
                      alt="Dart"/>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.detailedFeatures}>
            <div class="container">
              <div class="row">
                <div className="col">
                  <a href='/docs/Flutter/'>
                    <img height='150'
                      src={useBaseUrl('img/flutter.svg')}
                      alt="Flutter"/>
                  </a>
                </div>
                <div className="col">
                  <h2>Flutter</h2>
                  <b>Flutter</b> is Google's UI toolkit for crafting natively
                  compiled applications for mobile, web, and desktop from a single codebase.
                  <br></br>
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
