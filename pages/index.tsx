import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>carbon-database</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          carbon-database
        </h1>

        <p className={styles.description}>
          easy global carbon footprint
        </p>

        <div className={styles.grid}>
          <a href="/data/electricity" className={styles.card}>
            <h2>⚡ Electricity</h2>
            <p>Find electricity emission factors</p>
          </a>

          <a href="https://nextjs.org/docs" className={styles.card}>
            <h2>🚈 Transport</h2>
            <p>Find transport emission factors</p>
          </a>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contribute{' '}
          <span className={styles.logo}>
            <Image src="/GitHub-Mark-32px.png" alt="Github Logo" width={32} height={32} />
          </span>
        </a>
      </footer>
    </div>
  )
}
