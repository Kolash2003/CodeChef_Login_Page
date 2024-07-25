// src/App.js
import React, { useState } from 'react';
import './index.css';
import codechef from './images/codechef.png';

const Login = ({ toggleForm }) => {
  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat bg-[url('./images/newbackground.png')] sm:bg-[url('./images/background.png')]"
    >
      <div className="h-screen bg-cover bg-center">
        <div className="flex justify-center items-center h-full">
          <div className="p-5 rounded-3xl bg-white shadow-2xl">
            <img className='w-48 pl-16 ml-3' src={codechef} alt="codechef" />
            <h1 className="text-center mb-5 text-2xl text-blue-600 font-bold">LOGIN</h1>
            <form className="w-72">
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2 font-sans pl-2">Email</label>
                <input type="text" placeholder="Username or email" className="w-full p-2 border border-black rounded-2xl" />
              </div>
              <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2 font-sans pl-2">Password</label>
                <input type="password" placeholder="Password" className="w-full p-2 border border-black rounded-2xl" />
              </div>
              <button type="submit" className="w-full py-2 bg-blue-500 text-white hover:bg-blue-700 rounded-full font-bold">Login</button>
              <div className="footer-box flex space-x-16 pt-6">
                <div className="rem-me font-sans text-blue-400 text-xm font-bold">Remember me</div>
                <div className="forgot-pw text-blue-400 text-sm font-bold">Forgot Password</div>
              </div>
            </form>
            <p className="text-center mt-4">
              Don't have an account? <button className="text-blue-600 underline" onClick={toggleForm}>Sign Up</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Signup = ({ toggleForm }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat bg-[url('./images/background.png')] sm:bg-[url('./images/background.png')]">
      <div className="h-screen bg-cover bg-center">
        <div className="flex justify-center items-center h-full">
          <div className="p-5 rounded-3xl shadow-2xl bg-white">
            <img className='w-48 pl-16 ml-3' src={codechef} alt="codechef" />
            <h1 className="text-center mb-5 text-2xl text-blue-600 font-bold font-sans">SIGN UP</h1>
            <form className="w-72" onSubmit={handleSubmit}>
              <div className="mb-1">
                <label className="block text-gray-700 text-sm font-bold mb-2 font-sans pl-2">Full Name</label>
                <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} className="w-full p-2 border border-black rounded-2xl"/>
              </div>
              <div className="mb-1">
                <label className="block text-gray-700 text-sm font-bold mb-2 font-sans pl-2">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 border border-black rounded-2xl"
                />
              </div>
              <div className="mb-1">
                <label className="block text-gray-700 text-sm font-bold mb-2 font-sans pl-2">Phone Number</label>
                <input
                  type="tel"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  value={formData.phoneNumber}
                  onChange={handleChange}
                  className="w-full p-2 border border-black rounded-2xl"
                />
              </div>
              <div className="mb-1">
                <label className="block text-gray-700 text-sm font-bold mb-2 font-sans pl-2">Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-2 border border-black rounded-2xl"
                />
              </div>
              <div className="mb-1">
                <label className="block text-gray-700 text-sm font-bold mb-2 font-sans pl-2">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm Password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full p-2 border border-black rounded-2xl"
                />
              </div>
              <button type="submit" className="w-full py-2 bg-blue-500 text-white hover:bg-blue-700 rounded-full font-bold font-sans mt-3">
                Sign Up
              </button>
            </form>
            <p className="text-center mt-1">
              Already have an account? <button className="text-blue-600 underline" onClick={toggleForm}>Login</button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div>
      {isLogin ? <Login toggleForm={toggleForm} /> : <Signup toggleForm={toggleForm} />}
    </div>
  );
};

export default App;
