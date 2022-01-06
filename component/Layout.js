import Head from 'next/head'
import style from '@/styles/Layout.module.css'
import Header from './Header'
import Footer from './Footer'
import { useRouter } from 'next/router'
import Hero from './Hero'

export default function Layout({ title, keywords, description, children }) {
  const router = useRouter()
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      {router.pathname === '/' && <Hero />}
      <div className={style.container}>{children}</div>
      <Footer />
    </div>
  )
}

Layout.defaultProps = {
  title: 'Buddhaword',
  description: 'Buddhaword is a website for the study of Buddhism.',
  keywords: 'Buddhaword, the word of buddha, ຄຳສອນພຣະພຸດທະເຈົ້າ, buddhawajana',
}
