import React, { useState, useEffect, useMemo } from 'react';
import { Link, NavLink} from 'react-router-dom';
import { IntlActions } from 'react-redux-multilingual'
import Pace from 'react-pace-progress'

// Import custom components
import store from '../../../store';
import NavBar from "./common/navbar";
import SideBar from "./common/sidebar";
import CartContainer from "./../../../containers/CartContainer";
import TopBar from "./common/topbar";
import LogoImage from "./common/logo";
import {changeCurrency} from '../../../actions'
import {connect} from "react-redux";


import firebase from "firebase";
import {useDispatch, useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import SearchContainer from "../../forms/Search";


const HeaderOne = (props) => {
    let dispatch = useDispatch();
    let {user, cart,drawer} = useSelector((state) => ({...state}));
    let history = useHistory();

    const [isLoading, setIsLoading] = useState(false);

    //component did mount
    useEffect(() => {
        window.addEventListener('scroll',
            handleScroll
        )
    }, []);

    useEffect(() => {
        setTimeout(function() {
            document.querySelector(".loader-wrapper").style = "display: none";
        }, 2000);
        // setIsOpen({ open: true });
        // window.addEventListener('scroll', handleScroll)
    }, []);


    //component will unmount
    useEffect(() => {
        return () => {
            window.removeEventListener('scroll',
                handleScroll
            )
        }
    }, []);


    const handleScroll = () => {
        let number = window.pageXOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
        if (number >= 300) {
            if (window.innerWidth < 576) {
                document.getElementById("sticky").classList.remove('fixed');
            }else
            	document.getElementById("sticky").classList.add('fixed');
        } else {
            document.getElementById("sticky").classList.remove('fixed');
        }
    };

    const changeLanguage = (lang) => {
        store.dispatch(IntlActions.setLocale(lang))
	};

    const openNav = () => {
        var openmyslide = document.getElementById("mySidenav");
        if(openmyslide){
            openmyslide.classList.add('open-side')
		}
    };

    // const openSearch = () => {
    //     document.getElementById("search-overlay").style.display = "block";
    // };
    //
    // const closeSearch = () => {
    //     document.getElementById("search-overlay").style.display = "none";
    // };

	const load = () =>{
		setIsLoading({isLoading: true});
		fetch().then(()=>{
			// deal with data fetched
			setIsLoading({isLoading: false})
		})
	};


	const logout = () => {
	  firebase.auth().signOut();
	  dispatch({
          type: "LOGOUT",
          payload: null
      });
	  history.push("/pages/login");
    };





		return (
			<div>
                <div style={{height: '191.33px'}}>
                    <header id="sticky" className="sticky">
                        {isLoading ? <Pace color="#27ae60"/> : null}
                        <div className="mobile-fix-option"></div>
                        {/*Top Header Component*/}
                        {/*<TopBar/>*/}

                        {/*<TopBar/>*/}
                        <div className="top-header">
                            <div className="container">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="header-contact">
                                            <ul>
                                                <li>
                                                    <i className="fa fa-phone" aria-hidden="true"></i>{('Call Us')}:  311 - 808 - 6039

                                                    {/*                                              <div className="input-group rounded">*/}
                                                    {/*                                                  <input type="search" className="form-control rounded"*/}
                                                    {/*                                                         placeholder="Search" aria-label="Search"*/}
                                                    {/*                                                         aria-describedby="search-addon"/>*/}
                                                    {/*                                                  <span className="input-group-text border-0"*/}
                                                    {/*                                                        id="search-addon">*/}
                                                    {/*  <i className="fa fa-search"></i>*/}
                                                    {/*</span>*/}
                                                    {/*                                              </div>*/}

                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div className="col-lg-6 text-right">
                                        <ul className="header-dropdown">

                                            {!user && (
                                                <li>
                                                    <Link to={`${process.env.PUBLIC_URL}/pages/login`} data-lng="en"><i className="fa fa-sign-in" aria-hidden="true"></i>Login</Link>
                                                </li>
                                            )}
                                            {/*{!user && (*/}
                                            {/*    <li>*/}
                                            {/*        <Link to={`${process.env.PUBLIC_URL}/pages/register`} data-lng="en">Register</Link>*/}
                                            {/*    </li>*/}
                                            {/*)}*/}
                                            {user && (
                                                <li className="onhover-dropdown mobile-account"
                                                >
                                                    <i className="fa fa-user" aria-hidden="true"></i>
                                                    {user.email && user.email.split("@")[0]}
                                                    <ul className="onhover-show-div">
                                                        {user && user.role === 'subscriber' && (
                                                            <li>
                                                                <Link to={`${process.env.PUBLIC_URL}/user/history`} data-lng="en"><i className="fa fa-th-large" aria-hidden="true"></i>Dashboard</Link>
                                                            </li>
                                                        )}

                                                        {user && user.role === 'admin' && (
                                                            <li>
                                                                <Link to={`${process.env.PUBLIC_URL}/admin/dashboard`} data-lng="en"><i className="fa fa-th-large" aria-hidden="true"></i>Dashboard</Link>
                                                            </li>
                                                        )}
                                                        <li className="mobile-wishlist"><Link to={`${process.env.PUBLIC_URL}/user/wishlist`}><i className="fa fa-heart" aria-hidden="true"></i>{('Wishlist')}</Link></li>
                                                        <li>
                                                            <Link to='#' onClick={logout} data-lng="en"><i className="fa fa-sign-out" aria-hidden="true"></i>Logout</Link>
                                                        </li>
                                                    </ul>
                                                </li>
                                            )}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="container">
                            <div className="row">
                                <div className="col-sm-12">
                                    <div className="main-menu">
                                        <div className="menu-left">
                                            {/*<div className="navbar">*/}
                                            {/*	<a href="javascript:void(0)" onClick={openNav}>*/}
                                            {/*		<div className="bar-style"> <i className="fa fa-bars sidebar-bar" aria-hidden="true"></i></div>*/}
                                            {/*	</a>*/}
                                            {/*	/!*SideBar Navigation Component*!/*/}
                                            {/*	<SideBar/>*/}
                                            {/*</div>*/}
                                            <div className="brand-logo">
                                                <LogoImage />
                                            </div>
                                        </div>
                                        <div className="menu-right pull-right">
                                            {/*Top Navigation Bar Component*/}
                                            <NavBar/>

                                            <div>
                                                <div className="icon-nav">
                                                    <ul>
                                                        {/*<li className="onhover-div mobile-search">*/}
                                                        {/*	<div><img src={`${process.env.PUBLIC_URL}/assets/images/icon/search.png`} onClick={openSearch} className="img-fluid" alt="" />*/}
                                                        {/*		<i className="fa fa-search" onClick={openSearch}></i></div>*/}

                                                        {/*</li>*/}

                                                        <SearchContainer
                                                            // openSearch={openSearch}
                                                            // closeSearch={closeSearch}
                                                        />


                                                        <CartContainer
                                                            visible={drawer}
                                                            cart={cart}
                                                        />
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>
                </div>




                {/*<div className="ghostHidden">*/}

                {/*</div>*/}



                {/*<div id="search-overlay" className="search-overlay">*/}
                {/*    <div>*/}
                {/*        <span className="closebtn" onClick={closeSearch} title="Close Overlay">×</span>*/}
                {/*        <div className="overlay-content">*/}
                {/*            <div className="container">*/}
                {/*                <div className="row">*/}
                {/*                    <div className="col-xl-12">*/}
                {/*                        <form>*/}
                {/*                            <div className="form-group">*/}
                {/*                                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Search a Product" />*/}
                {/*                            </div>*/}
                {/*                            <button type="submit" className="btn btn-primary"><i className="fa fa-search"></i></button>*/}
                {/*                        </form>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}

			</div>
			)
	};


export default connect(null,
    { changeCurrency }
)(HeaderOne);