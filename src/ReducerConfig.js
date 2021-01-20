import React, { useState, useEffect } from 'react';

import {auth} from './firebase';
import {useDispatch} from "react-redux";


const ReducerConfig = (props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            if(user) {
                const idTokenResult = await user.getIdTokenResult();
                console.log('user', user);
                dispatch({
                    type: 'LOGGED_IN_USER',
                    payload: {
                        email: user.email,
                        token: idTokenResult.token
                    }
                })
            }
        });
        return () => unsubscribe();
    }, []);

    return (
        <div>

        </div>
    )
};



export default ReducerConfig;