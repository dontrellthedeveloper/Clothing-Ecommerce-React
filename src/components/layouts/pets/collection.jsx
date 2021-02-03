import React from 'react';
import Slider from 'react-slick';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux'

import { getTrendingCollection} from '../../../services'
import {Product4} from '../../../services/script'
import {addToCart, addToWishlist, addToCompare} from "../../../actions";
import ProductItem from './product-item';

// class Collection extends Component {
const Collection = ({items, symbol, addToCart, addToWishlist, addToCompare, title, subtitle, products, handleRemove}) => {


        // const {items, symbol, addToCart, addToWishlist, addToCompare, title, subtitle} = this.props;
        return (
            <div>
                {/*Paragraph*/}
                <section className="section-b-space j-box pets-box ratio_square" style={{paddingTop: "20px"}}>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                {/*<div className="title1 title5">*/}
                                {/*    {subtitle?<h4>{subtitle}</h4>:''}*/}
                                {/*    <h2 className="title-inner1">{title}</h2>*/}
                                {/*    <hr role="tournament6" />*/}
                                {/*</div>*/}
                                {/*<Slider {...Product4} className="product-4 product-m no-arrow">*/}
                                <div className="product-4 product-m no-arrow">
                                    {/*{ items.map((product, index ) =>*/}
                                    { products.map((product) =>
                                            <ProductItem
                                                // key={index}
                                                key={product._id}
                                                product={product}
                                                handleRemove={handleRemove}
                                                // symbol={symbol}
                                                //          onAddToCompareClicked={() => addToCompare(product)}
                                                //          onAddToWishlistClicked={() => addToWishlist(product)}
                                                //          onAddToCartClicked={() => addToCart(product, 1)}
                                            />
                                        )
                                    }
                                </div>
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
// });
//
// export default connect(mapStateToProps, {addToCart, addToWishlist, addToCompare}) (Collection);

export default Collection;