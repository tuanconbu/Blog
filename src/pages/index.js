import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.css';

const features = [
  {
    title: <>Code, code và code</>,
    imageUrl: 'https://www.spacesworks.com/wp-content/uploads/2016/06/coding-in-the-classroom.png',
    description: (
      <>
        Có code thì mới có ăn
      </>
    ),
  },
  {
    title: <>Chia sẻ kinh nghiệm học tập và làm việc</>,
    imageUrl: 'https://cdn.studyinternational.com/news/wp-content/uploads/2018/12/shutterstock_335587841.jpg',
    description: (
      <>
        Đúc kết được nhiều thứ từ những hậu quả mình gây ra.
      </>
    ),
  },
  {
    title: <>Ở đây dạy bạn làm người</>,
    imageUrl: 'img/undraw_docusaurus_react.svg',
    description: (
      <>
        Cách không làm mà có ăn cũng như ra xã hội làm ăn bươn chải
      </>
    ),
  },
];

function Feature({ imageUrl, title, description }) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.feature)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.featureImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const { siteConfig = {} } = context;
  return (
    <Layout
      title={`Trang chủ`}
      description="Description will go into a meta tag in <head />">
      <header className={clsx('hero hero--primary', styles.heroBanner)}>
        <div className="container">
          <h1 className="hero__title">{siteConfig.title}</h1>
          <p className="hero__subtitle">{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link
              className={clsx(
                'button button--outline button--secondary button--lg',
                styles.getStarted,
              )}
              to={useBaseUrl('docs/')}>
              Get Started
            </Link>
          </div>
        </div>
      </header>
      <main>
        {features && features.length > 0 && (
          <section className={styles.features}>
            <div className="container">
              <div className="row">
                {features.map((props, idx) => (
                  <Feature key={idx} {...props} />
                ))}
              </div>
            </div>
          </section>
        )}
      </main>
    </Layout>
  );
}

export default Home;
