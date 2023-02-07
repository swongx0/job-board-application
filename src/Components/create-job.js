import React from 'react'
import { useState, useEffect } from 'react';

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
    <div className="filter2_">
      <span>Post New Position</span>
      <form className="filter3_" method="get">
        <input type="text" className='form-control mx-2 border rounded-md border-slate-300' onChange={(event) => setjobTitle(event.target.value)} placeholder="Job Title" />
        <input type="text" className='form-control mx-2 border rounded-md border-slate-300' onChange={(event) => setjobCategory(event.target.value)} placeholder="Enter Job Category" />
        <br />
        <input type="text" className='form-control mx-2 border rounded-md border-slate-300' onChange={(event) => setjobLocation(event.target.value)} placeholder="Location" />
        <br />
        <textarea onChange={(event) => setjobDescription(event.target.value)} className='form-control mx-2 border rounded-md border-slate-300' placeholder="Job description"></textarea>
        <br />
        <select onChange={(event) => setjobExpreience(event.target.value)} className="select">
          <option disabled selected>Requirement</option>
          <option value="Entry Level">Entry Level</option>
          <option value="Junior">Junior</option>
          <option value="Mid-Level">Mid-Level</option>
          <option value="Senior">Senior</option>
        </select><br />
        <input type="button" onClick={() => addjob()} className="inline-flex mx-3 rounded-md button-color text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 px-3 py-2 text-white" value="Add Job" />
      </form>
    </div>
  )
}

export default CreateJob