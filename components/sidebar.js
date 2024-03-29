import { Layout, Row, Col, Button, Typography } from 'antd'
import ProductCart from '../components/productcart'
import { CheckOutlined, CloseOutlined } from '@ant-design/icons'
const { Sider } = Layout
const { Text } = Typography;


const Sidebar = ({ carts, setCarts, name }) => {
  return <>
    <Sider width={350} className='sider' >
      <Row className='cart-row'>
        <Col className='cart-col table-name' span={24}>
          <Text code>{name}</Text>
        </Col>
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
            ราคา {carts.reduce(((accumulator, currentValue) => accumulator + (currentValue.amount * currentValue.number)), 0)}
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