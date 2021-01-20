import React, {useState} from 'react';
import {Link} from 'react-router-dom';

import Breadcrumb from "../common/breadcrumb";
import {auth} from "../../firebase";
import {toast} from "react-toastify";


const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.table(email, password)
    };


    const loginForm = () =>
        <form onSubmit={handleSubmit} className="theme-form">
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Enter Your Email"
                 />
            </div>
            <div className="form-group">
                <label htmlFor="review">Password</label>
                <input
                    type="password"
                    className="form-control"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="Enter Your Password"
                />
            </div>
            <button
                onClick={handleSubmit}
                type='submit'
                className="btn btn-solid"
            >Login</button>
            <button style={{marginLeft: '25px'}} type='submit' href="#" className="btn btn-solid">Google Login</button>
        </form>;


        return (
            <div>
                <Breadcrumb title={'Login'}/>
                
                
                {/*Login section*/}
                <section className="login-page section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                <h3>Login</h3>
                                <div className="theme-card">
                                    {loginForm()}
                                </div>
                            </div>
                            <div className="col-lg-6 right-login">
                                <h3>New Customer</h3>
                                <div className="theme-card authentication-right">
                                    <h6 className="title-font">Create An Account</h6>
                                    <p>Sign up for a free account at our store. Registration is quick and easy. It
                                        allows you to be able to order from our shop. To start shopping click
                                        register.</p>
                                    <Link to={`${process.env.PUBLIC_URL}/pages/register`}  className="btn btn-solid">Create an Account</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    };


export default Login