import React, { useState } from "react";
import { Link } from 'react-router-dom';

const Register = () => {
  const [error, setError] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const createUser = async => {
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        "username": username,
        "email": email,
        "password": password,
        "role": 2
      })
    };
    fetch('http://localhost:1337/api/users', requestOptions)
      .then(response => response.json())
    
      alert("User created successfully...");
  }

  return (
    <div className="p-5 registration-background">
      <h1 className='text-center text-white login-header'>Create Account</h1>
      <div className="bg-white max-w-lg mx-auto rounded-md p-5">
        <form>
          <div className="form-group py-4">
            <label for="usr">Username:</label>
            <input className='form-control mx-2 border rounded-md border-slate-300' type="text" onChange={(event) => setUsername(event.target.value)} id="usr" name="username"/>
          </div>
          <div className="form-group">
            <label for="usr">Email:</label>
            <input className="form-control mx-2 border rounded-md border-slate-300" type="text" onChange={(event) => setEmail(event.target.value)} id="email" name="email"/>
          </div>
          <div className="form-group py-4">
            <label for="pwd">Password:</label>
            <input className="form-control mx-2 border rounded-md border-slate-300" type="password" onChange={(event) => setPassword(event.target.value)} id="pwd" name="password"/>
          </div>
          <div className="form-group">
            <input type="button" onClick={() => createUser()} className="form-control flex rounded-md button-color text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 px-3 py-2 text-white" value="Create User" />            
            <span className='text-slate-400	'>Already have an account? <Link className='text-sky-600' to="/login">Login</Link></span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;