import React, { useState, useEffect } from 'react'
import { Card, Modal, Row, Col, Button } from 'antd'
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
const { Meta } = Card

const ProductOrder = ({ name, img }) => {
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
    setIsModalVisible(false);
  }

  const handleCancel = () => {
    setIsModalVisible(false);
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