import React, { useState, useEffect } from 'react';

import {auth} from './firebase';
import {useDispatch} from "react-redux";
import {currentUser} from "./functions/auth";


const ReducerConfig = (props) => {

    const dispatch = useDispatch();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(async (user) => {
            if(user) {
                const idTokenResult = await user.getIdTokenResult();
                console.log('user', user);
                currentUser(idTokenResult.token)
                    .then((res) => {
                        dispatch({
                            type: "LOGGED_IN_USER",
                            payload: {
                                name: res.data.name,
                                email: res.data.email,
                                token: idTokenResult.token,
                                role: res.data.role,
                                _id: res.data._id
                            }
                        });
                    })
                    .catch(err => console.log(err));
            }
        });
        return () => unsubscribe();
    }, [dispatch]);

    return (
        <div>

        </div>
    )
};



export default ReducerConfig;