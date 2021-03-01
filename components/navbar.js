import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className={styles.navbar}>
      <Link href="/">
        <a className={styles.card}>Home</a>
      </Link>

      <Link href="/web_projects">
        <a className={styles.card}>Web Projects</a>
      </Link>

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
  )
}
