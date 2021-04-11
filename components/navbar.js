import { Layout, Menu } from 'antd'
import { useRouter } from 'next/router'
const { Header } = Layout

const Tables = () => {
  const router = useRouter()
  return <>
    <Header style={{
      width: '100%',
      position: 'fixed',
      display: 'inline-flex'
    }} className="header">
      <div className="logo" onClick={() => router.push('/')}>
        <img src="/images/ost-logo.png" alt="logo-pos" />
      </div>
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="1" onClick={() => router.push('/tables')}>โต๊ะ</Menu.Item>
        <Menu.Item key="2" onClick={() => router.push('/takehome')}>กลับบ้าน</Menu.Item>
      </Menu>
    </Header>
  </>
}

export default Tables