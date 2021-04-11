import { Layout } from 'antd'
import Navbar from './navbar'
import Sidebar from './sidebar'

const Navber = ({ children, carts }) => {
  return <>
    <Layout>
      <Navbar />
      <Layout>
        {children}
      </Layout>
    </Layout>
  </>
}

export default Navber