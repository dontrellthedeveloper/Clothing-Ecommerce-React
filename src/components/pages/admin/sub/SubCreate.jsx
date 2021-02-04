import React, {useState, useEffect} from 'react';
import Breadcrumb from "../../../common/breadcrumb";
import {Link} from "react-router-dom";
import {auth} from "../../../../firebase";
import {toast} from "react-toastify";
import {useSelector} from "react-redux";
import {createSub, getSubs, removeSub, getSub} from "../../../../functions/sub";
import {getCategories} from "../../../../functions/category";
import {DeleteOutlined, EditOutlined} from '@ant-design/icons';
import SubCategoryForm from "../../../forms/SubCategoryForm";


const SubCreate = (props) => {
    const {user} = useSelector(state => ({...state}));

    const [name, setName] = useState('');
    const [loading, setLoading] = useState(false);
    const [categories, setCategories] = useState([]);
    const [subs, setSubs] = useState([]);
    const [category, setCategory] = useState("");

    //step 1
    const [keyword, setKeyword] = useState("");

    useEffect(() => {
        loadCategories();
        loadSubs()
    }, []);

    const loadCategories = () => {
        getCategories().then((c) => setCategories(c.data));
    };

    const loadSubs = () => {
        getSubs().then((s) => setSubs(s.data));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        createSub({name, parent: category}, user.token)
            .then(res => {
                setLoading(false);
                setName("");
                toast.success(`"${res.data.name}" is created`);
                loadSubs();
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
            removeSub(slug, user.token)
                .then((res) => {
                    setLoading(false);
                    toast.error(`${res.data.name} deleted`);
                    loadSubs();

                })
                .catch((err) => {
                    if(err.response.status === 400) {
                        setLoading(false);
                        toast.error(err.response.data);
                    }
                });
        }
    };

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
                                        <li>
                                            <Link to={`${process.env.PUBLIC_URL}/admin/product`}>Product</Link>
                                        </li>
                                        <li>
                                            <Link to={`${process.env.PUBLIC_URL}/admin/products`}>Products</Link>
                                        </li>
                                        <li >
                                            <Link to={`${process.env.PUBLIC_URL}/admin/category`}>Category</Link>
                                        </li>
                                        <li className="active">
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
                                        {loading ? <h2 style={{fontWeight: "800"}}>Loading...</h2> : <h2 style={{fontWeight: "800"}}>Sub Categories</h2> }
                                    </div>


                                    <div className="box-account box-info">

                                        <div className="box-head">
                                            <h4>Administrator</h4>
                                        </div>


                                        <SubCategoryForm
                                            handleSubmit={handleSubmit}
                                            name={name}
                                            setName={setName}
                                            categories={categories}
                                            setCategory={setCategory}
                                        />

                                        <div className="row" style={{marginTop: "30px"}}>
                                            <div className="col-sm-12">
                                                <div className="box">
                                                    <div style={{marginTop: '30px'}} className="box-title">
                                                        <h3 style={{fontWeight: '600'}}>Sub Categories</h3>
                                                        {/*<a href="#">Edit</a>*/}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/*{JSON.stringify(category)}*/}

                                        {/*{Step 2}*/}

                                        {/*<label style={{marginTop: "40px"}}>Filter Categories</label>*/}
                                        <input
                                            type="search"
                                            placeholder="Filter Sub Category"
                                            value={keyword}
                                            onChange={handleSearchChange}
                                            className="form-control mb-4"
                                            style={{margin: "40px auto 50px auto", width: '50%', textAlign: "center"}}
                                        />

                                        <h4 style={{marginTop: "40px"}}>

                                            {/* Step 5 */}
                                            {subs.filter(searched(keyword)).map((s) => (
                                                <div className="alert alert-secondary" style={{ textAlign: "left"}} key={s._id}>
                                                    {s.name}
                                                    <div className="btn btn-sm" style={{float: "right", marginTop: "-5px"}}>
                                                        <Link style={{marginRight: '15px'}} to={`${process.env.PUBLIC_URL}/admin/sub/${s.slug}`}>
                                                            <EditOutlined className="text-secondary"/>
                                                        </Link>
                                                        <span onClick={() => handeRemove(s.slug)} style={{marginRight: '5px'}}>
                                                            <DeleteOutlined className="text-danger"/>
                                                        </span>
                                                    </div>
                                                </div>
                                            ))}
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


export default SubCreate;