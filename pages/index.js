import Layout from '../components/Layout'
import Navbar from '../components/Navbar'
import styles from '../styles/Home.module.css'
import { IllustrationData } from '../data/IllustrationData'

export default function Home() {
  return (
    <Layout>
      <div className={styles.containerImage}>
        <img
          className={styles.homeIllustration}
          src={
            IllustrationData[
              Math.round(Math.random() * IllustrationData.length)
            ].full
          }
          alt="three portraits"
        />
      </div>
    </Layout>
  )
}
