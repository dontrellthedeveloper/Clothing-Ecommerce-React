import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux'
import {Link} from 'react-router-dom';
import InfiniteScroll from 'react-infinite-scroll-component';


import { getTotal, getCartProducts } from '../../../reducers'
import { addToCart, addToWishlist, addToCompare } from '../../../actions'
import {getVisibleproducts} from '../../../services';
import ProductListItem from "./product-list-item";
import {getCategory} from "../../../functions/category";
import {getProducts} from "../../../functions/product";


const ProductListing = ({match, products,slug,setLoading,loading,category,setProducts}) => {

    const [limit, setLimit] = useState(5);
    const [hasMoreItems, setHasMoreItems] = useState(true);
    const [colSize, setColSize] = useState('');
    // const [products, setProducts] = useState([]);
    // const [category, setCategory] = useState([]);
    // const [loading, setLoading] = useState(false);

    // const {slug} = match.params;

    // useEffect(() => {
    //     // fetchMoreItems()
    //     setLoading(true);
    //     getCategory(slug)
    //         .then((res) => {
    //             console.log(JSON.stringify(res.data, null, 4));
    //             setCategory(res.data.category);
    //             setProducts(res.data.products);
    //             setLoading(false);
    //         })
    // },[]);


    // useEffect(() => {
    //     loadAllProducts();
    // }, []);
    //
    // const  loadAllProducts = () => {
    //     // sort, order, limit
    //     getProducts('sold', 'desc',20)
    //         .then(res => {
    //             setProducts(res.data);
    //             setLoading(false);
    //         })
    // };

    // componentWillMount(){
    //     this.fetchMoreItems();
    // }

    // const fetchMoreItems = () => {
    //     if (limit >= products.length) {
    //         setHasMoreItems(false );
    //         return;
    //     }
    //     // a fake async api call
    //     setTimeout(() => {
    //         setLimit({
    //             limit: limit + 5
    //         });
    //     }, 3000);
    //
    //
    // };



        console.log(colSize);
        return (
            <div>
                <div className="product-wrapper-grid">
                    <div className="container-fluid">
                        {/*{products.length > 0 ?*/}
                        {/*    <InfiniteScroll*/}
                        {/*        dataLength={limit} //This is important field to render the next data*/}
                        {/*        next={fetchMoreItems}*/}
                        {/*        hasMore={hasMoreItems}*/}
                        {/*        loader={<div className="loading-cls"></div>}*/}
                        {/*        endMessage={*/}
                        {/*            <p className="seen-cls seen-it-cls">*/}
                        {/*                <b>Yay! You have seen it all</b>*/}
                        {/*            </p>*/}
                        {/*        }*/}
                        {/*    >*/}
                                <div className="row">
                                    { products.map((product) =>
                                        <div
                                            // className={`'col-xl-3 col-md-6 col-grid-box':'col-lg-'+colSize}`}
                                            className="col-md-4"
                                            key={product._id}>
                                        <ProductListItem product={product}
                                                         category={category}
                                                         // symbol={symbol}
                                                         onAddToCompareClicked={() => addToCompare(product)}
                                                         onAddToWishlistClicked={() => addToWishlist(product)}
                                                         onAddToCartClicked={addToCart}
                                                         slug={slug}
                                                         // key={index}
                                        />
                                        </div>
                                    )}
                                </div>
                            {/*</InfiniteScroll>*/}

                            {/*<div className="row">*/}
                            {/*    <div className="col-sm-12 text-center section-b-space mt-5 no-found" >*/}
                            {/*        <img src={`${process.env.PUBLIC_URL}/assets/images/empty-search.jpg`} className="img-fluid mb-4" />*/}
                            {/*        <h3>Sorry! Couldn't find the product you were looking For!!!    </h3>*/}
                            {/*        <p>Please check if you have misspelt something or try searching with other words.</p>*/}
                            {/*        <Link to={`${process.env.PUBLIC_URL}/`} className="btn btn-solid">continue shopping</Link>*/}
                            {/*    </div>*/}
                            {/*</div>*/}

                    </div>
                </div>
            </div>
        )
    };


// const mapStateToProps = (state) => ({
//     products: getVisibleproducts(state.data, state.filters),
//     symbol: state.data.symbol,
// });

// export default connect(
//     mapStateToProps, {addToCart, addToWishlist, addToCompare}
// )(ProductListing)

export default ProductListing;