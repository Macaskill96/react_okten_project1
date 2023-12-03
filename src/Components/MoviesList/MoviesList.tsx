import React, {FC, useEffect} from 'react';
import {useNavigate} from "react-router";

import usePagination from "../../hooks/usePagination";
import {PosterMovie} from "../PosterMovie";
import {StarsRating} from "../StarsRating";
import {useAppDispatch, useAppSelector, useTheme} from "../../hooks";
import {movieActions} from "../../redux";
import './movieList.styles.css'

const MoviesList:FC = () => {
    const {movies} = useAppSelector(state => state.movie)
    const { currentPage, nextPage, prevPage } = usePagination();
    const navigate = useNavigate();
    const {theme} = useTheme()
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(movieActions.getAll(currentPage.toString()));
    }, [currentPage, dispatch]);


    return (
        <div>
            <div className={'movieList'}>
                {movies.results.map(item=>
                    (<div key={item.id} onClick={()=>navigate(`${item.id}`, {state:item.id})} className={theme? 'movieResult' : 'movieResultDark'} >
                        <PosterMovie poster={item.backdrop_path} alt={item.original_title}/>
                        <div className={theme? 'ratingAndTitle' : 'ratingAndTitleDark'}>
                            <p>{item.original_title}</p>
                            <StarsRating rating={item.vote_average} size={15}/>
                        </div>


                    </div>))}
            </div>
            <div className='buttonDiv'>
                <div>
                    <button disabled={currentPage === 1} onClick={prevPage} className='buttonPagination'>Prev</button>
                    <p style={{ color: theme ? 'black' : '#d3d3d3' }}>{currentPage + '/' + movies.total_pages}</p>
                    <button disabled={currentPage === movies.total_pages} onClick={nextPage} className='buttonPagination'>Next</button>
                </div>
            </div>
        </div>
    );
};

export {MoviesList};