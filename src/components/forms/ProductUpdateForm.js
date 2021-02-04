import React from 'react';
import {Select} from 'antd';
import FileUpload from "./FileUpload";
import {LoadingOutlined} from '@ant-design/icons';

const {Option} = Select;

const ProductForm = () => {


    // const {
    //     title,
    //     description,
    //     price,
    //     categories,
    //     category,
    //     sub,
    //     shipping,
    //     quantity,
    //     images,
    //     colors,
    //     brands,
    //     color,
    //     brand
    // } = values;

    // const fileUploadAndResize = () => {
    //
    // };

    return (
        <div className="row">
            <div className="col-sm-12">
                <div className="box">
                    <div style={{marginTop: '30px'}} className="box-title">
                        <h3 style={{fontWeight: '600'}}>Product Update</h3>
                        {/*<a href="#">Edit</a>*/}
                    </div>
                    <div className="box-content">



                        <form
                            // onSubmit={handleSubmit}
                            style={{marginTop: '45px'}}>
                            <div className="form-group">
                                {/*<label>Title</label>*/}
                                <input
                                    type="text"
                                    name="title"
                                    // onChange={handleChange}
                                    className="form-control"
                                    placeholder="Product Title"
                                    // value={title}
                                    required
                                    style={{margin: "20px auto 30px auto", width: '50%', textAlign: "center"}}
                                />
                            </div>
                            <div className="form-group">
                                {/*<label>Description</label>*/}
                                <input
                                    type="text"
                                    name="description"
                                    // onChange={handleChange}
                                    className="form-control"
                                    placeholder="Product Description"
                                    // value={description}
                                    required
                                    style={{margin: "20px auto 30px auto", width: '50%', textAlign: "center"}}
                                />
                            </div>
                            <div className="form-group">
                                {/*<label>Price</label>*/}
                                <input
                                    type="number"
                                    name="price"
                                    // onChange={handleChange}
                                    className="form-control"
                                    placeholder="Product Price"
                                    // value={price}
                                    required
                                    style={{margin: "20px auto 30px auto", width: '50%', textAlign: "center"}}
                                />
                            </div>
                            <div className="form-group">
                                {/*<label>Shipping</label>*/}
                                <select
                                    name="shipping"
                                    // onChange={handleChange}
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
                                    // onChange={handleChange}
                                    className="form-control"
                                    placeholder="Product Quantity"
                                    // value={quantity}
                                    required
                                    style={{margin: "20px auto 30px auto", width: '50%', textAlign: "center"}}
                                />
                            </div>
                            <div className="form-group">
                                {/*<label>Color</label>*/}
                                <select
                                    name="color"
                                    // onChange={handleChange}
                                    className="form-control"

                                    style={{margin: "20px auto 30px auto", width: '50%', textAlignLast: "center"}}
                                >
                                    <option>Product Color</option>
                                    {/*{colors.map(c => <option key={c} value={c}>{c}</option>)}*/}
                                </select>
                            </div>

                            <div className="form-group">
                                {/*<label>Brand</label>*/}
                                <select
                                    name="brand"
                                    // onChange={handleChange}
                                    className="form-control"

                                    style={{margin: "20px auto 30px auto", width: '50%', textAlignLast: "center"}}
                                >
                                    <option>Product Brand</option>
                                    {/*{brands.map(b => <option key={b} value={b}>{b}</option>)}*/}
                                </select>
                            </div>


                            <div className="box">
                                <div style={{marginBottom: '20px'}} className="box-title">
                                </div>
                            </div>

                            <div className="box">
                                <div style={{marginBottom: '20px', borderBottom: 'none'}} className="box-title">
                                    <h3 style={{fontWeight: '600'}}>Category</h3>
                                </div>
                            </div>



                            {/*<div className="form-group">*/}
                            {/*    /!*<label>Parent Category</label>*!/*/}
                            {/*    <select*/}
                            {/*        name="category"*/}
                            {/*        onChange={handleCategoryChange}*/}
                            {/*        className="form-control"*/}
                            {/*        style={{margin: "10px auto 30px auto", width: '50%', textAlignLast: "center"}}*/}
                            {/*    >*/}
                            {/*        <option>Select Category</option>*/}
                            {/*        {categories.length > 0 &&*/}
                            {/*        categories.map((c) => (*/}
                            {/*            <option key={c._id} value={c._id}>*/}
                            {/*                {c.name}*/}
                            {/*            </option>*/}
                            {/*        ))}*/}
                            {/*    </select>*/}
                            {/*</div>*/}

                            {/*{showSub && <div className="form-group">*/}
                            {/*    <select*/}
                            {/*        // mode="multiple"*/}
                            {/*        // value={subs}*/}
                            {/*        // placeholder="Select Sub Category"*/}
                            {/*        // onChange={(value) => setValues({...values, subs: value})}*/}
                            {/*        name={sub}*/}
                            {/*        onChange={handleSubChange}*/}
                            {/*        className="form-control"*/}
                            {/*        style={{margin: "5px auto 30px auto", width: '50%', textAlignLast: "center"}}*/}
                            {/*    >*/}
                            {/*        <option>Select Sub Category</option>*/}
                            {/*        {subOptions.length &&*/}
                            {/*        subOptions.map((s) => (*/}
                            {/*            <option key={s._id} value={s._id}>*/}
                            {/*                {s.name}*/}
                            {/*            </option>*/}
                            {/*        ))}*/}

                            {/*        /!*<Option value="two">option two</Option>*!/*/}
                            {/*    </select>*/}
                            {/*</div>*/}
                            {/*}*/}

                            {/*<div className="box">*/}
                            {/*    <div style={{marginBottom: '10px'}} className="box-title">*/}
                            {/*    </div>*/}
                            {/*</div>*/}


                            {/*<div className="box">*/}
                            {/*    <div style={{marginBottom: '30px', borderBottom: 'none'}} className="box-title">*/}
                            {/*        {loading ? <LoadingOutlined className="h1"/> : <h3 style={{fontWeight: '600'}}>Images</h3>}*/}
                            {/*    </div>*/}
                            {/*</div>*/}

                            {/*{JSON.stringify(values.images)}*/}

                            {/*<FileUpload*/}
                            {/*    values={values}*/}
                            {/*    setValues={setValues}*/}
                            {/*    setLoading={setLoading}*/}
                            {/*/>*/}



                            <button
                                type='submit'
                                className="btn btn-solid"
                                style={{marginTop: "30px", marginBottom: "30px"}}
                            >
                                Save
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductForm;