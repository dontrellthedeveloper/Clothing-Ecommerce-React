import React, {useEffect, lazy, Suspense} from 'react';
import ReactDOM from 'react-dom';
import { Provider, useDispatch } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ScrollContext } from 'react-router-scroll-4';
import { IntlReducer as Intl, IntlProvider } from 'react-redux-multilingual'
import './index.scss';
import {createStore} from "redux";




// Import custom components
import store from './store';
import translations from './constants/translations'
import { getAllProducts } from './actions'
import Landing from './components/landing'
import {composeWithDevTools} from "redux-devtools-extension";
import ReducerConfig from './ReducerConfig';

import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import { LoadingOutlined } from "@ant-design/icons";


// My Imports
import RegisterComplete from "./components/pages/registerComplete";
import HeaderOne from "./components/common/headers/header-one";
import FooterOne from "./components/common/footers/footer-one";
import SingleProduct from "./components/pages/product";
import CategoryHome from "./components/pages/category/CategoryHome";
import SubHome from "./components/pages/sub/SubHome";
import Shop from "./components/pages/shop";

// Admin Routes
import AdminRoute from "./components/routes/AdminRoute";
import AdminDashboard from './components/pages/admin/dashboard';
import CategoryCreate from './components/pages/admin/category/CategoryCreate';
import CategoryUpdate from './components/pages/admin/category/CategoryUpdate';
import SubCreate from './components/pages/admin/sub/SubCreate';
import SubUpdate from './components/pages/admin/sub/SubUpdate';
import ProductCreate from './components/pages/admin/product/ProductCreate';
import AllProducts from './components/pages/admin/product/AllProducts';
import ProductUpdate from './components/pages/admin/product/ProductUpdate';
import CreateCouponPage from './components/pages/admin/coupon/CreateCouponPage';
import Payment from './components/pages/payment';

// User Routes
import UserRoute from "./components/routes/UserRoute";
import UserHistory from "./components/pages/user/history";
import UserPassword from "./components/pages/user/password";
import UserWishlist from "./components/pages/user/wishlist";


////////////////////////////


// Layouts
import Fashion from './components/layouts/fashion/main';
import Vegetables from './components/layouts/vegetables/main';
import Kids from './components/layouts/kids/main';
import Pets from './components/layouts/pets/main';
import Furniture from './components/layouts/furniture/main';
import Watch from './components/layouts/watch/main';
import Beauty from './components/layouts/beauty/main';
import Electronic from './components/layouts/electronic/main';


//Collection Pages
import CollectionLeftSidebar from "./components/collection/collection-left-sidebar";
import CollectionNoSidebar from "./components/collection/collection-no-sidebar";
import CollectionRightSidebar from "./components/collection/collection-right-sidebar";
import CollectionFullWidth from "./components/collection/collection-full-width";
import CollectionMetro from "./components/collection/collection-metro";

// Product Pages
import LeftSideBar from "./components/products/left-sidebar";
import RightSideBar from "./components/products/right-sidebar";
import NoSideBar from "./components/products/no-sidebar";
import LeftImage from "./components/products/left-image";
import RightImage from "./components/products/right-image";
import Accordian from "./components/products/accordian";
import ColumnLeft from "./components/products/column-left";
import ColumnRight from "./components/products/column-right";
import Column from "./components/products/column";
import Vertical from "./components/products/vertical";

// Features
import Layout from './components/app'
import Cart from './components/cart'
import Compare from './components/compare/index'
import wishList from './components/wishlist'
import checkOut from './components/checkout'
import orderSuccess from './components/checkout/success-page'

// Extra Pages
import aboutUs from './components/pages/about-us'
import PageNotFound from './components/pages/404'
import lookbook from './components/pages/lookbook'
import Login from './components/pages/login'
import Register from './components/pages/register'
import Search from './components/pages/search'
import Collection from './components/pages/collection'
import ForgetPassword from './components/pages/forget-password'
import Contact from './components/pages/contact'
import Dashboard2 from './components/pages/dashboard2'
import Faq from './components/pages/faq'

// Blog Pages
import RightSide from './components/blogs/right-sidebar'
import Details from './components/blogs/details'
import BlogPage from './components/blogs/blog-page'

// Theme Element
import ElementTitle from "./components/features/theme/element-title"
import ElementBanner from "./components/features/theme/element-banner";
import ElementSlider from "./components/features/theme/element-slider";
import ElementCategory from "./components/features/theme/element-category";
import ElementService from "./components/features/theme/element-service";
import ElementRatio from "./components/features/theme/element-ratio";

// Product Elements
import ElementProductBox from "./components/features/product/element-product-box"
import ElementProductSlider from "./components/features/product/element-product-slider"
import ElementProductNoSlider from "./components/features/product/element-product-no-slider"
import ElementMultipleSlider from "./components/features/product/element-multiple-slider"
import ElementProductTab from "./components/features/product/element-product-tab"

// Portfolio Features
import GridCols from "./components/features/portfolio/grid-cols"
import MasonaryGridCols from "./components/features/portfolio/masonary-grid-cols"
// import rootReducer from "./reducers";



//Lazy Loading
// const RegisterComplete = lazy(() => import('./components/pages/registerComplete'));
// const HeaderOne = lazy(() => import("./components/common/headers/header-one"));
// const FooterOne = lazy(() => import("./components/common/footers/footer-one"));
// const SingleProduct = lazy(() => import("./components/pages/product"));
// const CategoryHome = lazy(() => import("./components/pages/category/CategoryHome"));
// const SubHome = lazy(() => import("./components/pages/sub/SubHome"));
// const Shop = lazy(() => import("./components/pages/shop"));
//
// // Admin Routes
// const AdminRoute = lazy(() => import("./components/routes/AdminRoute"));
// const AdminDashboard = lazy(() => import('./components/pages/admin/dashboard'));
// const CategoryCreate = lazy(() => import('./components/pages/admin/category/CategoryCreate'));
// const CategoryUpdate = lazy(() => import('./components/pages/admin/category/CategoryUpdate'));
// const SubCreate = lazy(() => import('./components/pages/admin/sub/SubCreate'));
// const SubUpdate = lazy(() => import('./components/pages/admin/sub/SubUpdate'));
// const ProductCreate = lazy(() => import('./components/pages/admin/product/ProductCreate'));
// const AllProducts = lazy(() => import('./components/pages/admin/product/AllProducts'));
// const ProductUpdate = lazy(() => import('./components/pages/admin/product/ProductUpdate'));
// const CreateCouponPage = lazy(() => import('./components/pages/admin/coupon/CreateCouponPage'));
// const Payment = lazy(() => import('./components/pages/payment'));
//
// // User Routes
// const UserRoute = lazy(() => import("./components/routes/UserRoute"));
// const UserHistory = lazy(() => import("./components/pages/user/history"));
// const UserPassword = lazy(() => import("./components/pages/user/password"));
// const UserWishlist = lazy(() => import("./components/pages/user/wishlist"));
//
//
// ////////////////////////////
//
//
// // Layouts
// const Fashion = lazy(() => import('./components/layouts/fashion/main'));
// const Vegetables = lazy(() => import('./components/layouts/vegetables/main'));
// const Kids = lazy(() => import('./components/layouts/kids/main'));
// const Pets = lazy(() => import('./components/layouts/pets/main'));
// const Furniture = lazy(() => import('./components/layouts/furniture/main'));
// const Watch = lazy(() => import('./components/layouts/watch/main'));
// const Beauty = lazy(() => import('./components/layouts/beauty/main'));
// const Electronic = lazy(() => import('./components/layouts/electronic/main'));
//
//
// //Collection Pages
// const CollectionLeftSidebar = lazy(() => import("./components/collection/collection-left-sidebar"));
// const CollectionNoSidebar = lazy(() => import("./components/collection/collection-no-sidebar"));
// const CollectionRightSidebar = lazy(() => import("./components/collection/collection-right-sidebar"));
// const CollectionFullWidth = lazy(() => import("./components/collection/collection-full-width"));
// const CollectionMetro = lazy(() => import("./components/collection/collection-metro"));
//
// // Product Pages
// const LeftSideBar = lazy(() => import("./components/products/left-sidebar"));
// const RightSideBar = lazy(() => import("./components/products/right-sidebar"));
// const NoSideBar = lazy(() => import("./components/products/no-sidebar"));
// const LeftImage = lazy(() => import("./components/products/left-image"));
// const RightImage = lazy(() => import("./components/products/right-image"));
// const Accordian = lazy(() => import("./components/products/accordian"));
// const ColumnLeft = lazy(() => import("./components/products/column-left"));
// const ColumnRight = lazy(() => import("./components/products/column-right"));
// const Column = lazy(() => import("./components/products/column"));
// const Vertical = lazy(() => import("./components/products/vertical"));
//
// // Features
// const Layout = lazy(() => import('./components/app'));
// const Cart = lazy(() => import('./components/cart'));
// const Compare = lazy(() => import('./components/compare/index'));
// const wishList = lazy(() => import('./components/wishlist'));
// const checkOut = lazy(() => import('./components/checkout'));
// const orderSuccess = lazy(() => import('./components/checkout/success-page'));
//
// // Extra Pages
// const aboutUs = lazy(() => import('./components/pages/about-us'));
// const PageNotFound = lazy(() => import('./components/pages/404'));
// const lookbook = lazy(() => import('./components/pages/lookbook'));
// const Login = lazy(() => import('./components/pages/login'));
// const Register = lazy(() => import('./components/pages/register'));
// const Search = lazy(() => import('./components/pages/search'));
// const Collection = lazy(() => import('./components/pages/collection'));
// const ForgetPassword = lazy(() => import('./components/pages/forget-password'));
// const Contact = lazy(() => import('./components/pages/contact'));
// const Dashboard2 = lazy(() => import('./components/pages/dashboard2'));
// const Faq = lazy(() => import('./components/pages/faq'));
//
// // Blog Pages
// const RightSide = lazy(() => import('./components/blogs/right-sidebar'));
// const Details = lazy(() => import('./components/blogs/details'));
// const BlogPage = lazy(() => import('./components/blogs/blog-page'));
//
// // Theme Element
// const ElementTitle = lazy(() => import("./components/features/theme/element-title"));
// const ElementBanner = lazy(() => import("./components/features/theme/element-banner"));
// const ElementSlider = lazy(() => import("./components/features/theme/element-slider"));
// const ElementCategory = lazy(() => import("./components/features/theme/element-category"));
// const ElementService = lazy(() => import("./components/features/theme/element-service"));
// const ElementRatio = lazy(() => import("./components/features/theme/element-ratio"));
//
// // Product Elements
// const ElementProductBox = lazy(() => import("./components/features/product/element-product-box"));
// const ElementProductSlider = lazy(() => import("./components/features/product/element-product-slider"));
// const ElementProductNoSlider = lazy(() => import("./components/features/product/element-product-no-slider"));
// const ElementMultipleSlider = lazy(() => import("./components/features/product/element-multiple-slider"));
// const ElementProductTab = lazy(() => import("./components/features/product/element-product-tab"));
//
// // Portfolio Features
// const GridCols = lazy(() => import("./components/features/portfolio/grid-cols"));
// const MasonaryGridCols = lazy(() => import("./components/features/portfolio/masonary-grid-cols"));




// class Root extends React.Component {
const Root = () => {


    // const store = createStore(rootReducer, composeWithDevTools());

        store.dispatch(getAllProducts());

        return(

                <React.Fragment>
                    <ToastContainer/>
                    <Provider store={store}>
                        <IntlProvider translations={translations} locale='en'>

                            <BrowserRouter basename={'/'} >
                                <ReducerConfig/>
                                <HeaderOne logoName={'logo.png'}/>
                                <ScrollContext>

                                    <Switch>
                                        {/*<Route exact path={`${process.env.PUBLIC_URL}/`} component={Landing}/>*/}
                                        <Route exact path={`${process.env.PUBLIC_URL}/`} component={Beauty}/>
                                        <Route path={`${process.env.PUBLIC_URL}/vegetables`} component={Vegetables}/>
                                        <Route path={`${process.env.PUBLIC_URL}/electronic`} component={Electronic}/>
                                        <Route path={`${process.env.PUBLIC_URL}/furniture`} component={Furniture}/>
                                        <Route path={`${process.env.PUBLIC_URL}/pets`} component={Pets}/>
                                        <Route path={`${process.env.PUBLIC_URL}/watch`} component={Watch}/>
                                        <Route path={`${process.env.PUBLIC_URL}/kids`} component={Kids}/>
                                        <Route path={`${process.env.PUBLIC_URL}/beauty`} component={Beauty}/>

                                        {/*<Layout>*/}

                                        {/*Routes For Layouts*/}
                                        <Route path={`${process.env.PUBLIC_URL}/fashion`} component={Fashion}/>

                                        {/*Routes For Features (Product Collection) */}
                                        <Route path={`${process.env.PUBLIC_URL}/left-sidebar/collection`} component={CollectionLeftSidebar}/>
                                        <Route path={`${process.env.PUBLIC_URL}/no-sidebar/collection`} component={CollectionNoSidebar}/>
                                        <Route path={`${process.env.PUBLIC_URL}/right-sidebar/collection`} component={CollectionRightSidebar}/>
                                        <Route path={`${process.env.PUBLIC_URL}/full-width/collection`} component={CollectionFullWidth}/>
                                        <Route path={`${process.env.PUBLIC_URL}/metro/collection`} component={CollectionMetro}/>

                                        {/*Routes For Single Product*/}
                                        <Route path={`${process.env.PUBLIC_URL}/left-sidebar/product/:id`} component={LeftSideBar}/>
                                        <Route path={`${process.env.PUBLIC_URL}/right-sidebar/product/:id`} component={RightSideBar}/>
                                        <Route path={`${process.env.PUBLIC_URL}/no-sidebar/product/:id`} component={NoSideBar}/>
                                        <Route path={`${process.env.PUBLIC_URL}/col-left/product/:id`} component={ColumnLeft}/>
                                        <Route path={`${process.env.PUBLIC_URL}/col-right/product/:id`} component={ColumnRight}/>
                                        <Route path={`${process.env.PUBLIC_URL}/accordian/product/:id`} component={Accordian}/>
                                        <Route path={`${process.env.PUBLIC_URL}/column/product/:id`} component={Column}/>
                                        <Route path={`${process.env.PUBLIC_URL}/left-image/product/:id`} component={LeftImage}/>
                                        <Route path={`${process.env.PUBLIC_URL}/right-image/product/:id`} component={RightImage}/>
                                        <Route path={`${process.env.PUBLIC_URL}/vertical/product/:id`} component={Vertical}/>


                                        {/*Routes For custom Features*/}
                                        <Route path={`${process.env.PUBLIC_URL}/cart`} component={Cart}/>
                                        <Route path={`${process.env.PUBLIC_URL}/wishlist`} component={wishList}/>
                                        <Route path={`${process.env.PUBLIC_URL}/compare`} component={Compare}/>
                                        <Route path={`${process.env.PUBLIC_URL}/checkout`} component={checkOut}/>
                                        <Route path={`${process.env.PUBLIC_URL}/order-success`} component={orderSuccess}/>

                                        <Route path={`${process.env.PUBLIC_URL}/sales/orders`} component={aboutUs}/>

                                        {/*Routes For Extra Pages*/}
                                        <Route path={`${process.env.PUBLIC_URL}/pages/about-us`} component={aboutUs}/>
                                        <Route path={`${process.env.PUBLIC_URL}/pages/404`} component={PageNotFound}/>
                                        <Route path={`${process.env.PUBLIC_URL}/pages/lookbook`} component={lookbook}/>
                                        <Route path={`${process.env.PUBLIC_URL}/pages/login`} component={Login}/>
                                        <Route path={`${process.env.PUBLIC_URL}/pages/register`} component={Register}/>
                                        <Route path={`${process.env.PUBLIC_URL}/pages/register-complete`} component={RegisterComplete}/>
                                        <Route path={`${process.env.PUBLIC_URL}/pages/search`} component={Search}/>
                                        <Route path={`${process.env.PUBLIC_URL}/pages/collection`} component={Collection}/>
                                        <Route path={`${process.env.PUBLIC_URL}/pages/forget-password`} component={ForgetPassword}/>
                                        <Route path={`${process.env.PUBLIC_URL}/pages/contact`} component={Contact}/>
                                        <Route path={`${process.env.PUBLIC_URL}/pages/faq`} component={Faq}/>







                                        {/*Dashboard*/}
                                        <UserRoute exact path={`${process.env.PUBLIC_URL}/user/history`} component={UserHistory}/>
                                        <UserRoute exact path={`${process.env.PUBLIC_URL}/user/password`} component={UserPassword}/>
                                        <UserRoute exact path={`${process.env.PUBLIC_URL}/user/wishlist`} component={UserWishlist}/>


                                        <AdminRoute exact path={`${process.env.PUBLIC_URL}/admin/dashboard`} component={AdminDashboard}/>
                                        <AdminRoute exact path={`${process.env.PUBLIC_URL}/admin/category`} component={CategoryCreate}/>
                                        <AdminRoute exact path={`${process.env.PUBLIC_URL}/admin/category/:slug`} component={CategoryUpdate}/>
                                        <AdminRoute exact path={`${process.env.PUBLIC_URL}/admin/sub`} component={SubCreate}/>
                                        <AdminRoute exact path={`${process.env.PUBLIC_URL}/admin/sub/:slug`} component={SubUpdate}/>
                                        <AdminRoute exact path={`${process.env.PUBLIC_URL}/admin/product`} component={ProductCreate}/>
                                        <AdminRoute exact path={`${process.env.PUBLIC_URL}/admin/products`} component={AllProducts}/>
                                        <AdminRoute exact path={`${process.env.PUBLIC_URL}/admin/product/:slug`} component={ProductUpdate}/>
                                        <AdminRoute exact path={`${process.env.PUBLIC_URL}/admin/coupon`} component={CreateCouponPage}/>


                                        <Route exact path={`${process.env.PUBLIC_URL}/product/:slug`} component={SingleProduct}/>
                                        <Route exact path={`${process.env.PUBLIC_URL}/category/:slug`} component={CategoryHome}/>
                                        <Route exact path={`${process.env.PUBLIC_URL}/sub/:slug`} component={SubHome}/>
                                        <Route exact path={`${process.env.PUBLIC_URL}/shop`} component={Shop}/>

                                        <UserRoute exact path={`${process.env.PUBLIC_URL}/payment`} component={Payment}/>







                                        {/*Features*/}
                                        {/*Theme Elements*/}
                                        <Route path={`${process.env.PUBLIC_URL}/features/element-title`} component={ElementTitle}/>
                                        <Route path={`${process.env.PUBLIC_URL}/features/element-banner`} component={ElementBanner}/>
                                        <Route path={`${process.env.PUBLIC_URL}/features/element-slider`} component={ElementSlider}/>
                                        <Route path={`${process.env.PUBLIC_URL}/features/element-category`} component={ElementCategory}/>
                                        <Route path={`${process.env.PUBLIC_URL}/features/element-service`} component={ElementService}/>
                                        <Route path={`${process.env.PUBLIC_URL}/features/element-ratio`} component={ElementRatio}/>

                                        {/*Product Elements*/}
                                        <Route path={`${process.env.PUBLIC_URL}/features/element-product-box`} component={ElementProductBox}/>
                                        <Route path={`${process.env.PUBLIC_URL}/features/element-product-slider`} component={ElementProductSlider}/>
                                        <Route path={`${process.env.PUBLIC_URL}/features/element-product-no-slider`} component={ElementProductNoSlider}/>
                                        <Route path={`${process.env.PUBLIC_URL}/features/element-product-multiple-slider`} component={ElementMultipleSlider}/>
                                        <Route path={`${process.env.PUBLIC_URL}/features/element-product-tab`} component={ElementProductTab}/>

                                        {/*Portfolios*/}
                                        <Route path={`${process.env.PUBLIC_URL}/features/portfolio-grid/:columns`} component={GridCols}/>
                                        <Route path={`${process.env.PUBLIC_URL}/features/portfolio-masonary/:columns`} component={MasonaryGridCols}/>

                                        {/*Blog Pages*/}
                                        <Route path={`${process.env.PUBLIC_URL}/blog/right-sidebar`} component={RightSide}/>
                                        <Route path={`${process.env.PUBLIC_URL}/blog/details`} component={Details}/>
                                        <Route path={`${process.env.PUBLIC_URL}/blog/blog-page`} component={BlogPage}/>

                                        {/* <Route exact path="*" component={PageNotFound} /> */}
                                        {/*</Layout>*/}
                                    </Switch>

                                </ScrollContext>
                                <FooterOne logoName={'layout3/logo.png'}/>
                            </BrowserRouter>
                        </IntlProvider>
                    </Provider>
                </React.Fragment>


    	);
    };


ReactDOM.render(<Root />, document.getElementById('root'));


