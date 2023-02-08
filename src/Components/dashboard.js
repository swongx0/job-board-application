import { useState, useEffect } from 'react';
import { Navigate } from "react-router-dom";
import { Link } from 'react-router-dom';
import NavBar from './navbar'
import CreateJob from './create-job';

export default function Dashboard() {
   const [Applicant, setApplicants] = useState([]);
   const [openJob, setOpenJob] = useState([])
   const [openModal, setOpenModal] = useState(false);

   const toggleModal = () => {
    setOpenModal(!openModal);
   }

   function Applicants() {
    fetch("http://localhost:1337/api/applicantlists")
      .then(res => res.json())
      .then(list => {
        setApplicants(list.data);
      })
   }

   function open() {
    fetch("http://localhost:1337/api/joblists")
      .then(res => res.json())
      .then(list => {
        setOpenJob(list.data);
    })
   }

   const approveApplicant = async (id) => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: '{"data":{"Status":"Approved"}}'
    };
    fetch('http://localhost:1337/api/applicantlists/' + id, requestOptions)
      .then(response => response.json())
      .then(data => this.setState("1"));
   }

   const removeApplicant = async (id) => {
      const requestOptions = {
        method: 'DELETE',
        headers: { 'Content-Type': 'application/json' }
      };

      fetch('http://localhost:1337/api/applicantlists/' + id, requestOptions)
        .then(response => response.json())
        .then(data => this.setState("1"));
   }

   useEffect(() => {
       Applicants();
       open();
   }, [])

   if (typeof (Applicant.id) === "undefinsed") {
      const url = "/login";
      return <Navigate to={url} />;
   }

   return (
      <div className='container'>
          <div className="heading">
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"></link>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
            <NavBar />
            <div className="logout-menu">
              <Link to="/">Logout</Link>
            </div>
          </div>
          <div className="job-list-container">
            {openModal ? <CreateJob /> : null}
            <div className="job-list">
              <span className='login-header'>Open Positions</span>
              <button className='add-job inline-flex mx-3 rounded-md button-color text-sm focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800 px-3 py-2 text-white' onClick={toggleModal}>Add New Job</button>
              <hr />
              {
                openJob.map((list, i) => {
                  if (list.attributes.JobStatus === "Open") {
                    return (
                      <div key={i}>
                        <span style={{ fontSize: '17px' }}>{list.attributes.JobPosition}</span>
                        <hr />
                      </div>
                    )
                  }
                })
              }
            </div>
          </div>
          <div className="applicant-list">
            {
              Applicant.map((list, i) => {
                if (list.attributes.Status === "Pending") {
                return (
                  <div key={i}>
                    <div>
                      <div className="details">
                        <div className="logo"></div>
                        <div className="description">
                          <span className="job-name">{list.attributes.Name}</span>
                          <span style={{ float: 'right' }}>{list.attributes.Status}</span>
                          <span className="job-email">{list.attributes.Email}</span>
                          <textarea style={{ borderWidth: '0px' }} readonly cols="70"rows="3">
                            {list.attributes.Message}
                          </textarea>
                          <center>
                            <a target={"_blank"} href={list.attributes.Portfolio_Link}>View Portfolio</a> <br />
                            <button className="btn-success" onClick={() => approveApplicant(list.id)} >Approve</button>
                            <button className="btn-danger" onClick={() => removeApplicant(list.id)}>Decline</button>
                          </center>
                        </div>
                        </div>
                    </div>
                  </div>
                  )
                } 
              })
            }
          </div>
      </div>
   );
}
