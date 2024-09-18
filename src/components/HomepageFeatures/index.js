import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Searching for a student',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    link: '/docs/tutorials#searching-for-a-student',
    description: (
      <a href="/docs/tutorials#searching-for-a-student">
        JUNIPA keeps your information available to you, securely, at all times. Finding a student quickly is important.
      </a>
    ),
  },
  {
    title: 'Add adjustment evidence as a Teacher',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    link: '/docs/tutorials#add-adjustment-evidence-as-a-teacher',
    description: (
      <a href="/docs/tutorials#add-adjustment-evidence-as-a-teacher">
        Junipa leverages your school timetable to display what students you are interacting with today.
      </a>
    ),
  },
  {
    title: 'Add adjustment evidence as a Case Manager',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    link: '/docs/tutorials#add-adjustment-evidence-as-a-case-manager',
    description: (
      <a href="/docs/tutorials#add-adjustment-evidence-as-a-case-manager">
        Junipa leverages your case load, displaying a list of those students you frequently interact with.
      </a>
    ),
  },
  {
    title: 'Attach files as part of adjustment evidence',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    link: '/docs/tutorials#attach-files-photos-videos-documents-as-part-of-adjustment-evidence',
    description: (
      <a href="/docs/tutorials#attach-files-photos-videos-documents-as-part-of-adjustment-evidence">
        Junipa lets you upload evidence straight onto a student's record as part of the Adding NCCD adjustment workflow.
      </a>
    ),
  },
  {
    title: 'Administration',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    link: '/docs/administration',
    description: (
      <a href="/docs/administration">
        Setting up Junipa behind the scenes for your teaching staff.
      </a>
    ),
  },
  {
    title: 'Student Groups',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    link: '/docs/administration/studentgroups',
    description: (
      <a href="/docs/administration/studentgroups">
        Learn how to create and manage student groups in Junipa.
      </a>
    ),
  },
];

function Feature({Svg, title, description, link}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <a href={link}>
          <Svg className={styles.featureSvg} role="img" />
        </a>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">
          <a href={link}>{title}</a>
        </Heading>
        <p>{description}</p>
      </div>
    </div>
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
