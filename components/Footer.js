import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Link href="https://github.com/prullansky">
        <a className={styles.nav_item}>Github</a>
      </Link>

      <Link href="https://www.linkedin.com/in/ale-j-rodriguez/">
        <a className={styles.nav_item}>Linkedin</a>
      </Link>

      <Link href="https://alejrodriguez.medium.com/">
        <a className={styles.nav_item}>Medium</a>
      </Link>

      <Link href="mailto:alesrods@gmail.com">
        <a className={styles.nav_item}>Contact me</a>
      </Link>
    </div>
  )
}
