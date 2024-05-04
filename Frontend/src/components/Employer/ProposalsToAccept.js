import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

const ProposalsToAccept = () => {
    const [proposals, setProposals] = useState([]);

    const fetchProposals = async () => {
        try {
            const response = await axios.get('http://localhost:5109/api/proposal/receiver', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            setProposals(response.data);
        } catch (error) {
            console.error('Error fetching proposals:', error);
        }
    };

    useEffect(() => {
        fetchProposals();
    }, []);

    const handleAccept = async (proposalId) => {
        try {
            await axios.put(`http://localhost:5109/api/proposal/accept?proposalId=${proposalId}`, {}, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
    
            // Display a success toast message
            toast.success('Proposal accepted successfully');
    
            // Fetch the updated proposals
            fetchProposals();
        } catch (error) {
            console.error('Error accepting proposal:', error);
    
            // Display an error toast message
            toast.error('Failed to accept proposal');
        }
    };

    const handleRefuse = async (proposalId) => {
        try {
            await axios.put(`http://localhost:5109/api/proposal/refuse?proposalId=${proposalId}`, {}, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
        
            // Display a success toast message
            toast.success('Proposal refused successfully');
        
            // Fetch the updated proposals
            fetchProposals();
        } catch (error) {
            console.error('Error refusing proposal:', error);
        
            // Display an error toast message
            toast.error('Failed to refuse proposal');
        }
    };



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
                    <div className="container-xxl py-5">
                        <div className="container">
                            <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
                               Submitted Proposals
                            </h1>
                            <div
                                className="tab-class text-center wow fadeInUp"
                                data-wow-delay="0.3s"
                            >
                                <div className="tab-content">
                                    <div id="tab-1" className="tab-pane fade show p-0 active">
                                        {proposals.map(proposal => (
                                            <div key={proposal.proposalId} className="job-item p-4 mb-4">
                                                <div className="row g-4">
                                                    <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                                        <div className="text-start ps-4">
                                                            <h5 className="mb-3">{proposal.senderName}</h5>
                                                            <h7>Job Seeker description : {proposal.describeYourself}</h7>
                                                            <br></br>
                                                            <span className="text-truncate me-3">
                                                                job name: {proposal.job.jobTitle}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                                        {proposal.proposalStatus !== 'accepted' && (
                                                            <div className="d-flex mb-3">
                                                                <button className="btn btn-primary" onClick={() => handleAccept(proposal.proposalId)}>Accept</button>
                                                                <button className="btn btn-danger" onClick={() => handleRefuse(proposal.proposalId)}>Refuse</button>
                                                            </div>
                                                        )}
                                                        {proposal.proposalStatus === 'accepted' && (
                                                            <div className="d-flex mb-3">
                                                                <Link className="btn btn-danger " to={`/SendMessage/${proposal.senderId}`}>Send Message</Link>
                                                            </div> 
                                                        )}
                                                           <button
                        className="btn btn-primary"
                        onClick={() => openCV(proposal.proposalId)}
                      >
                        Open CV
                      </button>
                                                        {/* <small className="text-truncate">
                                                            <i className="far fa-calendar-alt text-primary me-2" />
                                                            Date Line: {proposal.creationDate}
                                                        </small> */}
                                                        
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    <a className="btn btn-primary py-3 px-5" href="">
                                        Browse More Jobs
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Button "Open CV" */}
         
            <ToastContainer />
        </>
    );
}

export default ProposalsToAccept;
