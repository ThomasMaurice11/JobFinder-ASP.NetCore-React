import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ProposalsToAccept = () => {
  const [proposals, setProposals] = useState([]);

  const fetchProposals = async () => {
    try {
      const response = await axios.get('http://localhost:5109/api/proposal/myproposals', {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      setProposals(response.data);
    //   toast.success('Proposals loaded successfully!');
    } catch (error) {
      console.error('Error fetching proposals:', error);
      toast.error('Failed to load proposals.');
    }
  };

  useEffect(() => {
    fetchProposals();
  }, []);

  const openCV = async (proposalId) => {
    try {
      const response = await axios.get(`http://localhost:5109/api/proposal/download-attachment/${proposalId}`, {
        responseType: 'blob',
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
  
      const url = window.URL.createObjectURL(new Blob([response.data], { type: 'application/pdf' }));
      window.open(url, '_blank');
    } catch (error) {
      console.error('Error opening CV:', error);
      toast.error('Failed to open CV.');
    }
  
  };

  return (
    <>
     <link rel='stylesheet' href='assets/Jobs/style.css'></link>
      <div className="Home">
        <div className="container-xxl bg-white p-0">
          <div className="py-5">
            <div className="container">
              <h1 className="text-center mb-5">My Proposals</h1>
              {proposals.map(proposal => (
                <div key={proposal.proposalId} className="job-item p-4 mb-4">
                  <div className="row g-4">
                    <div className="col-sm-12 col-md-8">
                      <div className="text-start">
                        <h5>{proposal.senderName}</h5>
                        <p>Job Seeker Description: {proposal.describeYourself}</p>
                        <p>Job Title {proposal.job.jobTitle}</p>
                      </div>
                    </div>
                    <div className="col-sm-12 col-md-4">
                      <h6>Status: {proposal.proposalStatus}</h6>
                      {proposal.proposalStatus === 'accepted' && (
                        <Link className="btn btn-danger mb-3" to={`/SendMessage/${proposal.receiverId}`}>
                          Send Message
                        </Link>
                      )}
                      <button
                        className="btn btn-primary"
                        onClick={() => openCV(proposal.proposalId)}
                      >
                        Open CV
                      </button>
                      {/* <small>Date Line: {proposal.creationDate}</small> */}
                    </div>
                  </div>
                </div>
              ))}
              {/* <a className="btn btn-primary py-3 px-5" href="/">
                Browse More Jobs
              </a> */}
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default ProposalsToAccept;