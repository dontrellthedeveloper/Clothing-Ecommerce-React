import React, {useEffect, useState} from 'react';
import Breadcrumb from "../../common/breadcrumb";
import {Link} from "react-router-dom";
import {getProductsByCount} from "../../../functions/product";
import {useSelector} from "react-redux";
import Collection from "../../layouts/pets/collection";

const AdminDashboard = (props) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);

    let {user} = useSelector((state) => ({...state}));

    useEffect(() => {
        loadAllProducts()
    }, []);

    const loadAllProducts = () => {
        setLoading(true);
        getProductsByCount(100)
            .then(res => {
                setProducts(res.data);
                setLoading(false);
            })
            .catch(err => {
                setLoading(false);
                console.log(err)
            })
    };

    return (
        <div>
            <Breadcrumb title={ 'Dashboard'}/>


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
                                        <li className="active">
                                            <Link to={`${process.env.PUBLIC_URL}/admin/dashboard`}>Dashboard</Link>
                                        </li>
                                        <li>
                                            <Link to={`${process.env.PUBLIC_URL}/admin/product`}>Product</Link>
                                        </li>
                                        <li>
                                            <Link to={`${process.env.PUBLIC_URL}/admin/products`}>Products</Link>
                                        </li>
                                        <li>
                                            <Link to={`${process.env.PUBLIC_URL}/admin/category`}>Category</Link>
                                        </li>
                                        <li>
                                            <Link to={`${process.env.PUBLIC_URL}/admin/sub`}>Sub Category</Link>
                                        </li>
                                        <li>
                                            <Link to={`${process.env.PUBLIC_URL}/admin/coupon`}>Coupons</Link>
                                        </li>
                                        <li>
                                            <Link to={`${process.env.PUBLIC_URL}/user/password`}>Password</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="dashboard-right">
                                <div style={{textAlign: 'center'}} className="dashboard">
                                    <div className="page-title">
                                        <h2 style={{fontWeight: "800"}}>{user.email.split("@")[0]}'s Dashboard</h2>
                                    </div>
                                    {/*<div className="box-account box-info">*/}
                                    {/*    <div className="box-head">*/}
                                    {/*        <h4>Administrator</h4>*/}
                                    {/*    </div>*/}
                                    {/*</div>*/}






                                    <div className="box-account box-info">
                                        <div className="box-head">
                                            <h4>Administrator</h4>
                                        </div>


                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="box">
                                                    <div style={{marginTop: '30px'}} className="box-title">
                                                        <h3 style={{fontWeight: '600'}}>Welcome to your Account Dashboard</h3>
                                                        {/*<a href="#">Edit</a>*/}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="welcome-msg" style={{marginTop: "20px"}}>
                                            {/*<p>Hello {user.email.split("@")[0]},</p>*/}
                                            {/*<p>Welcome to your Account Dashboard.</p>*/}
                                            <p style={{marginTop: "20px"}}> You have the ability to create products, view a snapshot of
                                                your recent account activity, and update your account information. Select
                                                a link from the menu to view or edit information.</p>
                                        </div>


                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="box">
                                                    <div  className="box-title">
                                                        {/*<h3 style={{fontWeight: '600'}}>Welcome to your Account Dashboard</h3>*/}
                                                        {/*<a href="#">Edit</a>*/}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>




                                        {loading ? (<h4 className="text-danger">Loading...</h4>) : (<h4>All Products</h4>)}

                                        {/*<div className="col">{JSON.stringify(products)}</div>*/}

                                        <Collection
                                            products={products}
                                            type={'pets'}
                                            title="Products"
                                            subtitle="Edit"
                                        />


















                                        {/*<div className="row">*/}
                                        {/*    <div className="col-sm-6">*/}
                                        {/*        <div className="box">*/}
                                        {/*            <div className="box-title">*/}
                                        {/*                <h3>Contact Information</h3>*/}
                                        {/*                <a href="#">Edit</a>*/}
                                        {/*            </div>*/}
                                        {/*            <div className="box-content">*/}
                                        {/*                <h6>MARK JECNO</h6>*/}
                                        {/*                <h6>MARk-JECNO@gmail.com</h6>*/}
                                        {/*                <h6><a href="#">Change Password</a></h6>*/}
                                        {/*            </div>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*    <div className="col-sm-6">*/}
                                        {/*        <div className="box">*/}
                                        {/*            <div className="box-title">*/}
                                        {/*                <h3>Newsletters</h3>*/}
                                        {/*                <a href="#">Edit</a>*/}
                                        {/*            </div>*/}
                                        {/*            <div className="box-content">*/}
                                        {/*                <p>*/}
                                        {/*                    You are currently not subscribed to any newsletter.*/}
                                        {/*                </p>*/}
                                        {/*            </div>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}
                                        {/*<div>*/}
                                        {/*    <div className="box">*/}
                                        {/*        <div className="box-title">*/}
                                        {/*            <h3>Address Book</h3>*/}
                                        {/*            <a href="#">Manage Addresses</a>*/}
                                        {/*        </div>*/}
                                        {/*        <div className="row">*/}
                                        {/*            <div className="col-sm-6">*/}
                                        {/*                <h6>Default Billing Address</h6>*/}
                                        {/*                <address>*/}
                                        {/*                    You have not set a default billing address.<br/>*/}
                                        {/*                    <a href="#">Edit Address</a>*/}
                                        {/*                </address>*/}
                                        {/*            </div>*/}
                                        {/*            <div className="col-sm-6">*/}
                                        {/*                <h6>Default Shipping Address</h6>*/}
                                        {/*                <address>*/}
                                        {/*                    You have not set a default shipping address.<br />*/}
                                        {/*                    <a href="#">Edit Address</a>*/}
                                        {/*                </address>*/}
                                        {/*            </div>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}
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


export default AdminDashboard