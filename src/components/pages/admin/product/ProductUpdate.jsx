import React, {useState, useEffect} from 'react';
import Breadcrumb from "../../../common/breadcrumb";
import {Link} from "react-router-dom";
import {auth} from "../../../../firebase";
import {toast} from "react-toastify";
import {useSelector} from "react-redux";
import {getProduct} from "../../../../functions/product";
import {getCategories, getCategorySubs} from "../../../../functions/category";
import {DeleteOutlined, EditOutlined} from '@ant-design/icons';
import ProductUpdateForm from "../../../forms/ProductUpdateForm";
import FileUpload from '../../../forms/FileUpload';

const initialState = {
    title: '',
    description: '',
    price: '',
    categories: [],
    category: '',
    sub: '',
    shipping: '',
    quantity: '',
    images: [],
    colors: ["Black", "Brown", "Silver", "White", "Blue"],
    brands: ["Apple", "Samsung", "Microsoft", "Lenovo", "ASUS"],
    color: '',
    brand: '',
};


const ProductUpdate = ({match}) => {
    //state
    const [values, setValues] = useState(initialState);

    //redux
    const {user} = useSelector((state) => ({...state}));

    const {slug} = match.params;

    useEffect(() => {
        loadProduct();
    }, []);

    const loadProduct = () => {
        getProduct(slug)
            .then(p => {
                // console.log('single product', p);
                setValues({...values, ...p.data});
            })

    };


    return (
        <div>
            <Breadcrumb title={'Categories'}/>


            {/*Dashboard section*/}
            <section className="section-b-space">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="account-sidebar">
                                <a className="popup-btn">
                                    my account
                                </a>
                            </div>
                            <div className="dashboard-left">
                                <div className="collection-mobile-back">
                                    <span className="filter-back">
                                        <i className="fa fa-angle-left" aria-hidden="true"></i> back
                                    </span>
                                </div>
                                <div className="block-content">
                                    <ul>
                                        <li >
                                            <Link to={`${process.env.PUBLIC_URL}/admin/dashboard`}>Dashboard</Link>
                                        </li>
                                        <li className="active">
                                            <Link to={`${process.env.PUBLIC_URL}/admin/product`}>Product</Link>
                                        </li>
                                        <li>
                                            <Link to={`${process.env.PUBLIC_URL}/admin/products`}>Products</Link>
                                        </li>
                                        <li >
                                            <Link to={`${process.env.PUBLIC_URL}/admin/category`}>Category</Link>
                                        </li>
                                        <li>
                                            <Link to={`${process.env.PUBLIC_URL}/admin/sub`}>Sub Category</Link>
                                        </li>
                                        <li>
                                            <Link to={`${process.env.PUBLIC_URL}/admin/coupon`}>Coupons</Link>
                                        </li>
                                        <li>
                                            <Link to={`${process.env.PUBLIC_URL}/user/password`}>Password</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="dashboard-right">
                                <div style={{textAlign: 'center'}} className="dashboard">

                                    <div  className="page-title">
                                        <h2 style={{fontWeight: "800"}}>Update Product</h2>
                                    </div>


                                    <div className="box-account box-info">

                                        <div className="box-head">
                                            <h4>Administrator</h4>
                                        </div>

                                        {/*{JSON.stringify(values.categories)}*/}

                                        {/*<div className="p-3">*/}
                                        {/*    <FileUpload/>*/}
                                        {/*</div>*/}


                                        {JSON.stringify(values)}

                                        <ProductUpdateForm/>

                                        {/*<ProductForm*/}
                                        {/*    handleSubmit={handleSubmit}*/}
                                        {/*    handleChange={handleChange}*/}
                                        {/*    values={values}*/}
                                        {/*    setValues={setValues}*/}
                                        {/*    handleCategoryChange={handleCategoryChange}*/}
                                        {/*    handleSubChange={handleSubChange}*/}
                                        {/*    subOptions={subOptions}*/}
                                        {/*    showSub={showSub}*/}
                                        {/*    loading={loading}*/}
                                        {/*    setLoading={setLoading}*/}
                                        {/*/>*/}





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

export default ProductUpdate;