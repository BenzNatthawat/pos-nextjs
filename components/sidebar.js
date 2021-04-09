import { Layout, Row, Col, Button } from 'antd'
import ProductCart from '../components/productcart'
import { CheckOutlined, CloseOutlined } from '@ant-design/icons'
const { Sider } = Layout

const Sidebar = ({ carts, setCarts }) => {
  return <>
    <Sider width={350} className='sider' >
      <Row className='cart-row'>
        {carts.map((cart, key) => (
          <Col key={key} className='cart-col' span={24}>
            <ProductCart index={key} cart={cart} setCarts={setCarts} />
          </Col>
        ))}
      </Row>
      <Row className='cart-sum-row'>
        <Col className='cart-sum-col' span={24}>
          <Row>
            จำนวน {carts.reduce(((accumulator, currentValue) => accumulator + currentValue.number), 0)}
          </Row>
          <Row>
            จำนวน {carts.reduce(((accumulator, currentValue) => accumulator + currentValue.amount), 0)}
          </Row>
          <Row gutter={[16]}>
            <Col span={12}>
              <Button width='100%' shape="round" style={{ background: "#f5222d" }} icon={<CloseOutlined />} size='large'>
                ยกเลิกบิล
              </Button>
            </Col>
            <Col span={12}>
              <Button width='100%' shape="round" style={{ background: "#52c41a" }} icon={<CheckOutlined />} size='large'>
                จ่ายบิล
              </Button>
            </Col>
          </Row>
        </Col>
      </Row>
    </Sider>
  </>
}

export default Sidebar