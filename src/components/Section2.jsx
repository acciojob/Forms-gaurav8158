import React, { useRef } from 'react'

const Section2 = () => {
    const nameRef = useRef(null);
    const emailRef = useRef(null);
    const passRef = useRef(null);
    const cnfpassRef = useRef(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const pass = passRef.current.value;
        const cnfpass = cnfpassRef.current.value;
        console.log('Name:', name);
        console.log('Email:', email);
        console.log('password',pass);
        console.log('conform password',cnfpass);
        // Do something with the form data
      };

  return (
    <div id="form-ref-link">
        <form onSubmit={handleSubmit} id="info-form">
        full-name <input ref={nameRef} type="text" id='full-name'/>
       <br />
        Email <input ref={emailRef} type="text" id='email'/>
        <br />
      password  <input ref={passRef} type="text" id='password'/>
      <br />
      password_confirmation<input ref={cnfpassRef} type="text" id='password_confirmation'/>
      <br />
      <button id="btn">Submit</button>
        </form>
     
    </div>
  )
}

export default Section2