import React, {FC, useEffect} from 'react';

import './movieInfo.styles.css'
import {PosterMovieInfo} from "../PosterMovie";
import {StarsRating} from "../StarsRating";
import {useNavigate} from "react-router";
import {useAppDispatch, useAppSelector, useTheme} from "../../hooks";
import {movieActions} from "../../redux";

interface IData {
    movieId:number
}

const MovieInfo:FC<IData> = ({movieId}) => {
    const {movie, trigger} = useAppSelector(state => state.movie)
    const dispatch = useAppDispatch();
    const navigate = useNavigate()


    useEffect(()=> {
        dispatch(movieActions.getMovieById(movieId))
    }, [dispatch, movieId])


    const back = () => {
        navigate(-1)
    }

    const {theme} = useTheme()


    if (!trigger) {
        return <div className='loading'>Loading...</div>

    }
    return (
        <div>
            <button className='buttonBack' onClick={back}>Back</button>
            <div className='movieInfo'>
                <h2 style={{ color: theme ? 'black' : '#d3d3d3' }}>{movie.original_title}</h2>
                <div className='back_drop'><PosterMovieInfo posterMovieInfo={movie.poster_path} alt={movie.title}/></div>
                <h3 style={{ color: theme ? 'black' : '#d3d3d3' }}>{'Rating:'}</h3>
                <StarsRating rating={movie.vote_average || 0} size={30}/>
                <h4 style={{ color: theme ? 'black' : '#d3d3d3' }}>{'Overview:'}</h4>
                <p style={{ color: theme ? 'black' : '#d3d3d3' }}>{movie.overview}</p>
            </div>
        </div>
    );
};

export {MovieInfo};