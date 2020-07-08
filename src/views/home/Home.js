import React from 'react'
import './Home.css'
import { Card } from 'antd'
import {
  Link
} from 'react-router-dom'
const { Meta } = Card


export default function Home () {
  return (
    <div className="home-wrapper wrapper">
      <ul className="card-ul">
        <Link to="/home/detail/1">
          <li className="card-item">
            <Card
              hoverable
              style={{ width: 300 }}
              cover={<img alt="example" src={require('../../assets/images/ecma_icon.png')} />}
            >
              <Meta title="es6-es10新增属性"/>
            </Card>
          </li>        
        </Link>
        <Link to="/home/detail/2">
          <li className="card-item">
            <Card
              hoverable
              style={{ width: 300 }}
              cover={<img alt="example" src={require('../../assets/images/ecma_icon.png')} />}
            >
              <Meta title="JS知识整理"/>
            </Card>
          </li>          
        </Link>
        <Link to="/home/detail/3">
          <li className="card-item">
            <Card
              hoverable
              style={{ width: 300 }}
              cover={<img alt="example" src={require('../../assets/images/timg.jpeg')} />}
            >
              <Meta title="面试问题整理" />
            </Card>
          </li>        
        </Link>
        <Link to="/home/detail/4">
          <li className="card-item">
            <Card
              hoverable
              style={{ width: 300 }}
              cover={<img alt="example" src={require('../../assets/images/part-00525-3.jpg')} />}
            >
              <Meta title="跨域及解决方案" />
            </Card>
          </li>
        </Link>
        <Link to="/home/detail/5">
          <li className="card-item">
            <Card
              hoverable
              style={{ width: 300 }}
              cover={<img alt="example" src={require('../../assets/images/timg2.jpeg')} />}
            >
              <Meta title="javascript模块化" />
            </Card>
          </li>
        </Link>
        <Link to="/home/detail/6">
          <li className="card-item">
            <Card
              hoverable
              style={{ width: 300 }}
              cover={<img alt="example" src={require('../../assets/images/ddas.jpg')} />}
            >
              <Meta title="前端性能优化" />
            </Card>
          </li>
        </Link>
      </ul>
    </div>
  )
}
