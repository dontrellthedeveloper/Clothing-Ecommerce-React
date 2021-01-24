import React from 'react';
import {Link} from "react-router-dom";

const UserNav = () => (
    <div className="dashboard-left">
        <div className="collection-mobile-back">
                                    <span className="filter-back">
                                        <i className="fa fa-angle-left" aria-hidden="true"></i> back
                                    </span>
        </div>
        <div className="block-content">
            <ul>
                {/*<li className="active">*/}
                <li>
                    <Link to={`${process.env.PUBLIC_URL}/user/history`}>History</Link>
                </li>
                <li>
                    <Link to={`${process.env.PUBLIC_URL}/user/password`}>Password</Link>

                </li>
                <li>
                    <Link to={`${process.env.PUBLIC_URL}/user/wishlist`}>Wishlist</Link>
                </li>
            </ul>
        </div>
    </div>
);

export default UserNav;