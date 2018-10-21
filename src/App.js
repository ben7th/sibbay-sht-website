import React from 'react'
import { Router, Link } from 'react-static'
import { hot } from 'react-hot-loader'
//
import Routes from 'react-static-routes'

import './app.scss'

const Head = () => (
  <div className='head'>
    <div className='title'>Sibbay Community</div>
    <div className='login'>登录</div>
  </div>
)

const Nav = () => (
  <nav>
    <div className='navi'>
      <Link exact to="/">兑换 ETH</Link>
    </div>
    <div className='navi'>
      <Link to="/newton">兑换生命力</Link>
    </div>
    <div className='navi'>
      <Link to="/sht">查询 SHT</Link>
    </div>
  </nav>
)

const App = () => (
  <Router>
    <div className='app'>
      <div className='app-header'>
        <Head />
        <Nav />
      </div>
      <div className="app-content">
        <Routes />
      </div>
      <div className='app-footer'>
        copyright © Sibbay Community
      </div>
    </div>
  </Router>
)

export default hot(module)(App)
