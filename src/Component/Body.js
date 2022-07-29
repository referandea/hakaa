import React from 'react'
import imgsrc from './cred.png'
import './body.css'
const Body = ({score}) => {
  return (
    <div className='body'><div className='right'><img className='body_img'src={imgsrc} alt='credit img'></img></div>
    <div className='left'><h1 className='body_header'><span>Connect Wallet </span> & Check Credit Score</h1><small className='small'>Based on your wallet  activity out of 900</small> <div className='score'>Your Credit <br></br>Score is <br>
    </br> <span>{score}/900</span></div></div>
    </div>
  )
}

export default Body