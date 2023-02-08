import React from 'react'
import { useState } from 'react';

function CreateJob() {
  const [jobTitle, setjobTitle] = useState("")
  const [jobCategory, setjobCategory] = useState("")
  const [jobLocation, setjobLocation] = useState("")
  const [jobDescription, setjobDescription] = useState("")
  const [jobExpreience, setjobExpreience] = useState("")

  const addjob = async () => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        "data": {
          "JobPosition": jobTitle,
          "Category": jobCategory,
          "Location": jobLocation,
          "Experience": jobExpreience,
          "JobDescription":jobDescription,
          "JobStatus": "Open",
          "Agency": "Strapi"
        }
      })
    };

    fetch('http://localhost:1337/api/joblists', requestOptions)
      .then(response => response.json())
    alert("Job Added Successful...");
  }

  return (
    <div className="modal-background">
      <div className="modal-container p-4">
        <span>Post New Position</span>
        <form className="apply-form py-3" method="get">
          <input type="text" className='form-control border mb-4 rounded-md border-slate-300' onChange={(event) => setjobTitle(event.target.value)} placeholder="Job Title" />
          <input type="text" className='form-control border rounded-md mb-4 border-slate-300' onChange={(event) => setjobCategory(event.target.value)} placeholder="Enter Job Category" />
          <input type="text" className='form-control border rounded-md mb-4 border-slate-300' onChange={(event) => setjobLocation(event.target.value)} placeholder="Location" />
          <textarea onChange={(event) => setjobDescription(event.target.value)} className='form-control mb-4 border rounded-md border-slate-300' placeholder="Job description"></textarea>
          <select onChange={(event) => setjobExpreience(event.target.value)} className="inline-flex w-full justify-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100" aria-expanded="true">
            <option disabled selected>Requirement</option>
            <option value="Entry Level">Entry Level</option>
            <option value="Junior">Junior</option>
            <option value="Mid-Level">Mid-Level</option>
            <option value="Senior">Senior</option>
          </select>
          <input type="button" onClick={() => addjob()} className="rounded-md button-color text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 px-3 py-2 text-white" value="Add Job" />
        </form>
      </div>
    </div>
  )
}

export default CreateJob