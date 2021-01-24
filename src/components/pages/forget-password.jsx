import React, {useState, useEffect} from 'react';
import {auth} from "../../firebase";
import {toast} from "react-toastify";
import {useSelector} from "react-redux";

import Breadcrumb from "../common/breadcrumb";


const ForgetPassword = ({history}) => {

    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);

    const {user} = useSelector((state) => ({...state}));

    useEffect(() => {
        if(user && user.token) {
            history.push('/');
        }
    }, [user, history]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const config = {
            url: process.env.REACT_APP_FORGOT_PASSWORD_REDIRECT,
            handleCodeInApp: true
        };

        await auth.sendPasswordResetEmail(email, config)
            .then(() => {
                setEmail("");
                setLoading(false);
                toast.success("Check your email for password reset link")
            })
            .catch((error) => {
                setLoading(false);
                toast.error(error.message);
                console.log("ERROR MSG IN FORGOT PASSWORD", error);
            })
    };

        return (
            <div>
                <Breadcrumb title={'forgot password'}/>
                
                
                {/*Forget Password section*/}
                <section className="pwd-page section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3">
                                {loading ? <h2>...Loading</h2> : <h2>Forgot Password</h2>}

                                <form onSubmit={handleSubmit} className="theme-form">
                                    <div className="form-row">
                                        <div className="col-md-12">
                                            <input
                                                type="email"
                                                className="form-control"
                                                value={email}
                                                placeholder="Enter Your Email"
                                                onChange={(e) => setEmail(e.target.value)}
                                                autoFocus
                                            />
                                        </div>
                                        <button disabled={!email} className="btn btn-solid">Submit</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    };


export default ForgetPassword