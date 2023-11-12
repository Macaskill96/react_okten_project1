import React from 'react';

import './logo.styles.css'
import {useTheme} from "../../hooks";

const Logo = () => {
    const {theme} = useTheme()
    return (
        <div className={theme? 'logoDark' : 'logo'}>
           <h3>Cinema</h3>
        </div>
    );
};

export {Logo};