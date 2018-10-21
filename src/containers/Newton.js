import React from 'react'
import { withSiteData, NavLink } from 'react-static'

import './page.scss'
import RateView from '../components/RateView'

const Withdraw = () => (
  <div className='withdraw'>
    <div className='button'>提取</div>
  </div>
)

export default withSiteData(() => (
  <div className='ETH-page'>
    <h1>生命力</h1>
    <RateView 
      main={{ number: 0.031, unit: 'N' }}
      sub1={{ number: 0.00002, unit: 'SHT' }}
      sub2={{ number: 0.11, unit: '可提取 SHT' }}
    />
    <Withdraw />
  </div>
))
