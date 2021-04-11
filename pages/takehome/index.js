import React, { useEffect, useState } from 'react'
import LayoutOrder from '../../components/layoutOrder'
import { Layout, Row, Col } from 'antd'
import ProductOrder from '../../components/productorder'
const { Content, } = Layout

const TakeHome = ({ products }) => {
  const [carts, setCarts] = useState([])
  return (
    <LayoutOrder carts={{ carts, setCarts }}>
      <Layout className="site-layout" style={{ marginLeft: 350, marginTop: '64px' }}>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <Row gutter={[16, 16]}>
            {products.map((product, key) => (
              <Col key={key} span={6}>
                <ProductOrder product={product} cart={{ carts, setCarts }} />
              </Col>
            ))}
          </Row>
        </Content>
      </Layout>
    </LayoutOrder>
  )
}

TakeHome.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/products')
  const json = await res.json()
  return { ...json }
}

export default TakeHome