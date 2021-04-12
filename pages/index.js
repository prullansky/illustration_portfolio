import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import { IllustrationData } from '../data/IllustrationData'

export default function Home() {
  // let number = Math.round(Math.random() * (IllustrationData.length - 1))

  return (
    <Layout>
      <div className={styles.homeContainer}>
        <div className={styles.homeText}>
          <h1> ale rodriguez</h1>
          <p>Visual artist discovering the marvels of web development.</p>
          <p>
            I love to <a href="/illustration">draw</a>, to film and edit{' '}
            <a href="/video">video</a> and to <a href="/comics">tell stories</a>{' '}
            with pictures and words. Sometimes, only words: I{' '}
            <a href="https://alejrodriguez.medium.com/">write</a> essays about
            the intersection between media, culture and life.
          </p>
          <p>
            On my search for new creative outlets I found{' '}
            <a href="/web_projects">coding</a> : I enjoy the playfulness of it,{' '}
            the unlimited creative potential that it entails and to feel like a
            child tinkering with it.
          </p>
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
