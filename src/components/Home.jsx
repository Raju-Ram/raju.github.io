import React from 'react'
import TopNav from './TopNav'
import car from './MyImage/myimage.png';
import './Home.css'






export const Home = () => {
  return (
    <div >
     
     
      <div className='maincontente'>
                <div className='box1'>
                    <img src={car} alt="this is car image" />

                </div>



                <div className='box2'>
                    <h3>CODWITHKUMAWATRAJ...</h3>
                    <h1>I'm a Web</h1>
                    <h1><span>Developer</span></h1>
                    <p>Hello, my name is Angela, and I believe that focusing on your company's data security plan is essential to growing your company's business. With over 10 years of experience in information and data security, my knowledge and skills can help you create effective security strategies. My dedication to creating comprehensive data security plans can also help your company improve its data integrity and increase customer retention.</p>
                <br></br>
                <br></br>
                <br></br>
                <h3>Thank You Slides!</h3>
                
                
                </div>
              




            </div>

        
    
     </div>
  )
}
export default Home
