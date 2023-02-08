import './App.css';
import NavBar from './Components/navbar'
import { Link } from 'react-router-dom';

function App() {

  return (
    <div className='bg-slate-100 home-cover'>
      <NavBar />
      <div className="container hero-section mx-auto grid grid-cols-5 grid-flow-row sm:grid-flow-col py-5 gap-3">
        <div className="flex justify-center col-span-2 text-4xl p-5 items-center">
          <div className="hero-text">
            <div className='pb-5'>Finding your dream job? You've come to the right place.</div>
            <button className='rounded-md button-color text-white text-sm p-2 mr-2'>
              <Link to="/job-board">Find a job</Link>
            </button>
            <button className='rounded-md bg-white text-gray-900 border-neutral-600 border border-solid text-sm p-2'> 
              <Link to="login">Hire talent</Link>
            </button>
          </div>
        </div>
        <div className="flex sm:col-span-3 justify-center">
          <img src='jobseeker.svg' width='700px' alt='featured illustration home page'/>
        </div>
      </div>
    </div>
  );
}



export default App;