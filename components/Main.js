// import styles from '../styles/Home.module.css';

export const Main = () => (
  <main className={styles.main}>
    <div className={styles.grid}>
      <a href="https://nextjs.org/docs" className={styles.card}>
        {/* <h2>Documentation &rarr;</h2> */}
        <p>How to Manage JavaScript Fatigue</p>
      </a>

      <a href="https://nextjs.org/learn" className={styles.card}>
        {/* <h2>Learn &rarr;</h2> */}
        <p>
          React Architecture: How to Structure and Organize a React Application
        </p>
      </a>

      <a href="https://nextjs.org/learn" className={styles.card}>
        {/* <h2>Learn &rarr;</h2> */}
        <p>The Comprehensive Guide to JavaScript Design Patterns</p>
      </a>
    </div>
  </main>
);
