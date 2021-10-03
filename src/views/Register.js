import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";

  
const Register = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-md-6 text-end align-self-center">
                        <section className="text-end highlight-clean" style={{textAlign: 'right'}}>
                            <div className="container text-end">
                                <div className="intro">
                                    <img style={{width: '80%', height: '80%' }} src="../assets/img/logo.jpg" alt="Theta Application" />
                                </div>
                                <div className="buttons"></div>
                            </div>
                        </section>
                    </div>
                    <div className="col-md-6">
                        <section className="login-clean" style={{background: 'var(--bs-body-bg)'}}>
                            <form method="post">
                                <h2 className="visually-hidden">Regiter Form</h2>
                                <div className="illustration"><i className="icon ion-ios-navigate"></i></div>
                                <div className="mb-3"><input className="form-control" type="text" name="name" placeholder="Name"/></div>
                                <div className="mb-3"><input className="form-control" type="email" name="email" placeholder="Email"/></div>
                                <div className="mb-3"><input className="form-control" type="password" name="password" placeholder="Password"/></div>
                                <div className="mb-3"><input className="form-control" type="password" name="cpassword" placeholder="Confirm Password"/></div>
                                <div className="mb-3">
                                    <button className="btn btn-primary d-block w-100" type="submit">Register</button>
                                    <hr/>
                                    <Link to="/login" className="btn btn-light d-block w-100 mt-4">Login</Link>
                                </div>
                            </form>
                        </section>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
