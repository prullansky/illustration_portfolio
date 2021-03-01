import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import { data } from '../data/IllustrationData.js'

export default function Illustration() {
  const [activePic, setActivePic] = useState(undefined)

  return (
    <Layout>
      <div className={styles.containerComics}>
        <div
          className={styles.gallery}
          style={{ display: !activePic ? 'none' : 'block' }}
        >
          <button
            className={styles.wrapper}
            onClick={() => setActivePic(undefined)}
          >
            <img className={styles.homeIllustration} src={activePic?.full} />
          </button>
        </div>
        <div className={styles.containerIllustrations}>
          {data.map((pic, picIndex) => {
            return (
              <div key={picIndex}>
                <button
                  className={styles.wrapper}
                  onClick={() => setActivePic(pic)}
                >
                  <img
                    id="image"
                    className={styles.image}
                    src={pic.thumbnail}
                  />
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}
