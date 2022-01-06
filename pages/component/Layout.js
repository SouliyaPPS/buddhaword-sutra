import Head from 'next/head'
import style from '../../styles/Layout.module.css'
import Header from './Header'

export default function Layout({ title, keywords, description, children }) {
  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
      </Head>
      <Header />
      <div className={style.container}>{children}</div>
    </div>
  )
}

Layout.defaultProps = {
  title: 'Buddhaword',
  description: 'Buddhaword is a website for the study of Buddhism.',
  keywords: 'Buddhaword, the word of buddha, ຄຳສອນພຣະພຸດທະເຈົ້າ, buddhawajana',
}
