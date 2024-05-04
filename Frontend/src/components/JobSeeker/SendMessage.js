import React, { useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SendMessage = () => {
    const { id } = useParams();
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            // Get token from local storage
            const token = localStorage.getItem('token');

            // Make the request with the token in the Authorization header
            const response = await axios.post(
                'http://localhost:5109/api/messages',
                { receiverId: id, message },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: `Bearer ${token}`
                    }
                }
            );

            if (response.status !=400) {
                toast.success('Message sent successfully');
            
               
            }
        } catch (error) {
            console.error('Error sending message:', error);
            toast.error('Failed to send message');
        }
    };

    return (
        <>
            
            <div className="uformbold-main-wrapper">
                <div className="uformbold-form-wrapper">
                    <div className="ualert alert-danger my-2"></div>
                    <form onSubmit={handleSubmit}>
                        <div className="uformbold-form-title">
                            <h2 className="">Send Message</h2>
                        </div>
                        <div className="uformbold-input-flex">
                            <div>
                                <label htmlFor="message" className="uformbold-form-label">
                                    Message
                                </label>
                                <textarea
                                    name="message"
                                    id="message"
                                    className="uformbold-form-input"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                ></textarea>
                            </div>
                        </div>
                        <button type="submit" className="uformbold-btn m-2">
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
            <ToastContainer />
        </>
    );
};

export default SendMessage;
