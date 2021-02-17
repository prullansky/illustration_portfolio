import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Navbar  from './navbar.js'
import {data} from './comics/data.js'

export default function comics(props) {


    return (
        <div >
    
          <h1 className={styles.title}>
              ale rodriguez
          </h1>
    
          <div className={styles.homeLayout}>
    
            <Navbar />
        
        {data.map(pic => {
        return (
            <div className={styles.containerIllustrations}>
            <Link href= {`/comics/${pic.id}`} key={pic.id}>
              <button className={styles.wrapper}>
                <img id='image' className={styles.homeIllustration} src={pic.thumbnail}/>
              </button>
            </Link>  
        
            </div>
            
            
        )
        
        })})
        </div>
        </div>
    )}