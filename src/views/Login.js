import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom";
  
  
  const Login = () => {
      const onSubmit = (e) => {
          console.log('Form Submitted')
      }
  
      const onRegister = (e) => {
          console.log('Register')
      };
      
  
      return (
          <div>
              <div className="container">
                  <div className="row">
                      <div className="col-md-6 text-end align-self-center">
                          <section className="text-end highlight-clean" style={{textAlign: 'right'}}>
                              <div className="container text-end">
                                  <div className="intro">
                                      <img style={{width: '80%', height: '80%' }} src="../assets/img/logo.jpg" alt="Theta Application" />
                                      <p className="text-end">Login or register from here to access.<br/></p>
                                  </div>
                                  <div className="buttons"></div>
                              </div>
                          </section>
                      </div>
                      <div className="col-md-6">
                          <section className="login-clean" style={{background: 'var(--bs-body-bg)'}}>
                              <form method="post">
                                  <h2 className="visually-hidden">Login Form</h2>
                                  <div className="illustration"><i className="icon ion-ios-navigate"></i></div>
                                  <div className="mb-3"><input className="form-control" type="email" name="email" placeholder="Email"/></div>
                                  <div className="mb-3"><input className="form-control" type="password" name="password" placeholder="Password"/></div>
                                  <div className="mb-3"><button className="btn btn-primary d-block w-100" type="submit">Log In</button></div><a className="forgot" href="#">Forgot your email or password?</a>
                                  <Link to="/register" className="btn btn-light d-block w-100 mt-4">Register</Link>
                              </form>
                          </section>
                      </div>
                  </div>
              </div>
          </div>
      )
  }
  
  export default Login
  