import { useState, useEffect } from 'react';
import Apply from './apply';
import NavBar from './navbar'

export default function JobBoard() {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState("");

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
        <NavBar />
      </div>
      <div className='container grid grid-flow-row sm:grid-flow-col gap-3'>
        <div className="flex p-6 items-center filter">
          <button className="filter-text mx-2">Filter</button><br />
            <form className="inline-flex" method="get">
              <input type="radio" onChange={(event) => setSearch(event.target.value.toLowerCase())}  name="c" value="all" />
              <label>All Jobs</label>
              <input type="radio" name="c" value="Backend" onChange={(event) => setSearch(event.target.value.toLowerCase())}  />
              <label>Backend</label>
              <input type="radio" name="c" value="Frontend" onChange={(event) => setSearch(event.target.value.toLowerCase())} />
              <label>Frontend</label>
              <input type="radio" name="c" value="Internship" onChange={(event) => setSearch(event.target.value.toLowerCase())} />
              <label>Internship</label>
            </form>
        </div>
        <div className="flex items-center sm:col-span-4">
          <input type="text" className='form-control mx-2 border rounded-md border-slate-300' placeholder="Search Job..." value={search} onChange={(event) => setSearch(event.target.value.toLowerCase())} />
        </div>
      </div>      
    <div className='container grid grid-cols-5 gap-5'>
      <div className='col-span-2'>
        {
          todos.map((todo, i) => {
            const link = "?jobid=" + todo.id;
            const filter = JSON.stringify(todo.attributes).toLowerCase()
            if(filter.includes(search)){
              return (
                <div className='bg-white rounded-lg p-4 my-4 max-w-xl' key={i}>
                  <div className="details">
                    <img src='https://super-static-assets.s3.amazonaws.com/e7c0f16c-8bd3-4c76-8075-4c86f986e1b2/uploads/favicon/9c68ae10-0a8a-4e3f-9084-3625b19df9cb.png' className="logo" width='100px' alt='job logo'/>
                    <div className="description">
                      <span>{todo.attributes.JobPosition}</span>
                      <span> {todo.attributes.Location}</span>
                      <span className='block'>{todo.attributes.Agency}</span>
                    </div>

                  </div>
                  <div className="apply">
                    <div>{todo.attributes.Experience}</div>
                    <button className='flex rounded-md button-color text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 px-3 py-2 text-white'><a href={link} className='apply-link'>Apply Now</a></button>
                  </div>
                </div>
              )
            }else{}
          })
        }
      </div>
      <div className='col-span-3'>
        <Apply />
      </div>
    </div>
  </div>
  );
}
