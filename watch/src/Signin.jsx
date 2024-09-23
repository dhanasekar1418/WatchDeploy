import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import './Signin.css';
import { toast } from "react-toastify";

function Signin() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleNameChange = (e) => {
    setName(e.target.value);
  }

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      name: name,
      Email: email,
      Password: password,
    };
    try {
      const res = await axios.post('http://localhost:3000/user/signin', payload);
      localStorage.setItem("token", res.data.token);
      navigate("/");
      toast.success("Signup Successfully");
    } catch (e) {
      console.error(e);
      toast.error("Signup failed. Please try again.");
    }
  }

  return (
    <div className="login-container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div className="name">
          <label>Name</label>
          <input
            type="text"
            value={name}
            onChange={handleNameChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit" className="bttn">Sign Up</button>
      </form>
    </div>
  );
}

export default Signin;

