import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const UpdateUser = () => {
  const { id } = useParams(); // Access the id parameter from the URL
  const [userData, setUserData] = useState({
    userName: '',
    email: '',
    role: ''
  });

  // Function to fetch user data based on ID
  const fetchUserData = async () => {
    try {
      const response = await axios.get(`http://localhost:5109/api/account/${id}`);
      const userDataFromApi = response.data; // Assuming the response contains user data
      setUserData(userDataFromApi);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };

  useEffect(() => {
    fetchUserData();
  }, [id]); // Fetch user data whenever the id parameter changes

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5109/api/account/update/${id}`, userData);
      toast.success('User updated successfully');
    } catch (error) {
      console.error('Error updating user:', error);
      toast.error('Failed to update user');
    }
  };

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  return (
    <>
    
      <div className="uformbold-main-wrapper">
        <div className="uformbold-form-wrapper">
          <form onSubmit={handleSubmit}>
            <div className="uformbold-input-group">
              <label htmlFor="name" className="uformbold-form-label">
                UserName
              </label>
              <input
                type="text"
                name="userName"
                id="userName"
                placeholder="Username"
                className="uformbold-form-input"
                value={userData.userName}
                onChange={handleChange}
              />
            </div>
            <div className="uformbold-input-group">
              <label htmlFor="email" className="uformbold-form-label">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                className="uformbold-form-input"
                value={userData.email}
                onChange={handleChange}
              />
            </div>
           
            <button type="submit" className="uformbold-btn">Update</button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default UpdateUser;
