import Link from "next/link";
import Layout from "../../component/Layout";
import { API_URL } from "@/config/index";
import NewsItem from "../../component/NewsItem";
import styles from "/styles/News.module.css";

export default function News({ news }) {
  return (
    <div>
      <Layout>
        <h1>Sutra</h1>
        {news.length === 0 && <h3>No Sutra</h3>}
        {news.map((item) => (
          <NewsItem key={item.id} news={item} />
        ))}
        <Link href="/">
          <a className={styles.back}>Go Back</a>
        </Link>
      </Layout>
    </div>
  );
}

// export async function getServerSideProps() {
//   const res = await fetch(`${API_URL}/api/news`);
//   const news = await res.json();

//   return {
//     props: { news },
//   };
// }

export async function getStaticProps() {
  const res = await fetch(`${API_URL}/api/sutra`);
  const news = await res.json();

  return {
    props: { news },
    revalidate: 1,
  };
}
