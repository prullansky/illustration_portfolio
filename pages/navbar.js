import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function navbar() {
    return (
        <div>
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
        </div>
    )
}
