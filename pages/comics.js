import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function comics() {
    return (
        <div>
        <h2>some nice comics here for all publics</h2>
        <h3>
        <Link href='/'>
        <a className={styles.card}>Back</a>
        </Link>
        </h3>
        </div>


    )
}
