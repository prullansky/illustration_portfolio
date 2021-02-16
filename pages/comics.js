import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Navbar  from './navbar.js'
import {useState} from 'react'

export default function comics() {

    let images = [ 
      {id : 'child_pose',
      pictures: '/comics/child_pose/1.jpg'},
     ]

    return (
        <div >
    
          <h1 className={styles.title}>
              ale rodriguez
          </h1>
    
          <div className={styles.homeLayout}>
    
            <Navbar />
        
        {images.map(pic => {
        return (
            <div className={styles.containerIllustrations}>
            <Link href= {`/comics/${pic.id}`} key={pic.id}>
              <button className={styles.wrapper}>
                <img id='image' src={pic.pictures}/>
              </button>
            </Link>  
        
            </div>
            
            
        )
        
        })})
        </div>
        </div>
    )}