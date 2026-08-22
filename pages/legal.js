import HeadComponent from '../partials/Shared/HeadComponent'
import styles from '../styles/legal.module.scss'

const content = {
  head: {
    title: 'Data Collection Policy',
    description: 'Data collection policy for Jhonatan Rios applications',
    path: '/legal'
  },
  body: {
    policy: {
      title: 'Data Collection Policy',
      lastUpdated: 'December 28, 2025',
      sections: [
        {
          title: 'Overview',
          content: 'This Data Collection Policy describes how we handle user information in our applications and services. We are committed to protecting your privacy and maintaining transparency about our data practices.'
        },
        {
          title: 'What Data We Collect',
          content: 'Our applications do not collect any personal data from users. We do not collect, use, or share any personal information such as names, email addresses, phone numbers, or browsing history.'
        },
        {
          title: 'Third-Party Services',
          content: 'Our applications do not integrate with third-party analytics, advertising, or data collection services. No data is shared with external parties.'
        },
        {
          title: 'Device Permissions',
          content: 'If our applications request any device permissions, they are used solely for the functionality explicitly requested by the user and are not used to collect personal data.'
        },
        {
          title: 'Cookies and Tracking',
          content: 'Our web applications do not use cookies or tracking technologies to collect user data.'
        },
        {
          title: 'Changes to This Policy',
          content: 'We may update this policy from time to time. Changes will be posted on this page with an updated revision date. Your continued use of our applications following the posting of revised Policy means that you accept and agree to the changes.'
        },
        {
          title: 'Contact Us',
          content: 'If you have any questions about this Data Collection Policy, please contact us through our GitHub profile or other contact methods available on our website.'
        }
      ]
    }
  }
}

function Legal() {
  return (
    <>
      <HeadComponent content={content.head} />
      <main className={styles.legalContainer}>
        <div className={styles.policyContent}>
          <h1>{content.body.policy.title}</h1>
          <p className={styles.lastUpdated}>Last Updated: {content.body.policy.lastUpdated}</p>
          
          {content.body.policy.sections.map((section, index) => (
            <section key={index} className={styles.policySection}>
              <h2>{section.title}</h2>
              <p>{section.content}</p>
            </section>
          ))}
        </div>
      </main>
    </>
  )
}

export default Legal
