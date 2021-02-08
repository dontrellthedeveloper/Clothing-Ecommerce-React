import React, { Component } from 'react';
import Slider from 'react-slick';
import {connect} from 'react-redux'

import {getTrendingCollection} from '../../../services/index'
import {Product4, Product5} from '../../../services/script'
import {addToCart, addToWishlist, addToCompare} from "../../../actions/index";
import ProductItem from '../../features/product/common/product-style-five';

// class TopCollection extends Component {
const TopCollection = ({items, symbol, addToCart, addToWishlist, addToCompare, type, products}) => {

    // render (){
    //
    //     const {items, symbol, addToCart, addToWishlist, addToCompare, type, products} = this.props;
    //
    //     var properties;
    //     if(type === 'kids'){
    //         properties = Product5
    //     }else{
    //         properties = Product4
    //     }

    const settings = {
        slidesToShow: 4,
        dots: true
    };


        return (
            <div>
                {/*Paragraph*/}
                <div className="title1  section-t-space">
                    <h4>shop</h4>
                    <h2 className="title-inner1">new arrivals</h2>
                </div>
                {/*Paragraph End*/}
                <section className="section-b-space p-t-0">
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <Slider {...settings} className="product-4 product-m " style={{textAlign: 'center'}}>
                                    { products.map((product) =>
                                        <div key={product._id}>
                                        <ProductItem product={product}
                                                     key={product._id}
                                        />

                                        </div>)
                                    }
                                </Slider>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    };


// const mapStateToProps = (state, ownProps) => ({
//     items: getTrendingCollection(state.data.products, ownProps.type),
//     symbol: state.data.symbol
// })

// export default connect(mapStateToProps, {addToCart, addToWishlist, addToCompare}) (TopCollection);
export default TopCollection;