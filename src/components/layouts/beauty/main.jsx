import React, { useState, useEffect } from 'react';
import {Helmet} from 'react-helmet'
import '../../common/index.scss';
import Slider from 'react-slick';
import {Link} from 'react-router-dom';
import Modal from 'react-responsive-modal';
import ThemeSettings from "../../common/theme-settings";

import {getProducts} from "../../../functions/product";

// Import custom components
import {svgFreeShipping, svgservice, svgoffer, svgpayment} from "../../../services/script"
import TopCollection from "../common/collection";
import NewArrivals from '../../home/NewArrivals';
import BestSellers from '../../home/BestSellers';

import NewProduct from "../../common/new-product"
import Instagram from "../common/instagram"
import HeaderOne from "../../common/headers/header-one"
import FooterOne from "../../common/footers/footer-one"
import BlogSection from "../common/blogsection";
import MultiSlider from "../kids/multiple-slider";

import Jumbotron from "../../cards/Jumbotron";




const Beauty = (props) => {

    // const [products, setProducts] = useState([]);
    // const [loading, setLoading] = useState(false);


    // componentDidMount()
    useEffect(() => {
        document.getElementById("color").setAttribute("href", `${process.env.PUBLIC_URL}/assets/css/color3.css` );

        // loadAllProducts();
    }, []);

    // const  loadAllProducts = () => {
    //     // sort, order, limit
    //     getProducts('createdAt', 'desc',4)
    //         .then(res => {
    //             setProducts(res.data);
    //             setLoading(false);
    //         })
    // };




        return (
            <div>
                <Helmet>
                    <title>Hustle x Bustle</title>
                </Helmet>

                {/*<HeaderOne logoName={'logo.png'}/>*/}

                <section className="p-0">
                    <Slider className="slide-1 home-slider">
                        <div>
                            <div className="home home34">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="slider-contain">
                                                <div style={{width: "100%", marginTop: "30px", textAlign: "center"}}>
                                                    <h2 style={{color: "#fff", marginBottom: "10px", fontSize: "40px"}}>
                                                        {/*<Jumbotron text={['Hustle x Bustle', "Top Urban Wear"]}/>*/}
                                                        Hustle
                                                        {/*<i className="fa fa-times" aria-hidden="true"></i>*/}
                                                        <i style={{margin: "15px"}} className="fa fa-window-close" aria-hidden="true"></i>
                                                        Bustle
                                                    </h2>
                                                    <h1></h1><a href="#" className="btn btn-solid">shop
                                                    now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="home home35">
                                <div className="container">
                                    <div className="row">
                                        <div className="col">
                                            <div className="slider-contain">
                                                <div style={{width: "100%", marginTop: "30px", textAlign: "center"}}>
                                                    <h2 style={{color: "#fff", marginBottom: "30px"}}>
                                                        <Jumbotron text={['Hustle x Bustle', "Urban Fashion"]}/>
                                                    </h2>
                                                    <h1></h1><a href="#" className="btn btn-solid">shop
                                                    now</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </section>




                {/*{JSON.stringify(products)};*/}


                {/*Product slider*/}
                {/*<TopCollection*/}
                {/*    type={'beauty'}*/}
                {/*    products={products}*/}
                {/*    setProducts={setProducts}*/}
                {/*    loading={loading}*/}
                {/*    setLoading={setLoading}*/}
                {/*/>*/}

                <NewArrivals
                    type={'beauty'}
                    // products={products}
                    // setProducts={setProducts}
                    // loading={loading}
                    // setLoading={setLoading}
                />

                {/*Product slider End*/}


                <div className="container">
                    <section className="section-b-space">
                        <Slider className="slide-1 home-slider">
                            <div>
                                <div className="home home8 p-center text-center bg-size blur-up lazyloaded">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col">
                                                <div className="slider-contain" >
                                                    <div>
                                                        {/*<h4>welcome to fashion</h4>*/}
                                                        <h1>Winter collection</h1>
                                                        <a href="#" className="btn btn-solid">shop now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="home home7 p-center text-center bg-size blur-up lazyloaded">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col">
                                                <div className="slider-contain">
                                                    <div>
                                                        {/*<h4>welcome to fashion</h4>*/}
                                                        <h1>Summer Collection</h1>
                                                        <a href="#" className="btn btn-solid">shop now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </section>
                </div>



                {/*<BestSellers*/}
                {/*    type={'beauty'}*/}
                {/*    products={products}*/}
                {/*    setProducts={setProducts}*/}
                {/*    loading={loading}*/}
                {/*    setLoading={setLoading}*/}
                {/*/>*/}



                {/*Parallax banner*/}
                {/*<section className="p-0">*/}
                {/*    <div className="full-banner parallax-banner1 parallax text-center p-left">*/}
                {/*        <div className="container">*/}
                {/*            <div className="row">*/}
                {/*                <div className="col">*/}
                {/*                    <div className="banner-contain">*/}
                {/*                        <h2>2018</h2>*/}
                {/*                        <h3>fashion trends</h3>*/}
                {/*                        <h4>special offer</h4>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</section>*/}
                {/*Parallax banner End*/}



                {/*/!*Video Section*!/*/}
                {/*<section className="video-section pt-0">*/}
                {/*    <div className="title1">*/}
                {/*        <h4>special offer</h4>*/}
                {/*        <h2 className="title-inner1">product tutorial</h2>*/}
                {/*    </div>*/}
                {/*    <div className="container">*/}
                {/*        <div className="row">*/}
                {/*            <div className="col-md-8 offset-md-2">*/}
                {/*                <a href="javascript:void(0)" onClick={onOpenModal}>*/}
                {/*                    <div className="video-img">*/}
                {/*                        <img src={`${process.env.PUBLIC_URL}/assets/images/beauty/video_1.jpg`} alt="" className="img-fluid blur-up lazyload" />*/}
                {/*                        <div className="play-btn">*/}
                {/*                            <span><i className="fa fa-play" aria-hidden="true"></i></span>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </a>*/}
                {/*                <Modal*/}
                {/*                    open={isOpen}*/}
                {/*                    onClose={{ open: false }}*/}
                {/*                    id="video"*/}
                {/*                    className="modal fade video-modal" center>*/}
                {/*                    <iframe src="https://www.youtube.com/embed/FRIDLxM8Roc"*/}
                {/*                            allowFullScreen></iframe>*/}
                {/*                </Modal>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</section>*/}
                {/*/!*Video Section End*!/*/}

                {/*Product slider*/}
                {/*<TopCollection type={'beauty'} />*/}
                {/*Product slider End*/}

                {/*service layout*/}
                <div className="container">
                    <section className="service border-section small-section ">
                        <div className="row">
                            <div className="col-md-4 service-block">
                                <div className="media">
                                    <div dangerouslySetInnerHTML={{ __html: svgFreeShipping }} />
                                    <div className="media-body">
                                        <h4>free shipping</h4>
                                        <p>free shipping world wide</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 service-block">
                                <div className="media">
                                    <div dangerouslySetInnerHTML={{ __html: svgservice }} />
                                    <div className="media-body">
                                        <h4>24 X 7 service</h4>
                                        <p>online service for new customer</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 service-block">
                                <div className="media">
                                    <div dangerouslySetInnerHTML={{ __html: svgoffer }} />
                                    <div className="media-body">
                                        <h4>festival offer</h4>
                                        <p>new online special festival offer</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>


                {/*Two Banner*/}
                <section className="pb-0 ratio2_1">
                    <div className="container">
                        <div className="row partition2">
                            <div className="col-md-6">
                                <a href="#">
                                    <div className="collection-banner p-right text-center">
                                        <div className="img-part">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/sub-banner1.jpg`}
                                                 className="img-fluid blur-up lazyload bg-img" alt="" />
                                        </div>
                                        <div className="contain-banner">
                                            <div>
                                                <h4>save 30%</h4>
                                                <h2>men</h2>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-6">
                                <a href="#">
                                    <div className="collection-banner p-right text-center">
                                        <div className="img-part">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/sub-banner2.jpg`}
                                                 className="img-fluid blur-up lazyload bg-img" alt="" />
                                        </div>
                                        <div className="contain-banner">
                                            <div>
                                                <h4>save 60%</h4>
                                                <h2>women</h2>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Two Banner End*/}

                {/*Three Banner*/}
                <section className="banner-goggles ratio2_1">
                    <div className="container">
                        <div className="row partition3">
                            <div className="col-md-4">
                                <a href="#">
                                    <div className="collection-banner p-right text-right">
                                        <div className="img-part">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/electronics/5.jpg`}
                                                 className="img-fluid blur-up lazyload bg-img" alt="" />
                                        </div>
                                        <div className="contain-banner banner-3">
                                            <div>
                                                <h4>10% off</h4>
                                                <h2>speaker</h2>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4">
                                <a href="#">
                                    <div className="collection-banner p-right text-right">
                                        <div className="img-part">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/electronics/6.jpg`}
                                                 className="img-fluid blur-up lazyload bg-img" alt="" />
                                        </div>
                                        <div className="contain-banner banner-3">
                                            <div>
                                                <h4>10% off</h4>
                                                <h2>earplug</h2>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-md-4">
                                <a href="#">
                                    <div className="collection-banner p-right text-right">
                                        <div className="img-part">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/electronics/7.jpg`}
                                                 className="img-fluid blur-up lazyload bg-img" alt="" />
                                        </div>
                                        <div className="contain-banner banner-3">
                                            <div>
                                                <h4>50% off</h4>
                                                <h2>best deal</h2>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Three Banner End*/}

                {/*Four Banner*/}
                <section className=" ratio2_1">
                    <div className="container">
                        <div className="row partition4">
                            <div className="col-lg-3 col-md-6">
                                <a href="#">
                                    <div className="collection-banner p-left">
                                        <div className="img-part">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/banner.jpg`}
                                                 className="img-fluid blur-up lazyload bg-img" />
                                        </div>
                                        <div className="contain-banner banner-4">
                                            <div>
                                                <h4>save 30%</h4>
                                                <h2>men</h2>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#">
                                    <div className="collection-banner p-left">
                                        <div className="img-part">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/banner1.jpg`}
                                                 className="img-fluid blur-up lazyload bg-img" />
                                        </div>
                                        <div className="contain-banner banner-4">
                                            <div>
                                                <h4>save 60%</h4>
                                                <h2>women</h2>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#">
                                    <div className="collection-banner p-left">
                                        <div className="img-part">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/banner.jpg`}
                                                 className="img-fluid blur-up lazyload bg-img" />
                                        </div>
                                        <div className="contain-banner banner-4">
                                            <div>
                                                <h4>save 60%</h4>
                                                <h2>women</h2>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <a href="#">
                                    <div className="collection-banner p-left">
                                        <div className="img-part">
                                            <img src={`${process.env.PUBLIC_URL}/assets/images/banner1.jpg`}
                                                 className="img-fluid blur-up lazyload bg-img" />
                                        </div>
                                        <div className="contain-banner banner-4">
                                            <div>
                                                <h4>save 60%</h4>
                                                <h2>women</h2>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </section>
                {/*Four Banner End*/}



                <div className="container">
                    <section className="section-b-space">
                        <Slider className="slide-1 home-slider">
                            <div>
                                <div className="home home9 p-center text-center bg-size blur-up lazyloaded">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col">
                                                <div className="slider-contain">
                                                    <div>
                                                        {/*<h4>welcome to fashion</h4>*/}
                                                        <h1>fall collection</h1>
                                                        <a href="#" className="btn btn-solid">shop now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div className="home home10 p-center text-center bg-size blur-up lazyloaded">
                                    <div className="container">
                                        <div className="row">
                                            <div className="col">
                                                <div className="slider-contain">
                                                    <div>
                                                        {/*<h4>welcome to fashion</h4>*/}
                                                        <h1>spring collection</h1>
                                                        <a href="#" className="btn btn-solid">shop now</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </section>
                </div>


                {/*Parallax banner*/}
                {/*<section className="p-0">*/}
                {/*    <div className="full-banner parallax-banner2 parallax text-center p-left">*/}
                {/*        <div className="container">*/}
                {/*            <div className="row">*/}
                {/*                <div className="col">*/}
                {/*                    <div className="banner-contain">*/}
                {/*                        <h2>2018</h2>*/}
                {/*                        <h3>fashion trends</h3>*/}
                {/*                        <h4>special offer</h4>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</section>*/}
                {/*Parallax banner End*/}




                {/*Product Slider*/}
                <div style={{paddingBottom: '70px'}}>
                    <MultiSlider type={'kids'} />
                </div>



                {/*Product Slider End*/}

                {/*Blog Section*/}
                {/*<div className="container">*/}
                {/*    <div className="row">*/}
                {/*        <div className="col">*/}
                {/*            <div className="title1">*/}
                {/*                <h4>Recent Story</h4>*/}
                {/*                <h2 className="title-inner1">from the blog</h2>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                {/*<section className="blog p-t-0 ratio3_2">*/}
                {/*    <div className="container">*/}
                {/*        <div className="row">*/}
                {/*            <div className="col-md-12">*/}
                {/*                <BlogSection />*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</section>*/}
                {/*Blog Section end*/}


                {/*About Section*/}
                {/*<section className="beauty-about">*/}
                {/*    <div className="container">*/}
                {/*        <div className="row">*/}
                {/*            <div className="col-xl-5 col-lg-6 col-md-12 offset-xl-1 text-center">*/}
                {/*                <img src={`${process.env.PUBLIC_URL}/assets/images/beauty/about-us.jpg`} alt="" className="img-fluid blur-up lazyload" />*/}
                {/*            </div>*/}
                {/*            <div className="col-xl-5 col-lg-6 col-md-12">*/}
                {/*                <div className="about-section">*/}
                {/*                    <div>*/}
                {/*                        <h2>about us</h2>*/}
                {/*                        <div className="about-text">*/}
                {/*                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem*/}
                {/*                                accusantium doloremque laudantium, totam rem aperiam.sit voluptatem*/}
                {/*                                accusantium doloremque laudantium,totam rem aperiam.</p>*/}
                {/*                        </div>*/}
                {/*                        <div className="service small-section pb-0">*/}
                {/*                            <div className="row">*/}
                {/*                                <div className="col-sm-4 service-block1">*/}
                {/*                                    <div dangerouslySetInnerHTML={{ __html: svgFreeShipping }} />*/}
                {/*                                    <h5>free shipping</h5>*/}
                {/*                                </div>*/}
                {/*                                <div className="col-sm-4 service-block1">*/}
                {/*                                    <div dangerouslySetInnerHTML={{ __html: svgservice }} />*/}
                {/*                                    <h5>24 X 7 service</h5>*/}
                {/*                                </div>*/}
                {/*                                <div className="col-sm-4 service-block1">*/}
                {/*                                    <div dangerouslySetInnerHTML={{ __html: svgoffer }} />*/}
                {/*                                    <h5>festival offer</h5>*/}
                {/*                                </div>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</section>*/}
                {/*About Section End*/}







                {/*Instagram Section*/}
                {/*<div className="section-b-space">*/}
                {/*    <Instagram type="watch" />*/}
                {/*</div>*/}
                {/*Instagram Section End*/}

                {/*<FooterOne logoName={'layout3/logo.png'}/>*/}

                {/*<ThemeSettings />*/}
            </div>
        )
    };



export default Beauty;