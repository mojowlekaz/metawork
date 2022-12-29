import React from 'react'
import {IoIosArrowDropdown} from 'react-icons/io'

export default function Firstpage() {
  return (
    <div>
               <img style={{width: '100px', float: 'right'}}  className=""src={require('/Users/macbook/metawork/src/assets/Component 1.png')} /> 
        <div className='title'>  

        <h1 className="b" >
        Redefining the job economy  of <br />the future using <br />
        blockchain  technology 
      </h1>   
      <p>The innovation of Metawork allows us to create an unlimited number of jobs and businesses, <br />
         providing sustainable income opportunities to underserved markets around the world.</p> <br /> <br /> 
         <button className='btn'>Get Started</button>  <br /> <br />
         <img style={{width: '70px', display: 'flex', justifyContent: 'flex-start', float: 'left', marginTop: '100px'}}  className=""src={require('/Users/macbook/metawork/src/assets/Group 3.png')} /> <br /> <br /> <br />

         <img style={{width: '450px', height:"auto", justifyContent: 'center', alignContent: 'center', marginRight: '90px'}}  className=""src={require('/Users/macbook/metawork/src/assets/Group 2.png')} /> 
         <div className='drop'> 
    
         <button className='playicon' >  <IoIosArrowDropdown /></button>
        </div>

    </div>
</div>
  )
}
