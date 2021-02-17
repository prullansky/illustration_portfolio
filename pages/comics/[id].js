import React from 'react'
import styles from '../../styles/Home.module.css'
import Navbar from '../navbar'
import {data} from './data.js'

export default function id(props) {

    console.log(props)



    return (
        <div >
    
          <h1 className={styles.title}>
              ale rodriguez
          </h1>
    
          <div className={styles.homeLayout}>
    
            <Navbar />
        
            <h2>TEST</h2>
        

            {/* <div className={styles.containerIllustrations}>
        
              <button className={styles.wrapper}>
                <img id='image' src={pic}/>
              </button>  
        
            </div> */}
            
            
        </div>
        </div>
    )}