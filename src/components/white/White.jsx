import React from 'react'
import './white.css'
import Btndavit from '../text/Btndavit'
import Qrcode from '../qrcode/Qrcode'

const White = () => {
  return (
    <div className='box'>
        <Qrcode />
        <Btndavit />
    </div>
  )
}

export default White
