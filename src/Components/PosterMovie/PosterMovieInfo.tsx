import React, {FC} from 'react';

import './poster.styles.css'

interface IProps {
    posterMovieInfo:string | undefined
    alt:string | undefined
}

const PosterMovieInfo:FC<IProps> = ({posterMovieInfo, alt}) => {
    return (
        <img src={`https://image.tmdb.org/t/p/w500/` + posterMovieInfo} alt={alt} className={'imgPosterInfo'}/>
    );
};

export {PosterMovieInfo};