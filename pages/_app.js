import { useRouter } from 'next/router'
import 'antd/dist/antd.css'
import '../styles/globals.scss'
import Layout from '../components/layout'

function MyApp({ Component, pageProps }) {
  const route = useRouter()
  if (route?.route?.split('/')?.[1] === 'auth') {
    return <>
      <Component {...pageProps} />
    </>
  } else {
    return <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  }
}

export default MyApp
