import React, {useState, useEffect} from 'react';
import Breadcrumb from "../../../common/breadcrumb";
import {Link} from "react-router-dom";
import {auth} from "../../../../firebase";
import {toast} from "react-toastify";
import {useSelector} from "react-redux";
import {createCategory, getCategories, removeCategory} from "../../../../functions/category";
import {DeleteOutlined, EditOutlined} from '@ant-design/icons';


const CategoryCreate = (props) => {
    const {user} = useSelector(state => ({...state}));
    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        loadCategories();
    }, []);

    const loadCategories = () => {
        getCategories().then((c) => setCategories(c.data));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        createCategory({name}, user.token)
            .then(res => {
                setLoading(false);
                setName("");
                toast.success(`"${res.data.name}" is created`);
                loadCategories();
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
                if(err.response.status === 400) toast.error(err.response.data)
            })
    };

    const handeRemove = async (slug) => {
        // let answer = window.confirm("Are you sure you want to delete");
        // console.log(answer, slug );
        if(window.confirm("Are you sure you want to delete?")) {
            setLoading(true)
            removeCategory(slug, user.token)
                .then((res) => {
                    setLoading(false);
                    toast.error(`${res.data.name} deleted`);
                    loadCategories();
                })
                .catch((err) => {
                    if(err.response.status === 400) {
                        setLoading(false);
                        toast.error(err.response.data);
                    }
                });
        }
    };

    const categoryForm = () => (
        <div className="row">
            <div className="col-sm-12">
                <div className="box">
                    <div style={{marginTop: '30px'}} className="box-title">
                        <h3 style={{fontWeight: '600'}}>Create Product Category</h3>
                        {/*<a href="#">Edit</a>*/}
                    </div>
                    <div className="box-content">
                        <form onSubmit={handleSubmit} style={{marginTop: '35px'}}>
                            <div className="form-group">
                                <label>Category Name</label>
                                <input
                                    type="text"
                                    onChange={(e) => setName(e.target.value)}
                                    className="form-control"
                                    placeholder=""
                                    value={name}
                                    required
                                    style={{margin: "0 auto 40px auto", width: '50%', textAlign: "center"}}
                                />
                            </div>
                            {/*<h6>MARK JECNO</h6>*/}
                            {/*<h6>MARk-JECNO@gmail.com</h6>*/}
                            {/*<h6>*/}
                            {/*    <a href="#">Change Password</a>*/}
                            {/*</h6>*/}
                            <button
                                type='submit'
                                className="btn btn-solid"
                            >
                                Save
                            </button>
                            <h4 style={{marginTop: "40px"}}>
                                {categories.map((c) => (
                                    <div className="alert alert-secondary" style={{ textAlign: "left"}} key={c._id}>
                                        {c.name}
                                        <div className="btn btn-sm" style={{float: "right", marginTop: "-5px"}}>
                                            <Link style={{marginRight: '15px'}} to={`${process.env.PUBLIC_URL}/admin/category-${c.slug}`}>
                                                <EditOutlined className="text-secondary"/>
                                            </Link>
                                            <span onClick={() => handeRemove(c.slug)} style={{marginRight: '5px'}}>
                                                <DeleteOutlined className="text-danger"/>
                                            </span>

                                        </div>
                                    </div>
                                ))}
                            </h4>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );

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
                                        <li>
                                            <Link to={`${process.env.PUBLIC_URL}/admin/product`}>Product</Link>
                                        </li>
                                        <li>
                                            <Link to={`${process.env.PUBLIC_URL}/admin/products`}>Products</Link>
                                        </li>
                                        <li className="active">
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
                                        {loading ? <h2 style={{fontWeight: "800"}}>Loading...</h2> : <h2 style={{fontWeight: "800"}}>Categories</h2> }
                                    </div>


                                    <div className="box-account box-info">

                                        <div className="box-head">
                                            <h4>Administrator</h4>
                                        </div>
                                        {categoryForm()}




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


export default CategoryCreate;