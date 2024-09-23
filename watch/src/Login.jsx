import React, { useState } from 'react';
import './Login.css';
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import Products from './Products';
import axios from 'axios';

function Login() {
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const navigate = useNavigate()

  const  handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordchange = (e) => {
    setPassword(e.target.value);
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    const payload = {
      Email,
      Password
    };
    console.log(payload);
    try{
      const res = await axios.post('http://localhost:3000/user/login', payload);
      localStorage.setItem("token", res.data.token);
      navigate("/");
      toast.success("Login Successfully");
    } catch (e){
      console.log(e);
      toast.error("Login failed. Please check your credentials.");
    }
  }

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={Email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={Password}
            onChange={handlePasswordchange}
            required
          />
        </div>
        <button type="submit" className="bttn">Login</button>
      </form>
      <div className='outbox'>
        <h5>New User? <Link to="/signin">Sign Up</Link></h5>
      </div>
    </div>
  );
}

export default Login;
