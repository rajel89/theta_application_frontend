import {Link} from "react-router-dom";
import { useForm } from 'react-hook-form';
import axios from 'axios'
import { environment } from "../environments/environment";
import  { useHistory  } from 'react-router-dom';
import { useState } from 'react';

const Login = () => {

    const newAccount = JSON.parse(localStorage.getItem('newAccount'));
    const {register, handleSubmit, formState:{errors} } = useForm();
    const [ loading, setSpinner ] = useState(false);
    const [ errorMsg, setErrorMsg] = useState('');
    const history = useHistory();
    
    const loginUser = (data) => {
        
        localStorage.removeItem('newAccount');
        setSpinner(true)
        axios.post(environment.API_URL + 'auth/signin', data)
        .then(response => {
            setSpinner(false)
            localStorage.setItem('userDetails', JSON.stringify(response.data));

            if(response.data.userDetails.accountType == "seller")
            {
                history.push('dashboard/seller')
            }else if(response.data.userDetails.accountType == "buyer"){
                history.push('dashboard/buyer')
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
                                    <img style={{width: '80%', height: '80%' }} src="../assets/img/logo.JPG" alt="Theta Application" />
                                    <p className="text-end">Login or register from here to access.<br/></p>
                                </div>
                                <div className="buttons"></div>
                            </div>
                        </section>
                    </div>
                    <div className="col-md-6">
                        <section className="login-clean" style={{background: 'var(--bs-body-bg)'}}>
                            <form onSubmit={handleSubmit(loginUser)}>
                                <h2 className="visually-hidden">Login Form</h2>
                                <div className="illustration"><i className="icon ion-ios-navigate"></i></div>
                                {newAccount &&
                                    <div className="alert alert-primary" role="alert">
                                        <h5 className="text-center">Welcome to Theta</h5>
                                        <i className="far fa-thumbs-up"></i> {newAccount.msg}
                                    </div>
                                }
                                {errorMsg != '' &&
                                    <div className="alert alert-warning" role="alert">
                                        <i className="fas fa-exclamation-triangle"></i> {errorMsg}
                                    </div>
                                }
                                <div className="mb-3"><input className="form-control" type="email" { ...register("email", {required: true}) } placeholder="Email"/></div>
                                <div className="mb-3"><input className="form-control" type="password" { ...register("password", {required: true}) } placeholder="Password"/></div>
                                <div className="mb-3">
                                    <button className="btn btn-primary d-block w-100" type="submit">
                                    {!loading &&
                                        <span>Log In</span>
                                    }
                                    {loading &&
                                            <div className="d-flex align-items-center">
                                                <strong>Please wait...</strong>
                                            <div className="spinner-border ms-auto" role="status" aria-hidden="true"></div>
                                        </div>
                                        }
                                    </button>
                                </div>
                                <a className="forgot" href="/#">Forgot your email or password?</a>
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
