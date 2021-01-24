import React, {useState} from 'react';
import Breadcrumb from "../../common/breadcrumb";
import UserNav from "../../nav/UserNav";
import {Link} from "react-router-dom";
import {auth} from '../../../firebase';
import {toast} from 'react-toastify';

const UserPassword = (props) => {

    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        await auth.currentUser
            .updatePassword(password)
            .then(() => {
                setLoading(false);
                setPassword('');
                toast.success("Password updated");
            })
            .catch((err) => {
                setLoading(false);
                toast.error(err.message);
            })
    };

    const passwordUpdateForm = () => (
        <div className="row">
            <div className="col-sm-12">
                <div className="box">
                    <div style={{marginTop: '30px'}} className="box-title">
                        <h3 style={{fontWeight: '600'}}>Change Your Password</h3>
                        {/*<a href="#">Edit</a>*/}
                    </div>
                    <div className="box-content">
                        <form onSubmit={handleSubmit} style={{marginTop: '35px'}}>
                            <div className="form-group">
                                {/*<label>Enter Your New Password</label>*/}
                                <input
                                    type="password"
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="form-control"
                                    placeholder="********"
                                    disabled={loading}
                                    value={password}
                                    style={{margin: "20px auto", width: '50%', textAlign: "center"}}
                                />
                            </div>
                            {/*<h6>MARK JECNO</h6>*/}
                            {/*<h6>MARk-JECNO@gmail.com</h6>*/}
                            {/*<h6>*/}
                            {/*    <a href="#">Change Password</a>*/}
                            {/*</h6>*/}
                            <button
                                disabled={!password || loading || password.length < 6 }
                                type='submit'
                                className="btn btn-solid"
                            >
                                Change Password
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div>
            <Breadcrumb title={'Password'}/>


            {/*Dashboard section*/}
            <section className="section-b-space">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="account-sidebar">
                                <a className="popup-btn">
                                    my account
                                </a>
                            </div>
                            <div className="dashboard-left">
                                <div className="collection-mobile-back">
                                    <span className="filter-back">
                                        <i className="fa fa-angle-left" aria-hidden="true"></i> back
                                    </span>
                                </div>
                                <div className="block-content">
                                    <ul>
                                        {/*<li className="active">*/}
                                        <li >
                                            <Link to={`${process.env.PUBLIC_URL}/user/history`}>History</Link>
                                        </li>
                                        <li className="active">
                                            <Link to={`${process.env.PUBLIC_URL}/user/password`}>Password</Link>

                                        </li>
                                        <li>
                                            <Link to={`${process.env.PUBLIC_URL}/user/wishlist`}>Wishlist</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="dashboard-right">
                                <div style={{textAlign: 'center'}} className="dashboard">

                                    <div  className="page-title">
                                        <h2 style={{fontWeight: "800"}}>Dashboard</h2>
                                    </div>


                                    <div className="box-account box-info">

                                        <div className="box-head">
                                            <h4>Account Information</h4>
                                        </div>
                                        {passwordUpdateForm()}




                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
};


export default UserPassword;