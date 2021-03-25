import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Footer() {
  return (
    <div className={styles.footer}>
      <Link href="https://github.com/prullansky">
        <img src="/footer/github.svg" className={styles.icon} />
      </Link>

      <Link href="https://www.linkedin.com/in/ale-j-rodriguez/">
        <img src="footer/linkedin.svg" className={styles.icon} />
      </Link>

      <Link href="https://alejrodriguez.medium.com/">
        <img src="footer/medium.svg" className={styles.icon} />
      </Link>

      <Link href="mailto:alesrods@gmail.com">
        <img src="footer/email.svg" className={styles.icon} />
      </Link>
    </div>
  )
}
