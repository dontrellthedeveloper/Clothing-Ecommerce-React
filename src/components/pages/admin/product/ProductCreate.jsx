import React, {useState, useEffect} from 'react';
import Breadcrumb from "../../../common/breadcrumb";
import {Link} from "react-router-dom";
import {auth} from "../../../../firebase";
import {toast} from "react-toastify";
import {useSelector} from "react-redux";
import {createProduct} from "../../../../functions/product";
import {getCategories, getCategorySubs} from "../../../../functions/category";
import {DeleteOutlined, EditOutlined} from '@ant-design/icons';
import ProductForm from "../../../forms/ProductForm";
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

const ProductCreate = ({history}) => {
    const [values, setValues] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');
    const [showSub, setShowSub] = useState(false);

    const [subOptions, setSubOptions] = useState([]);


    //redux
    const {user} = useSelector((state) => ({...state}));

    useEffect(() => {
        loadCategories();
    }, []);

    const loadCategories = () => {
        getCategories().then((c) => setValues({...values, categories: c.data}));
    };

    //step 1
    const [keyword, setKeyword] = useState("");

    useEffect(() => {

    }, []);

    // const loadCategories = () => {
    //     getCategories().then((c) => setCategories(c.data));
    // };
    //
    const handleSubmit = async (e) => {
        e.preventDefault();
        createProduct(values, user.token)
            .then(res => {
                console.log(res)
                window.alert(`"${res.data.title}" is created`);
                // window.location.reload();
                history.push('/admin/products');
            })
            .catch(err => {
                console.log(err);
                // if(err.response.status === 400) toast.error(err.response.data);
                toast.error(err.response.data.err)
            })
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
    };


    const handleCategoryChange = (e) => {
      e.preventDefault();
      console.log('CLICKED CATEGORY', e.target.value);
        setValues({...values,subs: [], category: e.target.value});
        getCategorySubs(e.target.value)
            .then(res => {
                console.log("SUB OPTIONS ON CATEGORY CLICK", res);
                setSubOptions(res.data);
            });
        setShowSub(true);
    };

    //
    // const handeRemove = async (slug) => {
    //     // let answer = window.confirm("Are you sure you want to delete");
    //     // console.log(answer, slug );
    //     if(window.confirm("Are you sure you want to delete?")) {
    //         setLoading(true)
    //         removeCategory(slug, user.token)
    //             .then((res) => {
    //                 setLoading(false);
    //                 toast.error(`${res.data.name} deleted`);
    //                 loadCategories();
    //             })
    //             .catch((err) => {
    //                 if(err.response.status === 400) {
    //                     setLoading(false);
    //                     toast.error(err.response.data);
    //                 }
    //             });
    //     }
    // };

    /*{Step 3}*/
    const handleSearchChange = (e) => {
        e.preventDefault();
        setKeyword(e.target.value.toLowerCase());
    };

    /*{Step 4}*/
    const searched = (keyword) => (c) => c.name.toLowerCase().includes(keyword);

    return (
        <div>
            <Breadcrumb title={'Product'}/>


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
                                        {loading ? <h2 style={{fontWeight: "800"}}>Loading...</h2> : <h2 style={{fontWeight: "800"}}>Create Product</h2> }
                                    </div>


                                    <div className="box-account box-info">

                                        <div className="box-head">
                                            <h4>Administrator</h4>
                                        </div>

                                        {/*{JSON.stringify(values.categories)}*/}

                                        {/*<div className="p-3">*/}
                                        {/*    <FileUpload/>*/}
                                        {/*</div>*/}


                                        <ProductForm
                                            handleSubmit={handleSubmit}
                                            handleChange={handleChange}
                                            values={values}
                                            setValues={setValues}
                                            handleCategoryChange={handleCategoryChange}
                                            handleSubChange={handleSubChange}
                                            subOptions={subOptions}
                                            showSub={showSub}
                                            loading={loading}
                                            setLoading={setLoading}
                                        />




                                        {/*<div className="row" style={{marginTop: "30px"}}>*/}
                                        {/*    <div className="col-sm-12">*/}
                                        {/*        <div className="box">*/}
                                        {/*            <div style={{marginTop: '30px'}} className="box-title">*/}
                                        {/*                <h3 style={{fontWeight: '600'}}>Categories</h3>*/}
                                        {/*                /!*<a href="#">Edit</a>*!/*/}
                                        {/*            </div>*/}
                                        {/*        </div>*/}
                                        {/*    </div>*/}
                                        {/*</div>*/}

                                        {/*{Step 2}*/}
                                        {/*<label style={{marginTop: "40px"}}>Filter Categories</label>*/}
                                        {/*<input*/}
                                        {/*    type="search"*/}
                                        {/*    placeholder="Filter Category"*/}
                                        {/*    value={keyword}*/}
                                        {/*    onChange={handleSearchChange}*/}
                                        {/*    className="form-control mb-4"*/}
                                        {/*    style={{margin: "40px auto 50px auto", width: '50%', textAlign: "center"}}*/}
                                        {/*/>*/}

                                        {/*<h4 style={{marginTop: "50px"}}>*/}

                                            {/* Step 5 */}
                                            {/*{categories.filter(searched(keyword)).map((c) => (*/}
                                            {/*    <div className="alert alert-secondary" style={{ textAlign: "left"}} key={c._id}>*/}
                                            {/*        {c.name}*/}
                                            {/*        <div className="btn btn-sm" style={{float: "right", marginTop: "-5px"}}>*/}
                                            {/*            <Link style={{marginRight: '15px'}} to={`${process.env.PUBLIC_URL}/admin/category-${c.slug}`}>*/}
                                            {/*                <EditOutlined className="text-secondary"/>*/}
                                            {/*            </Link>*/}
                                            {/*            <span onClick={() => handeRemove(c.slug)} style={{marginRight: '5px'}}>*/}
                                            {/*                <DeleteOutlined className="text-danger"/>*/}
                                            {/*            </span>*/}

                                            {/*        </div>*/}
                                            {/*    </div>*/}
                                            {/*))}*/}
                                        {/*</h4>*/}


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

export default ProductCreate;