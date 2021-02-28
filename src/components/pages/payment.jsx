import React, {useState, useEffect} from 'react';
import {auth} from '../../firebase';
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Breadcrumb from "../common/breadcrumb";
import {useSelector} from "react-redux";


const Payment = ({history}) => {


    return (
        <div>
            <Breadcrumb title={'payment'}/>


            {/*Forget Password section*/}
            <section className="pwd-page section-b-space">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 offset-lg-3">
                            <h2>Complete your purchase</h2>

                            Complete your purchase
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
};


export default Payment;