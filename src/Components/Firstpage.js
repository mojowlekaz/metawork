import React from 'react'

export default function Firstpage() {
  return (
    <div>
        <div className='title'>  

        <img style={{width: '100px', display: 'flex', justifyContent: 'flex-end', float: 'right'}}  className=""src={require('/Users/macbook/metawork/src/assets/Component 1.png')} /> 

        <h1 className="b" >
        Redefining the job economy of the future using 
        blockchain technology 
      </h1>   
      <p>The innovation of Metawork allows us to create an unlimited number of jobs and businesses,
         providing sustainable income opportunities to underserved markets around the world.</p> <br />
         <button className='btn'>Get Started</button>  <br /> <br />
         <img style={{width: '70px', display: 'flex', justifyContent: 'flex-start', float: 'left'}}  className=""src={require('/Users/macbook/metawork/src/assets/Group 3.png')} /> <br />
          <h1 className="t">METAWORK</h1>
          <img style={{width: '400px'}}  className=""src={require('/Users/macbook/metawork/src/assets/Group 2.png')} /> 
        </div>


    </div>
  )
}
