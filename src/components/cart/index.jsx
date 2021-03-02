import React, {useState, useEffect} from 'react';
import {Helmet} from 'react-helmet'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import {useSelector, useDispatch} from "react-redux";


import Breadcrumb from "../common/breadcrumb";
import {getCartTotal} from "../../services";
import {removeFromCart, incrementQty, decrementQty} from '../../actions'
import defaultImage from "../../images/default-product-image.png";
import ProductCardInCheckout from './ProductCardInCheckout';
import { userCart } from "../../functions/user";


const cartComponent = ({history}) => {
const {cart, user} = useSelector((state) => ({...state}));
const dispatch = useDispatch();

const getTotal = () => {
        return cart.reduce((currentValue, nextValue) => {
            return currentValue + nextValue.count * nextValue.price;
        }, 0);
    };

// console.log(getTotal());


    const saveOrderToDb = () => {
        // console.log("cart", JSON.stringify(cart, null, 4));
        userCart(cart, user.token)
            .then((res) => {
                console.log("CART POST RES", res);
                if (res.data.ok) history.push("/checkout");
            })
            .catch((err) => console.log("cart save err", err));
    };





        return (
            <div>
                {/*SEO Support*/}
                <Helmet>
                    <title>Urban Sky</title>
                    {/*<meta name="description" content="Multikart – Multipurpose eCommerce React Template is a multi-use React template. It is designed to go well with multi-purpose websites. Multikart Bootstrap 4 Template will help you run multiple businesses." />*/}
                </Helmet>
                {/*SEO Support End */}

                <Breadcrumb title={'Cart Page'}/>

                {cart.length>0 ?
                <section className="cart-section section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-9">
                                <table className="table cart-table table-responsive-xs">
                                    <thead>
                                    <tr className="table-head">
                                        <th scope="col">image</th>
                                        <th scope="col">title</th>
                                        <th scope="col">price</th>
                                        {/*<th scope="col">brand</th>*/}
                                        {/*<th scope="col">color</th>*/}
                                        <th scope="col">quantity</th>
                                        {/*<th scope="col">shipping</th>*/}
                                        <th scope="col">remove</th>
                                        {/*<th scope="col">total</th>*/}
                                    </tr>
                                    </thead>
                                    {cart.map((p) =>
                                    // {
                                        <ProductCardInCheckout key={p._id} p={p} />
                                        // return (
                                        // <tbody key={p._id}>
                                        //     <tr>
                                        //         <td>
                                        //             <Link
                                        //
                                        //                 to={`${process.env.PUBLIC_URL}/left-sidebar/product/`}>
                                        //                 <img src={p.images && p.images.length ? p.images[0].url : defaultImage} alt="" />
                                        //             </Link>
                                        //         </td>
                                        //         <td>
                                        //             <Link to={`${process.env.PUBLIC_URL}/left-sidebar/product/`}>
                                        //                 {p.title}
                                        //             </Link>
                                        //             <div className="mobile-cart-content row">
                                        //                 <div className="col-xs-3">
                                        //                     <div className="qty-box">
                                        //                         <div className="input-group">
                                        //                             <input type="text" name="quantity"
                                        //                                    className="form-control input-number"
                                        //                                    // defaultValue={item.qty}
                                        //                             />
                                        //                         </div>
                                        //                     </div>
                                        //                 </div>
                                        //                 <div className="col-xs-3">
                                        //                     <h2 className="td-color">
                                        //                        {/*{p.price}*/}
                                        //                         {/*{symbol}{item.price-(item.price*item.discount/100)}*/}
                                        //                     </h2>
                                        //                 </div>
                                        //                 <div className="col-xs-3">
                                        //                     <h2 className="td-color">
                                        //                         <a
                                        //                             href="#"
                                        //                             className="icon"
                                        //                             // onClick={() => this.props.removeFromCart(item)}
                                        //                         >
                                        //                             <i className="icon-close"></i>
                                        //                         </a>
                                        //                     </h2>
                                        //                 </div>
                                        //             </div>
                                        //         </td>
                                        //         <td><h2>
                                        //             {/*{symbol}*/}
                                        //             {p.price}
                                        //         {/*{item.price-(item.price*item.discount/100)}*/}
                                        //         </h2></td>
                                        //         {/*<td>*/}
                                        //         {/*    <div className="qty-box">*/}
                                        //         {/*        <div className="input-group">*/}
                                        //         {/*            <span className="input-group-prepend">*/}
                                        //         {/*                <button type="button" className="btn quantity-left-minus"*/}
                                        //         {/*                        // onClick={() => this.props.decrementQty(item.id)}*/}
                                        //         {/*                        data-type="minus" data-field="">*/}
                                        //         {/*                 <i className="fa fa-angle-left"></i>*/}
                                        //         {/*                </button>*/}
                                        //         {/*            </span>*/}
                                        //         {/*            <input*/}
                                        //         {/*                type="text"*/}
                                        //         {/*                name="quantity"*/}
                                        //         {/*                // value={item.qty}*/}
                                        //         {/*                readOnly={true}*/}
                                        //         {/*                className="form-control input-number" />*/}
                                        //
                                        //         {/*            <span className="input-group-prepend">*/}
                                        //         {/*            <button className="btn quantity-right-plus"*/}
                                        //         {/*                    // onClick={() => this.props.incrementQty(item, 1)}*/}
                                        //         {/*                    data-type="plus"*/}
                                        //         {/*                    // disabled={(item.qty >= item.stock)? true : false}*/}
                                        //         {/*            >*/}
                                        //         {/*            <i className="fa fa-angle-right"></i>*/}
                                        //         {/*            </button>*/}
                                        //         {/*           </span>*/}
                                        //         {/*        </div>*/}
                                        //         {/*    </div>*/}
                                        //         {/*    /!*{(item.qty >= item.stock)? 'out of Stock' : ''}*!/*/}
                                        //         {/*</td>*/}
                                        //
                                        //
                                        //         {/*<td className="text-center">*/}
                                        //         {/*    <input*/}
                                        //         {/*        type="number"*/}
                                        //         {/*        className="form-control"*/}
                                        //         {/*        value={p.count}*/}
                                        //         {/*        onChange={handleQuantityChange}*/}
                                        //         {/*    />*/}
                                        //         {/*</td>*/}
                                        //
                                        //
                                        //         <td>
                                        //             <a href="#" className="icon"
                                        //                // onClick={() => this.props.removeFromCart(item)}
                                        //             >
                                        //                 <i className="fa fa-times"></i>
                                        //             </a>
                                        //         </td>
                                        //         <td><h2 className="td-color">
                                        //             {/*{symbol}{item.sum}*/}
                                        //         </h2></td>
                                        //     </tr>
                                        // </tbody> )
                                    // }
                                    )}
                                </table>
                                <table className="table cart-table table-responsive-md">
                                    <tfoot>
                                    <tr>
                                        <td>total price :</td>
                                        {/*<td><h2>{symbol} {total} </h2></td>*/}
                                        <td><h2>
                                            ${getTotal().toFixed(2)}
                                        </h2></td>
                                    </tr>
                                    </tfoot>
                                </table>
                            </div>
                            <div className="col-sm-3" style={{textAlign: 'center'}}>
                                <h4>Order Summary</h4>
                                <hr />
                                {/*<p>Products</p>*/}
                                {cart.map((c, i) => (
                                    <div key={i}>
                                        <p>
                                            {c.title} x {c.count} = ${c.price * c.count}
                                        </p>

                                    </div>
                                ))}
                                <p style={{borderTop: '1px solid #dee2e6', paddingTop: '15px'}}><b>Total Price: ${getTotal().toFixed(2)}</b></p>

                                {
                                    user ? (
                                        <button
                                            disabled={!cart.length}
                                            style={{marginTop: '20px'}}
                                            onClick={saveOrderToDb} className="btn btn-solid">checkout</button>
                                    ) : (
                                        <Link to={{
                                            pathname: '/pages/login',
                                            state: {from: 'cart'}
                                        }}
                                              style={{marginTop: '20px'}}
                                              className="btn btn-solid">login to checkout</Link>
                                    )
                                }
                            </div>
                        </div>
                        <div className="row cart-buttons">
                            <div className="col-6">
                                <Link to={`${process.env.PUBLIC_URL}/left-sidebar/collection`} className="btn btn-solid">continue shopping</Link>
                            </div>
                            <div className="col-6">
                                {/*{*/}
                                {/*    user ? (*/}
                                {/*        <button*/}
                                {/*            disabled={!cart.length}*/}
                                {/*            onClick={saveOrderToDb} className="btn btn-solid">checkout</button>*/}
                                {/*    ) : (*/}
                                {/*        <Link to={{*/}
                                {/*            pathname: '/pages/login',*/}
                                {/*            state: {from: 'cart'}*/}
                                {/*        }} className="btn btn-solid">login to checkout</Link>*/}
                                {/*    )*/}
                                {/*}*/}

                            </div>
                        </div>
                    </div>
                </section>
                :
                <section className="cart-section section-b-space">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12">
                                <div >
                                    <div className="col-sm-12 empty-cart-cls text-center">
                                        <img src={`${process.env.PUBLIC_URL}/assets/images/icon-empty-cart.png`} className="img-fluid mb-4" alt="" />
                                        <h3>
                                            <strong>Your Cart is Empty</strong>
                                        </h3>
                                        {/*<h4>Explore more shortlist some items.</h4>*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                }
            </div>
        )
    }




export default cartComponent;