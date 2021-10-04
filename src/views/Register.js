import { BrowserRouter as Router, Link} from "react-router-dom";
import { useForm } from 'react-hook-form';
import axios from 'axios'
import { environment } from "../environments/environment";
import  { useHistory  } from 'react-router-dom'
import { useState } from 'react';

const Register = () => {

    const {register, handleSubmit, formState:{errors} } = useForm();
    const [ loading, setSpinner ] = useState(false);
    const [ errorMsg, setErrorMsg] = useState('');
    const history = useHistory();

    const registerUser = (data) => {
        setSpinner(true)
        axios.post(environment.API_URL + 'users/register', data)
        .then(response => {
            if(response.status == 200)
            {
                setSpinner(false)
                localStorage.setItem('newAccount', JSON.stringify(response.data));
                history.push('login')
            }
        }).catch(err => {
            setSpinner(false)
            setErrorMsg(err.response.data)
        })

    }

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
                            <form  onSubmit={handleSubmit(registerUser)}>
                                <h2 className="visually-hidden">Regiter Form</h2>
                                <div className="illustration"><i className="icon ion-ios-navigate"></i></div>
                                {(errors.name || errors.email || errors.password || errors.accountType) &&
                                    <div className="alert alert-danger" role="alert">
                                        <i className="fas fa-exclamation-triangle"></i> Please fill up all fields.
                                    </div>
                                }
                                {errorMsg != '' &&
                                    <div className="alert alert-warning" role="alert">
                                        <i className="fas fa-exclamation-triangle"></i> {errorMsg}
                                    </div>
                                }
                                <div className="mb-3"><input className="form-control" type="text" { ...register("name", {required: true}) } placeholder="Name"/></div>
                                <div className="mb-3"><input className="form-control" type="email" { ...register("email", {required: true}) } placeholder="Email"/></div>
                                <div className="mb-3"><input className="form-control" type="password" { ...register("password", {required: true}) } placeholder="New Password"/></div>
                                <div className="mb-3">
                                    <p className="text-center">I want to:</p>
                                    <div className="btn-group" role="group" aria-label="Basic checkbox toggle">
                                        <input type="radio" value="buyer" { ...register("accountType", {required: true}) } className="btn-check" id="hireForService" autoComplete="off" />
                                        <label className="btn btn-outline-primary" htmlFor="hireForService">Hire for a service</label>

                                        <input type="radio" value="seller" { ...register("accountType", {required: true}) } className="btn-check" id="workAsFreelancer" autoComplete="off" />
                                        <label className="btn btn-outline-primary" htmlFor="workAsFreelancer">Work as freelancer</label>
                                    </div>
                                </div>
                                <div className="mb-3">
                                    <button className="btn btn-primary d-block w-100" type="submit" disabled={errors.name || errors.email || errors.password || errors.accountType }>
                                        {!loading &&
                                            <span>Register</span>
                                        }
                                        {loading &&
                                            <div className="d-flex align-items-center">
                                                <strong>Please wait...</strong>
                                            <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                                        </div>
                                        }
                                    </button>
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
