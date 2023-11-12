import React from 'react';
import {useLocation} from "react-router";

import {MovieInfo} from "../Components";


const MovieInfoPage = () => {
    const {state:movieId} = useLocation()

    return (
            <MovieInfo movieId={movieId}/>
    );
};

export {MovieInfoPage};