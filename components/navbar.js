import { Layout, Menu } from 'antd'
const { Header } = Layout

const Navber = () => {
  return <>
    <Header style={{
      width: '100%',
      position: 'fixed',
      display: 'inline-flex'
    }} className="header">
      <div className="logo">
        <img src="/images/ost-logo.png" alt="logo-pos" />
      </div>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
      </Menu>
    </Header>
  </>
}

export default Navber