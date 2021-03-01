import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div className={styles.nav_top}>
      <Link href="/">
        <a className={styles.nav_item}>Home</a>
      </Link>

      <Link href="/web_projects">
        <a className={styles.nav_item}>Web Projects</a>
      </Link>

      <Link href="/illustration">
        <a className={styles.nav_item}>Illustration</a>
      </Link>

      <Link href="/comics">
        <a className={styles.nav_item}>Comics</a>
      </Link>

      <Link href="/video">
        <a className={styles.nav_item}>Video</a>
      </Link>

      <Link href="/bio">
        <a className={styles.nav_item}>Bio</a>
      </Link>

      <Link href="/contact">
        <a className={styles.nav_item}>Contact</a>
      </Link>
    </div>
  )
}
