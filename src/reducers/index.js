import { combineReducers } from 'redux';
import { IntlReducer as Intl, IntlProvider } from 'react-redux-multilingual'

// Import custom components
import productReducer from './products';
// import cartReducer from './cart';
import { cartReducer } from "./cartReducer";
import filtersReducer from './filters';
import wishlistReducer from './wishlist';
import compareReducer from './compare';
import {drawerReducer} from './drawerReducer';

import {userReducer} from './userReducer'
import {searchReducer} from './searchReducer'


const rootReducer = combineReducers({
    data: productReducer,
    cart: cartReducer,
    drawer: drawerReducer,
    filters: filtersReducer,
    wishlist: wishlistReducer,
    compare: compareReducer,
    user: userReducer,
    search: searchReducer,
    Intl
});

export default rootReducer;