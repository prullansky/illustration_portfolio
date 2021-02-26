import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Navbar from './Navbar.js'
import { useState } from 'react'
import { data } from './illustration/data.js'

export default function Illustration() {
  const [activePic, setActivePic] = useState(undefined)

  return (
    <div>
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
      {data.map((pic, picIndex) => {
        return (
          <div key={picIndex} className={styles.containerIllustrations}>
            <button
              className={styles.wrapper}
              onClick={() => setActivePic(pic)}
            >
              <img id="image" className={styles.image} src={pic.thumbnail} />
            </button>
          </div>
        )
      })}
    </div>
  )
}
