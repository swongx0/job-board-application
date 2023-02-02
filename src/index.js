import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Login from "./Components/login";
import Dashboard from "./Components/dashboard";
import Register from "./Components/register";
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Apply from './Components/apply';
import JobBoard from './Components/job-board'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
 <React.StrictMode>
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="job-board" element={<JobBoard />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="dashboard" element={<Dashboard />} />
      <Route path="apply" element={<Apply />} />
    </Routes>
  </BrowserRouter>
 </React.StrictMode>
);

