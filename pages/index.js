import React, { useState, useEffect } from 'react'
import { Layout, Row, Col } from 'antd'
import ProductOrder from '../components/productorder'
const { Content, } = Layout

const Home = ({ products }) => {
  return (
    <Layout className="site-layout" style={{ marginLeft: 350, marginTop: '64px' }}>
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <Row gutter={[16, 16]}>
          {products.map((product, key) => (
            <Col span={6}>
              <ProductOrder key={key} {...product} />
            </Col>
          ))}
        </Row>
      </Content>
    </Layout>
  )
}

Home.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/products')
  const json = await res.json()
  return { ...json }
}

export default Home
