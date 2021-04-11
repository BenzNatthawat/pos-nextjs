import React, { useEffect, useState } from 'react'
import LayoutHome from '../../components/layoutHome'
import { Layout, Row, Col } from 'antd'
import ProductOrder from '../../components/productorder'
const { Content, } = Layout

const Tables = ({ tables }) => {
  const [carts, setCarts] = useState([])
  return (
    <LayoutHome carts={{ carts, setCarts }} name={'xxx'}>
      <Layout style={{ marginTop: '64px' }}>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <Row gutter={[16, 16]}>
            {tables.map((table, key) => (
              <Col key={key} span={6}>
                <img src="/images/table.svg" />
                {table.name}
              </Col>
            ))}
          </Row>
        </Content>
      </Layout>
    </LayoutHome>
  )
}

Tables.getInitialProps = async () => {
  const res = await fetch('http://localhost:3000/api/tables')
  const json = await res.json()
  return { ...json }
}

export default Tables