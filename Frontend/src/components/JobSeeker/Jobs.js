import React, {useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { AuthContext,AuthProvider } from '../../Context/AuthContext';
import { useContext } from 'react';
import { jwtDecode } from 'jwt-decode';
import { Redirect } from 'react-router-dom'; // Import Redirect





const Jobs = () => {
    
    const [jobs, setJobs] = useState([]);
    const [originalJobs, setOriginalJobs] = useState([]);
    const [searchCategory, setSearchCategory] = useState('jobTitle');
    const [searchKeyword, setSearchKeyword] = useState('');

 
    

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.get('http://localhost:5109/api/job/all');
                if (!response.data) {
                    throw new Error('Failed to fetch jobs');
                }
                // Set both jobs and originalJobs to contain all fetched jobs
                const acceptedJobs = response.data.filter(job => job.jobStatus === 'accepted');
                setJobs(acceptedJobs);
                setOriginalJobs(acceptedJobs);
            } catch (error) {
                console.error('Error fetching jobs:', error);
            }
        };

        fetchJobs();
    }, []);

    useEffect(() => {
        // Perform search based on searchCategory and searchKeyword
        // Update jobs state accordingly
        const filteredJobs = originalJobs.filter(job => {
            switch (searchCategory) {
                case 'jobTitle':
                    return job.jobTitle.toLowerCase().includes(searchKeyword.toLowerCase());
                case 'jobType':
                    return job.jobType.toLowerCase().includes(searchKeyword.toLowerCase());
                case 'jobBudget':
                    // Check if jobBudget is a string and not null or undefined
                    return String(job.jobBudget).toLowerCase().includes(searchKeyword.toLowerCase());
                default:
                    return false;
            }
        });
        
        setJobs(filteredJobs);
    }, [searchCategory, searchKeyword, originalJobs]);



   
    const token = localStorage.getItem('token');
    if (!token) {
        // Token doesn't exist, handle accordingly (e.g., redirect to login page)
        return <Link to="/" />;
      }

    // Make sure token is available
    if (!token) {
        throw new Error('Authentication token not found');
    }

    const handleSaveJob = async (jobTitle) => {
        try {
            const response = await axios.post(
                'http://localhost:5109/api/portfolio',
                {
                    jobTitle: jobTitle
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                }
            );
            if (response.status !== 400) {
                toast.success('Job saved successfully');
            } else {
                throw new Error('Failed to save job');
            }
        } catch (error) {
            console.error('Error saving job:', error);
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
                            <div className="s003">
                                <form>
                                    <div className="inner-form">
                                        <div className="input-field first-wrap">
                                            <div className="input-select">
                                                <select
                                                    data-trigger=""
                                                    name="choices-single-defaul"
                                                    value={searchCategory}
                                                    onChange={(e) => setSearchCategory(e.target.value)}
                                                >
                                                    {/* <option value='' placeholder="">Category</option> */}
                                                    <option value="jobTitle">Job Title</option>
                                                    <option value="jobType">Job Type</option>
                                                    <option value="jobBudget">Job Budget</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div className="input-field second-wrap">
                                            <input
                                                id="search"
                                                type="text"
                                                placeholder="Enter Keywords?"
                                                value={searchKeyword}
                                                onChange={(e) => setSearchKeyword(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="tab-class text-center wow fadeInUp my-4" data-wow-delay="0.3s">
                                <div className="tab-content">
                                    <div id="tab-1" className="tab-pane fade show p-0 active">
                                        {jobs.map(job => (
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
                                                            <button
                                                                className="btn btn-light btn-square me-3"
                                                                onClick={() => handleSaveJob(job.jobTitle)}
                                                            >
                                                                <i className="far fa-heart text-primary" />
                                                            </button>
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
            <ToastContainer />
        </>
    );
}

export default Jobs;
