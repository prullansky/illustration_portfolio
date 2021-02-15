import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Navbar  from './navbar.js'

export default function illustration() {

    let images = [
        {
            thumbnail: '/illustrations/thumbnail.jpg',
            full: '/illustrations/soup.jpg'
        },
        {
            thumbnail: '/illustrations/aguimes_thumbnail.jpg',
            full: '/illustrations/aguimes_full.jpg'
        },
        {
            thumbnail: '/illustrations/meme_god_thumbnail.jpg',
            full: '/illustrations/meme_god_full.jpg'
        },
        {
            thumbnail: '/illustrations/palmera_thumbnail.jpg',
            full: '/illustrations/palmera_full.jpg'
        },
        {
            thumbnail: '/illustrations/mike_thumbnail.jpg',
            full: '/illustrations/mike_full.jpg'
        }

        
    ]

    return (
    <div >

      <h1 className={styles.title}>
          ale rodriguez
      </h1>

      <div className={styles.homeLayout}>

        <Navbar />

    {images.map(image => {
    return (
        <div className={styles.containerImage}>
            
            <img id='image' src={image.thumbnail}/>

        </div>
        
    )
    
    })})
    </div>
    </div>
)}
