import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const UsersList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5109/api/account/users');
        setUsers(response.data);
      } catch (error) {
        console.error('Error retrieving user data:', error);
      }
    };

    fetchUsers();
  }, []);

  const deleteUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5109/api/account/delete/${id}`);
      // After deletion, fetch updated list of users
      const response = await axios.get('http://localhost:5109/api/account/users');
      setUsers(response.data);
    } catch (error) {
      console.error('Error deleting user:', error);
    }
  };


  return (
    <>
      <link rel='stylesheet' href='assets/Cart/style.css'></link>
      <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">Users</h1>
      <ul className="cards">
        <li> 
          <a href="" className="card">
            <img
              src="https://t3.ftcdn.net/jpg/01/09/34/96/360_F_109349657_6BLNYxVVSBLQxwXjJ9n05OAuHVOZk8lh.jpg"
              className="card__image"
              alt=""
            />
            <div className="card__overlay">
              <div className="card__header">
                <svg className="card__arc" xmlns="https://t3.ftcdn.net/jpg/01/09/34/96/360_F_109349657_6BLNYxVVSBLQxwXjJ9n05OAuHVOZk8lh.jpg">
                  <path />
                </svg>
                <div className="w-100" style={{ display: 'flex', justifyContent: 'center' }}>
                  <Link to="/AddNewUser" className="btn btn-primary">Add New User</Link>
                </div>
              </div>
            </div>
          </a>
        </li>
        {users.map(user => (
          <li key={user.id}>
            <div className="card">
              <img
                src="https://img.freepik.com/premium-vector/anonymous-user-circle-icon-vector-illustration-flat-style-with-long-shadow_520826-1931.jpg"
                className="card__image"
                alt=""
              />
              <div className="card__overlay">
                <div className="card__header">
                  <svg className="card__arc" xmlns="http://www.w3.org/2000/svg">
                    <path />
                  </svg>
                  <div className="card__header-text">
                    <h3 className="card__title">{user.userName}</h3>
                    <span className="card__status">{user.role}</span>
                  </div>
                </div>
                <Link to="/UsersList" onClick={() => deleteUser(user.id)} className="btn btn-danger align-center" style={{ textAlign: 'center', display: 'block', marginBottom: '10px' }}>
                  Delete User
                </Link>
                <Link to={`/UpdateUser/${user.id}`} className="btn btn-primary align-center" style={{ textAlign: 'center', display: 'block', marginTop: '10px' }}>
  Update User
</Link>

              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

export default UsersList;
