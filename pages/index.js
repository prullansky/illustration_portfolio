import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import { IllustrationData } from '../data/IllustrationData'

export default function Home() {
  // let number = Math.round(Math.random() * (IllustrationData.length - 1))

  return (
    <Layout>
      <div className={styles.homeContainer}>
        <div className={styles.homeText}>
          <h1>Hi! I'm ale.</h1>
          <p>
            <a href="/illustration">Illustrator</a>, <a href="/video">Video</a>{' '}
            and <a href="/comics">Comic artist</a> turned into{' '}
            <a href="/web_projects">Web Developer</a>.
          </p>
          <p>
            I also like to <a href="https://alejrodriguez.medium.com/">write</a>{' '}
            about the intersection between culture and life.
          </p>
          <p>It's all I can think of actually, tacos and burritos.</p>
          <p>It's all I can think of actually, tacos and burritos.</p>
        </div>
        <div className={styles.homePicContainer}>
          <img
            className={styles.homePic}
            src="/photos/genichiro_sajon.png"
            alt="picture of the author"
          />
        </div>

        {/*
        Picture randomizer
        
         <img
          className={styles.homeIllustration}
          src={IllustrationData[number].full}
          alt="home illustration"
        /> */}
      </div>
    </Layout>
  )
}
