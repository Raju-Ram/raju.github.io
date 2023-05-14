import React from 'react'
import './Gallary.css'

import raju1 from './MyImage/exp10.jpeg';
import raju2 from './MyImage/exp11.jpeg';
import raju3 from './MyImage/exp12.jpeg';
import raju4 from './MyImage/exp13.jpeg';
import raju5 from './MyImage/exp14.jpeg';
import raju6 from './MyImage/exp15.jpeg';
import raju7 from './MyImage/exp16.jpeg';
import raju8 from './MyImage/exp17.jpeg';
import raju9 from './MyImage/exp18.jpeg';
import raju10 from './MyImage/exp19.jpeg';
import raju11 from './MyImage/exp20.jpeg';
import raju12 from './MyImage/exp22.jpeg';
// import raju12 from './MyImage/exp21.jpeg';

export const Gallary = () => {
  return (
    <div className='gallarybox'>
      <div class="scroll-container">
         
    <img src={raju1}alt="Cinque Terre" width="600" height="400"/>
    <img src={raju2}alt="Forest" width="600" height="400"/>
    <img src={raju3}alt="Northern Lights" width="600" height="400"/>
    <img src={raju4} alt="Mountains" width="600" height="400"/>
    <img src={raju5} alt="Mountains" width="600" height="400"/>
    <img src={raju6} alt="Mountains" width="600" height="400"/>
    <img src={raju7} alt="Mountains" width="600" height="400"/>
    <img src={raju8} alt="Mountains" width="600" height="400"/>
    <img src={raju9} alt="Mountains" width="600" height="400"/>
    <img src={raju10} alt="Mountains" width="600" height="400"/>
    <img src={raju11} alt="Mountains" width="600" height="400"/>
  </div>
  
  <div class="container">
  <img src={raju1} alt="Avatar" class="image"/>
  <div class="overlay">
    <div class="text"><h1>Web Developer !</h1></div>
  </div>
</div>


<div class="hero-image">
  <div class="hero-text">
    <h1>I am Raju Kumawat</h1>
    <p>And I'm a Web Developer</p>
    <button>Hire me</button>
  </div>
</div>

<div className='ram'>
<img src={raju12} alt="Mountains" width="600" height="400"/>
</div>
<div className='ram1'>

</div>

  </div>
  )
}
