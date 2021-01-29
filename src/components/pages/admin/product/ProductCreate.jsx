import React, {useState, useEffect} from 'react';
import Breadcrumb from "../../../common/breadcrumb";
import {Link} from "react-router-dom";
import {auth} from "../../../../firebase";
import {toast} from "react-toastify";
import {useSelector} from "react-redux";
import {createProduct} from "../../../../functions/product";
import {DeleteOutlined, EditOutlined} from '@ant-design/icons';
import ProductForm from "../../../forms/ProductForm";

const initialState = {
    title: '',
    description: '',
    price: '',
    categories: [],
    category: '',
    subs: [],
    shipping: '',
    quantity: '',
    images: [],
    colors: ["Black", "Brown", "Silver", "White", "Blue"],
    brands: ["Apple", "Samsung", "Microsoft", "Lenovo", "ASUS"],
    color: '',
    brand: '',
}

const ProductCreate = () => {
    const [values, setValues] = useState(initialState);
    const [loading, setLoading] = useState(false);
    const [name, setName] = useState('');

    //redux
    const {user} = useSelector((state) => ({...state}));

    const {
        title,
        description,
        price,
        categories,
        category,
        subs,
        shipping,
        quantity,
        images,
        colors,
        brands,
        color,
        brand
    } = values;


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
            })
            .catch(err => {
                console.log(err);
                if(err.response.status === 400) toast.error(err.response.data);
            })
    };


    const handleChange = async (e) => {
        e.preventDefault();
        setValues({...values, [e.target.name]: e.target.value});
        // console.log(e.target.name, " ------ ", e.target.value);
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
                                        {loading ? <h2 style={{fontWeight: "800"}}>Loading...</h2> : <h2 style={{fontWeight: "800"}}>Product Overview</h2> }
                                    </div>


                                    <div className="box-account box-info">

                                        <div className="box-head">
                                            <h4>Administrator</h4>
                                        </div>

                                        {/*<ProductForm*/}
                                        {/*    handleSubmit={handleSubmit}*/}
                                        {/*    name={name}*/}
                                        {/*    setName={setName}/>*/}

                                        <div className="row">
                                            <div className="col-sm-12">
                                                <div className="box">
                                                    <div style={{marginTop: '30px'}} className="box-title">
                                                        <h3 style={{fontWeight: '600'}}>Create Product</h3>
                                                        {/*<a href="#">Edit</a>*/}
                                                    </div>
                                                    <div className="box-content">
                                                        <form onSubmit={handleSubmit} style={{marginTop: '45px'}}>
                                                            <div className="form-group">
                                                                {/*<label>Title</label>*/}
                                                                <input
                                                                    type="text"
                                                                    name="title"
                                                                    onChange={handleChange}
                                                                    className="form-control"
                                                                    placeholder="Product Title"
                                                                    value={title}
                                                                    required
                                                                    style={{margin: "20px auto 30px auto", width: '50%', textAlign: "center"}}
                                                                />
                                                            </div>
                                                            <div className="form-group">
                                                                {/*<label>Description</label>*/}
                                                                <input
                                                                    type="text"
                                                                    name="description"
                                                                    onChange={handleChange}
                                                                    className="form-control"
                                                                    placeholder="Product Description"
                                                                    value={description}
                                                                    required
                                                                    style={{margin: "20px auto 30px auto", width: '50%', textAlign: "center"}}
                                                                />
                                                            </div>
                                                            <div className="form-group">
                                                                {/*<label>Price</label>*/}
                                                                <input
                                                                    type="number"
                                                                    name="price"
                                                                    onChange={handleChange}
                                                                    className="form-control"
                                                                    placeholder="Product Price"
                                                                    value={price}
                                                                    required
                                                                    style={{margin: "20px auto 30px auto", width: '50%', textAlign: "center"}}
                                                                />
                                                            </div>
                                                            <div className="form-group">
                                                                {/*<label>Shipping</label>*/}
                                                                <select
                                                                    name="shipping"
                                                                    onChange={handleChange}
                                                                    className="form-control"

                                                                    style={{margin: "20px auto 30px auto", width: '50%', textAlignLast: "center"}}
                                                                >
                                                                    {/*<option>Please select</option>*/}
                                                                    <option>Product Shipping</option>
                                                                    <option value="No">No</option>
                                                                    <option value="Yes">Yes</option>
                                                                </select>
                                                            </div>
                                                            <div className="form-group">
                                                                {/*<label>Quantity</label>*/}
                                                                <input
                                                                    type="number"
                                                                    name="quantity"
                                                                    onChange={handleChange}
                                                                    className="form-control"
                                                                    placeholder="Product Quantity"
                                                                    value={quantity}
                                                                    required
                                                                    style={{margin: "20px auto 30px auto", width: '50%', textAlign: "center"}}
                                                                />
                                                            </div>
                                                            <div className="form-group">
                                                                {/*<label>Color</label>*/}
                                                                <select
                                                                    name="color"
                                                                    onChange={handleChange}
                                                                    className="form-control"

                                                                    style={{margin: "20px auto 30px auto", width: '50%', textAlignLast: "center"}}
                                                                >
                                                                    <option>Product Color</option>
                                                                    {colors.map(c => <option key={c} value={c} >{c}</option>)}
                                                                </select>
                                                            </div>

                                                            <div className="form-group">
                                                                {/*<label>Brand</label>*/}
                                                                <select
                                                                    name="brand"
                                                                    onChange={handleChange}
                                                                    className="form-control"

                                                                    style={{margin: "20px auto 60px auto", width: '50%', textAlignLast: "center"}}
                                                                >
                                                                    <option>Product Brand</option>
                                                                    {brands.map(b => <option key={b} value={b} >{b}</option>)}
                                                                </select>
                                                            </div>
                                                            <button
                                                                type='submit'
                                                                className="btn btn-solid"
                                                            >
                                                                Save
                                                            </button>

                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                        <div className="row" style={{marginTop: "30px"}}>
                                            <div className="col-sm-12">
                                                <div className="box">
                                                    <div style={{marginTop: '30px'}} className="box-title">
                                                        <h3 style={{fontWeight: '600'}}>Categories</h3>
                                                        {/*<a href="#">Edit</a>*/}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        {/*{Step 2}*/}
                                        {/*<label style={{marginTop: "40px"}}>Filter Categories</label>*/}
                                        <input
                                            type="search"
                                            placeholder="Filter Category"
                                            value={keyword}
                                            onChange={handleSearchChange}
                                            className="form-control mb-4"
                                            style={{margin: "40px auto 50px auto", width: '50%', textAlign: "center"}}
                                        />

                                        <h4 style={{marginTop: "50px"}}>

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
                                        </h4>


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