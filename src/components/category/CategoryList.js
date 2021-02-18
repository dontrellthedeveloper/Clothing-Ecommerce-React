import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getCategories } from "../../functions/category";
import Slider from 'react-slick';
import {Product6} from "../../services/script";

const CategoryList = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true);
        getCategories().then((c) => {
            setCategories(c.data);
            setLoading(false);
        });
    }, []);


    const showCategories = () =>
        categories.map((c) => (
            /*
            <div
                key={c._id}
                className="col btn btn-outlined-primary btn-lg btn-block btn-raised m-3"
            >
                <Link to={`/category/${c.slug}`}>{c.name}</Link>
            </div>

            */

            <div key={c._id} className="col-md-4">
                <Link to={`/category/${c.slug}`}>
                    <div className="collection-banner text-center">
                        <div className="img-part">
                            <img src={`${process.env.PUBLIC_URL}/assets/images/sub-banner-category.jpg`}
                                 className="img-fluid blur-up lazyload bg-img" alt="" />
                        </div>
                        <div className="contain-banner banner-3">
                            <div style={{margin: '0 auto'}}>
                                {/*<h4>10% off</h4>*/}
                                <h2 >{c.name}</h2>
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        ));

    return (
        <section className="banner-goggles ratio2_1" style={{paddingTop: '50px'}}>
            {/*Paragraph*/}
            {/*<div className="title1" >*/}
            {/*    <h4>select</h4>*/}
            {/*    <h2 className="title-inner1">sub category</h2>*/}
            {/*</div>*/}
            {/*Paragraph End*/}
            <div className="container">
                <Slider {...Product6} className="row partition3">
                {loading ? (
                    <h4 className="text-center">Loading...</h4>
                ) : (
                    showCategories()
                )}
                </Slider>
            </div>
        </section>
    );
}

export default CategoryList;