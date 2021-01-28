import React from 'react';


const SubUpdateForm = ({handleSubmit, name, setName, categories, setCategory, parent}) => (
    <div className="row">
        <div className="col-sm-12">
            <div className="box">
                <div style={{marginTop: '30px'}} className="box-title">
                    <h3 style={{fontWeight: '600'}}>Update Sub Category Name</h3>
                    {/*<a href="#">Edit</a>*/}
                </div>
                <div className="box-content">
                    <form onSubmit={handleSubmit} style={{marginTop: '35px'}}>
                        <div className="form-group">
                            {/*<label>Parent Category</label>*/}
                            <select
                                name="category"
                                onChange={(e) => setCategory(e.target.value)}
                                className="form-control"
                                style={{margin: "5px auto 20px auto", width: '50%', textAlignLast: "center"}}
                            >
                                <option>Select Category</option>
                                {categories.length > 0 &&
                                categories.map((c) => (
                                    <option
                                        key={c._id}
                                        value={c._id}
                                        // selected={c._id === parent}
                                    >
                                        {c.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className="form-group">
                            {/*<label>Sub Category</label>*/}
                            <input
                                type="text"
                                onChange={(e) => setName(e.target.value)}
                                className="form-control"
                                placeholder="Sub Category Name"
                                // value={name}
                                required
                                style={{margin: "20px auto 20px auto", width: '50%', textAlign: "center"}}
                            />
                        </div>
                        <button
                            type='submit'
                            className="btn btn-solid"
                            style={{marginTop: "20px"}}
                        >
                            Save
                        </button>

                    </form>
                </div>
            </div>
        </div>
    </div>
);

export default SubUpdateForm;