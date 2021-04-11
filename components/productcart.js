import { Card, Avatar, Row, Col, Button, Modal } from 'antd'
import { PlusOutlined, MinusOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
const { confirm } = Modal

const ProductOrder = ({ cart, index, setCarts }) => {
  const { id, name, img, number, amount } = cart
  const handelNumberCart = (num) => {
    if (number === 1 && num === -1)
      showConfirm()
    else
      setCarts((pre) => {
        pre[index] = {
          ...cart,
          number: number + num
        }
        return [...pre]
      })
  }

  const showConfirm = () => {
    confirm({
      title: `ยืนยันลบรายการ ${name}`,
      icon: <ExclamationCircleOutlined />,
      okText: 'ยืนยัน',
      cancelText: 'ยกเลิก',
      onOk() {
        setCarts((pre) => {
          let cart = pre.filter((cart) => cart.id !== id)
          if (cart.length > 0)
            return [...cart]
          else {
            return []
          }
        })
      }
    })
  }

  return (<>
    <Card className='card-cart' hoverable>
      <Row style={{ justifyContent: 'space-between' }}>
        <Col>
          <Avatar src={img} />
        </Col>
        <Col>
          {name}
        </Col>
        <Col>
          {amount}
        </Col>
        <Col>
          <Button onClick={() => handelNumberCart(-1)} shape="round" style={{ background: "#f5222d" }}><MinusOutlined /></Button>
          <span style={{ margin: '6px' }}>{number}</span>
          <Button onClick={() => handelNumberCart(1)} shape="round" style={{ background: "#52c41a" }}><PlusOutlined /></Button>
        </Col>
      </Row>
    </Card>
  </>
  )
}

export default ProductOrder