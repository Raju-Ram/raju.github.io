import React from 'react'
import raju from './MyImage/exp9.jpg';
import './Experiences.css'
const ram="Exprojects";
const ram1="./Contect";

export const Experiences = () => {
  return (
    <div>
    <div className='Exapmain'>
<div className='Exp1'>
 
  <div className='Image'>
  <img src={raju} alt="this is car image" /> 


 

</div>
<div className='Exp2'>


</div>
<div className='Exp3'>
<h1> <a href={ram}>My_Peojects</a></h1>
</div>


<div className='Exp5'>

</div>
<div className='Exp6'>

</div>

<div className='Exp8'>
<h1>Upcoming_Projects</h1>
</div>

</div>

    </div>
    <div className='Exp9'>
<h1> <a href={ram1}>Can i help You !</a></h1>


</div>
    {/* <div className='Exp10'>
<h1>ghj</h1>

</div> */}
    </div>
  )
}
