import React, { useState, useEffect } from "react";
import Breadcrumb from "../../common/breadcrumb";
import UserNav from "../../nav/UserNav";
import {Link} from "react-router-dom";
import { CheckCircleOutlined, CloseCircleOutlined } from "@ant-design/icons";
import ShowPaymentInfo from "../../../components/cards/ShowPaymentInfo";
import { getUserOrders } from "../../../functions/user";
import { useSelector, useDispatch } from "react-redux";
import { PDFDownloadLink,
Page,
    Text,
    View,
    Stylesheet,
    PDFViewer
} from "@react-pdf/renderer";
import Invoice from "../../../components/order/Invoice";

const UserHistory = (props) => {
    const [orders, setOrders] = useState([]);
    const { user } = useSelector((state) => ({ ...state }));

    useEffect(() => {
        loadUserOrders();
    }, []);

    const loadUserOrders = () =>
        getUserOrders(user.token).then((res) => {
            console.log(JSON.stringify(res.data, null, 4));
            setOrders(res.data);
        });


    const showOrderInTable = (order) => (
        <table className="table table-bordered">
            <thead className="thead-light">
            <tr>
                <th scope="col">Title</th>
                <th scope="col">Price</th>
                <th scope="col">Brand</th>
                <th scope="col">Color</th>
                <th scope="col">Count</th>
                <th scope="col">Shipping</th>
            </tr>
            </thead>

            <tbody>
            {order.products.map((p, i) => (
                <tr key={i}>
                    <td>
                        <b>{p.product.title}</b>
                    </td>
                    <td>{p.product.price}</td>
                    <td>{p.product.brand}</td>
                    <td>{p.color}</td>
                    <td>{p.count}</td>
                    <td>
                        {p.product.shipping === "Yes" ? (
                            <CheckCircleOutlined style={{ color: "green" }} />
                        ) : (
                            <CloseCircleOutlined style={{ color: "red" }} />
                        )}
                    </td>
                </tr>
            ))}
            </tbody>
        </table>
    );


    const showEachOrders = () =>
        orders.map((order, i) => (
            <div key={i} className="m-5 p-3 card">
                <ShowPaymentInfo order={order} />
                {showOrderInTable(order)}
                <div className="row">
                    <div className="col">{showDownloadLink(order)}</div>
                </div>
            </div>
        ));

    const userHistoryForm = () => (
        <div className="row">
            <div className="col-sm-12">
                <div className="box">
                    <div style={{marginTop: '30px'}} className="box-title">
                        <h3 style={{fontWeight: '600'}}>{user.name}'s Orders History</h3>
                        {/*<a href="#">Edit</a>*/}
                    </div>
                    <div className="box-content">
                        {showEachOrders()}
                    </div>
                </div>
            </div>
        </div>
    );


    const showDownloadLink = (order) => (
        <PDFDownloadLink
            document={<Invoice order={order} />}
            fileName="invoice.pdf"
            className="btn-solid btn"
        >
            Download PDF
        </PDFDownloadLink>
    );

    return (
        <div>
            <Breadcrumb title={'History'}/>


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
                            {/*<UserNav/>*/}
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
                                            <Link to={`${process.env.PUBLIC_URL}/user/history`}>History</Link>
                                        </li>
                                        <li>
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
                                        <h2 style={{fontWeight: "800"}}>History</h2>
                                    </div>


                                    <div className="box-account box-info">

                                        <div className="box-head">
                                            <h4>Account Information</h4>
                                        </div>
                                        {userHistoryForm()}




                                    </div>
                                </div>
                            </div>
                        </div>
                        {/*<div className="col-lg-9">*/}
                        {/*    <div className="dashboard-right">*/}
                        {/*        <div className="dashboard">*/}
                        {/*            <div className="page-title">*/}
                        {/*                <h2>My Dashboard</h2>*/}
                        {/*            </div>*/}
                        {/*            {orders.length > 0 ? "user purchase orders" : 'no purchase orders'}*/}
                        {/*            <div className="welcome-msg">*/}
                        {/*                <p>Hello, MARK JECNO !</p>*/}
                        {/*                <p>From your My Account Dashboard you have the ability to view a snapshot of*/}
                        {/*                    your recent account activity and update your account information. Select*/}
                        {/*                    a link below to view or edit information.</p>*/}
                        {/*            </div>*/}
                        {/*            <div className="box-account box-info">*/}
                        {/*                <div className="box-head">*/}
                        {/*                    <h2>Account Information</h2>*/}
                        {/*                </div>*/}
                        {/*                <div className="row">*/}
                        {/*                    <div className="col-sm-6">*/}
                        {/*                        <div className="box">*/}
                        {/*                            <div className="box-title">*/}
                        {/*                                <h3>Contact Information</h3>*/}
                        {/*                                <a href="#">Edit</a>*/}
                        {/*                            </div>*/}
                        {/*                            <div className="box-content">*/}
                        {/*                                <h6>MARK JECNO</h6>*/}
                        {/*                                <h6>MARk-JECNO@gmail.com</h6>*/}
                        {/*                                <h6><a href="#">Change Password</a></h6>*/}
                        {/*                            </div>*/}
                        {/*                        </div>*/}
                        {/*                    </div>*/}
                        {/*                    <div className="col-sm-6">*/}
                        {/*                        <div className="box">*/}
                        {/*                            <div className="box-title">*/}
                        {/*                                <h3>Newsletters</h3>*/}
                        {/*                                <a href="#">Edit</a>*/}
                        {/*                            </div>*/}
                        {/*                            <div className="box-content">*/}
                        {/*                                <p>*/}
                        {/*                                    You are currently not subscribed to any newsletter.*/}
                        {/*                                </p>*/}
                        {/*                            </div>*/}
                        {/*                        </div>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*                <div>*/}
                        {/*                    <div className="box">*/}
                        {/*                        <div className="box-title">*/}
                        {/*                            <h3>Address Book</h3>*/}
                        {/*                            <a href="#">Manage Addresses</a>*/}
                        {/*                        </div>*/}
                        {/*                        <div className="row">*/}
                        {/*                            <div className="col-sm-6">*/}
                        {/*                                <h6>Default Billing Address</h6>*/}
                        {/*                                <address>*/}
                        {/*                                    You have not set a default billing address.<br/>*/}
                        {/*                                    <a href="#">Edit Address</a>*/}
                        {/*                                </address>*/}
                        {/*                            </div>*/}
                        {/*                            <div className="col-sm-6">*/}
                        {/*                                <h6>Default Shipping Address</h6>*/}
                        {/*                                <address>*/}
                        {/*                                    You have not set a default shipping address.<br />*/}
                        {/*                                    <a href="#">Edit Address</a>*/}
                        {/*                                </address>*/}
                        {/*                            </div>*/}
                        {/*                        </div>*/}
                        {/*                    </div>*/}
                        {/*                </div>*/}
                        {/*            </div>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </section>

        </div>
    )
};


export default UserHistory