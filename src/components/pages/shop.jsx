// import React, { useState, useEffect } from "react";
// import { getCategory } from "../../functions/category";
// import { Link } from "react-router-dom";
// import ProductCard from "../../components/cards/ProductCard";
// import CategoryList from "../../components/category/CategoryList";
//
// const CategoryHome = ({ match }) => {
//     const [category, setCategory] = useState({});
//     const [products, setProducts] = useState([]);
//     const [loading, setLoading] = useState(false);
//
//     const { slug } = match.params;
//
//     useEffect(() => {
//         setLoading(true);
//         getCategory(slug).then((res) => {
//             console.log(JSON.stringify(res.data, null, 4));
//             setCategory(res.data.category);
//             setProducts(res.data.products);
//             setLoading(false);
//         });
//     }, []);
//
//     return (
//         <div className="container-fluid">
//             <div className="row">
//                 <div className="col">
//                     {loading ? (
//                         <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
//                             Loading...
//                         </h4>
//                     ) : (
//                         <h4 className="text-center p-3 mt-5 mb-5 display-4 jumbotron">
//                             {products.length} Products in "{category.name}" category
//                         </h4>
//                     )}
//                 </div>
//             </div>
//
//             <div className="row">
//                 {products.map((p) => (
//                     <div className="col" key={p._id}>
//                         <ProductCard product={p} />
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// };
//
// export default CategoryHome;




























import React, {useState, useEffect} from 'react';
import {Helmet} from 'react-helmet'
import Breadcrumb from "../common/breadcrumb";
import NewProduct from "../common/new-product";
import Filter from "../collection/common/filter";
import FilterBar3 from "../collection/common/filter-bar3";
import ProductListing from "../collection/common/product-listing";
import StickyBox from "react-sticky-box";
import {Link} from "react-router-dom";
import {getCategory, getCategories} from "../../functions/category";
import ProductListItem2 from "../collection/common/product-list-item2";
// import {addToCart, addToCompare, addToWishlist} from "../../actions";
import {getProducts, getProductsCount, fetchProductsByFilter, getProductsByCount} from "../../functions/product";
import {useSelector, useDispatch} from "react-redux";
import {SlideToggle} from "react-slide-toggle";
import InputRange from "react-input-range";
import {Slider} from 'antd';
import ProductItem from "../features/product/common/product-style-five";

const Shop = () => {
    const [layoutColumns, setLayoutColumns] = useState(3);
    //
    const [product, setProduct] = useState([]);
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [categoryIds, setCategoryIds] = useState([]);
    const [price, setPrice] = useState({min: 0, max: 400});
    const [ok, setOk] = useState(false);

    // const [category, setCategory] = useState([]);
    const [loading, setLoading] = useState(false);


    let dispatch = useDispatch();
    let {search} = useSelector((state) => ({...state}));
    const {text} = search;


    useEffect(() => {
        loadAllProducts();
        // fetch categories
        getCategories().then((res) => setCategories(res.data));

    }, []);


    const fetchProducts = (arg) => {
        fetchProductsByFilter(arg).then((res) => {
            console.log(arg);
            setProducts(res.data);
        });
    };


    // 1. load products by default on page load
    const  loadAllProducts = () => {
        // sort, order, limit
        // getProducts('sold', 'desc',100)
        //     .then(res => {
        //         setProducts(res.data);
        //         setLoading(false);
        //     })

        getProductsByCount(12).then((p) => {
            setProducts(p.data);
            setLoading(false);
        });
    };

    // 2. load products on user search input
    useEffect(() => {
        const delayed = setTimeout(() => {
            fetchProducts({ query: text });
            if (!text) {
                loadAllProducts();
            }
        }, 300);
        return () => clearTimeout(delayed);
    }, [text]);




    // 3. load products based on price range
    useEffect(() => {
        console.log("ok to request");
        fetchProducts({ price });
    }, [ok]);



    // 4. load products based on category
    // show categories in a list of checkbox
    const showCategories = () =>
        categories.map((c) => (
            <div className="custom-control custom-checkbox collection-filter-checkbox"
                     key={c._id}
                >
                {/*<Checkbox*/}
                {/*    // onChange={handleCheck}*/}
                {/*    className="pb-2 pl-4 pr-4"*/}
                {/*    value={c._id}*/}
                {/*    name="category"*/}
                {/*    // checked={categoryIds.includes(c._id)}*/}
                {/*>*/}
                <input
                    type="checkbox"
                    // onClick={(e) => clickBrandHendle(e,filteredBrands)}
                    value={c._id}
                    name='category'
                    onChange={handleCheck}
                    checked={categoryIds.includes(c._id)}
                    // defaultChecked={filteredBrands.includes(brand)? true : false}
                    // className="custom-control-input" id={brand}
                    style={{marginRight: '5px'}}
                />
                    {c.name}
                {/*</Checkbox>*/}
                <br />
            </div>
        ));


    // handle check for categories
    const handleCheck = (e) => {
        // console.log(e.target.value);
        // reset
        dispatch({
            type: "SEARCH_QUERY",
            payload: { text: "" },
        });
        let inTheState = [...categoryIds];
        let justChecked = e.target.value;
        let foundInTheState = inTheState.indexOf(justChecked); // index or -1

        // indexOf method ?? if not found returns -1 else return index [1,2,3,4,5]
        if (foundInTheState === -1) {
            inTheState.push(justChecked);
        } else {
            // if found pull out one item from index
            inTheState.splice(foundInTheState, 1);
        }

        setCategoryIds(inTheState);
        // console.log(inTheState);
        fetchProducts({ category: inTheState });
    };


    const handleSlider = (value) => {
        dispatch({
            type: "SEARCH_QUERY",
            payload: { text: "" },
        });
        // reset
        setPrice(value);
        setTimeout(() => {
            setOk(!ok);
        }, 300);
    };


    const closeFilter = () => {
        document.querySelector(".collection-filter").style = "left: -365px";
    }


    const LayoutViewClicked = (colums) => {
        setLayoutColumns({
            layoutColumns:colums
        })
    };

    const openFilter = () => {
        document.querySelector(".collection-filter").style = "left: -15px";
    }

    return (
        <div>
            {/*SEO Support*/}
            <Helmet>
                <title>Urban Sky</title>
                <meta name="description" content="Multikart – Multipurpose eCommerce React Template is a multi-use React template. It is designed to go well with multi-purpose websites. Multikart Bootstrap 4 Template will help you run multiple businesses." />
            </Helmet>
            {/*SEO Support End */}

            <Breadcrumb title={'shop'}/>

            <section className="section-b-space">
                <div className="collection-wrapper">
                    <div className="container">
                        <div className="row">



                            <div className="col-sm-3 collection-filter">

                                <StickyBox offsetTop={20} offsetBottom={20}>
                                    <div>
                                        {/*<Filter*/}
                                        {/*    handleSlider={handleSlider}*/}
                                        {/*    price={price}*/}
                                        {/*    setPrice={setPrice}*/}
                                        {/*/>*/}


                                        <div className="collection-filter-block">
                                            {/*brand filter start*/}
                                            <div className="collection-mobile-back">
                                            <span className="filter-back" onClick={(e) => closeFilter(e)} >
                                                <i className="fa fa-angle-left" aria-hidden="true"></i> back
                                            </span>
                                            </div>
                                            {/*price filter start here */}
                                            <SlideToggle>
                                                {({onToggle, setCollapsibleElement}) => (
                                                    <div className="collection-collapse-block open">
                                                        <h3 className="collapse-block-title" onClick={onToggle}>price</h3>
                                                        <div className="collection-collapse-block-content block-price-content" ref={setCollapsibleElement}>
                                                            <div className="collection-brand-filter">
                                                                <div className="custom-control custom-checkbox collection-filter-checkbox">
                                                                    <InputRange
                                                                        maxValue={400}
                                                                        minValue={0}
                                                                        value={price}
                                                                        onChange={handleSlider}
                                                                        formatLabel={value => `$${value}`}
                                                                    />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </SlideToggle>
                                            <SlideToggle>
                                                {({onToggle, setCollapsibleElement}) => (
                                                    <div className="collection-collapse-block">
                                                        <h3 className="collapse-block-title" onClick={onToggle}>categories</h3>
                                                        <div className="collection-collapse-block-content"  ref={setCollapsibleElement}>
                                                            <div className="collection-brand-filter">
                                                                {/*{brands.map((brand, index) => {*/}
                                                                {/*    return (*/}

                                                                            {/*{JSON.stringify((categories))}*/}

                                                                {showCategories()}

                                                                            {/*<label className="custom-control-label"*/}
                                                                            {/*       // htmlFor={brand}*/}
                                                                            {/*>*/}
                                                                            {/*    /!*{brand}*!/*/}
                                                                            {/*    test*/}
                                                                            {/*</label>*/}

                                                                {/*)*/}
                                                                {/*})}*/}
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </SlideToggle>

                                            {/*color filter start here*/}
                                            <SlideToggle>
                                                {({onToggle, setCollapsibleElement}) => (
                                                    <div className="collection-collapse-block">
                                                        <h3 className="collapse-block-title" onClick={onToggle}>colors</h3>
                                                        <div className="collection-collapse-block-content" ref={setCollapsibleElement}>
                                                            <div className="color-selector">
                                                                <ul>
                                                                    {/*{colors.map((color, index) => {*/}
                                                                    {/*    return (*/}
                                                                    {/*        <li className={color} title={color} onClick={(e) => colorHandle(e, color)} key={index}></li> )*/}
                                                                    {/*})}*/}
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </SlideToggle>

                                        </div>

                                        {/*<NewProduct/>*/}
                                        {/*<div className="collection-sidebar-banner">*/}
                                        {/*    <a href="#">*/}
                                        {/*        <img src={`${process.env.PUBLIC_URL}/assets/images/side-banner.png`} className="img-fluid" alt="" />*/}
                                        {/*    </a>*/}
                                        {/*</div>*/}

                                    </div>
                                </StickyBox>
                                {/*side-bar banner end here*/}
                            </div>


                            <div className="collection-content col">
                                <div className="page-main-content ">
                                    <div className="">
                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="top-banner-wrapper">




                                                    <div className="collection-banner text-center">
                                                        <div className="img-part">
                                                            <img src={`${process.env.PUBLIC_URL}/assets/images/sub-banner-category-shop.jpg`}
                                                                 style={{height: '15vh'}}
                                                                 className="img-fluid blur-up lazyload bg-img" alt="" />
                                                        </div>
                                                        <div className="contain-banner">
                                                            <div style={{margin: '0 auto'}}>
                                                                {/*<h4>10% off</h4>*/}
                                                                <h2 style={{fontSize: '40px', color: '#fff'}}>shop all</h2>
                                                            </div>
                                                        </div>
                                                    </div>





                                                    {/*<a href="#"><img src={`${process.env.PUBLIC_URL}/assets/images/mega-menu/2.jpg`} className="img-fluid" alt=""/></a>*/}
                                                    {/*<div className="top-banner-content small-section">*/}
                                                    {/*    <h4>fashion</h4>*/}
                                                    {/*<h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</h5>*/}
                                                    {/*<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. </p>*/}
                                                    {/*</div>*/}
                                                </div>

                                                <div className="collection-product-wrapper">
                                                    <div className="product-top-filter">
                                                        <div className="container-fluid p-0">
                                                            <div className="row">
                                                                <div className="col-xl-12">
                                                                    <div className="filter-main-btn">
                                                                            <span onClick={openFilter}
                                                                                  className="filter-btn btn btn-theme"><i
                                                                                className="fa fa-filter"
                                                                                aria-hidden="true"></i> Filter</span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-12">
                                                                    <FilterBar3
                                                                        products={products}
                                                                        // category={category}
                                                                        onLayoutViewClicked={(colmuns) => LayoutViewClicked(colmuns)}/>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div>
                                                        <div className="product-wrapper-grid">
                                                            <div className="container-fluid">
                                                                <div className="row">
                                                                    { products.map((product) =>
                                                                        <div
                                                                            className="col-md-4"
                                                                            key={product._id}
                                                                        >
                                                                            {/*<ProductListItem2*/}
                                                                            {/*    product={product}*/}
                                                                            {/*    key={product._id}*/}
                                                                            {/*                 // category={category}*/}
                                                                            {/*                 // onAddToCompareClicked={() => addToCompare(product)}*/}
                                                                            {/*                 // onAddToWishlistClicked={() => addToWishlist(product)}*/}
                                                                            {/*                 // onAddToCartClicked={addToCart}*/}
                                                                            {/*                 // slug={slug}*/}
                                                                            {/*/>*/}
                                                                            <ProductItem product={product}
                                                                                         key={product._id}
                                                                                // symbol={symbol}
                                                                                // onAddToCompareClicked={() => addToCompare(product)}
                                                                                // onAddToWishlistClicked={() => addToWishlist(product)}
                                                                                // onAddToCartClicked={() => addToCart(product, 1)}
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

                                                    {/*Products Listing Component*/}
                                                    {/*<ProductListing*/}
                                                    {/*    products={products}*/}
                                                    {/*    category={category}*/}
                                                    {/*    loading={loading}*/}
                                                    {/*    match={match}*/}
                                                    {/*    slug={slug}*/}
                                                    {/*    setProducts={setProducts}*/}
                                                    {/*    setLoading={setLoading}*/}
                                                    {/*/>*/}

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
};


export default Shop;
