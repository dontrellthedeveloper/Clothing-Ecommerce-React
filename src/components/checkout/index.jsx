import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from "react-redux";
import {Helmet} from 'react-helmet'
import {
    getUserCart,
    saveUserAddress
} from "../../functions/user";
import { toast } from "react-toastify";
import {Link, Redirect } from 'react-router-dom'
import PaypalExpressBtn from 'react-paypal-express-checkout';
import SimpleReactValidator from 'simple-react-validator';
import ReactQuill from "react-quill";
import 'react-quill/dist/quill.snow.css';

import Breadcrumb from "../common/breadcrumb";
import {removeFromWishlist} from '../../actions'
import {getCartTotal} from "../../services";
import {emptyUserCart} from "../../functions/user";

const checkOut = ({history}) => {
    const [products, setProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const [address, setAddress] = useState('' +
        '<li>First Name:</li>' +
        '<br/>' +
        '<li>Last Name:</li>' +
        '<br/>' +
        '<li>Phone:</li>' +
        '<br/>' +
        '<li>Email Address:</li>' +
        '<br/>' +
        '<li>Address:</li>' +
        '<br/>' +
        '<li>Town/City:</li>' +
        '<br/>' +
        '<li>State/County:</li>' +
        '<br/>' +
        '<li>Zip:</li>');
    const [addressSaved, setAddressSaved] = useState(false);
    const [coupon, setCoupon] = useState("");
    // discount price
    const [totalAfterDiscount, setTotalAfterDiscount] = useState(0);
    const [discountError, setDiscountError] = useState("");

    const dispatch = useDispatch();

    const { user } = useSelector((state) => ({ ...state }));


    useEffect(() => {
        getUserCart(user.token).then((res) => {
            console.log("user cart res", JSON.stringify(res.data, null, 4));
            setProducts(res.data.products);
            setTotal(res.data.cartTotal);
        });
    }, []);



    const emptyCart = () => {
        // remove from local storage
        if (typeof window !== "undefined") {
            localStorage.removeItem("cart");
        }
        // remove from redux
        dispatch({
            type: "ADD_TO_CART",
            payload: [],
        });
        // remove from backend
        emptyUserCart(user.token).then((res) => {
            setProducts([]);
            setTotal(0);
            toast.success("Cart is empty. Continue shopping.");
        });
    };



    const saveAddressToDb = () => {
        console.log(address);
        saveUserAddress(user.token, address).then((res) => {
            if (res.data.ok) {
                setAddressSaved(true);
                toast.success("Address saved");
            }
        });
    };


    const applyDiscountCoupon = () => {
        console.log("send coupon to backend", coupon);
        // applyCoupon(user.token, coupon).then((res) => {
        //     console.log("RES ON COUPON APPLIED", res.data);
        //     if (res.data) {
        //         setTotalAfterDiscount(res.data);
        //         // update redux coupon applied true/false
        //         dispatch({
        //             type: "COUPON_APPLIED",
        //             payload: true,
        //         });
        //     }
        //     // error
        //     if (res.data.err) {
        //         setDiscountError(res.data.err);
        //         // update redux coupon applied true/false
        //         dispatch({
        //             type: "COUPON_APPLIED",
        //             payload: false,
        //         });
        //     }
        // });
    };



    const showAddress = () => (
        <>
            <ReactQuill theme="snow" value={address} onChange={setAddress} />
            <button
                className="btn-solid btn"
                style={{marginTop: '20px'}}
                onClick={saveAddressToDb}
            >
                Save
            </button>
        </>
    );

    const showProductSummary = () =>
    {products.map((p, i) => {
            return <li key={i}>{p.product.title} × {p.count}
                <span>
                    {p.product.price * p.count}
                </span>
            </li>
        })};


    const showApplyCoupon = () => (
        <>
            <input
                onChange={(e) => {
                    setCoupon(e.target.value);
                    setDiscountError("");
                }}
                value={coupon}
                type="text"
                style={{textAlign: 'center'}}
                className="form-control"
            />
            <button onClick={applyDiscountCoupon}
                    style={{marginTop: '20px'}}
                    className="btn-solid btn">
                Apply
            </button>
        </>
    );



        return (
            <div>

                {/*SEO Support*/}
                <Helmet>
                    <title>MultiKart | CheckOut Page</title>
                    <meta name="description" content="Multikart – Multipurpose eCommerce React Template is a multi-use React template. It is designed to go well with multi-purpose websites. Multikart Bootstrap 4 Template will help you run multiple businesses." />
                </Helmet>
                {/*SEO Support End */}

                <Breadcrumb  title={'Checkout'}/>

                <section className="section-b-space">
                    <div className="container padding-cls">
                        <div className="checkout-page">
                            <div className="checkout-form">
                                <>
                                    <div className="checkout row">
                                        <div className="col-lg-6 col-sm-12 col-xs-12" style={{textAlign: 'center'}}>
                                            <div className="checkout-title">
                                                <h3>Billing Details</h3>
                                            </div>

                                            <div className="row check-out">
                                                <div className="col-md-12 col-sm-12 col-xs-12" >
                                                    {/*<div className="field-label">Country</div>*/}
                                                    {/*<select name="country"*/}
                                                    {/*        // value={this.state.country}*/}
                                                    {/*        // onChange={this.setStateFromInput}*/}
                                                    {/*>*/}
                                                    {/*    <option>India</option>*/}
                                                    {/*    <option>South Africa</option>*/}
                                                    {/*    <option>United State</option>*/}
                                                    {/*    <option>Australia</option>*/}
                                                    {/*</select>*/}

                                                    {showAddress()}

                                                    {/*<ReactQuill theme="snow" value={address} onChange={setAddress} />*/}
                                                    {/*<button*/}
                                                    {/*    className="btn-solid btn"*/}
                                                    {/*    style={{marginTop: '20px'}}*/}
                                                    {/*    onClick={saveAddressToDb}*/}
                                                    {/*>*/}
                                                    {/*        Save*/}
                                                    {/*</button>*/}
                                                </div>

                                                <div className="form-group col-lg-12 col-md-12 col-sm-12 col-xs-12">
                                                    {/*<input type="checkbox" name="create_account" id="account-option"  checked={this.state.create_account} onChange={this.setStateFromCheckbox}/>*/}
                                                    {/*&ensp; <label htmlFor="account-option">Got a Coupon?</label>*/}
                                                    {/*{this.validator.message('checkbox', this.state.create_account, 'create_account')}*/}
                                                    <div className="checkout-title" style={{marginTop: '60px'}}>
                                                        <h4>Got a Coupon?</h4>
                                                    </div>
                                                    {showApplyCoupon()}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-sm-12 col-xs-12">
                                            <div className="checkout-details">
                                                <div className="order-box">
                                                    <div className="title-box">
                                                        <div>Product <span> Total</span></div>
                                                    </div>
                                                    <ul className="qty">

                                                        {/*{showProductSummary()}*/}
                                                        {products.map((p, i) => {
                                                            return <li key={i}>{p.product.title} × {p.count}
                                                            <span>
                                                                {/*{symbol} {item.sum}*/}
                                                                {p.product.price * p.count}
                                                            </span>
                                                            </li>
                                                        }
                                                                )
                                                        }
                                                        {/*{JSON.stringify(products)}*/}
                                                    </ul>
                                                    <ul className="sub-total">
                                                        {/*<li>Subtotal <span className="count">{symbol}{total}</span></li>*/}
                                                        {/*<li>Shipping <div className="shipping">*/}
                                                        {/*    <div className="shopping-option">*/}
                                                        {/*        <input type="checkbox" name="free-shipping" id="free-shipping" />*/}
                                                        {/*            <label htmlFor="free-shipping">Free Shipping</label>*/}
                                                        {/*    </div>*/}
                                                        {/*    <div className="shopping-option">*/}
                                                        {/*        <input type="checkbox" name="local-pickup" id="local-pickup" />*/}
                                                        {/*            <label htmlFor="local-pickup">Local Pickup</label>*/}
                                                        {/*    </div>*/}
                                                        {/*</div>*/}
                                                        {/*</li>*/}
                                                    </ul>

                                                    <ul className="total">
                                                         <li >Total <span className="count">
                                                            {total.toFixed(2)}
                                                            </span></li>
                                                    </ul>
                                                </div>

                                                <div className="payment-box">
                                                    <div className="upper-box">
                                                        <div className="payment-options">
                                                            <ul>
                                                                <li>
                                                                    <div className="radio-option stripe">
                                                                        {/*<input type="radio" name="payment-group" id="payment-2" defaultChecked={true} onClick={() => this.checkhandle('stripe')} />*/}
                                                                        {/*<label htmlFor="payment-2">Stripe</label>*/}
                                                                    </div>
                                                                </li>
                                                                <li >
                                                                    <div className="radio-option paypal" style={{margin: '0 auto'}}>
                                                                        {/*<input type="radio" name="payment-group" id="payment-1" onClick={() => this.checkhandle('paypal')} />*/}
                                                                            <label htmlFor="payment-1"><span className="image">
                                                                                <img src={`${process.env.PUBLIC_URL}/assets/images/paypal.png`} alt=""/>
                                                                            </span></label>
                                                                    </div>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </div>
                                                    {/*{(total !== 0)?*/}
                                                    <div className="text-right">
                                                        {/*{(this.state.payment === 'stripe')? */}
                                                        <div className='row'>
                                                            <div className='col-md-6' style={{textAlign: 'left'}}>
                                                                <button
                                                                    type="button"
                                                                    className="btn-solid btn"
                                                                    disabled={!products.length}
                                                                    onClick={emptyCart}
                                                                >
                                                                    Empty Cart
                                                                </button>
                                                            </div>
                                                            <div className='col-md-6'>
                                                                <button
                                                                    type="button"
                                                                    className="btn-solid btn"
                                                                    disabled={!addressSaved || !products.length}
                                                                    // onClick={() => this.StripeClick()}
                                                                >
                                                                    Place Order
                                                                </button>
                                                            </div>
                                                        </div>
                                                            {/*<button*/}
                                                            {/*    type="button"*/}
                                                            {/*    className="btn-solid btn"*/}
                                                            {/*    // onClick={() => this.StripeClick()}*/}
                                                            {/*>*/}
                                                            {/*    Place Order*/}
                                                            {/*</button>*/}
                                                        {/*:*/}
                                                         {/*<PaypalExpressBtn */}
                                                         {/*    env={'sandbox'} */}
                                                         {/*    client={client} */}
                                                         {/*    currency={'USD'} */}
                                                         {/*    total={total} */}
                                                         {/*    onError={onError} */}
                                                         {/*    onSuccess={onSuccess} */}
                                                         {/*    onCancel={onCancel} */}
                                                         {/*/>*/}
                                                         {/*}*/}
                                                    </div>
                                                    {/*: ''}*/}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row section-t-space">
                                        <div className="col-lg-6">
                                            <div className="stripe-section">
                                                <h5>stripe js example</h5>
                                                <div>
                                                    <h5 className="checkout_class">dummy test</h5>
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td>cart number</td>
                                                                <td>4242424242424242</td>
                                                            </tr>
                                                            <tr>
                                                                <td>mm/yy</td>
                                                                <td>2/2020</td>
                                                            </tr>
                                                            <tr>
                                                                <td>cvc</td>
                                                                <td>2222</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 m-sm-t-2">
                                            <div className="stripe-section">
                                                <h5>paypal example</h5>
                                                <div>
                                                    <h5 className="checkout_class">dummy test</h5>
                                                    <table>
                                                        <tbody>
                                                            <tr>
                                                                <td>cart number</td>
                                                                <td>4152521541244</td>
                                                            </tr>
                                                            <tr>
                                                                <td>mm/yy</td>
                                                                <td>11/18</td>
                                                            </tr>
                                                            <tr>
                                                                <td>cvc</td>
                                                                <td>521</td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }

// const mapStateToProps = (state) => ({
//     cartItems: state.cartList.cart,
//     symbol: state.data.symbol,
//     total: getCartTotal(state.cartList.cart)
// })
//
// export default connect(
//     mapStateToProps,
//     {removeFromWishlist}
// )(checkOut)

export default checkOut;