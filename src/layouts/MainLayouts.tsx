import React from 'react';
import {Outlet} from "react-router";

import {Header} from "../Components";
import {ThemeContextProvider} from "../hoc";


const MainLayouts = () => {


    return (
        <div>
            <ThemeContextProvider>
                <Header/>
                <Outlet/>
            </ThemeContextProvider>
        </div>
    );
};

export {MainLayouts};