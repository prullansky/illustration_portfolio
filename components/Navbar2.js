import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'

export default function Navbar2() {
  const router = useRouter()

  const [showLinks, setShowLinks] = useState(false)

  return (
    <div className={styles.navbar}>
      <div className={styles.leftSide}>
        <div className={styles.home} id={showLinks ? 'hidden' : ''}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </div>
        <div className={styles.hidden}>
          <Link href="/web_projects">
            <a>Web Projects</a>
          </Link>

          <Link href="/illustration">
            <a>Illustration</a>
          </Link>
          <Link href="/comics">
            <a>Comics</a>
          </Link>
          <Link href="/video">
            <a>Video</a>
          </Link>

          <Link href="/bio">
            <a>Bio</a>
          </Link>
        </div>
        <button>Open</button>
      </div>

      <div className={styles.rightSide}>
        <div className={styles.links}>
          <Link href="/web_projects">
            <a>Web Projects</a>
          </Link>

          <Link href="/illustration">
            <a>Illustration</a>
          </Link>
          <Link href="/comics">
            <a>Comics</a>
          </Link>
          <Link href="/video">
            <a>Video</a>
          </Link>

          <Link href="/bio">
            <a>Bio</a>
          </Link>
        </div>
      </div>
    </div>
  )
}
