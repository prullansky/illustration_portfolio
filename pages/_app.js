import styles from '../styles/globals.css'
import Navbar from './navbar.js'

function MyApp({ Component, pageProps }) {
  return (
    <div className={styles.homeLayout}>
      <Component {...pageProps} />;
      <Navbar />
    </div>
  )
}

export default MyApp
