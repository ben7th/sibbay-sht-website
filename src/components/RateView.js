import React from 'react'

const Rate = ({ number, unit, type }) => (
  <div className={ `type ${ type }` }>
    <div className='c'>
      <span className='number'>{ number }</span>
      <span className='unit'>{ unit }</span>
    </div>
  </div>
)

const RateView = ({ main, sub1, sub2 }) => (
  <div className='rate'>
    <Rate number={ main.number } unit={ main.unit } type='main' />
    <div className='others'>
      <Rate number={ sub1.number } unit={ sub1.unit } type='sub' />
      <Rate number={ sub2.number } unit={ sub2.unit } type='sub' />
    </div>
  </div>
)

module.exports = RateView