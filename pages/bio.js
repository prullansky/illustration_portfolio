import Layout from '../components/Layout'
import Link from 'next/link'

export default function Bio() {
  return (
    <Layout>
      <div>
        <h2>about me</h2>

        <img src="/photos/11458137305569121185.jpeg" />

        <h3>
          <Link href="/">
            <a>Back</a>
          </Link>
        </h3>
      </div>
    </Layout>
  )
}
