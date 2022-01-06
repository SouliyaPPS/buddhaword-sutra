/* eslint-disable @next/next/no-html-link-for-pages */
import React from 'react'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Layout from './component/Layout'

export default function About() {
  return (
    <div className={styles.container}>
      <Layout title="About Buddhaword">
        <h1>About</h1>
        <p>About Buddhaword</p>
      </Layout>
    </div>
  )
}
