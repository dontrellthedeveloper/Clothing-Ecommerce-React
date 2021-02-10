import React, {useState, useEffect} from 'react';
import Slider from 'react-slick';
import {Link} from 'react-router-dom'
import {getProducts} from "../../../functions/product";
import defaultImage from "../../../images/default-product-image.png";
import {Product4, Product5} from '../../../services/script'


// class MultiSliderItem extends Component {
const MultiSliderItem = () => {
    // render (){
    //     const {items, symbol, NoOfProducts} = this.props;
    //
    //     var arrays = [];
    //     while (items.length > 0) {
    //         arrays.push(items.splice(0, NoOfProducts));
    //     }




    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);


    // componentDidMount()
    useEffect(() => {
        loadAllProducts();
    }, []);

    const  loadAllProducts = () => {
        // sort, order, limit
        getProducts('createdAt', 'desc',4)
            .then(res => {
                setProducts(res.data);
                setLoading(false);
            })
    };

    // const settings = {
    //     slidesToScroll: 3,
    // };





        return (
                <Slider className="offer-slider slide-1">
                    {products.map((product) =>
                        <div key={product._id}>
                            {products.map((product) =>
                                <div className="media" key={product._id}>
                                    <Link to={`${process.env.PUBLIC_URL}/left-sidebar/product/`}>
                                        <img className="img-fluid" src={product.images && product.images.length ? product.images[0].url : defaultImage} alt="" />
                                    </Link>
                                    <div className="media-body align-self-center">
                                        <div className="rating">
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                            <i className="fa fa-star"></i>
                                        </div>
                                        <Link to={`${process.env.PUBLIC_URL}/left-sidebar/product/`}><h6>{product.title}</h6></Link>
                                        <h4>
                                            {/*{symbol}{product.price-(product.price*product.discount/100)}*/}
                                            {/*<del><span className="money">{symbol}{product.price}</span></del>*/}
                                            {product.price}
                                        </h4>
                                    </div>
                                </div>
                            )}
                        </div>
                    )}
                </Slider>
        )
    };
// }

export default MultiSliderItem;
