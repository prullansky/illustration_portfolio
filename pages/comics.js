import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { comicsList } from './comics/data.js'

export default function Comics() {
  return (
    <div>
      <h1 className={styles.title}>ale rodriguez</h1>

      <div className={styles.homeLayout}>
        {comicsList.map((comic) => {
          return (
            <div key={comic.id} className={styles.containerIllustrations}>
              <Link href={`/comics/${comic.id}`}>
                <button className={styles.wrapper}>
                  <img
                    id="image"
                    className={styles.comic}
                    src={comic.thumbnail}
                  />
                </button>
              </Link>
            </div>
          )
        })}
      </div>
    </div>
  )
}
