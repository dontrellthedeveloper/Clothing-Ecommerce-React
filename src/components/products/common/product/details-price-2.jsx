import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom'
import Slider from 'react-slick';
import Modal from 'react-responsive-modal';
import StarRatings from 'react-star-ratings';
import RatingModal from "../../../modal/RatingModal";
import {useSelector} from "react-redux";
import { StarOutlined } from "@ant-design/icons";

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
                        {/*<h6 className="product-title">Rating</h6>*/}
                        {/*<RatingModal/>*/}
                        {user ? <StarRatings
                            name={product._id}
                            numberOfStars={5}
                            rating={2}
                            changeRating={(newRating, name) => console.log('newRating', newRating, 'name', name)}
                            isSelectable={true}
                            starRatedColor='#79868F'
                        />  :
                            <>
                                <Link to={`${process.env.PUBLIC_URL}/pages/login`}>
                                    <StarOutlined className="text-danger" />
                                    <br />{" "}
                                    Login to leave rating
                                </Link>

                            </>
                        }
                        {/*<div className="product-icon" style={{display: 'block'}}>*/}
                        {/*    <ul className="product-social" style={{display: 'none'}}>*/}
                        {/*        <li><a href="https://www.facebook.com/" target="_blank"><i className="fa fa-facebook"></i></a></li>*/}
                        {/*        <li><a href="https://plus.google.com/discover" target="_blank"><i className="fa fa-google-plus"></i></a></li>*/}
                        {/*        <li><a href="https://twitter.com/" target="_blank"><i className="fa fa-twitter"></i></a></li>*/}
                        {/*        <li><a href="https://www.instagram.com/" target="_blank"><i className="fa fa-instagram"></i></a></li>*/}
                        {/*    </ul>*/}
                        {/*    <button className="wishlist-btn" onClick={() => addToWishlistClicked(item)}><i*/}
                        {/*        className="fa fa-heart" style={{borderLeft: 'none'}}></i><span*/}
                        {/*        className="title-font">Add To WishList</span>*/}
                        {/*    </button>*/}
                        {/*</div>*/}
                    </div>
                    <div className="border-product">
                        {/*<h3></h3>*/}

                    </div>
                    {/*{item.variants?*/}
                    {/*<ul >*/}
                    {/*    <Slider {...colorsnav} asNavFor={this.props.navOne} ref={slider => (this.slider1 = slider)} className="color-variant">*/}
                    {/*        {item.variants.map((vari, i) => {*/}
                    {/*            return <li className={vari.color} key={i} title={vari.color}></li>*/}
                    {/*        })}*/}
                    {/*    </Slider>*/}
                    {/*</ul>:''*/}
                    {/*}*/}
                    {/*<div className="border-product">*/}
                    {/*    <span className="instock-cls">{stock}</span>*/}
                    {/*</div>*/}
                    <div className="product-description border-product">
                        {/*{item.size?*/}
                        <div>
                            {/*<h6 className="product-title size-text">select size*/}
                            {/*    <span><a href="#" data-toggle="modal"*/}
                            {/*             data-target="#sizemodal" onClick={onOpenModal} >size chart</a>*/}
                            {/*    </span>*/}
                            {/*</h6>*/}
                            {/*<div className="modal fade" id="sizemodal" tabIndex="-1"*/}
                            {/*     role="dialog" aria-labelledby="exampleModalLabel"*/}
                            {/*     aria-hidden="true">*/}
                            {/*    <div className="modal-dialog modal-dialog-centered"*/}
                            {/*         role="document">*/}
                            {/*        <div className="modal-content">*/}
                            {/*            <div className="modal-header">*/}
                            {/*                <h5 className="modal-title"*/}
                            {/*                    id="exampleModalLabel">Sheer Straight*/}
                            {/*                    Kurta</h5>*/}
                            {/*                <button type="button" className="close"*/}
                            {/*                        data-dismiss="modal" aria-label="Close">*/}
                            {/*                    <span aria-hidden="true">&times;</span>*/}
                            {/*                </button>*/}
                            {/*            </div>*/}
                            {/*            <div className="modal-body">*/}
                            {/*                <img src={`${process.env.PUBLIC_URL}/assets/images/size-chart.jpg`} alt="" className="img-fluid"/>*/}
                            {/*            </div>*/}
                            {/*        </div>*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                            <div className="size-box">
                                {/*<i className="fa fa-heart-o" aria-hidden="true"></i>*/}
                                <ul>
                                    {/*{item.size.map((size, i) => {*/}
                                    {/*    return <li key={i}><a href="#">{size}</a></li>*/}
                                    {/*})}*/}

                                </ul>
                            </div>
                        </div>
                        {/*:''}*/}



                        {/*<span className="instock-cls">{stock}</span>*/}
                        {/*<h6 className="product-title">quantity</h6>*/}
                        {/*<div className="qty-box" style={{display: 'inline-block'}}>*/}
                        {/*    <div className="input-group">*/}
                        {/*          <span className="input-group-prepend">*/}
                        {/*            <button type="button" className="btn quantity-left-minus" onClick={minusQty} data-type="minus" data-field="">*/}
                        {/*             <i className="fa fa-angle-left"></i>*/}
                        {/*            </button>*/}
                        {/*          </span>*/}
                        {/*        <input type="text" name="quantity" value={quantity} onChange={changeQty} className="form-control input-number" />*/}
                        {/*        <span className="input-group-prepend">*/}
                        {/*        <button type="button" className="btn quantity-right-plus" onClick={plusQty} data-type="plus" data-field="">*/}
                        {/*        <i className="fa fa-angle-right"></i>*/}
                        {/*        </button>*/}
                        {/*       </span>*/}
                        {/*    </div>*/}
                        {/*</div>*/}









                    </div>
                    <div className="product-buttons" >
                        <a className="btn btn-solid" onClick={() => addToCartClicked(item, quantity)}>add to cart</a>
                        {/*<Link to={`${process.env.PUBLIC_URL}/checkout`} className="btn btn-solid" onClick={() => BuynowClicked(item, this.state.quantity)} >*/}
                        {/*    buy now*/}
                        {/*</Link>*/}
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