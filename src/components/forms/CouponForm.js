import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const CouponForm = ({handleSubmit, name, setName, discount, setDiscount, expiry, setExpiry}) => (
    <div className="row">
        <div className="col-sm-12">
            <div className="box">
                <div style={{marginTop: '30px'}} className="box-title">
                    <h3 style={{fontWeight: '600'}}>Create Coupon</h3>
                    {/*<a href="#">Edit</a>*/}
                </div>
                <div className="box-content">
                    <form onSubmit={handleSubmit} style={{marginTop: '35px'}}>
                        <div className="form-group">
                            {/*<label>Category Name</label>*/}
                            <input
                                type="text"
                                onChange={(e) => setName(e.target.value)}
                                className="form-control"
                                placeholder="Coupon Name"
                                value={name}
                                required
                                style={{margin: "0 auto 40px auto", width: '50%', textAlign: "center"}}
                            />
                        </div>
                        <div className="form-group">
                            {/*<label>Category Name</label>*/}
                            <input
                                type="text"
                                onChange={(e) => setDiscount(e.target.value)}
                                className="form-control"
                                placeholder="Discount %"
                                value={discount}
                                required
                                style={{margin: "0 auto 40px auto", width: '50%', textAlign: "center"}}
                            />
                        </div>
                        <div className="form-group">
                            <label>Click below to select expire date</label>
                            <br/>
                            <DatePicker
                                onChange={(date) => setExpiry(date)}
                                className="form-control"
                                placeholder="Expires"
                                value={expiry}
                                selected={expiry}
                                required
                                style={{margin: "0 auto 40px auto", width: '50%', textAlignLast: "center"}}
                            />
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
);

export default CouponForm;