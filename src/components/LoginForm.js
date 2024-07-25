import React, { useState } from 'react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
  };

  const handleOnChange = (event) => {
    setPassword(event.target.value);
}

  return (
    <form onSubmit={handleSubmit}>
      <div className='border-black'>
        <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
      </div>
      <div className='border border-black my-5'>
        <input type="password" id="password" onChange={handleOnChange} value={password}/>
      </div>
      <button className='bg-blue-600 px-10' type="submit">Login</button>
    </form>
        
  );
};

export default LoginForm;
