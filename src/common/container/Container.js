import React from 'react'
import './Container.css'
import { Layout } from 'antd'
import {
  BrowserRouter,
  Route,
  Switch,
  Redirect,
  Link
} from 'react-router-dom'
import Home from '../../views/home/Home'
import Demo from '../../views/demo/Demo'
import Share from '../../views/share/Share'

const { Content } = Layout

export default function Container () {
  return (
    <Content style={{ padding: '0 50px' }}>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/demo" component={Demo}/>
        <Route path="/share" component={Share}/>
      </Switch>
    </Content>
  )
}
