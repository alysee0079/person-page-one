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
import Detail from '../../views/home/Detail'

const { Content } = Layout

export default function Container () {
  return (
    <Switch>
      <Route exact path="/" component={Home}/>
      <Route exact path="/home/detail/:id" component={Detail}/>
      <Route path="/demo" component={Demo}/>
      <Route path="/share" component={Share}/>
    </Switch>
  )
}
