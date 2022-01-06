import { useRouter } from 'next/router'
import Layout from '../../component/Layout.js'

export default function SingleSutra() {
  const router = useRouter()
  console.log('router===>', router)
  return (
    <Layout>
      <h2>Single Sutra</h2>
      <h3>{router.query.slug}</h3>
    </Layout>
  );
}
