import React from 'react'
import styles from '../../styles/Home.module.css'
import Navbar from '../navbar'
import {data} from './data.js'
import { useRouter } from 'next/router'

export default function id() {

  const router = useRouter()
  const { id } = router.query

   
    

  const find = data.find(comic => comic.id === {id}.id)

  console.log(find.description)



    return (
    <div >
    
          <h1 className={styles.title}>
              ale rodriguez
          </h1>
    
          <div className={styles.homeLayout}>
    
            <Navbar />
        
            <h2>{find.description}</h2>
        
    {find.pictures.map(picture => {
      return (
        <div className={styles.comicContainer}>
        <img src={picture}/>
        </div>
      )
    })}
            
            
    </div>
    </div>
    )}