import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import {useDispatch, useSelector} from "react-redux";

import Breadcrumb from "../common/breadcrumb";
import {auth, googleAuthProvider} from "../../firebase";
import {toast} from "react-toastify";
import {createOrUpdateUser} from "../../functions/auth";



const Login = ({history}) => {

    const [email, setEmail] = useState('dontrellknight@gmail.com');
    const [password, setPassword] = useState('password1234');
    const [loading, setLoading] = useState(false);

    const {user} = useSelector((state) => ({...state}));

    useEffect(() => {
        if(user && user.token) {
            history.push('/');
        }
    }, [user]);

    let dispatch = useDispatch();

    /*
    const roleBasedRedirect = (res) => {
        if(res.data.role === 'admin') {
            history.push('/admin/dashboard')
        }  else {
            history.push('/user/history')
        }
    };
    */



    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const result = await auth.signInWithEmailAndPassword(email, password);

            const {user} = result;
            const idTokenResult = await user.getIdTokenResult();

            createOrUpdateUser(idTokenResult.token)
                .then((res) => {
                    dispatch({
                        type: "LOGGED_IN_USER",
                        payload: {
                            name: res.data.name,
                            email: res.data.email,
                            token: idTokenResult.token,
                            role: res.data.role,
                            _id: res.data._id
                        }
                    });
                  //  roleBasedRedirect(res)
                })
                .catch(err => console.log(err));
             history.push('/');

        } catch (error) {
            console.log(error);
            toast.error(error.message);
            setLoading(false);
        }
    };

    const googleLogin = async () => {
        auth.signInWithPopup(googleAuthProvider)
            .then(async (result) => {
                const {user} = result
                const idTokenResult = await user.getIdTokenResult();
                createOrUpdateUser(idTokenResult.token)
                    .then((res) => {
                        dispatch({
                            type: "LOGGED_IN_USER",
                            payload: {
                                name: res.data.name,
                                email: res.data.email,
                                token: idTokenResult.token,
                                role: res.data.role,
                                _id: res.data._id
                            }
                        });
                       // roleBasedRedirect(res)
                    })
                    .catch(err => console.log(err));
                 history.push("/");
            })
            .catch((err) => {
                console.log(err);
                toast.error(err.message);
            });
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
            <p>
                <Link to={`${process.env.PUBLIC_URL}/pages/forget-password`} style={{color: '#737373'}}>Forgot Password?</Link>
            </p>
            <button
                onClick={handleSubmit}
                type='submit'
                className="btn btn-solid"
            >
                Login
            </button>
            <button
                onClick={googleLogin}
                style={{marginLeft: '25px', backgroundColor: '#DB4437'}}
                type='submit'
                className="btn btn-solid"

            >Google Login
            </button>
        </form>;


        return (
            <div>
                <Breadcrumb title={'Login'}/>
                
                
                {/*Login section*/}
                <section className="login-page section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6">
                                {loading ? (
                                    <h3>Loading...</h3>
                                ) : (
                                    <h3>Login</h3>
                                )}
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