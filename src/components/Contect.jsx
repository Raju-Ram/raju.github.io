// import React from 'react';
// import './Contect'
import './Contect.css';
import React, { useState } from 'react';

export const Contect = () => {
  const [name, setName] = useState('');
  const[nameError,setNameError]=useState(false);
  const[ocuptypeError,setocup_typeError]=useState(false);
  const[OrgNameError,setOrgError]=useState(false);
  const[emailError,setemailError]=useState(false);
  const[msgError,setmsgError]=useState(false);
 

  const [ocup_type, setOcuptype] = useState('');
  const [OrgName, setOrgname] = useState('');
  const [email, setemail] = useState('');
  const [msg, setmsg] = useState('');



function inVaild(itemName, value){
  let regex;
  if(itemName === 'name'){
    regex = /[A-Za-z]{5,11}$/;
      setNameError(!regex.test(value));
  }
  else if(itemName === 'ocup_type'){
    regex = /[A-Za-z]{5,100}$/;
    setocup_typeError(!regex.test(value));

  }
  else if(itemName === "Org_name"){
    regex = /[A-Za-z]{5,100}$/;
    setOrgError(!regex.test(value));
  }
  else if(itemName === "email"){
    regex =/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9-]+.[a-zA-Z.-]{2,10}$/;
    setemailError(!regex.test(value));
    }
  else{
    return false;
  }
  // return ocup_typeRegex.test(value);r1234
}


  const onContact = (key, value) => {
    inVaild(key, value);
    console.log(name, ocup_type, OrgName, email, msg);
  }


const onSubmit = ()=>{
   setName("");
   setNameError("");
   setOcuptype("");
   setocup_typeError("");
   setOrgError("");
   setOrgname("");
   setemail("");
   setemailError("");
   setmsg("");
   setmsgError("");


   console.log("email sent !")

      }


  return (
    <div className='conbox'>
      <div className="heading-details">
        <h1>Contact Form</h1>
        <div className="contact-form">
          <label htmlFor="">Name</label>
          <input type="text" name="name" id="name" value={name} onChange={(e) => {setName(e.target.value); onContact(e.target.name, e.target.value);}} required/>
          {nameError && <p style={{color:'red'}}>Enter a valid name</p>}

          <label htmlFor="">Ocuption Type</label>
          <input type="text" name="ocup_type" id="ocup_type" value={ocup_type} onChange={(e) => {setOcuptype(e.target.value); onContact(e.target.name, e.target.value);}} required/>
          {ocuptypeError && <p style={{color:'red'}}>enter a valid Ocuption Type </p>}


          <label htmlFor="">Organization/InstuteName</label>
          <input type="text" name="Org_name" id="Org_name" value={OrgName} onChange={(e) =>  {setOrgname(e.target.value); onContact(e.target.name, e.target.value);}}required />
          {OrgNameError && <p style={{color:'red'}}>enter a valid Organization </p>}

          <label htmlFor="">Email</label>
          <input type="email" name="email" id="email" value={email} onChange={(e) => {setemail(e.target.value); onContact(e.target.name, e.target.value);}} required/>
          {emailError && <p style={{color:'red'}}>enter a valid Email</p>}

          <label htmlFor="">message</label>
          <textarea type="text" name="msg" id="msg" value={msg} onChange={(e) => {setmsg(e.target.value); onContact(e.target.name, e.target.value);}} required/>
     </div>

        <div className='savebtn'>
          <button type='submit' onClick={()=>onSubmit()}>send</button>

        </div>


      </div>
    </div>





















    //     <form>

    // <h1>Contect<span>Here</span></h1>
    // <input type="text" name="name" id="" placeholder='Enter name'/>
    // <input type="email" name="email" id="" placeholder='Example@gmail.com'/>
    // <input type="phone" name="phone" id=""placeholder='+91'/>
    // <textarea name="message" id="" cols="30" rows="10"placeholder='type here......'/>
    // <button type="submit">send</button>
    // </form>
  )
}

export default Contect
