import React, {FC, useEffect, useState} from 'react';

import {movieService} from "../../services";
import {IMovie} from "../../Interfaces";
import './movieInfo.styles.css'
import {PosterMovieInfo} from "../PosterMovie";
import {StarsRating} from "../StarsRating";
import {useNavigate} from "react-router";
import {useTheme} from "../../hooks";

interface IData {
    movieId:number
}

const MovieInfo:FC<IData> = ({movieId}) => {
    const [state, setState] = useState<IMovie>();
    useEffect(()=> {
        movieService.getMovieById(movieId).then(({data})=> setState(data))
    }, [movieId])
    const navigate = useNavigate()

    const back = () => {
        navigate(-1)
    }

    const {theme} = useTheme()

    return (
        <div>
            <button className='buttonBack' onClick={back}>Back</button>
            <div className='movieInfo'>
                <h2 style={{ color: theme ? 'black' : '#d3d3d3' }}>{state?.original_title}</h2>
                <div className='back_drop'><PosterMovieInfo posterMovieInfo={state?.poster_path} alt={state?.title}/></div>
                <h3 style={{ color: theme ? 'black' : '#d3d3d3' }}>{'Rating:'}</h3>
                <StarsRating rating={state?.vote_average || 0} size={30}/>
                <h4 style={{ color: theme ? 'black' : '#d3d3d3' }}>{'Overview:'}</h4>
                <p style={{ color: theme ? 'black' : '#d3d3d3' }}>{state?.overview}</p>
            </div>
        </div>
    );
};

export {MovieInfo};