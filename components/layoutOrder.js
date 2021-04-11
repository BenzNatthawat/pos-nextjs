import { Layout } from 'antd'
import Navbar from './navbar'
import Sidebar from './sidebar'

const LayoutOrder = ({ children, carts, name }) => {
  return <>
    <Layout>
      <Navbar />
      <Layout>
        <Sidebar {...carts} name={name} />
        {children}
      </Layout>
    </Layout>
  </>
}

export default LayoutOrder