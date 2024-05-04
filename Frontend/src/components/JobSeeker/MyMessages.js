import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

const MyMessages = () => {
    const [messages, setMessages] = useState([]);

    const fetchMessages = async () => {
        try {
            const response = await axios.get('http://localhost:5109/api/messages/receiver', {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            setMessages(response.data);
        } catch (error) {
            console.error('Error fetching messages:', error);
        }
    };

    useEffect(() => {
        fetchMessages();
    }, []);

    return (
        <>
            
            <div className="Home">
                <div className="container-xxl bg-white p-0">
                    <div className="container-xxl py-5">
                        <div className="container">
                            <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
                                My Messages
                            </h1>
                            <div
                                className="tab-class text-center wow fadeInUp"
                                data-wow-delay="0.3s"
                            >
                                <div className="tab-content">
                                    <div id="tab-1" className="tab-pane fade show p-0 active">
                                        {messages.map(message => (
                                            <div key={message.messageId} className="message-item p-4 mb-4">
                                                <div className="row g-4">
                                                    <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                                        <div className="text-start ps-4">
                                                            <h5 className="mb-3">Sender Name : {message.senderName}</h5>
                                                            <p>{message.message}</p>
                                                        </div>
                                                    </div>
                                                    
                                                </div>
                                            </div>
                                        ))}
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

export default MyMessages;
