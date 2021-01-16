import React, {Component} from 'react';
import Breadcrumb from "../common/breadcrumb";

class Register extends Component {

    constructor (props) {
        super (props)
    }

    render (){


        return (
            <div>
                <Breadcrumb title={'create account'}/>


                {/*Forget Password section*/}
                <section className="pwd-page section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 offset-lg-3">
                                <h2>Create Account</h2>
                                <form className="theme-form">
                                    <div className="form-row">
                                        <div className="col-md-12">
                                            <input type="text" className="form-control" id="email"
                                                   placeholder="Enter Your Email" required="" />
                                        </div>
                                        <a href="#" className="btn btn-solid">Register</a>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        )
    }
}

export default Register