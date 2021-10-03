import Header from "../components/Header"

const BuyerDashboard = () => {
    return (
        <div>
            <Header title='Buyer Dashboard' />
            <section className="buyer-dashboard-content mt-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="card">
                                <div className="card-body">
                                    <div className="d-flex flex-column align-items-center text-center">
                                        <img src="https://bootdey.com/img/Content/avatar/avatar7.png" alt="Admin" className="rounded-circle" width="150" />
                                        <div className="mt-3">
                                            <h4>John Doe</h4>
                                            <p className="text-secondary mb-1">Full Stack Developer</p>
                                            <p className="text-muted font-size-sm">Bay Area, San Francisco, CA</p>
                                            <button className="btn btn-success">Available</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <ul className="list-group text-center">
                                <li className="list-group-item text-center"><span>Messages</span></li>
                            </ul>
                        </div>
                        <div className="col-8 col-md-8">
                            <section className="text-center">
                                <h1>About Seller</h1>
                                <p className="text-start"><br/><strong>Lorem Ipsum</strong>&nbsp;is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.<br/><br/></p>
                            </section>
                            <section id="pricing-1" className="py-5">
                                <div className="container py-3">
                                    <div className="row text-center mb-5">
                                        <div className="col-xl-9 mx-auto">
                                            <h2 className="mb-3">Service Package<br/></h2>
                                            <p className="text-muted">He's a very strange young man.<br/></p>
                                        </div>
                                    </div>
                                    <div className="row g-4">
                                        <div className="col-md-6 col-xl-4">
                                            <div className="card">
                                                <div className="card-body">
                                                    <h6 className="card-subtitle mb-1"><small className="text-uppercase text-black-50">Strart</small></h6>
                                                    <h5 className="card-title h1 pb-3 border-bottom">Free</h5>
                                                    <ul className="list-unstyled pt-3 mb-4">
                                                        <li className="d-flex align-items-center mb-2"><span className="text-white d-flex"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-check bg-primary p-1 me-2 fs-5 rounded-circle">
                                                                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"></path>
                                                                </svg></span><span>Well uh good</span></li>
                                                        <li className="d-flex align-items-center mb-2"><span className="text-white d-flex"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-check bg-primary p-1 me-2 fs-5 rounded-circle">
                                                                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"></path>
                                                                </svg></span><span>It's safe now</span></li>
                                                        <li className="d-flex align-items-center mb-2"><span className="text-white d-flex"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-x bg-secondary p-1 me-2 fs-5 rounded-circle">
                                                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path>
                                                                </svg></span><span className="text-black-50">Hey beat it</span></li>
                                                        <li className="d-flex align-items-center mb-2"><span className="text-white d-flex"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-x bg-secondary p-1 me-2 fs-5 rounded-circle">
                                                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path>
                                                                </svg></span><span className="text-black-50">That ain't no</span></li>
                                                        <li className="d-flex align-items-center mb-2"><span className="text-white d-flex"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-x bg-secondary p-1 me-2 fs-5 rounded-circle">
                                                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path>
                                                                </svg></span><span className="text-black-50">Let me show</span></li>
                                                    </ul>
                                                    <div className="mb-2"><button className="btn btn-secondary d-flex justify-content-between align-items-center w-100" type="button">Get Started<span><i className="fas fa-arrow-right"></i></span></button></div>
                                                    <p className="text-secondary mb-0"><small>The future, it's where you're going?</small></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xl-4">
                                            <div className="card border-primary position-relative">
                                                <h6 className="text-uppercase text-white bg-primary border-primary position-absolute top-0 end-0 py-1 px-2 fw-normal"><small>Popular</small></h6>
                                                <div className="card-body">
                                                    <h6 className="card-subtitle mb-1"><small className="text-uppercase text-black-50">Pro</small></h6>
                                                    <h5 className="d-flex card-title h1 pb-3 border-bottom">$15<small className="text-muted">&nbsp;/mo</small></h5>
                                                    <ul className="list-unstyled pt-3 mb-4">
                                                        <li className="d-flex align-items-center mb-2"><span className="text-white d-flex"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-check bg-primary p-1 me-2 fs-5 rounded-circle">
                                                                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"></path>
                                                                </svg></span><span>Well uh good</span></li>
                                                        <li className="d-flex align-items-center mb-2"><span className="text-white d-flex"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-check bg-primary p-1 me-2 fs-5 rounded-circle">
                                                                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"></path>
                                                                </svg></span><span>It's safe now</span></li>
                                                        <li className="d-flex align-items-center mb-2"><span className="text-white d-flex"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-check bg-primary p-1 me-2 fs-5 rounded-circle">
                                                                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"></path>
                                                                </svg></span><span>Hey beat it</span></li>
                                                        <li className="d-flex align-items-center mb-2"><span className="text-white d-flex"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-x bg-secondary p-1 me-2 fs-5 rounded-circle">
                                                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path>
                                                                </svg></span><span className="text-black-50">That ain't no</span></li>
                                                        <li className="d-flex align-items-center mb-2"><span className="text-white d-flex"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-x bg-secondary p-1 me-2 fs-5 rounded-circle">
                                                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path>
                                                                </svg></span><span className="text-black-50">Let me show</span></li>
                                                    </ul>
                                                    <div className="mb-2"><button className="btn btn-primary d-flex justify-content-between align-items-center w-100" type="button">Buy Now<span><i className="fas fa-arrow-right"></i></span></button></div>
                                                    <p className="text-secondary mb-0"><small>The future, it's where you're going?</small></p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xl-4">
                                            <div className="card">
                                                <div className="card-body">
                                                    <h6 className="card-subtitle mb-1"><small className="text-uppercase text-black-50">Business</small></h6>
                                                    <h1 className="d-flex card-title pb-3 border-bottom">$30<small className="text-muted">&nbsp;/mo</small></h1>
                                                    <ul className="list-unstyled pt-3 mb-4">
                                                        <li className="d-flex align-items-center mb-2"><span className="text-white d-flex"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-check bg-primary p-1 me-2 fs-5 rounded-circle">
                                                                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"></path>
                                                                </svg></span><span>Well uh good</span></li>
                                                        <li className="d-flex align-items-center mb-2"><span className="text-white d-flex"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-check bg-primary p-1 me-2 fs-5 rounded-circle">
                                                                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"></path>
                                                                </svg></span><span>It's safe now</span></li>
                                                        <li className="d-flex align-items-center mb-2"><span className="text-white d-flex"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-check bg-primary p-1 me-2 fs-5 rounded-circle">
                                                                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"></path>
                                                                </svg></span><span>Hey beat it</span></li>
                                                        <li className="d-flex align-items-center mb-2"><span className="text-white d-flex"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-check bg-primary p-1 me-2 fs-5 rounded-circle">
                                                                    <path d="M10.97 4.97a.75.75 0 0 1 1.07 1.05l-3.99 4.99a.75.75 0 0 1-1.08.02L4.324 8.384a.75.75 0 1 1 1.06-1.06l2.094 2.093 3.473-4.425a.267.267 0 0 1 .02-.022z"></path>
                                                                </svg></span><span>That ain't no</span></li>
                                                        <li className="d-flex align-items-center mb-2"><span className="text-white d-flex"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="currentColor" viewBox="0 0 16 16" className="bi bi-x bg-secondary p-1 me-2 fs-5 rounded-circle">
                                                                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"></path>
                                                                </svg></span><span className="text-black-50">Let me show</span></li>
                                                    </ul>
                                                    <div className="mb-2"><button className="btn btn-secondary d-flex justify-content-between align-items-center w-100" type="button">Buy Now<span><i className="fas fa-arrow-right"></i></span></button></div>
                                                    <p className="text-secondary mb-0"><small>The future, it's where you're going?</small></p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col">
                                            <section className="projects-horizontal">
                                                <div className="container-fluid">
                                                    <div className="intro">
                                                        <h2 className="text-center">Most recent completed projects</h2>
                                                    </div>
                                                    <div className="row projects">
                                                        <div className="col-sm-6 item">
                                                            <div className="row">
                                                                <div className="col-md-12 col-lg-5"><a href="#"><img className="img-fluid" src="../assets/img/desk.jpg" /></a></div>
                                                                <div className="col">
                                                                    <h3 className="name">Project Name</h3>
                                                                    <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6 item">
                                                            <div className="row">
                                                                <div className="col-md-12 col-lg-5"><a href="#"><img className="img-fluid" src="../assets/img/building.jpg" /></a></div>
                                                                <div className="col">
                                                                    <h3 className="name">Project Name</h3>
                                                                    <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6 item">
                                                            <div className="row">
                                                                <div className="col-md-12 col-lg-5"><a href="#"><img className="img-fluid" src="../assets/img/loft.jpg" /></a></div>
                                                                <div className="col">
                                                                    <h3 className="name">Project Name</h3>
                                                                    <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6 item">
                                                            <div className="row">
                                                                <div className="col-md-12 col-lg-5"><a href="#"><img className="img-fluid" src="../assets/img/minibus.jpeg" /></a></div>
                                                                <div className="col">
                                                                    <h3 className="name">Project Name</h3>
                                                                    <p className="description">Aenean tortor est, vulputate quis leo in, vehicula rhoncus lacus. Praesent aliquam in tellus eu gravida.</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default BuyerDashboard
