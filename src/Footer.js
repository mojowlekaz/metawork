import React from 'react'
import {IoIosArrowDropup} from 'react-icons/io'

export default function Footer() {
  return (
    <div className='Footer'>  <br />  <br /> 
      <div>
      <h1 className="y">Join Our Community</h1>
      </div> <br />
      <div className='ll'>

      <a href=''><img style={{width: '', position: 'relative', height: ''}}  className=""src={require('/Users/macbook/metawork/src/assets/Group 7.png')} /> </a>
      <a href=''> <img style={{width: '', position: 'relative', height: ''}}  className=""src={require('/Users/macbook/metawork/src/assets/Group 8.png')} />  </a>
      <a href=''><img style={{width: '', position: 'relative', height: ''}}  className=""src={require('/Users/macbook/metawork/src/assets/Group 9.png')} />  </a>
      <a href=''> <img style={{width: '', position: 'relative', height: ''}}  className=""src={require('/Users/macbook/metawork/src/assets/Group 10.png')} />  </a>
      </div>
      <div  className='tit'>
      <div className='drop'> 
            <img style={{width: '450px', height:"auto", justifyContent: 'center', alignContent: 'center'}}  className=""src={require('/Users/macbook/metawork/src/assets/Group 2.png')} /> 
         <a className='playicon' >  <IoIosArrowDropup  className='fa' /></a>
        </div>

      </div>
      <p className='yyy'>2022&copy; Metawork. All rights reserved</p>
    </div>
  )
}
