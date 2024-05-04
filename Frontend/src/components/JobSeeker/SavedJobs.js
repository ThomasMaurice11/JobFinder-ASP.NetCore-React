import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SavedJobs = () => {
    const [savedJobs, setSavedJobs] = useState([]);

    useEffect(() => {
        const fetchSavedJobs = async () => {
            try {
                const token = localStorage.getItem('token');
                if (!token) {
                    throw new Error('Authentication token not found');
                }
                const response = await axios.get('http://localhost:5109/api/portfolio', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                if (!response.data) {
                    throw new Error('Failed to fetch saved jobs');
                }
                setSavedJobs(response.data);
            } catch (error) {
                console.error('Error fetching saved jobs:', error);
            }
        };

        fetchSavedJobs();
    }, []);

    return (
        <>
            <link rel='stylesheet' href='assets/Jobs/style.css'></link>
            <div className="Home">
                <div className="container-xxl bg-white p-0">
                    <div className="container-xxl py-5">
                        <div className="container">
                            <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
                                Saved Jobs
                            </h1>
                            <div
                                className="tab-class text-center wow fadeInUp"
                                data-wow-delay="0.3s"
                            >
                                <div className="tab-content">
                                    <div id="tab-1" className="tab-pane fade show p-0 active">
                                        {savedJobs.map(job => (
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
                                                   
                                                    <Link className="btn btn-primary" to={`/ApplyForJob/${job.jobId}`}>Apply Now</Link>
                                                </div>
                                                <small className="text-truncate">
                                                    <i className="far fa-calendar-alt text-primary me-2" />
                                                    Date Line: {job.creationDate}
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                        ))}
                                        <a className="btn btn-primary py-3 px-5" href="">
                                            Browse More Jobs
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default SavedJobs;
