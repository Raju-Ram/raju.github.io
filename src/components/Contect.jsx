// import React from 'react';
// import './Contect'
import './Contect.css';
import React, { useState } from 'react';

export const Contect = () => {
  const [name, SetName] = useState('');
  const [ocup_type, SetOcuptype] = useState('');
  const [OrgName, SetOrgname] = useState('');
  const [email, Setemail] = useState('');
  const [msg, Setmsg] = useState('');


  const onContact = () => {
    console.log(name, ocup_type, OrgName, email, msg);
  }




  return (
    <div className='conbox'>
      <div className="heading-details">
        <h1>Contact Form</h1>
        <div className="contact-form">
          <label htmlFor="">Name</label>
          <input type="text" name="name" id="name" value={name} onChange={(e) => SetName(e.target.value)} />
          <label htmlFor="">Ocuption Type</label>
          <input type="text" name="ocup_type" id="ocup_type" value={ocup_type} onChange={(e) => SetOcuptype(e.target.value)} />
          <label htmlFor="">Organization/InstuteName</label>
          <input type="text" name="Org_name" id="Org_name" value={OrgName} onChange={(e) => SetOrgname(e.target.value)} />
          <label htmlFor="">Email</label>
          <input type="text" email="name" id="email" value={email} onChange={(e) => Setemail(e.target.value)} />
          <label htmlFor="">message</label>
          <textarea type="text" name="msg" id="msg" value={msg} onChange={(e) => Setmsg(e.target.value)} />







        </div>

        <div className='savebtn'>
          <button type='submit' onClick={onContact}>send</button>

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
