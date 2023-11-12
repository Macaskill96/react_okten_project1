import React, {useEffect, useState} from 'react';

import {IAuthInterface} from "../../Interfaces";
import {authService} from "../../services";
import {useTheme} from "../../hooks";

const UserInfo = () => {
    const [state, setState] = useState<IAuthInterface | null>(null)
    useEffect(()=> {
        authService.getAll().then(({data})=> setState(data))
    }, [])
    const {theme} = useTheme()

    return (
        <div>
            <p style={{ color: theme ? 'black' : '#d3d3d3' }}>{state?.username}</p>
        </div>
    );
};

export {UserInfo};