import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          ale's portfolio
        </h1>

        <img className={styles.homeIllustration} src="/illustrations/videomames1.jpg" alt="three portraits" />

        <div className={styles.grid}>


          <Link href="/illustration">
            <a className={styles.card}>Illustration</a>
          </Link>

          <Link href="/comics">
            <a className={styles.card}>Comics</a>
          </Link>
 
          <Link href="/bio">
            <a className={styles.card}>Bio</a>
          </Link>

          <Link href="/contact">
            <a className={styles.card}>Contact</a>
          </Link>
        </div>
      </main>

      {/* <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer> */}
    </div>
  )
}
