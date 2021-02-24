import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import {Link} from 'react-router-dom';
import defaultImage from "../../images/default-product-image.png";
import { toast } from "react-toastify";

const ProductCardInCheckout = ({p}) => {
    let dispatch = useDispatch();

    const handleQuantityChange = (e) => {
        // console.log("available quantity", p.quantity);
        let count = e.target.value < 1 ? 1 : e.target.value;

        if (count > p.quantity) {
            toast.error(`Max available quantity: ${p.quantity}`);
            return;
        }

        let cart = [];

        if (typeof window !== "undefined") {
            if (localStorage.getItem("cart")) {
                cart = JSON.parse(localStorage.getItem("cart"));
            }

            cart.map((product, i) => {
                if (product._id == p._id) {
                    cart[i].count = count;
                }
            });

            localStorage.setItem("cart", JSON.stringify(cart));
            dispatch({
                type: "ADD_TO_CART",
                payload: cart,
            });
        }
    };

    return (
    <tbody key={p._id}>
        <tr>
            <td>
                <Link

                    to={`${process.env.PUBLIC_URL}/left-sidebar/product/`}>
                    <img src={p.images && p.images.length ? p.images[0].url : defaultImage} alt="" />
                </Link>
            </td>
            <td>
                <Link to={`${process.env.PUBLIC_URL}/left-sidebar/product/`}>
                    {p.title}
                </Link>
                <div className="mobile-cart-content row">
                    <div className="col-xs-3">
                        <div className="qty-box">
                            <div className="input-group">
                                <input type="text" name="quantity"
                                       className="form-control input-number"
                                       // defaultValue={item.qty}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-xs-3">
                        <h2 className="td-color">
                           {/*{p.price}*/}
                            {/*{symbol}{item.price-(item.price*item.discount/100)}*/}
                        </h2>
                    </div>
                    <div className="col-xs-3">
                        <h2 className="td-color">
                            <a
                                href="#"
                                className="icon"
                                // onClick={() => this.props.removeFromCart(item)}
                            >
                                <i className="icon-close"></i>
                            </a>
                        </h2>
                    </div>
                </div>
            </td>
            <td><h2>
                {/*{symbol}*/}
                {p.price}
            {/*{item.price-(item.price*item.discount/100)}*/}
            </h2></td>
            {/*<td>*/}
            {/*    <div className="qty-box">*/}
            {/*        <div className="input-group">*/}
            {/*            <span className="input-group-prepend">*/}
            {/*                <button type="button" className="btn quantity-left-minus"*/}
            {/*                        // onClick={() => this.props.decrementQty(item.id)}*/}
            {/*                        data-type="minus" data-field="">*/}
            {/*                 <i className="fa fa-angle-left"></i>*/}
            {/*                </button>*/}
            {/*            </span>*/}
            {/*            <input*/}
            {/*                type="text"*/}
            {/*                name="quantity"*/}
            {/*                // value={item.qty}*/}
            {/*                readOnly={true}*/}
            {/*                className="form-control input-number" />*/}

            {/*            <span className="input-group-prepend">*/}
            {/*            <button className="btn quantity-right-plus"*/}
            {/*                    // onClick={() => this.props.incrementQty(item, 1)}*/}
            {/*                    data-type="plus"*/}
            {/*                    // disabled={(item.qty >= item.stock)? true : false}*/}
            {/*            >*/}
            {/*            <i className="fa fa-angle-right"></i>*/}
            {/*            </button>*/}
            {/*           </span>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*    /!*{(item.qty >= item.stock)? 'out of Stock' : ''}*!/*/}
            {/*</td>*/}


            <td className="text-center">
                <input
                    type="number"
                    className="form-control"
                    value={p.count}
                    onChange={handleQuantityChange}
                />
            </td>


            <td>
                <a href="#" className="icon"
                   // onClick={() => this.props.removeFromCart(item)}
                >
                    <i className="fa fa-times"></i>
                </a>
            </td>
            <td><h2 className="td-color">
                {/*{symbol}{item.sum}*/}
            </h2></td>
        </tr>
    </tbody>
    )
};

export default ProductCardInCheckout;