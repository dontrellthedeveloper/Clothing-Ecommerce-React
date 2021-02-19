import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Modal from 'react-responsive-modal';
import defaultImage from "../../../images/default-product-image.png";
import {showAverage} from "../../../functions/rating";


const ProductListItem = ({slug,product, symbol, onAddToCartClicked, onAddToWishlistClicked, onAddToCompareClicked}) => {

    const [open, isOpen] = useState(false);
    const [stock, setStock] = useState('InStock');
    const [quantity, setQuantity] = useState(1);
    const [image, setImage] = useState('');





    const onOpenModal = () => {
        isOpen(true );
    };

    const onCloseModal = () => {
        isOpen(false);
    };

    const onClickHandle = (img) => {
        setImage(img);
    };

    const minusQty = () => {
        if(quantity > 1) {
            setStock('InStock');
            setQuantity(quantity - 1);
        }
    };

    const plusQty = () => {
        if(product.stock >= quantity) {
            setQuantity(quantity+1)
        }else{
            setQuantity('Out of Stock !');
        }
    };

    const changeQty = (e) => {
       setQuantity(parseInt(e.target.value));
    };


    // render() {
    //     const {product, symbol, onAddToCartClicked, onAddToWishlistClicked, onAddToCompareClicked} = this.props;
    //     const {open} = this.state;

            // let RatingStars = []
            // for(var i = 0; i < product.rating; i++) {
            //     RatingStars.push(<i className="fa fa-star" key={i}></i>)
            // }

        return (

                    <div className="product-box" style={{textAlign: 'center'}}>
                        <div className="img-wrapper">
                            <div className="front">
                                <Link to={`${process.env.PUBLIC_URL}/product/${product.slug}`} ><img
                                    src={product.images && product.images.length ? product.images[0].url : defaultImage}
                                    style={{
                                        width: "100%",
                                        // padding: "20px",
                                        height: "25vw",
                                        // border: '1px solid #e0e0e0',
                                        objectFit: 'cover'}}
                                    className="img-fluid"
                                    alt="" /></Link>
                            </div>
                            <div className="cart-info cart-wrap" style={{right: '3%', bottom: '3%'}}>
                                <button title="Add to cart" onClick={() => onAddToCartClicked(product, 1)}>
                                    <i className="fa fa-shopping-cart" aria-hidden="true"
                                    style={{color: '#79868F', border: '1px solid #fff', borderRadius: '50%', backgroundColor: '#fff'}}
                                    ></i>
                                </button>
                                <a href="javascript:void(0)" title="Add to Wishlist" onClick={onAddToWishlistClicked} >
                                    <i className="fa fa-heart" aria-hidden="true"
                                       style={{color: '#79868F', border: '1px solid #fff', borderRadius: '50%', backgroundColor: '#fff'}}
                                    ></i>
                                </a>
                                <a href="javascript:void(0)" data-toggle="modal"
                                   data-target="#quick-view"
                                   title="Quick View"
                                   onClick={onOpenModal}><i className="fa fa-search" aria-hidden="true"
                                                            style={{color: '#79868F', border: '1px solid #fff', borderRadius: '50%', backgroundColor: '#fff'}}
                                ></i></a>
                                {/*<Link to={`${process.env.PUBLIC_URL}/compare`} title="Compare" onClick={onAddToCompareClicked}>*/}
                                {/*    <i className="fa fa-refresh" aria-hidden="true"></i></Link>*/}
                            </div>
                            {/*{product.variants?*/}
                            {/*<ul className="product-thumb-list">*/}
                            {/*    {product.variants.map((vari, i) =>*/}
                            {/*        <li className={`grid_thumb_img ${(vari.images === this.state.image)?'active':''}`} key={i}>*/}
                            {/*            <a href="javascript:void(0)" title="Add to Wishlist">*/}
                            {/*                <img src={`${vari.images}`} onClick={() => this.onClickHandle(vari.images)} />*/}
                            {/*            </a>*/}
                            {/*        </li>)*/}
                            {/*    }*/}
                            {/*</ul>:''}*/}

                        </div>
                        <div className="product-detail">
                            <div>

                                <Link to={`${process.env.PUBLIC_URL}/product/${slug}`}>
                                    <h6>{product.title}</h6>
                                </Link>
                                <h4>
                                    {/*{symbol}{product.price-(product.price*product.discount/100)}*/}
                                    {/*<del><span className="money">{symbol}{product.price}</span></del>*/}
                                    {product.price}
                                </h4>
                                <div className="rating">
                                    {/*{RatingStars}*/}
                                    {product && product.ratings && product.ratings.length > 0 ? (
                                        showAverage(product)
                                    ) : (
                                        <div className="text-center"></div>
                                    )}
                                </div>
                                {/*{product.variants?*/}
                                {/*<ul className="color-variant">*/}
                                {/*    {product.variants.map((vari, i) => {*/}
                                {/*        return (*/}
                                {/*            <li className={vari.color} key={i} title={vari.color} onClick={() => this.onClickHandle(vari.images)}></li>)*/}
                                {/*    })}*/}
                                {/*</ul>:''}*/}
                            </div>
                        </div>
                    <Modal open={open} onClose={onCloseModal} center>
                            <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                                <div className="modal-content quick-view-modal">
                                    <div className="modal-body">
                                        <div className="row">
                                            <div className="col-lg-6  col-xs-12">
                                                <div className="quick-view-img">
                                                    <img src={product.images && product.images.length ? product.images[0].url : defaultImage} alt="" className="img-fluid" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6 rtl-text">
                                                <div className="product-right">
                                                    <h2> {product.title} </h2>
                                                    <h3>
                                                        {/*{symbol}{product.price-(product.price*product.discount/100)}*/}
                                                        {/*<del><span className="money">{symbol}{product.price}</span></del>*/}
                                                        {product.price}
                                                    </h3>
                                                    {/*{product.variants?*/}
                                                    {/*<ul className="color-variant">*/}
                                                    {/*    {product.variants.map((vari, i) =>*/}
                                                    {/*        <li className={vari.color} key={i} title={vari.color} onClick={() => this.onClickHandle(vari.images)}></li>)*/}
                                                    {/*    }*/}
                                                    {/*</ul>:''}*/}
                                                    <div className="border-product">
                                                        <h6 className="product-title">product details</h6>
                                                        <p>{product.description}</p>
                                                    </div>
                                                    <div className="product-description border-product">
                                                        {/*{product.size?*/}
                                                        {/*<div className="size-box">*/}
                                                        {/*    <ul>*/}
                                                        {/*        {product.size.map((size, i) => {*/}
                                                        {/*            return <li key={i}><a href="#">{size}</a></li>*/}
                                                        {/*        })}*/}
                                                        {/*    </ul>*/}
                                                        {/*</div>:''}*/}
                                                        <h6 className="product-title">quantity</h6>
                                                        <div className="qty-box">
                                                            <div className="input-group">
                                                              <span className="input-group-prepend">
                                                                <button type="button" className="btn quantity-left-minus" onClick={minusQty} data-type="minus" data-field="">
                                                                 <i className="fa fa-angle-left"></i>
                                                                </button>
                                                              </span>
                                                                <input type="text" name="quantity" value={quantity}  onChange={changeQty} className="form-control input-number" />
                                                                <span className="input-group-prepend">
                                                                <button type="button" className="btn quantity-right-plus" onClick={plusQty} data-type="plus" data-field="">
                                                                <i className="fa fa-angle-right"></i>
                                                                </button>
                                                               </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className="product-buttons">
                                                        <button  className="btn btn-solid" onClick={() => onAddToCartClicked(product, quantity)} >add to cart</button>
                                                        <Link to={`${process.env.PUBLIC_URL}/product/${product.slug}`} className="btn btn-solid">view detail</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                    </Modal>
                </div>
        )
    };


export default ProductListItem;