import React from 'react';
import styles from '../styles/Home.module.css';

const home = () => {
  return (
    <div className="relative bg-[#111] background">
      <div className="absolute h-full w-full bg-[url('../public/grid.svg')] [background-position:calc(100%+5px)_calc(100%+5px)] bg-fixed">
        <main className={styles.main}>
          <h1 className={styles.title}>
            Welcome to <a href="https://nextjs.org">Next.js!</a>
          </h1>
          <h2 className="text-3xl underline mt-12">I'm Adarsh</h2>

          <p className={styles.description}>
            Get started by editing{' '}
            <code className={styles.code}>pages/index.js</code>
          </p>
        </main>
      </div>
    </div>
  );
};

export default home;
