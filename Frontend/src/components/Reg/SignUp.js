import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [UserName, setUsername] = useState('');
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [Role, setRole] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post('http://localhost:5109/api/account/register', {
        UserName,
        Password,
        Email,
        Role
      });
      setUsername('');
      setEmail('');
      setPassword('');
      setRole('');
      navigate('/');
      alert('User added successfully!');
    } catch (error) {
      console.error('Error adding user:', error);
      alert('Error adding user. Please try again later.');
    }
  };

  return (
    <>
    <link rel="stylesheet" href="assets/reg/css/style.css" />
    <div className="main">
      <section className="signup">
        <div className="container">
          <div className="signup-content">
            <div className="signup-form">
              <h2 className="form-title">Sign up</h2>
              <form method="POST" className="register-form" onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="name">
                    <i className="zmdi zmdi-account material-icons-name" />
                  </label>
                  <input
                    type="text"
                    name="Username"
                    id="name"
                    onChange={(e) => setUsername(e.target.value)}
                    value={UserName}
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="email">
                    <i className="zmdi zmdi-email" />
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={Email}
                    placeholder="Your Email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="pass">
                    <i className="zmdi zmdi-lock" />
                  </label>
                  <input
                    type="password"
                    name="pass"
                    id="pass"
                    onChange={(e) => setPassword(e.target.value)}
                    value={Password}
                    placeholder="Password"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="role">
                    <i className="zmdi zmdi-account-box-o" />
                  </label>
                  <select
                    name="role"
                    id="role"
                    onChange={(e) => setRole(e.target.value)}
                    value={Role}
                    placeholder="Role"
                  >
                    <option value="">Select Role</option>
                    <option value="jobseeker">Jobseeker</option>
                    <option value="employer">Employer</option>
                  </select>
                </div>
                <div className="form-group form-button">
                  <input
                    type="submit"
                    name="signup"
                    id="signup"
                    className="form-submit"
                    defaultValue="Register"
                  />
                </div>
              </form>
            </div>
            <div className="signup-image">
              <figure>
                <img src="assets/reg/images/signup-image.jpg" alt="sing up image" />
              </figure>
            </div>
          </div>
        </div>
      </section>
    </div>
    </>
  );
};

export default SignUp;
