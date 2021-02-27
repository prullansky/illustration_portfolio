import styles from '../styles/Home.module.css'
import Navbar from './Navbar.js'

export default function Layout({ children }) {
  return (
    <div className={styles.homeLayout}>
      <Navbar />
      {children}
    </div>
  )
}
