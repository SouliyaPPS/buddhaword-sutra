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
        <h1>Latest Sutra</h1>
        {news.length === 0 && <h3>No Sutra</h3>}
        {news.map((item) => (
          <NewsItem key={item.id} news={item} />
        ))}
        {news.length > 0 && (
          <Link href="/sutra">
            <a className="btn-secondary">View All Sutra</a>
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
  const res = await fetch(`${API_URL}/sutra?_sort=date:ASC&_limit=5`);
  console.log("res=>", res);
  const news = await res.json()

  return {
    props: { news },
    revalidate: 1,
  }
}
