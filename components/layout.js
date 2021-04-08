import { Layout } from 'antd'
import Navbar from './navbar'
import Sidebar from './sidebar'

const Navber = ({ children }) => {
  return <>
    <Layout>
      <Navbar />
      <Layout>
        <Sidebar />
        {children}
      </Layout>
    </Layout>
  </>
}

export default Navber