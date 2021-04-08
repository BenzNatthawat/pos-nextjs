import { Layout, Row, Col, Button } from 'antd'
import ProductCart from '../components/productcart'
import { DownloadOutlined } from '@ant-design/icons'
const { Sider } = Layout

const Sidebar = () => {
  const carts = [{
    name: 'product1',
    img: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
  }, {
    name: 'product2',
    img: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
  }, {
    name: 'product2',
    img: 'https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png',
  }]
  return <>
    <Sider width={350} className='sider' >
      <Row className='cart-row'>
        {carts.map((cart, key) => (
          <Col className='cart-col' span={24}><ProductCart key={key} {...cart} /></Col>
        ))}
      </Row>
      <Row className='cart-sum-row'>
        <Col className='cart-sum-col' span={24}>
          <Row>
            จำนวน 10
          </Row>
          <Row>
            ราคา 1000 บาท
          </Row>
          <Row gutter={[16]}>
            <Col span={12}>
              <Button width='100%' type="primary" icon={<DownloadOutlined />} size='large'>
                Download
              </Button>
            </Col>
            <Col span={12}>
              <Button width='100%' type="primary" icon={<DownloadOutlined />} size='large'>
                Download
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Sider>
  </>
}

export default Sidebar