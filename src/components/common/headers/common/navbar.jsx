import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { withTranslate } from 'react-redux-multilingual'


const NavBar = (props) => {

        const [navClose, setNavClose] = useState({right: '0px'});
        const { translate } = props;

        useEffect(() => {
            if (window.innerWidth < 750) {
                setNavClose({ navClose: { right: '-410px' } })
            }
            if (window.innerWidth < 1199) {
                setNavClose({ navClose: { right: '-300px' } })
            }
        }, []);


        const openNav = () => {
            console.log('open');
            setNavClose({ navClose: { right: '0px' } })
        };
        const closeNav = () => {
            setNavClose({ navClose: { right: '-410px' } })
        };

        const onMouseEnterHandler = () => {
            if (window.innerWidth > 1199) {
                document.querySelector("#main-menu").classList.add("hover-unset");
            }
        };

        const handleSubmenu = (event) => {
            if (event.target.classList.contains('sub-arrow'))
                return;

            if(event.target.nextElementSibling.classList.contains('opensubmenu'))
                event.target.nextElementSibling.classList.remove('opensubmenu')
            else{
                document.querySelectorAll('.nav-submenu').forEach(function (value) {
                    value.classList.remove('opensubmenu');
                });
                document.querySelector('.mega-menu-container').classList.remove('opensubmenu')
                event.target.nextElementSibling.classList.add('opensubmenu')
            }
        };

        const handleMegaSubmenu = (event) => {
            if (event.target.classList.contains('sub-arrow'))
                return;

            if(event.target.parentNode.nextElementSibling.classList.contains('opensubmegamenu'))
                event.target.parentNode.nextElementSibling.classList.remove('opensubmegamenu')
            else{
                document.querySelectorAll('.menu-content').forEach(function (value) {
                    value.classList.remove('opensubmegamenu');
                });
                event.target.parentNode.nextElementSibling.classList.add('opensubmegamenu')
            }
        };



        return (
            <div>
                <div className="main-navbar">
                    <div id="mainnav" >
                        <div className="toggle-nav" onClick={openNav} >
                            <i className="fa fa-bars sidebar-bar"></i>
                        </div>
                        <ul className="nav-menu" style={navClose}>
                            <li className="back-btn" onClick={closeNav} >
                                <div className="mobile-back text-right">
                                    <span >Back</span>
                                    <i className="fa fa-angle-right pl-2" aria-hidden="true"></i>
                                </div>
                            </li>
                            <li >
                                <Link to={`${process.env.PUBLIC_URL}/`} className="nav-link">
                                    {translate('home')}
                                </Link>
                            </li>
                            <li >
                                <Link to={`${process.env.PUBLIC_URL}/shop`} className="nav-link">
                                    {translate('shop')}
                                </Link>
                            </li>
                            {/*<li>*/}
                            {/*    <Link to={`${process.env.PUBLIC_URL}/features/portfolio-grid/2`} className="nav-link">*/}
                            {/*        {translate('gallery')}*/}
                            {/*        Gallery*/}
                            {/*    </Link>*/}
                            {/*</li>*/}
                            {/*<li>*/}
                            {/*    <Link to={`${process.env.PUBLIC_URL}/pages/contact`} className="nav-link">*/}
                            {/*        {translate('contact')}*/}
                            {/*    </Link>*/}
                            {/*</li>*/}
                        </ul>
                    </div>
                </div>
            </div>
        )
    };




export default withTranslate(NavBar);