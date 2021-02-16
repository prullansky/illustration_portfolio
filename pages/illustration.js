import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Navbar  from './navbar.js'
import {useState} from 'react'

export default function illustration() {

    const [ activePic, setActivePic ] = useState(undefined)

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

        <div className= {styles.gallery} style={{ display: !activePic ? "none" : "block" }}>

        <button className={styles.wrapper} onClick={() => setActivePic(undefined)}>

            <img className={styles.homeIllustration} src={activePic?.full} />
        </button>
        </div>

        

    {images.map(pic => {
    return (
        <div className={styles.containerIllustrations}>




          <button className={styles.wrapper} onClick={() => setActivePic(pic)}>
            <img id='image' src={pic.thumbnail}/>
          </button>  




        </div>
        
        
    )
    
    })})
    </div>
    </div>
)}
