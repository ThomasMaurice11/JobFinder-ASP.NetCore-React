import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

const JobsToAccept = () => {
    const [jobs, setJobs] = useState([]);

    const fetchJobs = async () => {
        try {
            const response = await fetch('http://localhost:5109/api/job/all');
            if (!response.ok) {
                throw new Error('Failed to fetch jobs');
            }
            const data = await response.json();
            setJobs(data);
        } catch (error) {
            console.error('Error fetching jobs:', error);
        }
    };

    useEffect(() => {
        fetchJobs();
    }, []);

    const handleAcceptJob = async (id) => {
        try {
            const response = await fetch(`http://localhost:5109/api/job/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ jobStatus: 'accepted' }) // Update status to 'accepted'
            });

            if (!response.ok) {
                throw new Error('Failed to accept job');
            }

            // Refresh the job list after updating the status
            toast.success('Job has been accpeted');
            fetchJobs();
        } catch (error) {
            console.error('Error accepting job:', error);
        }
    };
    
    const handleRefuseJob = async (id) => {
        try {
            const response = await fetch(`http://localhost:5109/api/job/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ jobStatus: 'refused' }) // Update status to 'refused'
            });

            if (!response.ok) {
                throw new Error('Failed to refuse job');
            }
            toast.success('Job has been refused');
            // Refresh the job list after updating the status
            fetchJobs();
        } catch (error) {
            console.error('Error refusing job:', error);
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
                                Job Listing
                            </h1>
                            <div
                                className="tab-class text-center wow fadeInUp"
                                data-wow-delay="0.3s"
                            >
                                <div className="tab-content">
                                    <div id="tab-1" className="tab-pane fade show p-0 active">
                                        {jobs.map(job => (
                                            // Render only pending jobs
                                            job.jobStatus === "pending" && (
                                                <div key={job.id} className="job-item p-4 mb-4">
                                                    <div className="row g-4">
                                                        <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                                            <div className="text-start ps-4">
                                                                <h5 className="mb-3">{job.jobTitle}</h5>
                                                                <p>{job.jobDescription}</p>
                                                                <span className="text-truncate me-3">
                                                                    <i className="far fa-clock text-primary me-2" />
                                                                    {job.jobType}
                                                                </span>
                                                                <span className="text-truncate me-0">
                                                                    <i className="far fa-money-bill-alt text-primary me-2" />
                                                                    {job.jobBudget}
                                                                </span>
                                                                <br></br>
                                                                <span className="text-truncate my-10">
                                                                   Number of Proposals: {job.numberOfProposals}
                                                                </span>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                                            <div className="d-flex mb-3">
                                                                <button className="btn btn-primary" onClick={() => handleAcceptJob(job.jobId)}>Accept</button>
                                                            </div>
                                                            <div className="d-flex mb-3">
                                                                <button className="btn btn-danger" onClick={() => handleRefuseJob(job.jobId)}>Refuse</button>
                                                            </div>
                                                            <small className="text-truncate">
                                                                <i className="far fa-calendar-alt text-primary me-2" />
                                                                Date Line: {job.creationDate}
                                                            </small>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
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
            <ToastContainer />
        </>
    );
}

export default JobsToAccept;
