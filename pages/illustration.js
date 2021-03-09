import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'
import { useState } from 'react'
import { IllustrationData } from '../data/IllustrationData.js'

export default function Illustration() {
  const [activePic, setActivePic] = useState(undefined)

  return (
    <Layout>
      <div>
        <div className={styles.containerImage}>
          <div id="gallery" style={{ display: !activePic ? 'none' : 'block' }}>
            <button
              className={styles.wrapper}
              onClick={() => setActivePic(undefined)}
            >
              <img className={styles.homeIllustration} src={activePic?.full} />
            </button>
          </div>
        </div>
        <div className={styles.containerIllustrations}>
          {IllustrationData.map((pic, picIndex) => {
            return (
              <div key={picIndex}>
                <button
                  className={styles.wrapper}
                  onClick={() => setActivePic(pic)}
                >
                  <a href="#gallery">
                    <img id="image" className={styles.image} src={pic.full} />
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
