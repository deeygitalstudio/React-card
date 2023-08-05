import React from 'react'
import guy from '../IMG-20220702-WA0097.jpg'

const Box = () => {
  return (
   <div className="bos">
     <div className="row">
     <div className=" col-md-6">
     <img src={guy} alt="" />
     </div>
     <div className=" col-md-6">
        <h5>Real time Analytics</h5>
        <h1>Grover Increase their  sales revenue by 29% using clarity</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Officia velit, sunt voluptas nostrum sint in deserunt distinctio temporibus fuga placeat, molestiae atque! Iste blanditiis suscipit odio magnam repellendus quidem dicta?</p>
         <p className='name'>Albert Force <span className='sp'>Co-founder</span></p>
         <hr />
         <h3 className='case'>Read full case study</h3>
     </div>
     
     </div>
   </div>
  )
}

export default Box
