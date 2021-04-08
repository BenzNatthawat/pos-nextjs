import { useRouter } from 'next/router'
import Layout from '../components/layout'
import { DataProvider, DataContext } from '../hook/data'
import 'antd/dist/antd.css'
import '../styles/globals.scss'

function MyApp({ Component, pageProps }) {
  const route = useRouter()
  if (route?.route?.split('/')?.[1] === 'auth') {
    return <>
      <Component {...pageProps} />
    </>
  } else {
    return <>
      <DataProvider>
        <DataContext.Consumer>
          {({ carts, setCarts }) => {
            return (
              <>
                <Layout carts={{ carts, setCarts }}>
                  <Component {...pageProps} carts={{ carts, setCarts }} />
                </Layout>
              </>
            )
          }}
        </DataContext.Consumer>
      </DataProvider>
    </>
  }
}

export default MyApp
