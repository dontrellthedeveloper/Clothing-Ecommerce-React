import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import Slider from 'react-slick';
import Modal from 'react-responsive-modal';
import StarRatings from 'react-star-ratings';
import RatingModal from "../../../modal/RatingModal";
import {useDispatch, useSelector} from "react-redux";
import { StarOutlined } from "@ant-design/icons";
import {toast} from "react-toastify";
import defaultImage from "../../../../images/default-product-image.png";
import {showAverage} from "../../../../functions/rating";
import _ from "lodash";

const DetailsWithPrice2 = ({symbol, item, addToCartClicked, BuynowClicked, addToWishlistClicked, product, onStarClick, star}) => {
    const [open, isOpen] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [stock, setStock] = useState('InStock');
    const [nav3, setNav3] = useState(null);
    let [slider3, setSlider3] = useState({});
    const [tooltip, setTooltip] = useState("Click to add");

    // redux
    const { user, cart } = useSelector((state) => ({ ...state }));
    const dispatch = useDispatch();

    // const { user } = useSelector((state) => ({ ...state }));

    const onOpenModal = () => {
        isOpen( true );
    };

    const onCloseModal = () => {
        isOpen(false );
    };



    const handleAddToCart = () => {
        // create cart array
        let cart = [];
        if(typeof window !== 'undefined') {
            // if cart is in localstorage GET it
            if(localStorage.getItem('cart')) {
                cart = JSON.parse(localStorage.getItem('cart'));
            }
            // push new product to cart
            cart.push({
                ...product,
                count: 1,
            });
            // remove duplicates
            let unique = _.uniqWith(cart, _.isEqual);
            // save to local storage
            // console.log('unique', unique)
            localStorage.setItem("cart", JSON.stringify(unique));
            // show tooltip
            toast.success(`Added ${product.title} to cart!`);
            // add to redux state
            dispatch({
                type: "ADD_TO_CART",
                payload: unique,
            });
        }
    };



    const onCloseRatingModal = () => {
        isOpen(false );
        toast.success("Thanks for your review. It will appear soon");
    };

    useEffect(() => {
        setNav3(slider3);
    }, []);


    const minusQty = () => {
        if(quantity > 1) {
            setStock('InStock');
            setQuantity(quantity - 1);
        }
    };

    const plusQty = () => {
        if(stock >= quantity) {
            setQuantity(quantity+1)
        }else{
            setStock('Out of Stock !');
        }
    };

    const changeQty = (e) => {
        setQuantity(parseInt(e.target.value))
    };

        let colorsnav = {
            slidesToShow: 6,
            swipeToSlide:true,
            arrows: false,
            dots: false,
            focusOnSelect: true
        };


        return (
            <div className="col-lg-6 rtl-text">
                <div className="product-right" style={{textAlign: "center"}}>
                    <h2> {product.title} </h2>
                    <h4>
                        {/*<del>{symbol}{product.price}</del>*/}

                        {/*<span>{item.discount}% off</span>*/}
                    </h4>
                    <h3>
                        {/*{symbol}{item.price-(item.price*item.discount/100)}*/}
                        {/*${product.price}*/}
                    </h3>

                    <div className="border-product" style={{paddingTop: '20px'}}>
                        {product && product.ratings && product.ratings.length > 0 ? (
                            showAverage(product)
                        ) : (
                            <div className="text-center">No rating yet</div>
                        )}

                    </div>


                    <div className="border-product" style={{paddingTop: '20px'}}>
                        <h3 style={{marginBottom: '0'}}>${product.price}</h3>

                    </div>







                    <div className="border-product" style={{paddingTop: '20px'}}>
                        {/*{item.size?*/}

                        <button title={tooltip}
                                onClick={handleAddToCart}
                                className='btn btn-solid'
                        >
                            <i className="fa fa-shopping-cart" style={{marginRight: '5px'}} aria-hidden="true"></i>
                            add to cart
                        </button>
                        {/*<div className="product-buttons" style={{marginBottom: '0'}}>*/}
                        {/*    <a className="btn btn-solid" onClick={() => addToCartClicked(item, quantity)}>add to cart</a>*/}

                            {/*<Link to={`${process.env.PUBLIC_URL}/checkout`} className="btn btn-solid" onClick={() => BuynowClicked(item, this.state.quantity)} >*/}
                            {/*    buy now*/}
                            {/*</Link>*/}
                        {/*</div>*/}





                    </div>






                    <div className="border-product">
                        <h6 className="product-title">favorite</h6>
                        <div className="product-icon" style={{display: 'block'}}>
                            <ul className="product-social" style={{display: 'none'}}>
                                <li><a href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="https://plus.google.com/discover" target="_blank"><i className="fa fa-google-plus"></i></a></li>
                                <li><a href="https://twitter.com/" target="_blank"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="https://www.instagram.com/" target="_blank"><i className="fa fa-instagram"></i></a></li>
                            </ul>
                            <button className="wishlist-btn" onClick={() => addToWishlistClicked(item)}><i
                                className="fa fa-heart" style={{borderLeft: 'none'}}></i><span
                                className="title-font">Add To WishList</span>
                            </button>
                        </div>
                    </div>


                    {/*<div className="border-product">*/}
                        {/*<h6 className="product-title">product details</h6>*/}
                        {/*/!*<p>{item.shortDetails}</p>*!/*/}
                        {/*{product.description}*/}

                        {/*<Link to={`${process.env.PUBLIC_URL}/checkout`} className="btn btn-solid" onClick={() => BuynowClicked(item, quantity)} >*/}
                        {/*    buy now*/}
                        {/*</Link>*/}
                    {/*</div>*/}












                    <div className="border-product" style={{paddingTop: '20px'}}>
                        {/*<h6 className="product-title">Rating</h6>*/}
                        {/*<RatingModal/>*/}


                        {user ?
                        <>
                            <div>

                                <a href="javascript:void(0)" data-toggle="modal"
                                   data-target="#quick-view"
                                   title="Rating Modal"
                                   onClick={onOpenModal}
                                >
                                    <h6 className="product-title" >
                                        <i className="fa fa-star" style={{borderLeft: 'none'}}></i></h6>
                                    {/*<i className="fa fa-star" aria-hidden="true"></i>*/}
                                    <div className="product-icon" style={{display: 'block'}}>
                                        <button className="wishlist-btn">
                                            {/*<i*/}
                                            {/*className="fa fa-star" style={{borderLeft: 'none'}}></i>*/}
                                            <span
                                                className="title-font">Leave Rating</span>
                                        </button>
                                    </div>
                                </a>
                            </div>


                            <Modal open={open} onClose={onCloseModal} center>
                                <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                                    <div className="modal-content quick-view-modal">
                                        <div className="modal-body">
                                            <div className="row">
                                                <h5 className="product-title" style={{margin: '5px auto'}} >
                                                    Leave Your Rating</h5>
                                                <div className='container' style={{padding: '35px 50px 10px 50px', borderTop: '1px solid #e0e0e0'}}>
                                                    {/*{user ?*/}
                                                        <>
                                                            <div style={{textAlign: 'center', paddingBottom: '10px'}}>
                                                                <StarRatings
                                                                    name={product._id}
                                                                    changeRating={onStarClick}
                                                                    // changeRating={(newRating, name) => console.log("new rating", newRating, "name", name)}
                                                                    numberOfStars={5}
                                                                    rating={star}
                                                                    isSelectable={true}
                                                                    starRatedColor='#79868F'
                                                                />
                                                                {/*<a className="btn btn-solid" >leave rating</a>*/}




                                                            </div>
                                                            <div className="product-icon" style={{display: 'block', marginTop: '20px', textAlign: 'center'}}>

                                                                <button className="wishlist-btn"
                                                                        onClick={onCloseModal}
                                                                        style={{marginRight: '5px', padding: '4px 15px'}}>
                                                                    <span className="title-font">Cancel</span>
                                                                </button>

                                                                <button className="wishlist-btn"
                                                                        style={{padding: '4px 15px'}}
                                                                        onClick={onCloseRatingModal}>
                                                                    <span className="title-font">Ok</span>
                                                                </button>

                                                            </div>
                                                        </>

                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Modal>
                        </>
                            :
                            <>
                                <Link to={`${process.env.PUBLIC_URL}/pages/login`}>
                                    <StarOutlined className="text-danger" />
                                    <br />{" "}
                                    Login to leave rating
                                </Link>

                            </>
                        }



                    </div>






                    <div className="border-product">
                        <h6 className="product-title">share it</h6>
                        <div className="product-icon" style={{display: 'block'}}>
                            <ul className="product-social" >
                                <li><a href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook"></i></a></li>
                                <li><a href="https://plus.google.com/discover" target="_blank"><i className="fa fa-google-plus"></i></a></li>
                                <li><a href="https://twitter.com/" target="_blank"><i className="fa fa-twitter"></i></a></li>
                                <li><a href="https://www.instagram.com/" target="_blank"><i className="fa fa-instagram"></i></a></li>
                            </ul>
                            <button className="wishlist-btn" style={{display: 'none'}} onClick={() => addToWishlistClicked(item)}><i
                                className="fa fa-heart" style={{borderLeft: 'none'}}></i><span
                                className="title-font">Add To WishList</span>
                            </button>
                        </div>
                    </div>




                    <div className="border-product">
                        <h6 className="product-title">Time Reminder</h6>
                        <div className="timer">
                            <p id="demo">
                                <span>25
                                    <span className="padding-l">:</span>
                                    <span className="timer-cal">Days</span>
                                </span>
                                <span>22
                                    <span className="padding-l">:</span>
                                    <span className="timer-cal">Hrs</span>
                                </span>
                                <span>13
                                    <span className="padding-l">:</span>
                                    <span className="timer-cal">Min</span>
                                </span>
                                <span>57
                                    <span className="timer-cal">Sec</span>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>
                {/*<Modal open={open} onClose={onCloseModal} center>*/}
                {/*    <div className="modal-dialog modal-dialog-centered" role="document">*/}
                {/*        <div className="modal-content">*/}
                {/*            <div className="modal-header">*/}
                {/*                <h5 className="modal-title" id="exampleModalLabel">Sheer Straight Kurta</h5>*/}
                {/*            </div>*/}
                {/*            <div className="modal-body">*/}
                {/*                <img src={`${process.env.PUBLIC_URL}/assets/images/size-chart.jpg`} alt="" className="img-fluid" />*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</Modal>*/}
            </div>
        )
    };


export default DetailsWithPrice2;