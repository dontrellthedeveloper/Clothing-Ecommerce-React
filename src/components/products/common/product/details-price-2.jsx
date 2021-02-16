import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import Slider from 'react-slick';
import Modal from 'react-responsive-modal';
import StarRatings from 'react-star-ratings';
import RatingModal from "../../../modal/RatingModal";
import {useSelector} from "react-redux";
import { StarOutlined } from "@ant-design/icons";
import {toast} from "react-toastify";

const DetailsWithPrice2 = ({symbol, item, addToCartClicked, BuynowClicked, addToWishlistClicked, product}) => {
    const [open, isOpen] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const [stock, setStock] = useState('InStock');
    const [nav3, setNav3] = useState(null);
    let [slider3, setSlider3] = useState({});

    const { user } = useSelector((state) => ({ ...state }));

    const onOpenModal = () => {
        isOpen( true );
    };

    const onCloseModal = () => {
        isOpen(false );
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
                    <div className="border-product">
                        <h3>${product.price}</h3>

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




                    <div className="border-product" style={{paddingTop: '20px'}}>
                        {/*{item.size?*/}


                        <div className="product-buttons" style={{marginBottom: '0'}}>
                            <a className="btn btn-solid" onClick={() => addToCartClicked(item, quantity)}>add to cart</a>
                            {/*<Link to={`${process.env.PUBLIC_URL}/checkout`} className="btn btn-solid" onClick={() => BuynowClicked(item, this.state.quantity)} >*/}
                            {/*    buy now*/}
                            {/*</Link>*/}
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












                    <div className="border-product">
                        {/*<h6 className="product-title">Rating</h6>*/}
                        {/*<RatingModal/>*/}

                        {user ?
                            <>
                                <StarRatings
                                    name={product._id}
                                    numberOfStars={5}
                                    rating={2}
                                    changeRating={(newRating, name) => console.log('newRating', newRating, 'name', name)}
                                    isSelectable={true}
                                    starRatedColor='#79868F'
                                />
                                {/*<a className="btn btn-solid" >leave rating</a>*/}



                                <div className="product-icon" style={{display: 'block', marginTop: '20px'}}>
                                    <button className="wishlist-btn" onClick={() => {toast.success("Thanks for your review. It will apper soon")}}><i
                                        className="fa fa-star" style={{borderLeft: 'none'}}></i><span
                                        className="title-font">Leave Rating</span>
                                    </button>
                                </div>
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