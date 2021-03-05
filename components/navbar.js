import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className={styles.nav_top}>
      <div className={styles.nav_item_left}>
        <Link href="/">
          <a className={styles.nav_item}>Home</a>
        </Link>
      </div>
      <div className={styles.flex}>
        <div className={styles.nav_item}>
          <Link href="/web_projects">
            <a>Web Projects</a>
          </Link>
        </div>
        <div className={styles.nav_item}>
          <Link href="/illustration">
            <a>Illustration</a>
          </Link>
        </div>
        <div className={styles.nav_item}>
          <Link href="/comics">
            <a>Comics</a>
          </Link>
        </div>
        <div className={styles.nav_item}>
          <Link href="/video">
            <a>Video</a>
          </Link>
        </div>
        <div className={styles.nav_item}>
          <Link href="/bio">
            <a>Bio</a>
          </Link>
        </div>
      </div>
      {/* <Link href="/contact">
        <a className={styles.nav_item}>Contact</a>
      </Link> */}
    </nav>
  )
}
