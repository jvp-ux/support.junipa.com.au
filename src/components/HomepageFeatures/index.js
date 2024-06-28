import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'Searching for a student',
    Svg: require('@site/static/img/undraw_docusaurus_mountain.svg').default,
    link: '/docs/general#searching-for-a-student',
    description: (
      <a href="/docs/general#searching-for-a-student">
        JUNIPA keeps your information available to you, securely, at all times. Finding a student quickly is important.
      </a>
    ),
  },
  {
    title: 'Add adjustment evidence as a Teacher',
    Svg: require('@site/static/img/undraw_docusaurus_tree.svg').default,
    link: '/docs/general#add-adjustment-evidence-as-a-teacher',
    description: (
      <a href="/docs/general#add-adjustment-evidence-as-a-teacher">
        Junipa leverages your school timetable to display what students you are interacting with today.
      </a>
    ),
  },
  {
    title: 'Add adjustment evidence as a Case Manager',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    link: '/docs/general#add-adjustment-evidence-as-a-case-manager',
    description: (
      <a href="/docs/general#add-adjustment-evidence-as-a-case-manager">
        Junipa leverages your case load, displaying a list of those students you frequently interact with.
      </a>
    ),
  },
  {
    title: 'Attach files as part of adjustment evidence',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    link: '/docs/general#attach-files-photos-videos-documents-as-part-of-adjustment-evidence',
    description: (
      <a href="/docs/general#attach-files-photos-videos-documents-as-part-of-adjustment-evidence">
        Junipa lets you upload evidence straight onto a student's record as part of the Adding NCCD adjustment workflow.
      </a>
    ),
  },
  {
    title: 'Assign an adjustment level to a student',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    link: '/docs/general#assign-an-adjustment-level-to-a-student',
    description: (
      <a href="/docs/general#assign-an-adjustment-level-to-a-student">
        For a student to be eligible for an adjustment level they must be enrolled through Junipa.
      </a>
    ),
  },
  {
    title: 'Change a student\'s adjustment level',
    Svg: require('@site/static/img/undraw_docusaurus_react.svg').default,
    link: '/docs/general#change-a-students-adjustment-level',
    description: (
      <a href="/docs/general#change-a-students-adjustment-level">
        For a student to be eligible for an adjustment level they must be enrolled through Junipa.
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
