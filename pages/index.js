import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import { IllustrationData } from '../data/IllustrationData'

export default function Home() {
  let number = Math.round(Math.random() * IllustrationData.length)

  return (
    <Layout>
      <div className={styles.containerImage}>
        <img
          className={styles.homeIllustration}
          src={IllustrationData[number].full}
          alt="three portraits"
        />
      </div>
    </Layout>
  )
}
