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
import ProductForm from "../../../forms/ProductForm";

const initialState = {
    title: '',
    description: '',
    price: '',
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
    const [subOptions, setSubOptions] = useState([]);
    const [categories, setCategories] = useState([]);
    const [arrayOfSubs, setArrayOfSubIds] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [loading, setLoading] = useState(false);

    //redux
    const {user} = useSelector((state) => ({...state}));

    const {slug} = match.params;

    useEffect(() => {
        loadProduct();
        loadCategories();
    }, []);

    const loadProduct = () => {
        getProduct(slug)
            .then(p => {
                // console.log('single product', p);
                // single product
                setValues({...values, ...p.data});
                // load product sub category
                getCategorySubs(p.data.category._id)
                    .then(res => {
                        setSubOptions(res.data); // on load, show default subs
                    });
                // prepare array of sub ids to show as default sub values
                // let arr = [];
                // p.data.sub.map((s) => {
                //     arr.push(s._id);
                // });

                let arr = p.data.sub;
                console.log(p.data.sub);
                console.log(p.data.category);
                console.log(p.data.category._id);
                console.log('ARR', arr);
                setArrayOfSubIds((prev) => arr);
            })

    };

    const loadCategories = () => {
        getCategories().then((c) => {
            console.log('GET CATEGORIES IN UPDATE PRODUCT', c.data);
            setCategories(c.data);
            // setSubs(c.data);
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
    };

    const handleChange = (e) => {
        e.preventDefault();
        setValues({...values, [e.target.name]: e.target.value});
        // console.log(e.target.name, " ------ ", e.target.value);
    };


    const handleSubChange = (e) => {
        e.preventDefault();
        console.log('CLICKED SUB CATEGORY', e.target.value);
        setValues({...values, sub: e.target.value});

        getCategorySubs(e.target.value)
            .then(res => {
                console.log("SUB OPTIONS ON CATEGORY CLICK", res);
                setSubOptions(res.data);
            });
    };


    const handleCategoryChange = (e) => {
        e.preventDefault();
        console.log('CLICKED CATEGORY', e.target.value);
        setValues({...values, sub: e.target.value});

        // setSelectedCategory(e.target.value);

        getCategorySubs(e.target.value)
            .then(res => {
                console.log("SUB OPTIONS ON CATEGORY CLICK", res);
                setSubOptions(res.data);
            });

        console.log('EXISTING CATEGORY values.category', values.category);

        console.log(e.target.value);
        console.log(e.target.name);
        console.log(e.target);
        console.log(values);

        if (values.category._id === e.target.value) {

            loadProduct();
        }

        setArrayOfSubIds('');


    };


    return (
        <div>
            <Breadcrumb title={'Update Product'}/>


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
                                        <li >
                                            <Link to={`${process.env.PUBLIC_URL}/admin/product`}>Product</Link>

                                        </li>
                                        <li>
                                            <Link to={`${process.env.PUBLIC_URL}/admin/products`}>Products</Link>
                                            <ul>
                                                <li className="active"><Link to='#'>Update</Link></li>
                                            </ul>
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


                                        {/*{JSON.stringify(values)}*/}

                                        <ProductUpdateForm
                                            categories={categories}
                                            subOptions={subOptions}
                                            handleCategoryChange={handleCategoryChange}
                                            handleSubChange={handleSubChange}
                                            handleSubmit={handleSubmit}
                                            handleChange={handleChange}
                                            values={values}
                                            setValues={setValues}
                                            arrayOfSubs={arrayOfSubs}
                                            setArrayOfSubIds={setArrayOfSubIds}
                                            selectedCategory={selectedCategory}
                                            loading={loading}
                                            setLoading={setLoading}
                                        />

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