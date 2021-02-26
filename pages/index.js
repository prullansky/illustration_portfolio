import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <div className={styles.containerImage}>
        <img
          className={styles.homeIllustration}
          src="/illustrations/ROLAND1.jpg"
          alt="three portraits"
        />
      </div>
    </Layout>
  )
}
