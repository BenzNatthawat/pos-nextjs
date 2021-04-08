import React, { useState } from 'react'
import { Card, Avatar, Row, Col, Button, Modal } from 'antd'
import { PlusOutlined, MinusOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
const { confirm } = Modal

const ProductOrder = ({ name, img }) => {
  const [number, setNumber] = useState(1)

  const handelNumber = (num) => {
    console.log(number, num)
    if (number === 1 && num === -1)
      showConfirm()
    else
      setNumber((pre) => pre + num)
  }

  const showConfirm = () => {
    confirm({
      title: `ยืนยันลบรายการ ${name}`,
      icon: <ExclamationCircleOutlined />,
      onOk() {
        console.log('OK')
      },
      onCancel() {
        console.log('Cancel')
      },
    })
  }

  return (<>
    <Card
      className='card-cart'
      hoverable
    >
      <Row style={{ justifyContent: 'space-between' }}>
        <Col>
          <Avatar src={img} />
        </Col>
        <Col>
          Card title
        </Col>
        <Col>
          <Button onClick={() => handelNumber(-1)} shape="round" style={{ background: "#f5222d" }}><MinusOutlined /></Button>
          <span style={{ margin: '6px' }}>{number}</span>
          <Button onClick={() => handelNumber(1)} shape="round" style={{ background: "#a0d911" }}><PlusOutlined /></Button>
        </Col>
      </Row>
    </Card>
  </>
  )
}

export default ProductOrder