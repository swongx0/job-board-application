import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Apply from './apply';

export default function JobBoard() {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("");
  const [showForm, setShowForm] = useState(false);

  const onClick = () => setShowForm(!showForm)


  function update() {
    fetch("http://localhost:1337/api/joblists")
      .then(res => res.json())
      .then(todo => {
        setTodos(todo.data);
      })
  }
  useEffect(() => {
    update();
  }, [])


  return (
    <div className='bg-slate-100 job-board'>
      <div className="header">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"></link>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        <nav class="p-3 bg-transparent">
        <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
          <div class="relative flex h-16 items-center justify-between">
            <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
              <button type="button" class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
                <span class="sr-only">Open main menu</span>
                <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
              
                <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
              <div class="flex flex-shrink-0 items-center">
                <span className='logo'>HireMe</span>
              </div>
              <div class="hidden sm:ml-6 sm:block">
                <div class="flex space-x-4">
                  <Link to="/" className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>

                  <Link to="/job-board" className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Features</Link>

                  <Link to="/job-board" className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Job Board</Link>

                  <Link to="/" className="text-gray-900 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact Us</Link>
                </div>
              </div>
            </div>
            <div class="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
              <div class="relative ml-3">
                <div>
                  <button type="button" class="flex rounded-md button-color text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800" id="user-menu-button" aria-expanded="false" aria-haspopup="true">
                    <Link to="/login" className="px-3 py-2 text-white">Employers</Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="sm:hidden" id="mobile-menu">
          <div class="space-y-1 px-2 pt-2 pb-3">
            <a href="#" class="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium" aria-current="page">Dashboard</a>

            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Team</a>

            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Projects</a>

            <a href="#" class="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Calendar</a>
          </div>
        </div>
      </nav>
    </div>
    <div className='container grid grid-flow-row sm:grid-flow-col gap-3'>
      <div class="flex p-6 items-center filter">
        <button className="filter-text mx-2">Filter</button><br />
          <form className="inline-flex" method="get">
            <input type="radio" onChange={(event) => setSearch(event.target.value.toLowerCase())}  name="c" value="" />
            <label>All Jobs</label><br />
            <input type="radio" name="c" value="Backend" onChange={(event) => setSearch(event.target.value.toLowerCase())}  />
            <label>Backend</label><br />
            <input type="radio" name="c" value="Frontend" onChange={(event) => setSearch(event.target.value.toLowerCase())} />
            <label>Frontend</label><br />
            <input type="radio" name="c" value="Internship" onChange={(event) => setSearch(event.target.value.toLowerCase())} />
            <label>Internship</label>
          </form>
      </div>
      <div class="flex items-center sm:col-span-4">
        <input type="text" className='form-control mx-2 border rounded-md border-slate-300' placeholder="Search Job..." value={search} onChange={(event) => setSearch(event.target.value.toLowerCase())} />
      </div>
    </div>      
    <div className='container grid grid-cols-5 gap-5'>
      <div className='col-span-2'>
        {
          todos.map((todo, i) => {
            const link = "apply?jobid=" + todo.id;
            const filter = JSON.stringify(todo.attributes).toLowerCase()
            if(filter.includes(search)){
              return (
                <div className='bg-white rounded-lg p-4 my-4 max-w-xl' key={i}>
                  <div className="details">
                    <img src='https://super-static-assets.s3.amazonaws.com/e7c0f16c-8bd3-4c76-8075-4c86f986e1b2/uploads/favicon/9c68ae10-0a8a-4e3f-9084-3625b19df9cb.png' className="logo" width='100px' alt='job logo'/>
                    <div className="description">
                      <span className="span1">{todo.attributes.JobPosition}</span>
                      <span className='right'> {todo.attributes.Location}</span>
                      <span className="span2">
                      {todo.attributes.JobStatus}
                      </span><br /><br />
                      <span className="span1">{todo.attributes.Agency}</span>
                    </div>

                  </div>
                  <div className="apply">
                    <button onClick={onClick}>Apply Now</button>
                    <div className="ap2">{todo.attributes.Experience}</div>
                  </div>
                </div>
              )
            }else{}
          })
        }
      </div>
      <div className='col-span-3'>
        {showForm ? <Apply /> : null}
      </div>
    </div>
  </div>
  );
}
