import styles from '../styles/Home.module.css';

export const Main = () => (
  <main className={styles.main}>
    <h1 className={styles.title}>
      Welcome to <span>Blogroll.js</span>
    </h1>

    <p className={styles.description}>
      A curated list of blog articles about the JS ecosystem and modern Web Dev.
    </p>

    <div className={styles.grid}>
      <a
        className={styles.card}
        href="https://auth0.com/blog/how-to-manage-javascript-fatigue/"
        target="_blank"
        rel="noreferrer"
      >
        <p>How to Manage JavaScript Fatigue</p>
      </a>

      <a
        className={styles.card}
        href="https://www.taniarascia.com/react-architecture-directory-structure/"
        target="_blank"
        rel="noreferrer"
      >
        <p>How to Structure and Organize a React Application</p>
      </a>

      <a
        className={styles.card}
        href="https://www.toptal.com/javascript/comprehensive-guide-javascript-design-patterns"
        target="_blank"
        rel="noreferrer"
      >
        <p>The Comprehensive Guide to JavaScript Design Patterns</p>
      </a>
    </div>
  </main>
);
