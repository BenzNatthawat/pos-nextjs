import React, { useState, useEffect } from 'react'
import { Card, Modal, Row, Col, Button } from 'antd'
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
const { Meta } = Card

const ProductOrder = ({ product, cart }) => {
  const { id, name, img } = product
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [heightImg, setHeightImg] = useState(100)
  const [number, setNumber] = useState(1)

  useEffect(() => {
    setHeightImg(document.getElementById('card').offsetWidth)
    return () => { setNumber(1) }
  }, [])

  const showModal = () => {
    setIsModalVisible(true);
  }

  const handleOk = () => {
    const { carts, setCarts } = cart
    const CartIndex = carts.findIndex(({ id: cartId }) => cartId === id)
    if (CartIndex === -1) {
      carts.push({
        ...product,
        number: number
      })
    }
    else {
      carts[CartIndex].number = carts[CartIndex].number + number
    }
    setCarts([...carts])
    setIsModalVisible(false)
    setNumber(1)
  }

  const handleCancel = () => {
    setIsModalVisible(false)
    setNumber(1)
  }

  const handelNumber = (num) => {
    if (number === 1 && num === -1)
      setNumber(1)
    else
      setNumber((pre) => pre + num)
  }

  return (
    <>
      <Card
        id='card'
        hoverable
        cover={<img height={heightImg} src={img} alt={name} />}
        onClick={showModal}
      >
        <Meta title={name} />
      </Card>

      <Modal okText='ตกลง' cancelText='ยกเลิก' visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <Row>
          <Col span={24}>
            <img width={heightImg} height={heightImg} alt={name} src={img} />
          </Col>
          <Col span={24}>
            <p>{name}</p>
          </Col>
          <Col span={24}>
            <Button onClick={() => handelNumber(-1)} shape="round" style={{ background: "#f5222d" }}><MinusOutlined /></Button>
            <span style={{ margin: '6px' }}>{number}</span>
            <Button onClick={() => handelNumber(1)} shape="round" style={{ background: "#52c41a" }}><PlusOutlined /></Button>
          </Col>
        </Row>
      </Modal>
    </>
  )
}

export default ProductOrder