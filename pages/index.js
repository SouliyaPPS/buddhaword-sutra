import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import { API_URL } from '@/config/index'
import Layout from '../component/Layout'
import NewsItem from '../component/NewsItem'

export default function HomePage({ news }) {
  return (
    <div>
      <Layout>
        <h1>Latest News</h1>
        {news.length === 0 && <h3>No News</h3>}
        {news.map((item) => (
          <NewsItem key={item.id} news={item} />
        ))}
        {news.length > 0 && (
          <Link href="/sutra">
            <a className="btn-secondary">View All News</a>
          </Link>
        )}
      </Layout>
    </div>
  )
}

// export async function getServerSideProps() {
//   const res = await fetch(`${API_URL}/api/sutra`);
//   const news = await res.json();

//   return {
//     props: { news },
//   };
// }

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/sutra`)
  const news = await res.json()

  return {
    props: { news: news.slice(0, 5) },
    revalidate: 1,
  }
}
