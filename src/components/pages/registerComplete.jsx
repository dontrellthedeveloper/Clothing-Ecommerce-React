import React, {useState, useEffect} from 'react';
import {auth} from '../../firebase';
import {toast, ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Breadcrumb from "../common/breadcrumb";


const RegisterComplete = ({history}) => {
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');

    useEffect(() => {
        setEmail(window.localStorage.getItem('emailForRegistration'))
    }, []);

    const handleSubmit = async (e) => {
        e.preventDefault();

    };

    const completeRegistrationForm = () =>
        <form onSubmit={handleSubmit} className="theme-form">
            <div className="form-row">
                <div className="col-md-12">
                    <input
                        type="email"
                        className="form-control"
                        value={email}
                        disabled
                    />

                    <input
                        type="password"
                        className="form-control"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        placeholder="Enter Your Password"
                    />
                </div>
                <button type="submit" href="#" className="btn btn-solid">Register</button>
            </div>
        </form>;

    return (
        <div>
            <Breadcrumb title={'complete registration'}/>


            {/*Forget Password section*/}
            <section className="pwd-page section-b-space">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <h2>Complete Registration</h2>
                            <ToastContainer/>
                            {completeRegistrationForm()}
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
};


export default RegisterComplete;