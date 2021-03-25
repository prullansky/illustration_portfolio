import styles from '../styles/Home.module.css'
import Footer from './Footer.js'
import Navbar2 from './Navbar2.js'

export default function Layout({ children }) {
  return (
    <div className={styles.homeLayout}>
      <Navbar2 />
      {children}
      <Footer />
    </div>
  )
}
