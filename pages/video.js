import React from 'react'
import Layout from '../components/Layout'
import styles from '../styles/Home.module.css'

export default function video() {
  return (
    <Layout>
      <div className={styles.containerVideos}>
        <iframe
          className={styles.video}
          width="1120"
          height="630"
          src="https://www.youtube.com/embed/XawA7O46yJM"
          frameborder="0"
        ></iframe>
        <iframe
          className={styles.video}
          width="1120"
          height="630"
          src="https://www.youtube.com/embed/Ubm_WsngUHc"
          frameborder="0"
        ></iframe>
        <iframe
          className={styles.video}
          width="1120"
          height="630"
          src="https://www.youtube.com/embed/fndIJmvtEGE"
          frameborder="0"
        ></iframe>
        <iframe
          className={styles.video}
          width="1120"
          height="630"
          src="https://www.youtube.com/embed/Z9O1zB1DE3U"
          frameborder="0"
        ></iframe>
        <iframe
          className={styles.video}
          width="1120"
          height="630"
          src="https://www.youtube.com/embed/THXc_fM-r7o"
          frameborder="0"
        ></iframe>
        <iframe
          className={styles.video}
          width="1120"
          height="630"
          src="https://www.youtube.com/embed/lJQ2nw-ZOV4"
          frameborder="0"
        ></iframe>
        <iframe
          className={styles.video}
          width="1120"
          height="630"
          src="https://www.youtube.com/embed/r6IbfB-X2Is"
          frameborder="0"
        ></iframe>
      </div>
    </Layout>
  )
}
