import React from 'react'
import { Link } from 'react-router-dom'
const Proposal = () => {
    return ( 
        <>

        <link rel='stylesheet' href='assets/Jobs/style.css'></link>
        <div className="Home">
            <div className="container-xxl bg-white p-0">
                <div className="container-xxl py-5">
                    <div className="container">
                        <h1 className="text-center mb-5 wow fadeInUp" data-wow-delay="0.1s">
                            Proposals From JobSeekers
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
</>

     );
}
 
export default Proposal;