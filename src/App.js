import './App.css';
import NavBar from './Components/navbar'

function App() {

  return (
    <div>
      <NavBar />
      <div class="container hero-section mx-auto grid grid-flow-row sm:grid-flow-col py-5 gap-3">
        <div class="flex justify-center text-4xl p-6 items-center">
          <div class="hero-text">
            <div>Finding your dream job? You've come to the right place.</div>
            <button className='rounded-md bg-white text-gray-900 border-neutral-600 border border-solid text-sm p-2'>Hire Talent</button>
            <button className='rounded-md button-color text-white text-sm p-2 mx-2'>Find a job</button>
          </div>
        </div>
        <div class="flex sm:col-span-2 justify-center">
          <img src='https://images.unsplash.com/photo-1543269664-7eef42226a21?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' alt='hero image'/>
        </div>
      </div>
    </div>
  );
}



export default App;