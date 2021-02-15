import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Image  from 'next/image'
import Navbar  from './navbar.js'

export default function Home() {
  return (


    
    <div>

      <h1 className={styles.title}>
          ale rodriguez
      </h1>

      <div className={styles.homeLayout}>
        
        <Navbar />

        <div className={styles.containerImage}>
          <img className={styles.homeIllustration}  src="/illustrations/ROLAND1.jpg" alt="three portraits" />
        </div>

      </div>

    </div>
  )
}
