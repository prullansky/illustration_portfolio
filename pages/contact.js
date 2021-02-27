import Link from 'next/link'
import Layout from '../components/Layout'

export default function Contact() {
  return (
    <Layout>
      <p>e-mail adress</p>

      <Link href="/">
        <a>Back</a>
      </Link>
    </Layout>
  )
}
