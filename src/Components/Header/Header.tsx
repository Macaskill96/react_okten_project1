import React from 'react';
import {Link} from "react-router-dom";

import {SearchForm} from "../SearchContainer";
import {Switch} from "../Switch";
import './header.styles.css'
import {Logo} from "../Logo";
import {useTheme} from "../../hooks";
import {UserInfo} from "../UserInfo";

const Header = () => {
    const {theme} = useTheme()

    return (
        <div className={theme? 'header' : 'headerDark'}>
            <Logo/>
            <Link to='/movie' className={theme? 'link': 'linkDark'}>Movies</Link>
            <Link to='/genres' className={theme? 'link': 'linkDark'}>Genres</Link>
            <SearchForm/>
            <Switch/>
            <UserInfo/>
        </div>
    );
};

export {Header};