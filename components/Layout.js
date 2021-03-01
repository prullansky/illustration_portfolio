import styles from '../styles/Home.module.css'
import Navbar from './Navbar.js'
import Footer from './Footer.js'

export default function Layout({ children }) {
  return (
    <div className={styles.homeLayout}>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
