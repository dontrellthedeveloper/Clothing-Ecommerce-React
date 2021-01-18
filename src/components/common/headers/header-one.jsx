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

// class HeaderOne extends Component {
const HeaderOne = (props) => {
        const [isLoading, setIsLoading] = useState(false);
        // const [isOpen, setIsOpen] = useState(false);
		// this.state = {
		// 	isLoading:false
		// }

    /*=====================
         Pre loader
         ==========================*/

    //component did mount
    useEffect(() => {
        window.addEventListener('scroll', handleScroll)
    }, []);

    useEffect(() => {
        setTimeout(function() {
            document.querySelector(".loader-wrapper").style = "display: none";
        }, 2000);
        // setIsOpen({ open: true });
        // window.addEventListener('scroll', handleScroll)
    }, []);

    //component will mount
    // useEffect(() => {
    //     window.addEventListener('scroll', handleScroll)
    // }, []);

    //component will unmount
    useEffect(() => {
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, []);

    // componentDidMount() {
    //     setTimeout(function() {
    //         document.querySelector(".loader-wrapper").style = "display: none";
    //     }, 2000);
    //
    //     this.setState({ open: true });
    // }
    // componentWillMount(){
    //     window.addEventListener('scroll', this.handleScroll);
	// }
    // componentWillUnmount() {
    //     window.removeEventListener('scroll', this.handleScroll);
    // }

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

    const openSearch = () => {
        document.getElementById("search-overlay").style.display = "block";
    };

    const closeSearch = () => {
        document.getElementById("search-overlay").style.display = "none";
    };

	const load = () =>{
		setIsLoading({isLoading: true});
		fetch().then(()=>{
			// deal with data fetched
			setIsLoading({isLoading: false})
		})
	};



		return (
			<div>
				<header id="sticky" className="sticky">
					{isLoading ? <Pace color="#27ae60"/> : null}
					<div className="mobile-fix-option"></div>
					{/*Top Header Component*/}
					<TopBar/>

					<div className="container">
						<div className="row">
							<div className="col-sm-12">
								<div className="main-menu">
									<div className="menu-left">
										<div className="navbar">
											<a href="javascript:void(0)" onClick={openNav}>
												<div className="bar-style"> <i className="fa fa-bars sidebar-bar" aria-hidden="true"></i></div>
											</a>
											{/*SideBar Navigation Component*/}
											<SideBar/>
										</div>
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
													<li className="onhover-div mobile-search">
														<div><img src={`${process.env.PUBLIC_URL}/assets/images/icon/search.png`} onClick={openSearch} className="img-fluid" alt="" />
															<i className="fa fa-search" onClick={openSearch}></i></div>
													</li>
													{/*<li className="onhover-div mobile-setting">*/}
													{/*	<div><img src={`${process.env.PUBLIC_URL}/assets/images/icon/setting.png`} className="img-fluid" alt="" />*/}
													{/*		<i className="fa fa-cog"></i></div>*/}
													{/*	<div className="show-div setting">*/}
													{/*		<h6>language</h6>*/}
													{/*		<ul>*/}
													{/*			<li><a href={null} onClick={() => this.changeLanguage('en')}>English</a> </li>*/}
													{/*			<li><a href={null} onClick={() => this.changeLanguage('fn')}>French</a> </li>*/}
													{/*		</ul>*/}
													{/*		<h6>currency</h6>*/}
													{/*		<ul className="list-inline">*/}
													{/*			<li><a href={null} onClick={() => this.props.changeCurrency('€')}>euro</a> </li>*/}
													{/*			<li><a href={null} onClick={() => this.props.changeCurrency('₹')}>rupees</a> </li>*/}
													{/*			<li><a href={null} onClick={() => this.props.changeCurrency('£')}>pound</a> </li>*/}
													{/*			<li><a href={null} onClick={() => this.props.changeCurrency('$')}>doller</a> </li>*/}
													{/*		</ul>*/}
													{/*	</div>*/}
													{/*</li>*/}
													{/*Header Cart Component */}
													<CartContainer/>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</header>

                <div id="search-overlay" className="search-overlay">
                    <div>
                        <span className="closebtn" onClick={closeSearch} title="Close Overlay">×</span>
                        <div className="overlay-content">
                            <div className="container">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <form>
                                            <div className="form-group">
                                                <input type="text" className="form-control" id="exampleInputPassword1" placeholder="Search a Product" />
                                            </div>
                                            <button type="submit" className="btn btn-primary"><i className="fa fa-search"></i></button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

			</div>
			)
	};


export default connect(null,
    { changeCurrency }
)(HeaderOne);