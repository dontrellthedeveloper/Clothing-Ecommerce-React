import React, {Component} from 'react';
import {useSelector, useDispatch} from "react-redux";
import {Link} from 'react-router-dom'

const CartHeader  = ({p}) => {
    let dispatch = useDispatch();

    const imageStyle = {
        // width: "100%",
        // height: "50px",
        objectFit: "cover",
    };

    const handleRemove = () => {
        // console.log(p._id, "to remove");
        let cart = [];

        if (typeof window !== "undefined") {
            if (localStorage.getItem("cart")) {
                cart = JSON.parse(localStorage.getItem("cart"));
            }
            // [1,2,3,4,5]
            cart.map((product, i) => {
                if (product._id === p._id) {
                    cart.splice(i, 1);
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
        <li>
            <div className="media">
                <Link
                    to={`${process.env.PUBLIC_URL}/product/`}
                >
                    <img
                        alt=""
                        className="mr-3"
                        src={p.images[0].url}
                        style={imageStyle}
                    />
                </Link>
                <div className="media-body">
                    <Link
                        to={`${process.env.PUBLIC_URL}/product/`}
                    ><h4>
                        {p.title}
                    </h4></Link>
                    <h4><span>
                            {/*{item.qty} x {symbol} {(item.price*item.discount/100)}*/}
                        {p.price}
                        </span></h4>
                </div>
            </div>
            {/*<span>{cart}</span>*/}
            <div className="close-circle">
                <a href={null}
                   onClick={() => handleRemove(p._id)}
                ><i className="fa fa-times" aria-hidden="true"></i></a>
            </div>
        </li>
    )
}


export default CartHeader;
