import React, { useContext } from "react";
import { Link, Navigate, useHistory } from "react-router-dom";
import { AuthContext } from './Context/AuthContext'; // Importing AuthContext
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom'
import { useAuth } from './Context/AuthContext';







// Admin Navbar Component
const ANavbar = ({ handleLogout }) => {
  // const { user } = useAuth();
  // // const Role =user.role ;
  // console.log("role :",user.role);
  return (
    <>
     <link rel="manifest" href="site.webmanifest" />
        <link rel="shortcut icon" type="image/x-icon" href="assets/img/favicon.ico" />
       
        <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="assets/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="assets/css/flaticon.css" />
        <link rel="stylesheet" href="assets/css/price_rangs.css" />
        <link rel="stylesheet" href="assets/css/slicknav.css" />
        <link rel="stylesheet" href="assets/css/animate.min.css" />
        <link rel="stylesheet" href="assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="assets/css/fontawesome-all.min.css" />
        <link rel="stylesheet" href="assets/css/themify-icons.css" />
        <link rel="stylesheet" href="assets/css/slick.css" />
        <link rel="stylesheet" href="assets/css/nice-select.css" />
        <link rel="stylesheet" href="assets/css/style.css" />
  
      {/* Your admin navbar JSX */}
      <header>
        {/* Admin Navbar JSX */}
        <div className="header-area header-transparrent">
          {/* Admin Navbar Content */}
          <div className="headder-top header-sticky">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-3 col-md-2">
                  {/* Logo */}
                  <div className="logo">
                    <a href="index.html">
                      <img src="assets/img/logo/logo.png" alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-9 col-md-9">
                  <div className="menu-wrapper">
                    {/* Main-menu */}
                    <div className="main-menu">
                      <nav className="d-none d-lg-block">
                        <ul id="navigation">
                          
                          <li>
                            <Link to="/UsersList">Manage Users  </Link>
                          </li>
                          <li>
                            <Link to="/JobsToAccept">Manage Jobs</Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    {/* Header-btn */}
                    <div className="header-btn d-none f-right d-lg-block">
                      <button className="btn head-btn1" onClick={handleLogout}>
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Mobile Menu */}
              <div className="col-12">
                <div className="mobile_menu d-block d-lg-none" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

// Jobseeker Navbar Component
const JNavbar = ({ handleLogout }) => {
  return (
    <>
     <link rel="manifest" href="site.webmanifest" />
        <link rel="shortcut icon" type="image/x-icon" href="assets/img/favicon.ico" />
       
        <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="assets/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="assets/css/flaticon.css" />
        <link rel="stylesheet" href="assets/css/price_rangs.css" />
        <link rel="stylesheet" href="assets/css/slicknav.css" />
        <link rel="stylesheet" href="assets/css/animate.min.css" />
        <link rel="stylesheet" href="assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="assets/css/fontawesome-all.min.css" />
        <link rel="stylesheet" href="assets/css/themify-icons.css" />
        <link rel="stylesheet" href="assets/css/slick.css" />
        <link rel="stylesheet" href="assets/css/nice-select.css" />
        <link rel="stylesheet" href="assets/css/style.css" />
  
      {/* Your jobseeker navbar JSX */}
      <header>
        {/* Jobseeker Navbar JSX */}
        <div className="header-area header-transparrent">
          {/* Jobseeker Navbar Content */}
          <div className="headder-top header-sticky">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-3 col-md-2">
                  {/* Logo */}
                  <div className="logo">
                    <a href="index.html">
                      <img src="assets/img/logo/logo.png" alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-9 col-md-9">
                  <div className="menu-wrapper">
                    {/* Main-menu */}
                    <div className="main-menu">
                      <nav className="d-none d-lg-block">
                        <ul id="navigation">
                          <li>
                            <Link to="/Jobs">View Jobs</Link>
                          </li>
                          <li>
                            <Link to="/SavedJobs">Saved Jobs</Link>
                          </li>
                          <li>
                            <Link to="/Myproposals">My Proposals</Link>
                          </li>
                          <li>
                            <Link to="/MyMessages">Messages Received</Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    {/* Header-btn */}
                    <div className="header-btn d-none f-right d-lg-block">
                      <button className="btn head-btn1" onClick={handleLogout}>
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Mobile Menu */}
              <div className="col-12">
                <div className="mobile_menu d-block d-lg-none" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

// Employer Navbar Component
const ENavbar = ({ handleLogout }) => {
  return (
    <>
    
    <link rel="manifest" href="site.webmanifest" />
        <link rel="shortcut icon" type="image/x-icon" href="assets/img/favicon.ico" />
       
        <link rel="stylesheet" href="assets/css/bootstrap.min.css" />
        <link rel="stylesheet" href="assets/css/owl.carousel.min.css" />
        <link rel="stylesheet" href="assets/css/flaticon.css" />
        <link rel="stylesheet" href="assets/css/price_rangs.css" />
        <link rel="stylesheet" href="assets/css/slicknav.css" />
        <link rel="stylesheet" href="assets/css/animate.min.css" />
        <link rel="stylesheet" href="assets/css/magnific-popup.css" />
        <link rel="stylesheet" href="assets/css/fontawesome-all.min.css" />
        <link rel="stylesheet" href="assets/css/themify-icons.css" />
        <link rel="stylesheet" href="assets/css/slick.css" />
        <link rel="stylesheet" href="assets/css/nice-select.css" />
        <link rel="stylesheet" href="assets/css/style.css" />
  
      {/* Your employer navbar JSX */}
      <header>
        {/* Employer Navbar JSX */}
        <div className="header-area header-transparrent">
          {/* Employer Navbar Content */}
          <div className="headder-top header-sticky">
            <div className="container">
              <div className="row align-items-center">
                <div className="col-lg-3 col-md-2">
                  {/* Logo */}
                  <div className="logo">
                    <a href="index.html">
                      <img src="assets/img/logo/logo.png" alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-9 col-md-9">
                  <div className="menu-wrapper">
                    {/* Main-menu */}
                    <div className="main-menu">
                      <nav className="d-none d-lg-block">
                        <ul id="navigation">
                          <li>
                            <Link to="/AddNewJob">Post New Job</Link>
                          </li>
                          <li>
                            <Link to="/ProposalsToAccept">
                              Review Submitted proposals
                            </Link>
                          </li>
                          <li>
                            <Link to="/MyMessages">
                              Messages Received
                            </Link>
                          </li>
                        </ul>
                      </nav>
                    </div>
                    {/* Header-btn */}
                    <div className="header-btn d-none f-right d-lg-block">
                      <button className="btn head-btn1" onClick={handleLogout}>
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {/* Mobile Menu */}
              <div className="col-12">
                <div className="mobile_menu d-block d-lg-none" />
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

const Navbar = () => {


  
  const navigate = useNavigate();


  // const { user, role } = useAuth();




  const initialToken = localStorage.getItem('token')
  if (!initialToken) {
    // Token doesn't exist, handle accordingly (e.g., redirect to login page)
    return <Link to="/" />;
  }
  const decodedToken = jwtDecode(initialToken);
  const role=decodedToken.role;


    console.log("role: ",role);
    console.log(initialToken);

  // Function to handle logout
  const handleLogout = () => {
    // Delete the token from local storage
    localStorage.removeItem('token');
    // Clear the token in context
    // updateTokenForLogout('');
    // Navigate to the home page
    // history.push('/');
    navigate('/');
  }; 

  

  switch (role) {
    case "admin":
      return <ANavbar handleLogout={handleLogout} />;
    case "jobseeker":
      return <JNavbar handleLogout={handleLogout} />;
    case "employer":
      return <ENavbar handleLogout={handleLogout} />;
    default:
      return null; // Render nothing if the role is not recognized
  }
};

export default Navbar;




