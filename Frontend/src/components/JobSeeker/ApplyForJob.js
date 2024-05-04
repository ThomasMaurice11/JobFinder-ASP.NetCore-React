import { useParams } from 'react-router-dom';
import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ApplyForJob = () => {
    const { id } = useParams(); // Retrieve the jobId parameter from the URL

    const [senderName, setSenderName] = useState('');
    const [describeYourself, setDescribeYourself] = useState('');
    const [attachment, setAttachment] = useState(null); // State to hold the file

    const handleSubmit = async (e) => {
        e.preventDefault();

        console.log(id);
        console.log(senderName);
        console.log(describeYourself);

        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error('Authentication token not found');
            }

            const formData = new FormData();
            formData.append('jobId', id);
            formData.append('senderName', senderName);
            formData.append('describeYourself', describeYourself);
            formData.append('attachment', attachment); // Append the file to the form data

            const response = await axios.post('http://localhost:5109/api/proposal', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data', // Set content type to multipart/form-data
                    'Authorization': `Bearer ${token}`
                }
            });

            console.log('Proposal submitted successfully:', response.data);
            toast.success('Proposal submitted successfully:');
        } catch (error) {
            console.error('Error submitting proposal:', error.message);
        }
    };

    const handleFileChange = (e) => {
        setAttachment(e.target.files[0]); // Set the selected file
    };

    return (
        <>
            <link rel='stylesheet' href='assets/ApplyForJob/style.css'></link>
            <div className="uformbold-main-wrapper">
                <div className="uformbold-form-wrapper">
                    <div className="ualert alert-danger my-2"></div>
                    <form onSubmit={handleSubmit}>
                        <div className="uformbold-form-title">
                            <h2 className="">Job Application</h2>
                        </div>
                        <div className="uformbold-input-flex">
                            <div>
                                <label htmlFor="firstname" className="uformbold-form-label">
                                    First name
                                </label>
                                <input
                                    type="text"
                                    name="firstname"
                                    id="firstname"
                                    className="uformbold-form-input"
                                    value={senderName}
                                    onChange={(e) => setSenderName(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="uformbold-input-flex">
                            <div>
                                <label htmlFor="describeYourself" className="uformbold-form-label">
                                    Talk about your skills
                                </label>
                                <textarea
                                    name="describeYourself"
                                    id="describeYourself"
                                    className="uformbold-form-input"
                                    value={describeYourself}
                                    onChange={(e) => setDescribeYourself(e.target.value)}
                                ></textarea>
                            </div>
                        </div>
                        <div className="uformbold-input-flex">
                            <div>
                                <label htmlFor="attachment" className="uformbold-form-label">
                                    Attachment
                                </label>
                                <input
                                    type="file"
                                    id="attachment"
                                    className="uformbold-form-input"
                                    onChange={handleFileChange}
                                />
                            </div>
                        </div>
                        <button type="submit" className="uformbold-btn m-2">
                            Submit Proposal
                        </button>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default ApplyForJob;
