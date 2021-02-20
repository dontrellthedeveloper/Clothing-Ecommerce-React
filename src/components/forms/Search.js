import React from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { SearchOutlined } from "@ant-design/icons";

const SearchContainer = () => {
    const dispatch = useDispatch();
    const { search } = useSelector((state) => ({ ...state }));
    const { text } = search;

    const openSearch = () => {
        document.getElementById("search-overlay").style.display = "block";
    };

    const closeSearch = () => {
        document.getElementById("search-overlay").style.display = "none";
    };

    const history = useHistory();

    const handleChange = (e) => {
        dispatch({
            type: "SEARCH_QUERY",
            payload: { text: e.target.value },
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        history.push(`/shop?${text}`);
        closeSearch();
    };

    return (
        <>
            <li className="onhover-div mobile-search">
                <div><img src={`${process.env.PUBLIC_URL}/assets/images/icon/search.png`} onClick={openSearch} className="img-fluid" alt="" />
                    <i className="fa fa-search" onClick={openSearch}></i></div>

            </li>
            <div id="search-overlay" className="search-overlay">
                <div>
                    <span className="closebtn" onClick={closeSearch} title="Close Overlay">×</span>
                    <div className="overlay-content">
                        <div className="container">
                            <div className="row">
                                <div className="col-xl-12">
                                    <form onSubmit={handleSubmit}>
                                        <div className="form-group">
                                            <input type="search"
                                                   value={text}
                                                   className="form-control"
                                                   id="exampleInputPassword1"
                                                   placeholder="Search"
                                                   onChange={handleChange}
                                            />
                                        </div>
                                        <button onClick={handleSubmit} className="btn btn-primary"><i className="fa fa-search"></i></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>

    );
};

export default SearchContainer;