import React from 'react'
import { withSiteData, NavLink } from 'react-static'

import './page.scss'
import RateView from '../components/RateView'

const Account = () => (
  <div className='account'>
    <div className='desc'>直接从您的钱包中将一定数量的 token 发送到下面的账户：</div>
    <div className='address'>0xdad465afc641835fa88a6912b582c25423c5150a</div>
    <div className='desc'>即可自动收到对应金额的 ETH</div>
    <div className='desc'>注意发送后需要一定的时间才会收到 ETH, 请耐心等待</div>
    <div className='desc'>gas limit: 1000</div>
  </div>
)

export default withSiteData(() => (
  <div className='ETH-page'>
    <h1>SHT Sell</h1>
    <RateView 
      main={{ number: 0.031, unit: 'USD' }}
      sub1={{ number: 0.00002, unit: 'ETH' }}
      sub2={{ number: 0.11, unit: 'RMB' }}
    />
    <Account />
  </div>
))
