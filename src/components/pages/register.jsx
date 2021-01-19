import React, {useState} from 'react';
import {auth} from '../../firebase';
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Breadcrumb from "../common/breadcrumb";


const Register = () => {
    const [email, setEmail] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const config = {
            url: process.env.REACT_APP_REGISTER_REDIRECT_URL,
            handleCodeInApp: true
        };

        await auth.sendSignInLinkToEmail(email, config);
        toast.success(`Email is send to ${email}. Click the link to complete your registration.`);

        // save user email in local storage
        window.localStorage.setItem('emailForRegistration', email);

        // clear state
        setEmail("");
    };

    const registerForm = () =>
     <form onSubmit={handleSubmit} className="theme-form">
        <div className="form-row">
            <div className="col-md-12">
                <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Enter Your Email"
                     />
            </div>
            <button type="submit" href="#" className="btn btn-solid">Register</button>
        </div>
    </form>;

        return (
            <div>
                <Breadcrumb title={'create account'}/>


                {/*Forget Password section*/}
                <section className="pwd-page section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3">
                                <h2>Create Account</h2>
                                <ToastContainer/>
                                {registerForm()}
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    };


export default Register;