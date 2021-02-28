import React, {useState, useEffect} from 'react';
import Breadcrumb from "../../../common/breadcrumb";
import {Link} from "react-router-dom";
import {auth} from "../../../../firebase";
import {toast} from "react-toastify";
import {useSelector, useDispatch} from "react-redux";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {getCoupons, removeCoupon, createCoupon} from "../../../../functions/coupon";
import {DeleteOutlined, EditOutlined} from '@ant-design/icons';
import CouponForm from "../../../forms/CouponForm";


const createCouponPage = (props) => {
    const {user} = useSelector(state => ({...state}));

    const [name, setName] = useState('');
    const [expiry, setExpiry] = useState('');
    const [discount, setDiscount] = useState('');
    const [loading, setLoading] = useState(false);
    const [coupons, setCoupons] = useState([]);



    useEffect(() => {
        loadAllCoupons();
    }, []);

    const loadAllCoupons = () => getCoupons().then((res) => setCoupons(res.data));

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        // console.table(name, expiry, discount);
        createCoupon({ name, expiry, discount }, user.token)
            .then((res) => {
                setLoading(false);
                loadAllCoupons(); // load all coupons
                setName("");
                setDiscount("");
                setExpiry("");
                toast.success(`"${res.data.name}" is created`);
            })
            .catch((err) => console.log("create coupon err", err));
    };

    const handleRemove = couponId => {

        if(window.confirm("Delete?")) {
            setLoading(true);
            removeCoupon(couponId, user.token)

                .then((res) => {
                    loadAllCoupons();
                    setLoading(false);
                    toast.error(`Coupon ${res.data.name} deleted`);

                })
                .catch((err) => {
                    if(err.response.status === 400) {
                        setLoading(false);
                        toast.error(err.response.data);
                    }
                });
        }
    };

    // /*{Step 3}*/
    // const handleSearchChange = (e) => {
    //     e.preventDefault();
    //     setKeyword(e.target.value.toLowerCase());
    // };
    //
    // /*{Step 4}*/
    // const searched = (keyword) => (c) => c.name.toLowerCase().includes(keyword);

    return (
        <div>
            <Breadcrumb title={'Category'}/>


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
                                        <li>
                                            <Link to={`${process.env.PUBLIC_URL}/admin/sub`}>Sub Category</Link>
                                        </li>
                                        <li className="active">
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
                                        {loading ? <h2 style={{fontWeight: "800"}}>Loading...</h2> : <h2 style={{fontWeight: "800"}}>Coupon</h2> }
                                    </div>


                                    <div className="box-account box-info">

                                        <div className="box-head">
                                            <h4>Administrator</h4>
                                        </div>

                                        <CouponForm
                                            handleSubmit={handleSubmit}
                                            name={name}
                                            discount={discount}
                                            setDiscount={setDiscount}
                                            expiry={expiry}
                                            setExpiry={setExpiry}
                                            setName={setName}/>


                                        <div className="row" style={{marginTop: "30px"}}>
                                            <div className="col-sm-12">
                                                <div className="box">
                                                    <div style={{marginTop: '30px'}} className="box-title">
                                                        <h3 style={{fontWeight: '600'}}>Coupons</h3>
                                                        {/*<a href="#">Edit</a>*/}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

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

                                        <table className='table table-bordered'>
                                            <thead className='thead-light'>
                                                <tr>
                                                    <th scope='col'>Name</th>
                                                    <th scope='col'>Expires</th>
                                                    <th scope='col'>Discount</th>
                                                    <th scope='col'>Action</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                            {coupons.map((c) => (
                                                <tr key={c._id}>
                                                    <td>{c.name}</td>
                                                    <td>{new Date(c.expiry).toLocaleDateString()}</td>
                                                    <td>{c.discount}%</td>
                                                    <td>
                                                        <DeleteOutlined
                                                            onClick={() => handleRemove(c._id)}
                                                            className='text-danger pointer'/>
                                                    </td>
                                                </tr>
                                            ))}
                                            </tbody>
                                        </table>
                                        {/*<h4 style={{marginTop: "50px"}}>*/}

                                            {/* Step 5 */}

                                            {/*{coupons.map((c) => (*/}
                                            {/*    <div className="alert alert-secondary" style={{ textAlign: "left"}} key={c._id}>*/}
                                            {/*        {c.name}*/}
                                            {/*        <div className="btn btn-sm" style={{float: "right", marginTop: "-5px"}}>*/}
                                            {/*            <Link style={{marginRight: '15px'}} to={`${process.env.PUBLIC_URL}/admin/category/${c.slug}`}>*/}
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


export default createCouponPage;