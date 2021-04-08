import React, { useState, useEffect } from 'react'
import { Card, Modal } from 'antd'
const { Meta } = Card

const ProductOrder = ({ name, img }) => {

  const [isModalVisible, setIsModalVisible] = useState(false)
  const [heightImg, setHeightImg] = useState(100)
  useEffect(() => {
    setHeightImg(document.getElementById('card').offsetWidth)
  })
  const showModal = () => {
    setIsModalVisible(true);
  }

  const handleOk = () => {
    setIsModalVisible(false);
  }

  const handleCancel = () => {
    setIsModalVisible(false);
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

      <Modal title="Basic Modal" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
        <img width={heightImg} height={heightImg} alt={name} src={img}/>
        <p>{name}</p>
      </Modal>
    </>
  )
}

export default ProductOrder