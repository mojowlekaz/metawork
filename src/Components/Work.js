import React from 'react'
import Box from '@mui/material/Box';
import {RiNumber1,RiNumber2,RiNumber3} from 'react-icons/ri'

export default function Work() {
  return (
    <div className='work'>
    <div className='work-title'>
    <h1 className="y">How Metawork Works</h1>
    </div> 
    <div className='whole-box' >
    <div className='big-box'>
    <Box
sx={{
  width: 300,
  height: 210, 
  top: 50,
  left: 50,
  overflow: 'hidden',
  padding: '20px',
  objectFit : 'cover',
  backgroundSize: 'cover',
  boxSizing: 'border-box',
  background: 'rgba(16, 26, 40, 0.8)',
  border: '2px solid rgba(21, 96, 250, 0.1)',
  '&:hover': {
    // backgroundColor: '#36524c',
    // borderRadius: '10px'
  },
}}
>
       <div className='box-pad'>
       <span className='box-item'>  <RiNumber1  style={{borderRadius: '50px', height: '13px', width: '20px',  backgroundColor: 'rgba(16, 33, 61, 0.65)'}}/>Signup</span>
       </div>
       <div>
        <p className='ooo' >Register with your E-mail and Login with either your E-mail or the NTF sent to your E-mail</p>
       </div>
</Box>
    </div>
    <div className='big-box'>
    <Box
sx={{
  width: 300,
  height: 210, 
  top: 50,
  left: 50,
  overflow: 'hidden',
  padding: '20px',
  objectFit : 'cover',
  backgroundSize: 'cover',
  boxSizing: 'border-box',
  background: 'rgba(16, 26, 40, 0.8)',
  border: '2px solid rgba(21, 96, 250, 0.1)',
  '&:hover': {
    // backgroundColor: '#36524c',
    // borderRadius: '10px'
  },
}}
>
       <div className='box-pad'>
       <span className='box-item'>  <RiNumber2  style={{borderRadius: '50px', height: '13px', width: '20px',  backgroundColor: 'rgba(16, 33, 61, 0.65)'}}/>Earn</span>
       </div>
       <div>
        <p className='ooo' >Earn Cryptocurrency by either playing games (Play-to-earn) or complete training task (Train-to-earn)</p>
       </div>
</Box>
    </div>
        <div className='big-box'>
    <Box
sx={{
  width: 300,
  height: 210, 
  top: 50,
  left: 50,
  overflow: 'hidden',
  padding: '20px',
  objectFit : 'cover',
  backgroundSize: 'cover',
  boxSizing: 'border-box',
  background: 'rgba(16, 26, 40, 0.8)',
  border: '2px solid rgba(21, 96, 250, 0.1)',
  '&:hover': {
    // backgroundColor: '#36524c',
    // borderRadius: '10px'
  },
}}
>
       <div className='box-pad'>
       <span className='box-item'>  <RiNumber3 style={{borderRadius: '50px', height: '13px', width: '20px',  backgroundColor: 'rgba(16, 33, 61, 0.65)'}}/>Dashboard</span>
       </div>
       <div>
        <p className='ooo' >View your progress on your dashboard and see how much you have earned, tasks completed, games you are currently playing  and more</p>
       </div>
</Box>
    </div>
    </div>   <br />   
    <div className='small'>
    <button className='btn'>Get Started</button> 
    </div>
    </div>
  )
}
