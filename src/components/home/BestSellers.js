import React, {useState, useEffect} from 'react';
import Slider from 'react-slick';
import {connect} from 'react-redux'

import {getTrendingCollection} from '../../services/index'

import {addToCart, addToWishlist, addToCompare} from "../../actions/index";
import ProductItem from '../features/product/common/product-style-five';
import {getProducts} from "../../functions/product";

// class TopCollection extends Component {
// const NewArrivals = () => {
//
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(false);
//
//
//     // componentDidMount()
//     useEffect(() => {
//         loadAllProducts();
//     }, []);
//
//     const  loadAllProducts = () => {
//         // sort, order, limit
//         getProducts('createdAt', 'desc',20)
//             .then(res => {
//                 setProducts(res.data);
//                 setLoading(false);
//             })
//     };
//
//     const settings = {
//         slidesToShow: 4,
//         dots: true
//     };
//
//     return (
//         <div>
//             {/*Paragraph*/}
//             <div className="title1  section-t-space">
//                 <h4>shop</h4>
//                 <h2 className="title-inner1">new arrivals</h2>
//             </div>
//             {/*Paragraph End*/}
//             <section className="section-b-space p-t-0">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col">
//                             <Slider {...settings} className="product-4 product-m no-arrow" style={{textAlign: 'center'}}>
//                                 { products.map((product) =>
//
//                                     <ProductItem product={product}
//                                                  key={product._id}
//                                         // symbol={symbol}
//                                         // onAddToCompareClicked={() => addToCompare(product)}
//                                         // onAddToWishlistClicked={() => addToWishlist(product)}
//                                         // onAddToCartClicked={() => addToCart(product, 1)}
//
//                                     />
//
//                                 )
//                                 }
//                             </Slider>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//         </div>
//     )
// };
//
//
// // const mapStateToProps = (state, ownProps) => ({
// //     items: getTrendingCollection(state.data.products, ownProps.type),
// //     symbol: state.data.symbol
// // })
//
// // export default connect(mapStateToProps, {addToCart, addToWishlist, addToCompare}) (TopCollection);
// export default NewArrivals;























// import React, { Component } from 'react';
// import Slider from 'react-slick';

import {Product4, Product5} from '../../services/script'
// import {addToCart, addToWishlist, addToCompare} from "../../actions/index";
// import ProductItem from '../features/product/common/product-style-five';

const BestSellers = () => {



    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);


    // componentDidMount()
    useEffect(() => {
        loadAllProducts();
    }, []);

    const  loadAllProducts = () => {
        // sort, order, limit
        getProducts('sold', 'desc',20)
            .then(res => {
                setProducts(res.data);
                setLoading(false);
            })
    };

    const settings = {
        slidesToShow: 4,
        dots: true
    };


    // const {items, symbol, addToCart, addToWishlist, addToCompare, type} = this.props;
    //
    // var properties;
    // if(type === 'kids'){
    //     properties = Product5
    // }else{
    //     properties = Product4
    // }

    return (
        <div>
            {/*Paragraph*/}
            <div className="title1  section-t-space">
                <h4>shop</h4>
                <h2 className="title-inner1">best sellers</h2>
            </div>
            {/*Paragraph End*/}
            <section className="section-b-space p-t-0">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Slider {...Product5} className="product-4 product-m">
                                { products.map((product ) =>
                                    <div key={product._id}>
                                        <ProductItem product={product}
                                                     key={product._id}
                                            // symbol={symbol}
                                            // onAddToCompareClicked={() => addToCompare(product)}
                                            // onAddToWishlistClicked={() => addToWishlist(product)}
                                            // onAddToCartClicked={() => addToCart(product, 1)}
                                            // key={index}
                                        />
                                    </div>
                                )
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

export default BestSellers;