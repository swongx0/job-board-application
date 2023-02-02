import { useState } from 'react';
import { Navigate } from "react-router-dom";
import { Link } from 'react-router-dom';

export default function Expenses() {

   const queryParams = new URLSearchParams(window.location.search);
   const id = queryParams.get('id');
   const [auth, setAuth] = useState('');
   const [Email, setEmail] = useState('test@gmail.com');
   const [Password, setPassword] = useState('pass123');
   const [submit, setsubmit] = useState();
   const update = async () => {

        const requestOptions = {
           method: 'POST',
           headers: { 'Content-Type': 'application/json' },
           body: JSON.stringify({identifier:Email,password:Password})
       };
       fetch('http://localhost:1337/api/auth/local', requestOptions)
           .then(response => response.json())
           .then(data => setAuth(data));
     }

   console.log(auth.jwt)
   if(typeof(auth.jwt)!=="undefined"){
       const url = "/dashboard?token="+auth.jwt;
       return <Navigate to={url}/>;
   }

   return (
    <div className="grid grid-cols-2 items-stretch m-auto login-page">
      <div className='p-5 text-left self-center mx-auto'>
        <h2 className='login-header'>Log in</h2>
        <p>Login as{id} an employer</p>
        <form>
          <div className="form-group py-4">
            <label for="usr">Email:</label>
            <input type="text" className="form-control mx-2 border rounded-md border-slate-300" id="usr" onChange={(event) => setEmail(event.target.value)} />
          </div>
          <div className="form-group">
            <label for="pwd">Password:</label>
            <input type="password" className="form-control mx-2 border rounded-md border-slate-300" id="pwd" onChange={(event) => setPassword(event.target.value)} />
          </div>
          <div className="form-group py-4">
            <a className="form-control flex rounded-md button-color text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 px-3 py-2 text-white" value="login" onClick={() => update()} >Login</a>
            <span className='text-slate-400	'>Don't have an account? <Link className='text-sky-600' to="/register">Register</Link></span>
          </div>
        </form>
      </div>
      <div className='login-background py-2'>
      </div>
      </div>
   );
}
