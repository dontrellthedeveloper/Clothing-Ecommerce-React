
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import defaultImage from "../../../../images/default-product-image.png";

const SmallImages = ({item, settings, navOne, product}) => {
            let productsnav = settings;
            const [nav2, setNav2] = useState(null);
            let [slider2, setSlider2] = useState({});
            const [products, setProducts] = useState([]);

            useEffect(() => {
                setNav2(slider2);

            }, []);

    // class SmallImages extends Component {
    //     constructor(props) {
    //         super(props);
    //         this.state = {
    //             nav2: null
    //         }
    //     }
    //
    //     componentDidMount() {
    //         this.setState({
    //             nav2: this.slider2
    //         });
    //     }
    //
    //     render() {
    //         const {item, settings, navOne} = this.props;
    //
    //         var productsnav = settings;

            return (
                <div className="row">
                    <div className="col-12 p-0">
                        <Slider {...productsnav} asNavFor={navOne}
                            // ref={slider => (this.slider2 = slider)}
                                ref={slider => (slider2 = slider)}
                                className="slider-nav">
                            {/*{item.variants ?*/}
                            {/*    item.variants.map((vari, index) =>*/}
                            {/*        <div key={index}>*/}
                            {/*            <img src={`${vari.images}`} key={index} alt="" className="img-fluid"/>*/}
                            {/*        </div>*/}
                            {/*    ) :*/}
                            {/*    item.pictures.map((vari, index) =>*/}
                            {/*        <div key={index}>*/}
                            {/*            <img src={`${vari}`} key={index} alt="" className="img-fluid"/>*/}
                            {/*        </div>*/}
                            {/*    )}*/}
                            {products.map((product) =>
                                <div key={product._id}>
                                    <img src={product.images && product.images.length ? product.images[0].url : defaultImage} alt={product.title} />
                                </div>
                            )}
                        </Slider>
                    </div>
                </div>
            );
        };



export default SmallImages;