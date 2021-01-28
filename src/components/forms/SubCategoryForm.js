import React from 'react';


const SubCategoryForm = ({handleSubmit, name, setName}) => (
    <div className="row">
        <div className="col-sm-12">
            <div className="box">
                <div style={{marginTop: '30px'}} className="box-title">
                    <h3 style={{fontWeight: '600'}}>Create Sub Category</h3>
                    {/*<a href="#">Edit</a>*/}
                </div>
                <div className="box-content">
                    <form onSubmit={handleSubmit} style={{marginTop: '35px'}}>
                        <div className="form-group">
                            <label>Sub Category Name</label>
                            <input
                                type="text"
                                onChange={(e) => setName(e.target.value)}
                                className="form-control"
                                placeholder=""
                                value={name}
                                required
                                style={{margin: "5px auto 20px auto", width: '50%', textAlign: "center"}}
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

export default SubCategoryForm;