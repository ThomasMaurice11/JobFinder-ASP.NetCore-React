import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import {jwtDecode} from 'jwt-decode'; // Import jwtDecode
import AddNewJob from './components/Employer/AddNewJob';
import Jobs from './components/JobSeeker/Jobs';
import ApplyForJob from './components/JobSeeker/ApplyForJob';
import AddNewUser from './components/Admin/AddNewUser';
import JobsToAccept from './components/Admin/JobsToAccept';
import Proposal from './components/Employer/Proposal';
import UsersList from './components/Admin/UsersList';
import SavedJobs from './components/JobSeeker/SavedJobs';
import UpdateUser from './components/Admin/UpdateUser';
import ANavbar from './components/Navbar/ANavbar';
import JNavbar from './components/JobSeeker/JNavbar';
import ENavbar from './components/Employer/ENavbar';
import Login from './components/Reg/Login';
import SignUp from './components/Reg/SignUp';
import AHome from './components/Admin/AHome';
import { AuthContext, AuthProvider } from './Context/AuthContext'; // Import AuthProvider
import ProposalsToAccept from './components/Employer/ProposalsToAccept';
import SendMessage from './components/JobSeeker/SendMessage';
import MyProposals from './components/JobSeeker/MyProposals';
import MyMessages from './components/JobSeeker/MyMessages';
import Navbar from './Navbar';
import ErrorPage from './ErrorPage'; // Import ErrorPage component

function App() {
  // Initialize state for role
  const [role, setRole] = useState(null);

  useEffect(() => {
    // Function to fetch and decode token
    const fetchTokenAndDecode = () => {
      // Extract token from localStorage
      const initialToken = localStorage.getItem('token');

      // Decode token to extract role
      const decodedToken = initialToken ? jwtDecode(initialToken) : null;
      const userRole = decodedToken ? decodedToken.role : null;

      // Set role state
      setRole(userRole);
    };

    // Call the function to fetch and decode token
    fetchTokenAndDecode();
  }, []); // Run this effect only once after component mounted


  return (
    <Router>
      <AuthProvider role={role}> {/* Pass the role to AuthProvider */}

        <Navbar />

        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Login />} />
          <Route path="/SignUp" element={<SignUp />} />

          {/* Protected routes based on user role */}
          {role === 'admin' ? (
            <>
              <Route path="/AddNewUser" element={<AddNewUser />} />
              <Route path="/JobsToAccept" element={<JobsToAccept />} />
              <Route path="/UsersList" element={<UsersList />} />
              <Route path="/UpdateUser/:id" element={<UpdateUser />} />
              <Route path="/AHome" element={<AHome />} />
            </>
          ) : role === 'employer' ? (
            <>
              <Route path="/AddNewJob" element={<AddNewJob />} />
              <Route path="/Proposal" element={<Proposal />} />
              <Route path="/ProposalsToAccept" element={<ProposalsToAccept />} />
              <Route path="/SendMessage/:id" element={<SendMessage />} />
              <Route path="/MyMessages" element={<MyMessages />} />
            </>
          ) : role === 'jobseeker' ? (
            <>
              <Route path="/Jobs" element={<Jobs />} />
              <Route path="/ApplyForJob/:id" element={<ApplyForJob />} />
              <Route path="/SavedJobs" element={<SavedJobs />} />
              <Route path="/SendMessage/:id" element={<SendMessage />} />
              <Route path="/MyProposals" element={<MyProposals />} />
              <Route path="/MyMessages" element={<MyMessages />} />
            </>
          ) : null/* Render nothing if role is not defined */}

          {/* Redirect to error page if user accesses unauthorized route */}
          {/* <Route path="*" element={<ErrorPage />} /> */}
        </Routes>
      </AuthProvider>
    </Router>
  );
}

export default App;
