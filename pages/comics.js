import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { comicsList } from '../data/ComicsData.js'
import Layout from '../components/Layout'

export default function Comics() {
  return (
    <Layout>
      <div className={styles.layoutComics}>
        {comicsList.map((comic) => {
          return (
            <div key={comic.id}>
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
    </Layout>
  )
}
