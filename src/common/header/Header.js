import React from 'react'
import './Header.css'
import { Layout, Menu } from 'antd'
import { Link } from 'react-router-dom'
const { Header: Headers } = Layout

export default function Header () {
  return (
    <Headers>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <Link to="/">主页</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/demo">Demo</Link>
        </Menu.Item>
        <Menu.Item key="3">
          <Link to="/share">分享</Link>
        </Menu.Item>
      </Menu>
    </Headers>
  )
}
