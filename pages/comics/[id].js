import React from 'react'
import styles from '../../styles/Home.module.css'
import { comicsList } from '../../data/ComicsData.js'
import { useRouter } from 'next/router'
import Layout from '../../components/Layout'

// This function is only called on the server.
//
// Because on the server `useRouter` returns a router with
// `router.query` that is an empty object, we manually
// extract the comics id here and pass it to ComicsPage
// props
//
// It's weird, but that's how Next API works. Not sure why
// they made that decision
export async function getServerSideProps(context) {
  return {
    props: {
      comicId: context.query.id,
    },
  }
}

export default function ComicPage(props) {
  const router = useRouter()

  // here if router.query.id is empty, we use the `comicId`
  // from props that was populated by `getServerSideProps`
  // above
  const comicId = router.query.id ?? props.comicId

  const currentComic = comicsList.find((comic) => comic.id === comicId)

  console.log('ID', comicId)
  // console.log('DATA', data)
  console.log('currentComic', currentComic)

  if (!currentComic) {
    return (
      <Layout>
        <div>
          <div className={styles.layoutComics}>
            <h2>Sorry, comic not found</h2>
          </div>
        </div>
      </Layout>
    )
  }

  return (
    <Layout>
      <div className={styles.containerDynamicComic}>
        {/* <div className={styles.layoutComics}> */}
        {/* <h2>{currentComic.title}</h2>
                <ul>
                    <li>{currentComic.description}</li>
                </ul> */}

        {currentComic.images.map((image, imageIndexInArray) => {
          return (
            <div
              className={styles.dynamicComic}
              key={`${comicId}-${imageIndexInArray}`}
            >
              <img src={image} className={styles.comicDetail} />
            </div>
          )
        })}
      </div>
    </Layout>
  )
}
