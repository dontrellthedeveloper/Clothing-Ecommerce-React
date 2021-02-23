import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import Modal from 'react-responsive-modal';
import defaultImage from "../../../../images/default-product-image.png";
import {showAverage} from "../../../../functions/rating";

// // class ProductStyleFive extends Component {
// const ProductStyleFive = ({props, product}) => {
//     const [open, isOpen] = useState(false);
//
//     const {images, title, description, price, slug} = product;
//
//     const onOpenModal = () => {
//         isOpen(true );
//     };
//
//     const onCloseModal = () => {
//         isOpen(false );
//     };
//     //
//     // onClickHandle(img) {
//     //     this.setState({ image : img} );
//     // }
//     //
//     // minusQty = () => {
//     //     if(this.state.quantity > 1) {
//     //         this.setState({stock: 'InStock'})
//     //         this.setState({quantity: this.state.quantity - 1})
//     //     }
//     // }
//     //
//     // plusQty = () => {
//     //     if(this.props.product.stock >= this.state.quantity) {
//     //         this.setState({quantity: this.state.quantity+1})
//     //     }else{
//     //         this.setState({stock: 'Out of Stock !'})
//     //     }
//     // }
//     // changeQty = (e) => {
//     //     this.setState({ quantity: parseInt(e.target.value) })
//     // }
//
//     // render() {
//     //     const {product, symbol, onAddToCartClicked, onAddToWishlistClicked, onAddToCompareClicked} = this.props;
//     //     const {open} = this.state;
//     //
//     //     let RatingStars = []
//     //     for(var i = 0; i < product.rating; i++) {
//     //         RatingStars.push(<i className="fa fa-star" key={i}></i>)
//     //     }
//
//         return (
//
//             <div className="product-box product-wrap"
//                  style={{width: "220px", margin: '20px', display: 'inline-block'}}
//             >
//                 <div className="img-wrapper">
//                     <div className="lable-block">
//                         {/*{(product.new == true)? <span className="lable3">new</span> : ''}*/}
//                         {/*{(product.sale == true)? <span className="lable4">on sale</span> : ''}*/}
//                     </div>
//                     <div className="front">
//                         <Link to={`${process.env.PUBLIC_URL}/product/${slug}`} ><img
//                             src={images && images.length ? images[0].url : defaultImage}
//                             style={{
//                                 width: "100%",
//                                 // padding: "20px",
//                                 height: "25vw",
//                                 // border: '1px solid #e0e0e0',
//                                 objectFit: 'cover'}}
//                             className="img-fluid"
//                             alt="" /></Link>
//                         {/*<img src={product.images && product.images.length ? product.images[0].url : defaultImage}*/}
//                         {/*     className="img-fluid lazyload bg-img"*/}
//                         {/*     style={{borderBottom: "1px solid #e0e0e0",*/}
//                         {/*         padding: "20px",*/}
//                         {/*         width: "100%",*/}
//                         {/*         height: "15vw",*/}
//                         {/*         objectFit: "cover"*/}
//                         {/*     }}*/}
//                         {/*     alt="" />*/}
//                     </div>
//                     <div className="back">
//
//                         {/*<Link to={`${process.env.PUBLIC_URL}/left-sidebar/product/${product.id}`} ><img*/}
//                         {/*    src={*/}
//                         {/*        product.variants?*/}
//                         {/*            this.state.image?this.state.image:product.variants[0].images*/}
//                         {/*            :product.pictures[0]*/}
//                         {/*    }*/}
//                         {/*    className="img-fluid"*/}
//                         {/*    alt="" /></Link>*/}
//                     </div>
//                     <div className="cart-box">
//                         <button title="Add to cart"
//                                 // onClick={() => onAddToCartClicked(product, 1)}
//                         >
//                             <i className="fa fa-shopping-cart" aria-hidden="true"></i>
//                         </button>
//                         <a
//                             href="javascript:void(0)"
//                             title="Add to Wishlist"
//                             // onClick={onAddToWishlistClicked}
//                         >
//                             <i className="fa fa-heart" aria-hidden="true"></i>
//                         </a>
//                         <a href="javascript:void(0)" data-toggle="modal"
//                            data-target="#quick-view"
//                            title="Quick View"
//                            onClick={onOpenModal}
//                         ><i className="fa fa-search" aria-hidden="true"></i></a>
//                         {/*<Link*/}
//                         {/*    to={`${process.env.PUBLIC_URL}/compare`}*/}
//                         {/*    title="Compare"*/}
//                         {/*      onClick={onAddToCompareClicked}*/}
//                         {/*>*/}
//                         {/*    <i className="fa fa-refresh" aria-hidden="true"></i></Link>*/}
//                     </div>
//                 </div>
//                 <div className="product-detail  text-center">
//                     <div>
//                         {/*<div className="rating">*/}
//                         {/*    {RatingStars}*/}
//                         {/*</div>*/}
//                         <Link to={`${process.env.PUBLIC_URL}/left-sidebar/product/`}>
//                             <h6>{title}</h6>
//                         </Link>
//                         <h4>
//                             {/*{symbol}{product.price-(product.price*product.discount/100)}*/}
//                             ${price}
//                         </h4>
//                         {/*{product.variants?*/}
//                         {/*<ul className="color-variant">*/}
//                         {/*    {product.variants.map((vari, i) => {*/}
//                         {/*        return (*/}
//                         {/*            <li className={vari.color} key={i} title={vari.color} onClick={() => this.onClickHandle(vari.images)}></li>)*/}
//                         {/*    })}*/}
//                         {/*</ul>:''}*/}
//                     </div>
//                 </div>
//                 <Modal open={open} onClose={onCloseModal} center>
//                     <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
//                         <div className="modal-content quick-view-modal">
//                             <div className="modal-body">
//                                 <div className="row">
//                                     <div className="col-lg-6  col-xs-12">
//                                         <div className="quick-view-img">
//                                             <img src={images && images.length ? images[0].url : defaultImage} alt="" className="img-fluid" />
//                                         </div>
//                                     </div>
//                                     <div className="col-lg-6 rtl-text">
//                                         <div className="product-right">
//                                             <h2>
//                                                 {title}
//                                             </h2>
//                                             <h3>
//                                                 {/*{symbol}{product.price-(product.price*product.discount/100)}*/}
//                                                 {/*<del><span className="money">{symbol}{product.price}</span></del>*/}
//                                                 {price}
//                                             </h3>
//                                             {/*{product.variants?*/}
//                                             {/*    <ul className="color-variant">*/}
//                                             {/*        {product.variants.map((vari, i) =>*/}
//                                             {/*            <li className={vari.color} key={i} title={vari.color} onClick={() => this.onClickHandle(vari.images)}></li>)*/}
//                                             {/*        }*/}
//                                             {/*    </ul>:''}*/}
//                                             <div className="border-product">
//                                                 <h6 className="product-title">product details</h6>
//                                                 <p>
//                                                     {/*{product.shortDetails}*/}
//                                                     {description}
//                                                 </p>
//                                             </div>
//                                             <div className="product-description border-product">
//                                                 {/*{product.size?*/}
//                                                 {/*    <div className="size-box">*/}
//                                                 {/*        <ul>*/}
//                                                 {/*            {product.size.map((size, i) => {*/}
//                                                 {/*                return <li key={i}><a href="#">{size}</a></li>*/}
//                                                 {/*            })}*/}
//                                                 {/*        </ul>*/}
//                                                 {/*    </div>:''}*/}
//                                                 <h6 className="product-title">quantity</h6>
//                                                 <div className="qty-box">
//                                                     <div className="input-group">
//                                                               <span className="input-group-prepend">
//                                                                 <button type="button"
//                                                                         className="btn quantity-left-minus"
//                                                                         // onClick={this.minusQty}
//                                                                         data-type="minus" data-field="">
//                                                                  <i className="fa fa-angle-left"></i>
//                                                                 </button>
//                                                               </span>
//                                                         <input type="text" name="quantity"
//                                                                // value={this.state.quantity}
//                                                                // onChange={this.changeQty}
//                                                                className="form-control input-number" />
//                                                         <span className="input-group-prepend">
//                                                                 <button type="button" className="btn quantity-right-plus"
//                                                                         // onClick={this.plusQty}
//                                                                         data-type="plus" data-field="">
//                                                                 <i className="fa fa-angle-right"></i>
//                                                                 </button>
//                                                                </span>
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                             <div className="product-buttons">
//                                                 <button  className="btn btn-solid"
//                                                          // onClick={() => onAddToCartClicked(product, this.state.quantity)}
//                                                 >add to cart</button>
//                                                 <Link to={`${process.env.PUBLIC_URL}/product/${slug}`} className="btn btn-solid">view detail</Link>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </Modal>
//             </div>
//         )
//     };
// // }
//
// export default ProductStyleFive;









































































// import React, {Component} from 'react';
// import {Link} from 'react-router-dom';
// import Modal from 'react-responsive-modal';
import _ from "lodash";
import {Tooltip} from "antd";
import {toast} from "react-toastify";


const ProductStyleFive = ({props, product}) => {
    const [open, isOpen] = useState(false);
    const [tooltip, setTooltip] = useState("Click to add");

    const {images, title, description, price, slug} = product;

    const onOpenModal = () => {
        isOpen(true );
    };

    const onCloseModal = () => {
        isOpen(false );
    };

    const handleAddToCart = () => {
      // create cart array
      let cart = [];
      if(typeof window !== 'undefined') {
          // if cart is in localstorage GET it
          if(localStorage.getItem('cart')) {
              cart = JSON.parse(localStorage.getItem('cart'));
          }
          // push new product to cart
          cart.push({
              ...product,
              count: 1,
          });
          // remove duplicates
          let unique = _.uniqWith(cart, _.isEqual);
          // save to local storage
          // console.log('unique', unique)
          localStorage.setItem("cart", JSON.stringify(unique));
          // show tooltip
          toast.success("Added");
      }
    };


        return (

            <div className="product-box product-wrap">
                <div className="img-wrapper">
                    <div className="lable-block">
                        {/*{(product.new == true)? <span className="lable3">new</span> : ''}*/}
                        {/*{(product.sale == true)? <span className="lable4">on sale</span> : ''}*/}
                    </div>
                    <div className="front">
                        <Link to={`${process.env.PUBLIC_URL}/product/${slug}`} ><img
                            src={images && images.length ? images[0].url : defaultImage}
                            style={{
                                width: "100%",
                                // padding: "20px",
                                height: "25vw",
                                // border: '1px solid #e0e0e0',
                                objectFit: 'cover'}}
                            className="img-fluid"
                            alt="" /></Link>
                    </div>
                    <div className="back">
                        {/*<Link to={`${process.env.PUBLIC_URL}/left-sidebar/product/${product.id}`} ><img*/}
                        {/*    src={*/}
                        {/*        product.variants?*/}
                        {/*            this.state.image?this.state.image:product.variants[0].images*/}
                        {/*            :product.pictures[0]*/}
                        {/*    }*/}
                        {/*    className="img-fluid"*/}
                        {/*    alt="" /></Link>*/}
                    </div>
                    <div className="cart-box">

                            <button title={tooltip}
                                    onClick={handleAddToCart}
                            >
                                <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                            </button>


                        <a href="javascript:void(0)" title="Add to favorites"
                           // onClick={onAddToWishlistClicked}
                        >
                            <i className="fa fa-heart" aria-hidden="true"></i>
                        </a>
                        <a href="javascript:void(0)" data-toggle="modal"
                           data-target="#quick-view"
                           title="Quick View"
                           onClick={onOpenModal}
                        ><i className="fa fa-search" aria-hidden="true"></i></a>
                        {/*<Link to={`${process.env.PUBLIC_URL}/compare`}*/}
                        {/*      title="Compare"*/}
                        {/*      // onClick={onAddToCompareClicked}*/}
                        {/*>*/}
                        {/*    <i className="fa fa-refresh" aria-hidden="true"></i></Link>*/}
                    </div>
                </div>
                <div className="product-detail  text-center">
                    <div>
                        {/*<div className="rating">*/}
                        {/*    {RatingStars}*/}
                        {/*</div>*/}
                        <Link to={`${process.env.PUBLIC_URL}/left-sidebar/product/`}>
                            <h6>{title}</h6>
                        </Link>
                        <h4 style={{paddingBottom: '10px'}}>
                            {/*{symbol}{product.price-(product.price*product.discount/100)}*/}
                            ${price}
                        </h4>
                        {product && product.ratings && product.ratings.length > 0 ? (
                            showAverage(product)
                        ) : (
                            <div className="text-center"></div>
                        )}
                        {/*{product.variants?*/}
                        {/*    <ul className="color-variant">*/}
                        {/*        {product.variants.map((vari, i) => {*/}
                        {/*            return (*/}
                        {/*                <li className={vari.color} key={i} title={vari.color} onClick={() => this.onClickHandle(vari.images)}></li>)*/}
                        {/*        })}*/}
                        {/*    </ul>:''}*/}
                    </div>
                </div>
                <Modal open={open} onClose={onCloseModal} center>
                    <div className="modal-dialog modal-lg modal-dialog-centered" role="document">
                        <div className="modal-content quick-view-modal">
                            <div className="modal-body">
                                <div className="row">
                                    <div className="col-lg-6  col-xs-12">
                                        <div className="quick-view-img">
                                            <img src={images && images.length ? images[0].url : defaultImage} alt="" className="img-fluid" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6 rtl-text">
                                        <div className="product-right">
                                            <h2>
                                                {title}
                                            </h2>
                                            <h3>
                                                {/*{symbol}{product.price-(product.price*product.discount/100)}*/}
                                                {/*<del><span className="money">{symbol}{product.price}</span></del>*/}
                                                {price}
                                            </h3>
                                            {/*{product.variants?*/}
                                            {/*    <ul className="color-variant">*/}
                                            {/*        {product.variants.map((vari, i) =>*/}
                                            {/*            <li className={vari.color} key={i} title={vari.color} onClick={() => this.onClickHandle(vari.images)}></li>)*/}
                                            {/*        }*/}
                                            {/*    </ul>:''}*/}
                                            <div className="border-product">
                                                <h6 className="product-title">product details</h6>
                                                <p>
                                                    {/*{product.shortDetails}*/}
                                                    {description}
                                                </p>
                                            </div>
                                            <div className="product-description border-product">
                                                {/*{product.size?*/}
                                                {/*    <div className="size-box">*/}
                                                {/*        <ul>*/}
                                                {/*            {product.size.map((size, i) => {*/}
                                                {/*                return <li key={i}><a href="#">{size}</a></li>*/}
                                                {/*            })}*/}
                                                {/*        </ul>*/}
                                                {/*    </div>:''}*/}
                                                <h6 className="product-title">quantity</h6>
                                                <div className="qty-box">
                                                    <div className="input-group">
                                                              <span className="input-group-prepend">
                                                                <button type="button" className="btn quantity-left-minus"
                                                                        // onClick={this.minusQty}
                                                                        data-type="minus" data-field="">
                                                                 <i className="fa fa-angle-left"></i>
                                                                </button>
                                                              </span>
                                                        <input type="text" name="quantity"
                                                               // value={this.state.quantity}
                                                               // onChange={this.changeQty}
                                                               className="form-control input-number" />
                                                        <span className="input-group-prepend">
                                                                <button type="button" className="btn quantity-right-plus"
                                                                        // onClick={this.plusQty}
                                                                        data-type="plus" data-field="">
                                                                <i className="fa fa-angle-right"></i>
                                                                </button>
                                                               </span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="product-buttons">
                                                <button  className="btn btn-solid"
                                                         // onClick={() => onAddToCartClicked(product, this.state.quantity)}
                                                >add to cart</button>
                                                <Link to={`${process.env.PUBLIC_URL}/product/${slug}`} className="btn btn-solid">view detail</Link>
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


export default ProductStyleFive;