import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import { IllustrationData } from '../data/IllustrationData.js'

export default function Illustration() {
  const [activePic, setActivePic] = useState(undefined)

  const goBack = (e) => {
    setActivePic(pic)
  }

  return (
    <Layout>
      <div>
        <div className={styles.containerImage}>
          <div id="gallery" style={{ display: !activePic ? 'none' : 'block' }}>
            <a href={activePic?.id}>
              <button
                className={styles.wrapper}
                onClick={() => setActivePic(undefined)}
              >
                <img className={styles.fullScreen} src={activePic?.full} />
              </button>
            </a>
          </div>
        </div>
        <div className={styles.containerIllustrations}>
          {IllustrationData.map((pic, picIndex) => {
            return (
              <div key={picIndex} id={pic.id}>
                <button
                  className={styles.wrapper}
                  onClick={() => setActivePic(pic)}
                >
                  <a href="#gallery">
                    <img id={pic.id} className={styles.image} src={pic.full} />
                  </a>
                </button>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}
