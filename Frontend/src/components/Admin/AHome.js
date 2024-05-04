import { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
const AHome = () => {
    const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://localhost:5109/api/user');
        setUsers(response.data);
      } catch (error) {
        console.error('Error retrieving user data:', error);
      }
    };

    fetchUsers();
  }, []);

    return ( 
        <>
        <link rel='stylesheet' href='assets/Jobs/style.css'></link>
        <link rel='stylesheet' href='assets/Cart/style.css'></link>
        <div className="Home">
            <div className="container-xxl bg-white p-0">
                <div className="container-xxl py-5">
                    <div className="container">
                        <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
                            Job Listing
                        </h1>
                        <div
                            className="tab-class text-center wow fadeInUp"
                            data-wow-delay="0.3s"
                        >
                            <div className="tab-content">
                                <div id="tab-1" className="tab-pane fade show p-0 active">
                                    <div className="job-item p-4 mb-4">
                                        <div className="row g-4">
                                            <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                                <img
                                                    className="flex-shrink-0 img-fluid border rounded"
                                                    src="img/com-logo-1.jpg"
                                                    alt=""
                                                    style={{ width: 80, height: 80 }}
                                                />
                                                <div className="text-start ps-4">
                                                    <h5 className="mb-3">Software Engineer</h5>
                                                    <span className="text-truncate me-3">
                                                        <i className="fa fa-map-marker-alt text-primary me-2" />
                                                        New York, USA
                                                    </span>
                                                    <span className="text-truncate me-3">
                                                        <i className="far fa-clock text-primary me-2" />
                                                        Full Time
                                                    </span>
                                                    <span className="text-truncate me-0">
                                                        <i className="far fa-money-bill-alt text-primary me-2" />
                                                        $123 - $456
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                                <div className="d-flex mb-3">
                                                 
                                                    <Link className="btn btn-primary" to="/ApplyForJob">Accept</Link>
                                                </div>
                                                <div className="d-flex mb-3">
                                                   
                                                    <Link className="btn btn-danger" to="/ApplyForJob">Refuse</Link>
                                                </div>
                                                <small className="text-truncate">
                                                    <i className="far fa-calendar-alt text-primary me-2" />
                                                    Date Line: 01 Jan, 2045
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="job-item p-4 mb-4">
                                        <div className="row g-4">
                                            <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                                <img
                                                    className="flex-shrink-0 img-fluid border rounded"
                                                    src="img/com-logo-2.jpg"
                                                    alt=""
                                                    style={{ width: 80, height: 80 }}
                                                />
                                                <div className="text-start ps-4">
                                                    <h5 className="mb-3">Marketing Manager</h5>
                                                    <span className="text-truncate me-3">
                                                        <i className="fa fa-map-marker-alt text-primary me-2" />
                                                        New York, USA
                                                    </span>
                                                    <span className="text-truncate me-3">
                                                        <i className="far fa-clock text-primary me-2" />
                                                        Full Time
                                                    </span>
                                                    <span className="text-truncate me-0">
                                                        <i className="far fa-money-bill-alt text-primary me-2" />
                                                        $123 - $456
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                                <div className="d-flex mb-3">
                                                    <a className="btn btn-light btn-square me-3" href="">
                                                        <i className="far fa-heart text-primary" />
                                                    </a>
                                                    <Link className="btn btn-primary" to="/apply-job">Apply Now</Link>
                                                </div>
                                                <small className="text-truncate">
                                                    <i className="far fa-calendar-alt text-primary me-2" />
                                                    Date Line: 01 Jan, 2045
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="job-item p-4 mb-4">
                                        <div className="row g-4">
                                            <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                                <img
                                                    className="flex-shrink-0 img-fluid border rounded"
                                                    src="img/com-logo-3.jpg"
                                                    alt=""
                                                    style={{ width: 80, height: 80 }}
                                                />
                                                <div className="text-start ps-4">
                                                    <h5 className="mb-3">Product Designer</h5>
                                                    <span className="text-truncate me-3">
                                                        <i className="fa fa-map-marker-alt text-primary me-2" />
                                                        New York, USA
                                                    </span>
                                                    <span className="text-truncate me-3">
                                                        <i className="far fa-clock text-primary me-2" />
                                                        Full Time
                                                    </span>
                                                    <span className="text-truncate me-0">
                                                        <i className="far fa-money-bill-alt text-primary me-2" />
                                                        $123 - $456
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                                <div className="d-flex mb-3">
                                                    <a className="btn btn-light btn-square me-3" href="">
                                                        <i className="far fa-heart text-primary" />
                                                    </a>
                                                    <Link className="btn btn-primary" to="/apply-job">Apply Now</Link>
                                                </div>
                                                <small className="text-truncate">
                                                    <i className="far fa-calendar-alt text-primary me-2" />
                                                    Date Line: 01 Jan, 2045
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="job-item p-4 mb-4">
                                        <div className="row g-4">
                                            <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                                <img
                                                    className="flex-shrink-0 img-fluid border rounded"
                                                    src="img/com-logo-4.jpg"
                                                    alt=""
                                                    style={{ width: 80, height: 80 }}
                                                />
                                                <div className="text-start ps-4">
                                                    <h5 className="mb-3">Creative Director</h5>
                                                    <span className="text-truncate me-3">
                                                        <i className="fa fa-map-marker-alt text-primary me-2" />
                                                        New York, USA
                                                    </span>
                                                    <span className="text-truncate me-3">
                                                        <i className="far fa-clock text-primary me-2" />
                                                        Full Time
                                                    </span>
                                                    <span className="text-truncate me-0">
                                                        <i className="far fa-money-bill-alt text-primary me-2" />
                                                        $123 - $456
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                                <div className="d-flex mb-3">
                                                    <a className="btn btn-light btn-square me-3" href="">
                                                        <i className="far fa-heart text-primary" />
                                                    </a>
                                                    <Link className="btn btn-primary" to="/apply-job">Apply Now</Link>
                                                </div>
                                                <small className="text-truncate">
                                                    <i className="far fa-calendar-alt text-primary me-2" />
                                                    Date Line: 01 Jan, 2045
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="job-item p-4 mb-4">
                                        <div className="row g-4">
                                            <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                                <img
                                                    className="flex-shrink-0 img-fluid border rounded"
                                                    src="img/com-logo-5.jpg"
                                                    alt=""
                                                    style={{ width: 80, height: 80 }}
                                                />
                                                <div className="text-start ps-4">
                                                    <h5 className="mb-3">Wordpress Developer</h5>
                                                    <span className="text-truncate me-3">
                                                        <i className="fa fa-map-marker-alt text-primary me-2" />
                                                        New York, USA
                                                    </span>
                                                    <span className="text-truncate me-3">
                                                        <i className="far fa-clock text-primary me-2" />
                                                        Full Time
                                                    </span>
                                                    <span className="text-truncate me-0">
                                                        <i className="far fa-money-bill-alt text-primary me-2" />
                                                        $123 - $456
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                                <div className="d-flex mb-3">
                                                    <a className="btn btn-light btn-square me-3" href="">
                                                        <i className="far fa-heart text-primary" />
                                                    </a>
                                                    <Link className="btn btn-primary" to="/apply-job">Apply Now</Link>
                                                </div>
                                                <small className="text-truncate">
                                                    <i className="far fa-calendar-alt text-primary me-2" />
                                                    Date Line: 01 Jan, 2045
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                    <a className="btn btn-primary py-3 px-5" href="">
                                        Browse More Jobs
                                    </a>
                                </div>
                                <div id="tab-2" className="tab-pane fade show p-0">
                                    <div className="job-item p-4 mb-4">
                                        <div className="row g-4">
                                            <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                                <img
                                                    className="flex-shrink-0 img-fluid border rounded"
                                                    src="img/com-logo-1.jpg"
                                                    alt=""
                                                    style={{ width: 80, height: 80 }}
                                                />
                                                <div className="text-start ps-4">
                                                    <h5 className="mb-3">Software Engineer</h5>
                                                    <span className="text-truncate me-3">
                                                        <i className="fa fa-map-marker-alt text-primary me-2" />
                                                        New York, USA
                                                    </span>
                                                    <span className="text-truncate me-3">
                                                        <i className="far fa-clock text-primary me-2" />
                                                        Full Time
                                                    </span>
                                                    <span className="text-truncate me-0">
                                                        <i className="far fa-money-bill-alt text-primary me-2" />
                                                        $123 - $456
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                                <div className="d-flex mb-3">
                                                    <a className="btn btn-light btn-square me-3" href="">
                                                        <i className="far fa-heart text-primary" />
                                                    </a>
                                                    <Link className="btn btn-primary" to="/apply-job">Apply Now</Link>
                                                </div>
                                                <small className="text-truncate">
                                                    <i className="far fa-calendar-alt text-primary me-2" />
                                                    Date Line: 01 Jan, 2045
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="job-item p-4 mb-4">
                                        <div className="row g-4">
                                            <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                                <img
                                                    className="flex-shrink-0 img-fluid border rounded"
                                                    src="img/com-logo-2.jpg"
                                                    alt=""
                                                    style={{ width: 80, height: 80 }}
                                                />
                                                <div className="text-start ps-4">
                                                    <h5 className="mb-3">Marketing Manager</h5>
                                                    <span className="text-truncate me-3">
                                                        <i className="fa fa-map-marker-alt text-primary me-2" />
                                                        New York, USA
                                                    </span>
                                                    <span className="text-truncate me-3">
                                                        <i className="far fa-clock text-primary me-2" />
                                                        Full Time
                                                    </span>
                                                    <span className="text-truncate me-0">
                                                        <i className="far fa-money-bill-alt text-primary me-2" />
                                                        $123 - $456
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                                <div className="d-flex mb-3">
                                                    <a className="btn btn-light btn-square me-3" href="">
                                                        <i className="far fa-heart text-primary" />
                                                    </a>
                                                    <Link className="btn btn-primary" to="/apply-job">Apply Now</Link>
                                                </div>
                                                <small className="text-truncate">
                                                    <i className="far fa-calendar-alt text-primary me-2" />
                                                    Date Line: 01 Jan, 2045
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="job-item p-4 mb-4">
                                        <div className="row g-4">
                                            <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                                <img
                                                    className="flex-shrink-0 img-fluid border rounded"
                                                    src="img/com-logo-3.jpg"
                                                    alt=""
                                                    style={{ width: 80, height: 80 }}
                                                />
                                                <div className="text-start ps-4">
                                                    <h5 className="mb-3">Product Designer</h5>
                                                    <span className="text-truncate me-3">
                                                        <i className="fa fa-map-marker-alt text-primary me-2" />
                                                        New York, USA
                                                    </span>
                                                    <span className="text-truncate me-3">
                                                        <i className="far fa-clock text-primary me-2" />
                                                        Full Time
                                                    </span>
                                                    <span className="text-truncate me-0">
                                                        <i className="far fa-money-bill-alt text-primary me-2" />
                                                        $123 - $456
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                                <div className="d-flex mb-3">
                                                    <a className="btn btn-light btn-square me-3" href="">
                                                        <i className="far fa-heart text-primary" />
                                                    </a>
                                                    <Link className="btn btn-primary" to="/apply-job">Apply Now</Link>
                                                </div>
                                                <small className="text-truncate">
                                                    <i className="far fa-calendar-alt text-primary me-2" />
                                                    Date Line: 01 Jan, 2045
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="job-item p-4 mb-4">
                                        <div className="row g-4">
                                            <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                                <img
                                                    className="flex-shrink-0 img-fluid border rounded"
                                                    src="img/com-logo-4.jpg"
                                                    alt=""
                                                    style={{ width: 80, height: 80 }}
                                                />
                                                <div className="text-start ps-4">
                                                    <h5 className="mb-3">Creative Director</h5>
                                                    <span className="text-truncate me-3">
                                                        <i className="fa fa-map-marker-alt text-primary me-2" />
                                                        New York, USA
                                                    </span>
                                                    <span className="text-truncate me-3">
                                                        <i className="far fa-clock text-primary me-2" />
                                                        Full Time
                                                    </span>
                                                    <span className="text-truncate me-0">
                                                        <i className="far fa-money-bill-alt text-primary me-2" />
                                                        $123 - $456
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                                <div className="d-flex mb-3">
                                                    <a className="btn btn-light btn-square me-3" href="">
                                                        <i className="far fa-heart text-primary" />
                                                    </a>
                                                    <Link className="btn btn-primary" to="/apply-job">Apply Now</Link>
                                                </div>
                                                <small className="text-truncate">
                                                    <i className="far fa-calendar-alt text-primary me-2" />
                                                    Date Line: 01 Jan, 2045
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="job-item p-4 mb-4">
                                        <div className="row g-4">
                                            <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                                <img
                                                    className="flex-shrink-0 img-fluid border rounded"
                                                    src="img/com-logo-5.jpg"
                                                    alt=""
                                                    style={{ width: 80, height: 80 }}
                                                />
                                                <div className="text-start ps-4">
                                                    <h5 className="mb-3">Wordpress Developer</h5>
                                                    <span className="text-truncate me-3">
                                                        <i className="fa fa-map-marker-alt text-primary me-2" />
                                                        New York, USA
                                                    </span>
                                                    <span className="text-truncate me-3">
                                                        <i className="far fa-clock text-primary me-2" />
                                                        Full Time
                                                    </span>
                                                    <span className="text-truncate me-0">
                                                        <i className="far fa-money-bill-alt text-primary me-2" />
                                                        $123 - $456
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                                <div className="d-flex mb-3">
                                                    <a className="btn btn-light btn-square me-3" href="">
                                                        <i className="far fa-heart text-primary" />
                                                    </a>
                                                    <Link className="btn btn-primary" to="/apply-job">Apply Now</Link>
                                                </div>
                                                <small className="text-truncate">
                                                    <i className="far fa-calendar-alt text-primary me-2" />
                                                    Date Line: 01 Jan, 2045
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                    <a className="btn btn-primary py-3 px-5" href="">
                                        Browse More Jobs
                                    </a>
                                </div>
                                <div id="tab-3" className="tab-pane fade show p-0">
                                    <div className="job-item p-4 mb-4">
                                        <div className="row g-4">
                                            <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                                <img
                                                    className="flex-shrink-0 img-fluid border rounded"
                                                    src="img/com-logo-1.jpg"
                                                    alt=""
                                                    style={{ width: 80, height: 80 }}
                                                />
                                                <div className="text-start ps-4">
                                                    <h5 className="mb-3">Software Engineer</h5>
                                                    <span className="text-truncate me-3">
                                                        <i className="fa fa-map-marker-alt text-primary me-2" />
                                                        New York, USA
                                                    </span>
                                                    <span className="text-truncate me-3">
                                                        <i className="far fa-clock text-primary me-2" />
                                                        Full Time
                                                    </span>
                                                    <span className="text-truncate me-0">
                                                        <i className="far fa-money-bill-alt text-primary me-2" />
                                                        $123 - $456
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                                <div className="d-flex mb-3">
                                                    <a className="btn btn-light btn-square me-3" href="">
                                                        <i className="far fa-heart text-primary" />
                                                    </a>
                                                    <Link className="btn btn-primary" to="/apply-job">Apply Now</Link>
                                                </div>
                                                <small className="text-truncate">
                                                    <i className="far fa-calendar-alt text-primary me-2" />
                                                    Date Line: 01 Jan, 2045
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="job-item p-4 mb-4">
                                        <div className="row g-4">
                                            <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                                <img
                                                    className="flex-shrink-0 img-fluid border rounded"
                                                    src="img/com-logo-2.jpg"
                                                    alt=""
                                                    style={{ width: 80, height: 80 }}
                                                />
                                                <div className="text-start ps-4">
                                                    <h5 className="mb-3">Marketing Manager</h5>
                                                    <span className="text-truncate me-3">
                                                        <i className="fa fa-map-marker-alt text-primary me-2" />
                                                        New York, USA
                                                    </span>
                                                    <span className="text-truncate me-3">
                                                        <i className="far fa-clock text-primary me-2" />
                                                        Full Time
                                                    </span>
                                                    <span className="text-truncate me-0">
                                                        <i className="far fa-money-bill-alt text-primary me-2" />
                                                        $123 - $456
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                                <div className="d-flex mb-3">
                                                    <a className="btn btn-light btn-square me-3" href="">
                                                        <i className="far fa-heart text-primary" />
                                                    </a>
                                                    <Link className="btn btn-primary" to="/apply-job">Apply Now</Link>
                                                </div>
                                                <small className="text-truncate">
                                                    <i className="far fa-calendar-alt text-primary me-2" />
                                                    Date Line: 01 Jan, 2045
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="job-item p-4 mb-4">
                                        <div className="row g-4">
                                            <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                                <img
                                                    className="flex-shrink-0 img-fluid border rounded"
                                                    src="img/com-logo-3.jpg"
                                                    alt=""
                                                    style={{ width: 80, height: 80 }}
                                                />
                                                <div className="text-start ps-4">
                                                    <h5 className="mb-3">Product Designer</h5>
                                                    <span className="text-truncate me-3">
                                                        <i className="fa fa-map-marker-alt text-primary me-2" />
                                                        New York, USA
                                                    </span>
                                                    <span className="text-truncate me-3">
                                                        <i className="far fa-clock text-primary me-2" />
                                                        Full Time
                                                    </span>
                                                    <span className="text-truncate me-0">
                                                        <i className="far fa-money-bill-alt text-primary me-2" />
                                                        $123 - $456
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                                <div className="d-flex mb-3">
                                                    <a className="btn btn-light btn-square me-3" href="">
                                                        <i className="far fa-heart text-primary" />
                                                    </a>
                                                    <Link className="btn btn-primary" to="/apply-job">Apply Now</Link>
                                                </div>
                                                <small className="text-truncate">
                                                    <i className="far fa-calendar-alt text-primary me-2" />
                                                    Date Line: 01 Jan, 2045
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="job-item p-4 mb-4">
                                        <div className="row g-4">
                                            <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                                <img
                                                    className="flex-shrink-0 img-fluid border rounded"
                                                    src="img/com-logo-4.jpg"
                                                    alt=""
                                                    style={{ width: 80, height: 80 }}
                                                />
                                                <div className="text-start ps-4">
                                                    <h5 className="mb-3">Creative Director</h5>
                                                    <span className="text-truncate me-3">
                                                        <i className="fa fa-map-marker-alt text-primary me-2" />
                                                        New York, USA
                                                    </span>
                                                    <span className="text-truncate me-3">
                                                        <i className="far fa-clock text-primary me-2" />
                                                        Full Time
                                                    </span>
                                                    <span className="text-truncate me-0">
                                                        <i className="far fa-money-bill-alt text-primary me-2" />
                                                        $123 - $456
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                                <div className="d-flex mb-3">
                                                    <a className="btn btn-light btn-square me-3" href="">
                                                        <i className="far fa-heart text-primary" />
                                                    </a>
                                                    <Link className="btn btn-primary" to="/ApplyForJob">Apply Now</Link>
                                                </div>
                                                <small className="text-truncate">
                                                    <i className="far fa-calendar-alt text-primary me-2" />
                                                    Date Line: 01 Jan, 2045
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="job-item p-4 mb-4">
                                        <div className="row g-4">
                                            <div className="col-sm-12 col-md-8 d-flex align-items-center">
                                                <img
                                                    className="flex-shrink-0 img-fluid border rounded"
                                                    src="img/com-logo-5.jpg"
                                                    alt=""
                                                    style={{ width: 80, height: 80 }}
                                                />
                                                <div className="text-start ps-4">
                                                    <h5 className="mb-3">Wordpress Developer</h5>
                                                    <span className="text-truncate me-3">
                                                        <i className="fa fa-map-marker-alt text-primary me-2" />
                                                        New York, USA
                                                    </span>
                                                    <span className="text-truncate me-3">
                                                        <i className="far fa-clock text-primary me-2" />
                                                        Full Time
                                                    </span>
                                                    <span className="text-truncate me-0">
                                                        <i className="far fa-money-bill-alt text-primary me-2" />
                                                        $123 - $456
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="col-sm-12 col-md-4 d-flex flex-column align-items-start align-items-md-end justify-content-center">
                                                <div className="d-flex mb-3">
                                                    <a className="btn btn-light btn-square me-3" href="">
                                                        <i className="far fa-heart text-primary" />
                                                    </a>
                                                    <Link className="btn btn-primary" to="/ApplyForJob">Apply Now</Link>
                                                </div>
                                                <small className="text-truncate">
                                                    <i className="far fa-calendar-alt text-primary me-2" />
                                                    Date Line: 01 Jan, 2045
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
{/* 
UsersList ************************************************************************************************* */}
 


  <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
                            Users
                        </h1>
            
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
            {/* Add New User button at the bottom right */}
            <div className="w-100" style={{ display: 'flex', justifyContent: 'center' }}>
    <Link to="/AddNewUser" className="btn btn-primary">Add New User</Link>
</div>
</div>
       
      </div>
    </a>
  </li>




  {users.map(user => (
          <li key={user.userId}>
            <a href="" className="card">
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
                    <h3 className="card__title">{user.username}</h3>
                    <span className="card__status">{user.role}</span>
                  </div>
                </div>
                <Link to="/cart" className="btn btn-danger align-center" style={{ textAlign: 'center', display: 'block', marginBottom: '10px' }}>
                  Delete User
                </Link>
                <Link to="/UpdateUser" className="btn btn-primary align-center" style={{ textAlign: 'center', display: 'block', marginTop: '10px' }}>
                  Update User
                </Link>
              </div>
            </a>
          </li>
        ))}

</ul>









        </>
      
     );
}
 
export default AHome;
