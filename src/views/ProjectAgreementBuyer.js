import Header from "../components/Header"

const ProjectAgreementBuyer = () => {
    return (
        <div>
            <Header title='Project Agreement'/>
            <section className="project-agreement-content mt-3">
                <div className="page-content container">
                    <div className="container px-0">
                        <div className="row mt-4">
                            <div className="col-12 col-lg-10 offset-lg-1">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="text-center text-150">
                                            <span className="text-default-d3">Buyer Project Requirement</span>
                                        </div>
                                    </div>
                                </div>
                                <hr className="row brc-default-l1 mx-n1 mb-4" />

                                <div className="mt-4">
                                    <div className="row text-600 text-white bgc-default-tp1 py-25">
                                        <div className="d-none d-sm-block col-1">#</div>
                                        <div className="col-9 col-sm-5">Description</div>
                                        <div className="d-none d-sm-block col-4 col-sm-2">Qty</div>
                                        <div className="d-none d-sm-block col-sm-2">Unit Price</div>
                                        <div className="col-2">Amount</div>
                                    </div>

                                    <div className="text-95 text-secondary-d3">
                                        <div className="row mb-2 mb-sm-0 py-25">
                                            <div className="d-none d-sm-block col-1">1</div>
                                            <div className="col-9 col-sm-5">Domain registration</div>
                                            <div className="d-none d-sm-block col-2">2</div>
                                            <div className="d-none d-sm-block col-2 text-95">$10</div>
                                            <div className="col-2 text-secondary-d2">$20</div>
                                        </div>

                                        <div className="row mb-2 mb-sm-0 py-25 bgc-default-l4">
                                            <div className="d-none d-sm-block col-1">2</div>
                                            <div className="col-9 col-sm-5">Web hosting</div>
                                            <div className="d-none d-sm-block col-2">1</div>
                                            <div className="d-none d-sm-block col-2 text-95">$15</div>
                                            <div className="col-2 text-secondary-d2">$15</div>
                                        </div>

                                        <div className="row mb-2 mb-sm-0 py-25">
                                            <div className="d-none d-sm-block col-1">3</div>
                                            <div className="col-9 col-sm-5">Software development</div>
                                            <div className="d-none d-sm-block col-2">--</div>
                                            <div className="d-none d-sm-block col-2 text-95">$1,000</div>
                                            <div className="col-2 text-secondary-d2">$1,000</div>
                                        </div>

                                        <div className="row mb-2 mb-sm-0 py-25 bgc-default-l4">
                                            <div className="d-none d-sm-block col-1">4</div>
                                            <div className="col-9 col-sm-5">Consulting</div>
                                            <div className="d-none d-sm-block col-2">1 Year</div>
                                            <div className="d-none d-sm-block col-2 text-95">$500</div>
                                            <div className="col-2 text-secondary-d2">$500</div>
                                        </div>
                                    </div>

                                    <div className="row border-b-2 brc-default-l2"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container mt-4">
                    <div className="row">
                        <div className="col-12 col-md-10 offset-1">
                            <h1 className="text-center">Price: $1,200.00</h1>
                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-md-10 offset-1">
                            <div className="container d-flex justify-content-between"><button className="btn btn-primary d-flex" type="button">Buyer Initials</button><button className="btn btn-primary d-flex" type="button">Send to buyer</button></div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default ProjectAgreementBuyer
