import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Navbar  from './navbar.js'
import {useState} from 'react'
import {data} from './illustration/data.js'

export default function illustration() {

    const [ activePic, setActivePic ] = useState(undefined)

    

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

        

    {data.map(pic => {
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
