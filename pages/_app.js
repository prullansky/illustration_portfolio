import styles from '../styles/globals.css'
import Navbar from './navbar.js'

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.homeLayout}>
      <Navbar />
      <Component {...pageProps} />;
    </div>
  )
}

export default MyApp
