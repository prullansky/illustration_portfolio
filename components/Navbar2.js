import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { FaBars } from 'react-icons/fa'

export default function Navbar2() {
  const router = useRouter()

  const [showLinks, setShowLinks] = useState(true)

  const displayHidden = (e) => {
    setShowLinks(!showLinks)
    console.log(showLinks)
  }

  return (
    <div className={styles.navbar}>
      <div className={styles.leftSide}>
        <div
          className={[
            styles.home,
            router.pathname == '/' ? styles.current : '',
          ].join(' ')}
          id={showLinks ? 'hidden' : ''}
        >
          <Link href="/">
            <a>Home</a>
          </Link>
        </div>
        <div className={showLinks ? styles.hidden : styles.show}>
          <div className={router.pathname == '/' ? styles.current : ''}>
            <Link href="/">
              <a>Home</a>
            </Link>
          </div>

          <div
            className={router.pathname == '/web_projects' ? styles.current : ''}
          >
            <Link href="/web_projects">
              <a>Web Projects</a>
            </Link>
          </div>

          <div
            className={router.pathname == '/illustration' ? styles.current : ''}
          >
            <Link href="/illustration">
              <a>Illustration</a>
            </Link>
          </div>

          <div className={router.pathname == '/comics' ? styles.current : ''}>
            <Link href="/comics">
              <a>Comics</a>
            </Link>
          </div>

          <div className={router.pathname == '/video' ? styles.current : ''}>
            <Link href="/video">
              <a>Video</a>
            </Link>
          </div>

          <div className={router.pathname == '/bio' ? styles.current : ''}>
            <Link href="/bio">
              <a>Bio</a>
            </Link>
          </div>
        </div>
        <button onClick={displayHidden}>
          <FaBars />
        </button>
      </div>

      <div className={styles.rightSide}>
        <div className={styles.links}>
          <div
            className={router.pathname == '/web_projects' ? styles.current : ''}
          >
            <Link href="/web_projects">
              <a>Web Projects</a>
            </Link>
          </div>
          <div
            className={router.pathname == '/illustration' ? styles.current : ''}
          >
            <Link href="/illustration">
              <a>Illustration</a>
            </Link>
          </div>
          <div className={router.pathname == '/comics' ? styles.current : ''}>
            <Link href="/comics">
              <a>Comics</a>
            </Link>
          </div>
          <div className={router.pathname == '/video' ? styles.current : ''}>
            <Link href="/video">
              <a>Video</a>
            </Link>
          </div>
          <div className={router.pathname == '/bio' ? styles.current : ''}>
            <Link href="/bio">
              <a>Bio</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
