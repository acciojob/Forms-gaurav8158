import React, { useState } from 'react'

const Section1 = () => {
    const[name,setName]=useState(null);
    const[email,setEmail]=useState(null);
    const[pass,setPass]=useState(null);
    const[cnfpass,setCnfpass]=useState(null);
  const updatename = (e)=>{
    setName(e.target.value);
  }
  const updatemail = ()=>{
    setEmail(e.target.value);
  }
  const updatepass = ()=>{
    setPass(e.target.value);
  }
  const updatecnfpass = ()=>{
    setCnfpass(e.target.value);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('password',pass);
    console.log('conform password',cnfpass);
    // Do something with the form data
  };
    return (
    <div id="form-state-link">
    <form onSubmit={handleSubmit} id="info-form">
    full-name <input onChange={updatename} type="text" id='full-name'/>
   <br />
    Email <input onChange={updatemail} type="text" id='email'/>
    <br />
  password  <input onChange={updatepass} type="text" id='password'/>
  <br />
  password_confirmation<input onChange={updatecnfpass} type="text" id='password_confirmation'/>
  <br />
  <button id="btn">Submit</button>
    </form>
 
</div>
  )
}

export default Section1