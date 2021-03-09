import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navbar() {
  const router = useRouter()

  return (
    <nav className={styles.nav_top}>
      <div
        className={[
          styles.nav_item_left,
          router.pathname == '/' ? styles.nav_item_current : '',
        ].join(' ')}
      >
        <Link href="/">
          <a className={styles.nav_item}>Home</a>
        </Link>
      </div>
      <div className={styles.flex}>
        <div
          className={[
            styles.nav_item,
            router.pathname == '/web_projects' ? styles.nav_item_current : '',
          ].join(' ')}
        >
          <Link href="/web_projects">
            <a>Web Projects</a>
          </Link>
        </div>
        <div
          className={[
            styles.nav_item,
            router.pathname == '/illustration' ? styles.nav_item_current : '',
          ].join(' ')}
        >
          <Link href="/illustration">
            <a>Illustration</a>
          </Link>
        </div>
        <div
          className={[
            styles.nav_item,
            router.pathname == '/comics' ? styles.nav_item_current : '',
          ].join(' ')}
        >
          <Link href="/comics">
            <a>Comics</a>
          </Link>
        </div>
        <div
          className={[
            styles.nav_item,
            router.pathname == '/video' ? styles.nav_item_current : '',
          ].join(' ')}
        >
          <Link href="/video">
            <a>Video</a>
          </Link>
        </div>
        <div
          className={[
            styles.nav_item,
            router.pathname == '/bio' ? styles.nav_item_current : '',
          ].join(' ')}
        >
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
