import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image from 'next/image'

export default function Home() {
  return (
    <div className={styles.containerImage}>
      <img
        className={styles.homeIllustration}
        src="/illustrations/ROLAND1.jpg"
        alt="three portraits"
      />
    </div>
  )
}
