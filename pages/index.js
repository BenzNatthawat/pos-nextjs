import React from 'react'
import { Layout, Row, Col } from 'antd'
import LayoutHome from '../components/layoutHome'
const { Content, } = Layout

const Home = () => {
  return (
    <LayoutHome>
      <Layout className="site-layout" style={{ marginTop: '64px' }}>
        <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
          <Row gutter={[16, 16]}>
            <Col span={6}>
              ยินดีตอนรับ
          </Col>
          </Row>
        </Content>
      </Layout>
    </LayoutHome>
  )
}

export default Home
