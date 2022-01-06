import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import Layout from './component/Layout'

export default function HomePage() {
  return (
    <div className={styles.container}>
      <Layout>
        <h1>Home</h1>

        <Link href="/about">
          <a>About</a>
        </Link>
      </Layout>
    </div>
  )
}
