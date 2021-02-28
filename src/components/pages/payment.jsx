import React, {useState, useEffect} from 'react';
import {auth} from '../../firebase';
import {toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Breadcrumb from "../common/breadcrumb";
import {useSelector} from "react-redux";

import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import StripeCheckout from "../../components/StripeCheckout";
import "../stripe.css";


// load stripe outside of components render to avoid recreating stripe object on every render
const promise = loadStripe(process.env.REACT_APP_STRIPE_KEY);

const Payment = ({history}) => {


    return (
        <div>
            <Breadcrumb title={'payment'}/>


            {/*Forget Password section*/}
            <section className="pwd-page section-b-space">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-10 offset-lg-1">
                            <Elements stripe={promise}>
                                <h4>Complete your purchase</h4>
                                <div className="col-md-8 offset-md-2">
                                    <StripeCheckout />
                                </div>
                            </Elements>



                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
};


export default Payment;