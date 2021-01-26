import React, {useState, useEffect} from 'react';
import Breadcrumb from "../../../common/breadcrumb";
import {Link} from 'react-router-dom';
import {auth} from "../../../../firebase";
import {toast} from "react-toastify";
import {useSelector} from "react-redux";
import {updateCategory, getCategory} from "../../../../functions/category";





const CategoryUpdate = ({history, match}) => {
    const {user} = useSelector(state => ({...state}));
    const [name, setName] = useState(match.params.name);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        // console.log(match);
        // console.log((c) => c.data.name);
        loadCategory()
    }, []);

    const loadCategory = () => {
        getCategory(match.params.slug).then((c) => setName(c.data.name));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        updateCategory(match.params.slug,{name}, user.token)
            .then(res => {
                setLoading(false);
                setName("");
                toast.success(`"${name}" is updated`);
                history.push('/admin/category');
            })
            .catch(err => {
                console.log(err);
                setLoading(false);
                if(err.response.status === 400) toast.error(err.response.data)
            })
    };


    const updateForm = () => (
        <div className="row">
            <div className="col-sm-12">
                <div className="box">
                    <div style={{marginTop: '30px'}} className="box-title">
                        <h3 style={{fontWeight: '600'}}>Update Category Name</h3>
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

                                    // value={name}
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
                                        {loading ? <h2 style={{fontWeight: "800"}}>Loading...</h2> : <h2 style={{fontWeight: "800"}}>Update Category</h2> }
                                    </div>


                                    <div className="box-account box-info">

                                        <div className="box-head">
                                            <h4>Administrator</h4>
                                        </div>
                                        {updateForm()}
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


export default CategoryUpdate;