import './App.css';
import NavBar from './Components/navbar'

function App() {

  return (
    <div className='bg-slate-100'>
      <NavBar />
      <div className="container hero-section mx-auto grid grid-cols-5 grid-flow-row sm:grid-flow-col py-5 gap-3">
        <div className="flex justify-center col-span-2 text-4xl p-5 items-center">
          <div className="hero-text">
            <div className='pb-5'>Finding your dream job? You've come to the right place.</div>
            <button className='rounded-md bg-white text-gray-900 border-neutral-600 border border-solid text-sm p-2'>Hire Talent</button>
            <button className='rounded-md button-color text-white text-sm p-2 mx-2'>Find a job</button>
          </div>
        </div>
        <div className="flex sm:col-span-3 justify-center">
          <img src='jobseeker.svg' width='700px' alt='hero image'/>
        </div>
      </div>
    </div>
  );
}



export default App;