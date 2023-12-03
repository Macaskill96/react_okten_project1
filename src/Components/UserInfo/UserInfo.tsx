import React, {useEffect} from 'react';


import {useAppDispatch, useAppSelector, useTheme} from "../../hooks";
import {authActions} from "../../redux/slices/authSlice";

const UserInfo = () => {
    const {user} = useAppSelector(state => state.auth)
    const dispatch = useAppDispatch()

    useEffect(()=> {
        dispatch(authActions.getAll())
    }, [dispatch])

    const {theme} = useTheme()

    return (
        <div>
            <p style={{ color: theme ? 'black' : '#d3d3d3' }}>{user.username}</p>
        </div>
    );
};

export {UserInfo};