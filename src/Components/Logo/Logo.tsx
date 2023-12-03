import React from 'react';

import './logo.styles.css'
import {useTheme} from "../../hooks";

const Logo = () => {
    const handleClickHome = (event:any) => {
        event.preventDefault()
        const currentPath = window.location.pathname;
        const newPath = `/movie?page=1`;
        if (currentPath !== newPath) {
            window.location.href = newPath;
        }
    };
    const {theme} = useTheme()
    return (
        <div className={theme? 'logoDark' : 'logo'} onClick={handleClickHome}>
            <img src={theme? 'images/cinema_dark.png' : 'images/cinema.png'} alt={'logo'}/>
        </div>
    );
};

export {Logo};