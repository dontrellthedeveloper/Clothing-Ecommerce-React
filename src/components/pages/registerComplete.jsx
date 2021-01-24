import React, {useState, useEffect} from 'react';
import {auth} from '../../firebase';
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Breadcrumb from "../common/breadcrumb";
import {useDispatch} from "react-redux";
import {createOrUpdateUser} from "../../functions/auth";


const RegisterComplete = ({history}) => {
    const [email, setEmail] = useState('');
    const [password,setPassword] = useState('');

    // const {user} = useSelector((state) => ({...state}));

    let dispatch = useDispatch();

    useEffect(() => {
        setEmail(window.localStorage.getItem('emailForRegistration'))
    }, [history]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        // validation
        if(!email || !password) {
            toast.error('Email and password is required');
            return;
        }

        if(password.length < 6) {
            toast.error('Password must be at least 6 characters long');
            return;
        }

        try {
            const result = await auth.signInWithEmailLink(
                email,
                window.location.href
                );
            // console.log('RESULT', result);
            if(result.user.emailVerified) {
                // remove user email from local storage
                window.localStorage.removeItem('emailForRegistration');
                // get user id token
                let user = auth.currentUser;
                await user.updatePassword(password);
                const idTokenResult = await user.getIdTokenResult();
                // redux store
                console.log('user', user, 'idTokenResult', idTokenResult);

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
                    })
                    .catch(err => console.log(err));
                // redirect
                history.push('/')
            }


        } catch (e) {
            toast.error(e.message)
        }
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

                            {completeRegistrationForm()}
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
};


export default RegisterComplete;