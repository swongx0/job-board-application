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
        console.log(job_info.data.attributes);
      })
  }
  useEffect(() => {
    update();
    console.log(job);
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
    <div className="job2">
        <div className="details">
            <img src='https://super-static-assets.s3.amazonaws.com/e7c0f16c-8bd3-4c76-8075-4c86f986e1b2/uploads/favicon/9c68ae10-0a8a-4e3f-9084-3625b19df9cb.png' style={{width:'80px', height:'80px',border:'3px solid pink',marginLeft:'40px',marginTop:'18px',borderRadius:'10px',marginLeft:'44%'}}/>
            <div>
                <center><span className="span1_"><b>{job.JobPosition}</b></span>
                <span className="span1_">{job.Location}</span>
                <span>{job.JobDescription} </span>
                </center>
                <div>
                    <span><b>{job.Experience}</b></span> <br/><br/>
                    <span><b>Category : {job.Category}</b></span> <br/><br/>
                    <span><b>Company : {job.Agency}</b></span> 
                </div>
            </div>
            <h4>Application form</h4>
            <form action="">
                <div className="form-group">
                    <input type="text" onChange={(event) => setFullname(event.target.value)} className="form-control" placeholder="Enter Fullname" style={{borderRadius:'10px'}} id="usr"/>
                </div> <br/>
                <div className="form-group">
                    <input type="email" onChange={(event) => setEmail(event.target.value)} className="form-control" placeholder="Enter Email Address" style={{borderRadius:'10px'}} id="usr"/>
                </div><br/>
                <div className="form-group">
                    <input type="url" onChange={(event) => setLink(event.target.value)} className="form-control" placeholder="Link to  Your Portfolio" style={{borderRadius:'10px'}} id="usr"/>
                </div><br/>
                <div className="form-group">
                    <textarea name="" onChange={(event) => setMessage(event.target.value)} className="form-control"  rows="6" placeholder="Tell us more about you and your experience" style={{borderRadius:'10px'}}></textarea>
                    <br/>
                    <input type="button" onClick={() => submit()} className="form-control" value="Submit" />
                </div>
            </form>
        </div>
    </div>
  );
}

export default Apply;