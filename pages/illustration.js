import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function illustration() {

    let images = [

        '/illustrations/10.jpg',
        '/illustrations/soup.jpg',
    ]

    return (
    <div>
    <h2>all these nice illustrations yummie</h2>
    <h3>
            <Link href='/'>
                <a className={styles.card}>Back</a>
            </Link>
    </h3>
    {images.map(image => {
    return (
        <div>
            
            <img src={image}/>


        </div>
    )
    
    })})
    </div>
)}
