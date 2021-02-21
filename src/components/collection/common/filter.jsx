import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux'
import InputRange from 'react-input-range';
import 'react-input-range/lib/css/index.css';
import { SlideToggle } from 'react-slide-toggle';
import {Slider} from 'antd'


import {getBrands, getColors, getMinMaxPrice} from '../../../services';
import {filterBrand, filterColor, filterPrice} from '../../../actions'

const Filter = ({price, setPrice, handleSlider}) => {
    const [openFilter, setOpenFilter] = useState(false);
    const [filters, setFilters] = useState({});
    const [brands, setBrands] = useState({});
    const [colors, Colors] = useState({});
    const [prices, setPrices] = useState({});
    // const [price, setPrice] = useState({min: 0, max: 400});



    const closeFilter = () => {
        document.querySelector(".collection-filter").style = "left: -365px";
    }

    const clickBrandHendle = (event, brands) => {

        var index = brands.indexOf(event.target.value);
        if (event.target.checked)
            brands.push(event.target.value); // push in array checked value
        else
            brands.splice(index, 1); // removed in array unchecked value

        filterBrand(brands);
    };

    const colorHandle = (event, color) => {
        var elems = document.querySelectorAll(".color-selector ul li");
        [].forEach.call(elems, function(el) {
            el.classList.remove("active");
        });
        event.target.classList.add('active');
        filterColor(color)
    }


        const filteredBrands = filters.brand;
        //console.log(this.props.brands);
        return (
            <div className="collection-filter-block">
                {/*brand filter start*/}
                <div className="collection-mobile-back">
                        <span className="filter-back" onClick={(e) => closeFilter(e)} >
                            <i className="fa fa-angle-left" aria-hidden="true"></i> back
                        </span>
                </div>
                {/*price filter start here */}
                <SlideToggle>
                    {({onToggle, setCollapsibleElement}) => (
                        <div className="collection-collapse-block open">
                            <h3 className="collapse-block-title" onClick={onToggle}>price</h3>
                            <div className="collection-collapse-block-content block-price-content" ref={setCollapsibleElement}>
                                <div className="collection-brand-filter">
                                    <div className="custom-control custom-checkbox collection-filter-checkbox">
                                        <InputRange
                                            maxValue={400}
                                            minValue={0}
                                            value={price}
                                            onChange={handleSlider}
                                            formatLabel={value => `$${value}`}
                                        />




                                        {/*<InputRange*/}
                                        {/*    maxValue={20}*/}
                                        {/*    minValue={0}*/}
                                        {/*    formatLabel={value => `${value} kg`}*/}
                                        {/*    value={this.state.value4}*/}
                                        {/*    onChange={value => this.setState({ value4: value })}*/}
                                        {/*    onChangeComplete={value => console.log(value)} />*/}

                                        {/*    this.state = {*/}
                                        {/*    value: 5,*/}
                                        {/*    value2: 10,*/}
                                        {/*    value3: 10,*/}
                                        {/*    value4: {*/}
                                        {/*    min: 5,*/}
                                        {/*    max: 10,*/}
                                        {/*},*/}
                                        {/*    value5: {*/}
                                        {/*    min: 3,*/}
                                        {/*    max: 7,*/}
                                        {/*},*/}
                                        {/*};*/}
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </SlideToggle>
                <SlideToggle>
                    {({onToggle, setCollapsibleElement}) => (
                        <div className="collection-collapse-block">
                            <h3 className="collapse-block-title" onClick={onToggle}>brand</h3>
                            <div className="collection-collapse-block-content"  ref={setCollapsibleElement}>
                                <div className="collection-brand-filter">
                                    {/*{brands.map((brand, index) => {*/}
                                    {/*    return (*/}
                                    {/*        <div className="custom-control custom-checkbox collection-filter-checkbox" key={index}>*/}
                                    {/*            <input type="checkbox" onClick={(e) => clickBrandHendle(e,filteredBrands)} value={brand} defaultChecked={filteredBrands.includes(brand)? true : false}  className="custom-control-input" id={brand} />*/}
                                    {/*            <label className="custom-control-label"*/}
                                    {/*                   htmlFor={brand}>{brand}</label>*/}
                                    {/*        </div> )*/}
                                    {/*})}*/}
                                </div>
                            </div>
                        </div>
                    )}
                </SlideToggle>

                {/*color filter start here*/}
                <SlideToggle>
                    {({onToggle, setCollapsibleElement}) => (
                        <div className="collection-collapse-block">
                            <h3 className="collapse-block-title" onClick={onToggle}>colors</h3>
                            <div className="collection-collapse-block-content" ref={setCollapsibleElement}>
                                <div className="color-selector">
                                    <ul>
                                        {/*{colors.map((color, index) => {*/}
                                        {/*    return (*/}
                                        {/*        <li className={color} title={color} onClick={(e) => colorHandle(e, color)} key={index}></li> )*/}
                                        {/*})}*/}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}
                </SlideToggle>

            </div>
        )
    };



// const mapStateToProps = state => ({
//     brands: getBrands(state.data.products),
//     colors: getColors(state.data.products),
//     prices: getMinMaxPrice(state.data.products),
//     filters: state.filters
// })

// export default connect(
//     mapStateToProps,
//     { filterBrand, filterColor, filterPrice }
// )(Filter);

export default Filter;