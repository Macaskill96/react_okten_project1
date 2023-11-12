import React, {FC} from 'react';

import './poster.styles.css'
interface IProps {
    poster:string | undefined
    alt:string | undefined
}
const PosterMovie:FC<IProps> = ({poster, alt}) => {
    return (
        <img src={`https://image.tmdb.org/t/p/w500/` + poster} alt={alt} className={'img'}/>
    );
};

export {PosterMovie};