import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import Modal from 'react-responsive-modal';
import {connect} from "react-redux";
import defaultImage from '../../../images/default-product-image.png';



import {getRelatedItems} from "../../../services";


// class ProductItem extends Component {
// const ProductItem = ({product, symbol, onAddToCartClicked, onAddToWishlistClicked, onAddToCompareClicked, relatedItems, props}) => {

const ProductItem = ({product, handleRemove}) => {

    const [open, setOpen] = useState(false);
    const [cartModalOpen, setCartModalOpen] = useState(false);
    const [stock, setStock] = useState('InStock');
    const [quantity, setQuantity] = useState(1);
    const [image, setImage] = useState('');

    const {title, description, images, slug} = product;

        // this.state = {
        //     open: false,
        //     cartModalopen:false,
        //     stock: 'InStock',
        //     quantity: 1,
        //     image: ''
        // }


    // const onClickHandle = (img) => {
    //     setImage({ image : img} );
    // };
    //
    // const onOpenModal = () => {
    //     setOpen({ open: true });
    // };
    //
    // const onCloseModal = () => {
    //     setOpen({ open: false });
    // };
    //
    // const onOpenCartModal = () => {
    //     setCartModalOpen({ cartModalOpen: true });
    //     onAddToCartClicked();
    // };
    // const onCloseCartModal = () => {
    //     setCartModalOpen({ cartModalOpen: false });
    // };

    // const minusQty = () => {
    //     if(quantity > 1) {
    //         setStock({stock: 'InStock'});
    //         setQuantity({quantity: quantity - 1})
    //     }
    // };

    // const plusQty = () => {
    //     if(product.stock >= quantity) {
    //         setQuantity({quantity: quantity+1})
    //     }else{
    //         setStock({stock: 'Out of Stock !'})
    //     }
    // };

    // const changeQty = (e) => {
    //     setQuantity({ quantity: parseInt(e.target.value) })
    // };


        // const {product, symbol, onAddToCartClicked, onAddToWishlistClicked, onAddToCompareClicked, relatedItems} = this.props;


        // let RatingStars = [];
        // for(var i = 0; i < product.rating; i++) {
        //     RatingStars.push(<i className="fa fa-star" key={i}></i>)
        // }


        return (

                <div className="product-box" style={{width: "180px", margin: "20px 10px"}}>
                    <div className="img-wrapper">
                        <div className="lable-block">
                            {/*{(product.new == true)? <span className="lable3">new</span> : ''}*/}
                            {/*{(product.sale == true)? <span className="lable4">on sale</span> : ''}*/}

                        </div>
                        <div className="front">
                            {/*<Link to={`${process.env.PUBLIC_URL}/left-sidebar/product/${product.id}`} >*/}
                            {/*    <img src={`${*/}
                            {/*        product.variants?*/}
                            {/*            image?image:product.variants[0].images*/}
                            {/*            :product.pictures[0]*/}
                            {/*        }`}*/}
                            {/*    className="img-fluid lazyload bg-img"*/}
                            {/*    alt="" />*/}
                            <img src={images && images.length ? images[0].url : defaultImage}
                                 className="img-fluid lazyload bg-img"
                                 style={{borderBottom: "1px solid #e0e0e0",
                                     padding: "20px",
                                     width: "100%",
                                     height: "15vw",
                                     objectFit: "cover"
                                 }}
                                 alt="" />
                            {/*</Link>*/}
                        </div>
                        <div className="cart-info cart-wrap">
                            {/*<button title="Add to cart"*/}
                            {/*         onClick={() => onOpenCartModal()}*/}
                            {/*>*/}
                            {/*    <i className="fa fa-shopping-cart" aria-hidden="true"></i>*/}
                            {/*</button>*/}
                            {/*<a href="javascript:void(0)" title="Add to Wishlist"*/}
                            {/*    onClick={onAddToWishlistClicked}*/}
                            {/*>*/}
                            {/*    <i className="fa fa-heart" aria-hidden="true"></i>*/}
                            {/*</a>*/}
                            <a href="javascript:void(0)" data-toggle="modal"
                               data-target="#quick-view"
                               title="Quick View"
                               // onClick={onOpenModal}
                            ><i className="fa fa-pencil" aria-hidden="true"></i></a>
                            <Link onClick={() => handleRemove(slug)}
                                  to="#"
                                  title="Delete"
                                  // onClick={onAddToCompareClicked}
                            >
                                <i className="fa fa-trash" aria-hidden="true"></i>
                            </Link>
                        </div>
                    </div>
                    <div className="product-detail " style={{paddingLeft: "0"}}>
                        <div>
                            <div className="rating">
                                {/*{RatingStars}*/}
                            </div>
                            <Link to={`${process.env.PUBLIC_URL}/left-sidebar/product/${product.id}`}>
                                <h6 style={{whiteSpace: "nowrap"}}>{title}</h6>
                            </Link>
                            <h4>
                                ${product.price}
                            </h4>
                            {/*<h4>{symbol}{product.price-(product.price*product.discount/100)}*/}
                            {/*    <del><span className="money">{symbol}{product.price}</span></del>*/}
                            {/*</h4>*/}
                        </div>
                    </div>

                    {/*Quick-view modal popup Start*/}
                    {/*<Modal open={open} */}
                    {/*       // onClose={onCloseModal} */}
                    {/*       center>*/}
                    {/*    <div className="modal-dialog modal-lg modal-dialog-centered" role="document">*/}
                    {/*        <div className="modal-content quick-view-modal">*/}
                    {/*            <div className="modal-body">*/}
                    {/*                <div className="row">*/}
                    {/*                    <div className="col-lg-6  col-xs-12">*/}
                    {/*                        <div className="quick-view-img">*/}
                    {/*                            <img src={`${*/}
                    {/*                                product.variants?*/}
                    {/*                                    image?image:product.variants[0].images*/}
                    {/*                                    :product.pictures[0]*/}
                    {/*                                }`} alt="" className="img-fluid" />*/}
                    {/*                        </div>*/}
                    {/*                    </div>*/}
                    {/*                    <div className="col-lg-6 rtl-text">*/}
                    {/*                        <div className="product-right">*/}
                    {/*                            <h2> {product.name} </h2>*/}
                    {/*                            <h3>{symbol}{product.price}</h3>*/}
                    {/*                            {product.variants?*/}
                    {/*                            <ul className="color-variant">*/}
                    {/*                                {product.variants.map((vari, i) =>*/}
                    {/*                                    <li className={vari.color} key={i} title={vari.color} onClick={() => onClickHandle(vari.images)}></li>)*/}
                    {/*                                }*/}
                    {/*                            </ul>:''}*/}
                    {/*                            <div className="border-product">*/}
                    {/*                                <h6 className="product-title">product details</h6>*/}
                    {/*                                <p>{product.shortDetails}</p>*/}
                    {/*                            </div>*/}
                    {/*                            <div className="product-description border-product">*/}
                    {/*                                {product.size?*/}
                    {/*                                <div className="size-box">*/}
                    {/*                                    <ul>*/}
                    {/*                                        {product.size.map((size, i) => {*/}
                    {/*                                            return <li key={i}><a href="#">{size}</a></li>*/}
                    {/*                                        })}*/}
                    {/*                                    </ul>*/}
                    {/*                                </div>:''}*/}
                    {/*                                <h6 className="product-title">quantity</h6>*/}
                    {/*                                <div className="qty-box">*/}
                    {/*                                    <div className="input-group">*/}
                    {/*                                              <span className="input-group-prepend">*/}
                    {/*                                                <button type="button" className="btn quantity-left-minus" onClick={minusQty} data-type="minus" data-field="">*/}
                    {/*                                                 <i className="fa fa-angle-left"></i>*/}
                    {/*                                                </button>*/}
                    {/*                                              </span>*/}
                    {/*                                        <input type="text" name="quantity" value={quantity}  onChange={changeQty} className="form-control input-number" />*/}
                    {/*                                        <span className="input-group-prepend">*/}
                    {/*                                                <button type="button" className="btn quantity-right-plus" onClick={plusQty} data-type="plus" data-field="">*/}
                    {/*                                                <i className="fa fa-angle-right"></i>*/}
                    {/*                                                </button>*/}
                    {/*                                               </span>*/}
                    {/*                                    </div>*/}
                    {/*                                </div>*/}
                    {/*                            </div>*/}
                    {/*                            <div className="product-buttons">*/}
                    {/*                                <button  className="btn btn-solid" onClick={() => onAddToCartClicked(product, quantity)} >add to cart</button>*/}
                    {/*                                <Link to={`${process.env.PUBLIC_URL}/left-sidebar/product/${product.id}`} className="btn btn-solid">view detail</Link>*/}
                    {/*                            </div>*/}
                    {/*                        </div>*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</Modal>*/}
                    {/*Quick-view modal popup End*/}

                    {/* Add to cart modal popup start */}
                    {/*<Modal open={cartModalOpen} onClose={onCloseCartModal} center className="cart-modal">*/}
                    {/*    <div className="modal-dialog modal-lg modal-dialog-centered" role="document">*/}
                    {/*        <div className="modal-content">*/}
                    {/*            <div className="modal-body modal1">*/}
                    {/*                <div className="container-fluid p-0">*/}
                    {/*                    <div className="row">*/}
                    {/*                        <div className="col-12">*/}
                    {/*                            <div className="modal-bg addtocart">*/}
                    {/*                                <div className="media">*/}
                    {/*                                    <a href="#">*/}
                    {/*                                        <img src={`${*/}
                    {/*                                            product.variants?*/}
                    {/*                                                image?image:product.variants[0].images*/}
                    {/*                                                :product.pictures[0]*/}
                    {/*                                            }`} alt="" className="img-fluid blur-up lazyload pro-img" />*/}
                    {/*                                    </a>*/}
                    {/*                                    <div className="media-body align-self-center text-center">*/}
                    {/*                                        <a href="#">*/}
                    {/*                                            <h6>*/}
                    {/*                                                <i className="fa fa-check"></i>Item*/}
                    {/*                                                <span>{product.name}</span>*/}
                    {/*                                                <span> successfully added to your Cart</span>*/}
                    {/*                                            </h6>*/}
                    {/*                                        </a>*/}
                    {/*                                        <div className="buttons">*/}
                    {/*                                            <a href="#" className="view-cart btn btn-solid">Your*/}
                    {/*                                                cart</a>*/}
                    {/*                                            <a href="#" className="checkout btn btn-solid">Check*/}
                    {/*                                                out</a>*/}
                    {/*                                            <a href="#" className="continue btn btn-solid">Continue*/}
                    {/*                                                shopping</a>*/}
                    {/*                                        </div>*/}

                    {/*                                        <div className="upsell_payment">*/}
                    {/*                                            <img src="assets/images/payment_cart.png"*/}
                    {/*                                                 className="img-fluid blur-up lazyload" alt="" />*/}
                    {/*                                        </div>*/}
                    {/*                                    </div>*/}
                    {/*                                </div>*/}
                    {/*                                <div className="product-section">*/}
                    {/*                                    <div className="col-12 product-upsell text-center">*/}
                    {/*                                        <h4>Customers who bought this item also.</h4>*/}
                    {/*                                    </div>*/}
                    {/*                                    <div className="row" id="upsell_product">*/}
                    {/*                                        {relatedItems.map((item,i) =>*/}
                    {/*                                            <div className="product-box col-sm-3 col-6" key={i}>*/}
                    {/*                                                <div className="img-wrapper">*/}
                    {/*                                                    <div className="front">*/}
                    {/*                                                        <Link to={`${process.env.PUBLIC_URL}/left-sidebar/product/${item.id}`} >*/}
                    {/*                                                            <img src={`${*/}
                    {/*                                                                item.variants?*/}
                    {/*                                                                    item.variants[0].images*/}
                    {/*                                                                    :item.pictures[0]*/}
                    {/*                                                                }`} alt="" className="img-fluid blur-up lazyload mb-1" />*/}
                    {/*                                                        </Link>*/}
                    {/*                                                    </div>*/}
                    {/*                                                    <div className="product-detail">*/}
                    {/*                                                        <h6><Link to={`${process.env.PUBLIC_URL}/left-sidebar/product/${item.id}`} >*/}
                    {/*                                                                <span>{item.name}</span>*/}
                    {/*                                                        </Link></h6>*/}
                    {/*                                                        <h4><span>{symbol}{item.price}</span></h4>*/}
                    {/*                                                    </div>*/}
                    {/*                                                </div>*/}
                    {/*                                            </div>*/}
                    {/*                                        )}*/}
                    {/*                                    </div>*/}
                    {/*                                </div>*/}
                    {/*                            </div>*/}
                    {/*                        </div>*/}
                    {/*                    </div>*/}
                    {/*                </div>*/}
                    {/*            </div>*/}
                    {/*        </div>*/}
                    {/*    </div>*/}
                    {/*</Modal>*/}
                    {/*Add to cart modal popup End*/}


                </div>

        )
    };


// const mapStateToProps = (state, ownProps) => ({
//     relatedItems: getRelatedItems(state.data.products, ownProps.product.category),
//     symbol: state.data.symbol
// });
//
// export default connect(mapStateToProps) (ProductItem);

export default ProductItem;