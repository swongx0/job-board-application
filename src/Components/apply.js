import { useState, useEffect } from 'react';

function Apply() {
  const queryParams = new URLSearchParams(window.location.search);
  const jobid = queryParams.get('jobid');
  const [job, setJob] = useState([]);
  const[fullname,setFullname] = useState("")
  const[email,setEmail] = useState("")
  const[link,setLink] = useState("")
  const[message,setMessage] = useState("")


  const update  = async () =>  {
    fetch("http://localhost:1337/api/joblists/"+jobid)
      .then(res => res.json())
      .then(job_info => {
        setJob(job_info.data.attributes);
      })
  }
  useEffect(() => {
    update();
  }, [])

  const submit = async () => {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "data": {
                "Name": fullname,
                "Email": email,
                "Message": message,
                "Portfolio_Link": link,
                "Status": "Pending",
                "JobID": jobid
            }
        })
    };

    fetch('http://localhost:1337/api/applicantlists', requestOptions)
        .then(response => response.json())

    alert("Application Submited Successful...");
}

  return (
    <div className=" bg-white p-5 rounded-lg mt-4">
        <div className="apply-content">
            <img src='https://super-static-assets.s3.amazonaws.com/e7c0f16c-8bd3-4c76-8075-4c86f986e1b2/uploads/favicon/9c68ae10-0a8a-4e3f-9084-3625b19df9cb.png' style={{width:'80px', height:'80px',marginLeft:'40px',marginTop:'18px',borderRadius:'10px',marginLeft:'44%'}}/>
            <div>
                <center><span className="block"><b>{job.JobPosition}</b></span>
                <span className="block">{job.Location}</span>
                <span className='block mb-2'>{job.JobDescription} </span>
                </center>
                <div>
                    <span className='block mb-2'><b>Experience Required: {job.Experience}</b></span>
                    <span className='block mb-2'><b>Category : {job.Category}</b></span>
                    <span className='block mb-2'><b>Company : {job.Agency}</b></span> 
                </div>
            </div>
            <h4>Application form</h4>
            <form action="submit">
                <div className="form-group mb-2">
                    <input type="text" onChange={(event) => setFullname(event.target.value)} className="form-control" placeholder="Enter Fullname" style={{borderRadius:'10px'}} id="usr"/>
                </div>
                <div className="form-group mb-2">
                    <input type="email" onChange={(event) => setEmail(event.target.value)} className="form-control" placeholder="Enter Email Address" style={{borderRadius:'10px'}} id="usr"/>
                </div>
                <div className="form-group mb-2">
                    <input type="url" onChange={(event) => setLink(event.target.value)} className="form-control" placeholder="Link to  Your Portfolio" style={{borderRadius:'10px'}} id="usr"/>
                </div>
                <div className="form-group mb-2">
                    <textarea name="" onChange={(event) => setMessage(event.target.value)} className="form-control mb-2"  rows="6" placeholder="Tell us more about you and your experience" style={{borderRadius:'10px'}}></textarea>
                    <input type="button" onClick={() => submit()} className="flex rounded-md button-color text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 px-3 py-2 text-white" value="Submit"/>
                </div>
            </form>
        </div>
    </div>
  );
}

export default Apply;