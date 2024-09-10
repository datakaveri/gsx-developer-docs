import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Getting Started',
    link:"../../docs/registration",
    Svg: require('../../static/img/getting_started.svg').default,
    description: (
      <>
        How to register with GSX?
      </>
    ),
  },
  {
    title: 'Discovering and Consuming datasets',
    link:"../../docs/Consumer/consumer",
    Svg: require('../../static/img/consuming_data.svg').default,
    description: (
      <>
        How to connect your applications with GSX?
      </>
    ),
  },
  {
    title: 'Add your data resources to GSX',
    link:"../../docs/Provider/provider_register_catalogue_item",
    Svg: require('../../static/img/datasets.svg').default,
    description: (
      <>
		How to add data resources and manage them using GSX?
      </>
    ),
  },
  {
    title: 'Manage Access Control of your data resources',
    link:"../../docs/Provider/provider_manage_policies",
    Svg: require('../../static/img/provider.svg').default,
    description: (
      <>
		How to manage a consumer request to a resource?      
	  </>
    ),
  },
  {
    title: 'Contribute to GSX',
    link:"https://github.com/datakaveri",
    Svg: require('../../static/img/Api.svg').default,
    description: (
      <>
		Get into the world of GSX and start your contribution to the world of OpenSource to improvise GSX
      </>
    ),
  },
  {
    title: 'Connect with us',
    link:"https://gsx.org.in/contact-us/",
    Svg: require('../../static/img/subscribe.svg').default,
    description: (
      <>
		Get in touch with us and subscribe to our newsletters, talks, blogs etc.
      </>
    ),
  },
];

function Feature({Svg, link, title, description}) {
  return (
    
    <a className={`${clsx('col col--4')} ${styles.featureCard}`} href={link}><div className={clsx('border border--1')}>
    <div classname={styles.featureCard}>
    <div className="text--center">
      <Svg className={styles.featureSvg} alt={title} />
    </div>
    <div className="text--center padding-horiz--md">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  </div>
  </div></a>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
