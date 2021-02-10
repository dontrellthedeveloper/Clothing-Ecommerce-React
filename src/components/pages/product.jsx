import React, {useEffect, useState} from 'react';
import {Helmet} from 'react-helmet'
import Slider from 'react-slick';
import '../common/index.scss';
import {connect} from "react-redux";

// import custom Components
import Service from "../products/common/service";
import BrandBlock from "../products/common/brand-block";
import NewProduct from "../common/new-product";
import Breadcrumb from "../common/breadcrumb";
import DetailsWithPrice2 from "../products/common/product/details-price-2";
import DetailsTopTabs from "../products/common/details-top-tabs";
import { addToCart, addToCartUnsafe, addToWishlist } from '../../actions'
import ImageZoom from '../products/common/product/image-zoom'
import SmallImages from '../products/common/product/small-image'

import {getProduct} from "../../functions/product";
import defaultImage from "../../images/default-product-image.png";

const SingleProduct = ({match, symbol, item, addToCart, addToCartUnsafe, addToWishlist}) => {
    const [open, isOpen] = useState(false);
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    let [slider1, setSlider1] = useState({});
    let [slider2, setSlider2] = useState({});

    const [product, setProduct] = useState({});

    const {slug} = match.params;

    useEffect(() => {
        loadSingleProduct();
    }, [slug]);


    useEffect(() => {
        setNav1(slider1);

    }, []);

    const loadSingleProduct = () => getProduct(slug).then(res => setProduct(res.data));


    // constructor() {
    //     super();
    //     this.state = {
    //         open:false,
    //         nav1: null,
    //         nav2: null
    //     };
    // }

    // document.getElementById('idOfElement').classList.add('newClassName');


    // componentDidMount() {
    //     this.setState({
    //         nav1: this.slider1,
    //         nav2: this.slider2
    //     });
    // }
    //
    const filterClick = () => {
        document.getElementById("filter").style.left = "-15px";
    };
    const backClick = () => {
        document.getElementById("filter").style.left = "-365px";
    };

    //
    //
    //     const {symbol, item, addToCart, addToCartUnsafe, addToWishlist} = this.props

        let products = {
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false,
            arrows: true,
            fade: true
        };
        let productsnav = {
            slidesToShow: 3,
            swipeToSlide:true,
            arrows: false,
            dots: false,
            focusOnSelect: true
        };

        return (
            <div>
                {/*SEO Support*/}
                <Helmet>
                    {/*<title>MultiKart | {item.category} | {item.name}</title>*/}
                    <meta name="description" content="Multikart – Multipurpose eCommerce React Template is a multi-use React template. It is designed to go well with multi-purpose websites. Multikart Bootstrap 4 Template will help you run multiple businesses." />
                </Helmet>
                {/*SEO Support End */}

                <Breadcrumb
                    // parent={product.category}
                    title={product.title} />

                {/*{JSON.stringify(product)}*/}
                {/*Section Start*/}
                    <section className="section-b-space">
                        <div className="collection-wrapper">
                            <div className="container">
                                <div className="row">

                                    <div className="col-sm-3 collection-filter" id="filter">
                                        <div  className="collection-mobile-back pl-5">
                                        <span
                                            // onClick={this.backClick}
                                            className="filter-back">
                                            <i className="fa fa-angle-left" aria-hidden="true"></i> back
                                        </span>
                                        </div>

                                         <BrandBlock/>
                                        <Service/>
                                        {/*side-bar single product slider start*/}
                                        <NewProduct/>
                                        {/*side-bar single product slider end*/}
                                    </div>
                                    <div className="col-lg-9 col-sm-12 col-xs-12">
                                        <div className="">
                                            <div className="row">
                                                <div className="col-xl-12">
                                                    <div className="filter-main-btn mb-2">
                                                    <span
                                                        onClick={filterClick}
                                                        className="filter-btn" >
                                                        <i className="fa fa-filter" aria-hidden="true"></i> filter</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col-lg-6 product-thumbnail">
                                                    <img src={product.images && product.images.length ? product.images[0].url : defaultImage} alt={product.title}
                                                         style={{
                                                             width: "100%",
                                                             // padding: "20px",
                                                             // height: "40vw",
                                                             height: "100%",
                                                             // border: '1px solid #e0e0e0',
                                                             objectFit: 'cover'}}
                                                         className="img-fluid"
                                                    />


                                                    {/*<Slider*/}
                                                    {/*    {...products}*/}
                                                    {/*    asNavFor={nav2}*/}
                                                    {/*    // asNavFor={this.state.nav2}*/}
                                                    {/*    // ref={slider1}*/}
                                                    {/*    ref={slider => (slider1 = slider)}*/}
                                                    {/*    className="product-slick"*/}
                                                    {/*>*/}
                                                    {/*    /!*{item.variants?*!/*/}
                                                    {/*    /!*    item.variants.map((vari, index) =>*!/*/}
                                                    {/*    /!*        <div key={index}>*!/*/}
                                                    {/*    /!*            <ImageZoom image={vari.images} />*!/*/}
                                                    {/*    /!*        </div>*!/*/}
                                                    {/*    /!*    ):*!/*/}
                                                    {/*    /!*    item.pictures.map((vari, index) =>*!/*/}
                                                    {/*    /!*        <div key={index}>*!/*/}
                                                    {/*    /!*            <ImageZoom image={vari} />*!/*/}
                                                    {/*    /!*        </div>*!/*/}
                                                    {/*    /!*    )}*!/*/}
                                                    {/*</Slider>*/}
                                                    {/*<SmallImages*/}
                                                    {/*    item={item}*/}
                                                    {/*    settings={productsnav}*/}
                                                    {/*    navOne={nav1}*/}
                                                    {/*    slider2={slider2}*/}
                                                    {/*    setNav2={setNav2}*/}
                                                    {/*    product={product}*/}
                                                    {/*/>*/}
                                                </div>
                                                <DetailsWithPrice2
                                                    symbol={symbol}
                                                    item={item}
                                                    navOne={nav1}
                                                    addToCartClicked={addToCart}
                                                    BuynowClicked={addToCartUnsafe}
                                                    addToWishlistClicked={addToWishlist}
                                                    product={product}
                                                />
                                            </div>
                                        </div>
                                        <DetailsTopTabs
                                            item={item}
                                            product={product}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                {/*Section End*/}
            </div>
        )

};

// const mapStateToProps = (state, ownProps) => {
//     let productId = ownProps.match.params.id;
//     return {
//         item: state.data.products.find(el => el.id == productId),
//         symbol: state.data.symbol
//     }
// }
//
// export default connect(mapStateToProps, {addToCart, addToCartUnsafe, addToWishlist}) (LeftSideBar);

export default SingleProduct;








