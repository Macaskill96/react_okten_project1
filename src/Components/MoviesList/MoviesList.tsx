import React, {FC, useEffect, useState} from 'react';
import {useNavigate} from "react-router";
import {useSearchParams} from "react-router-dom";

import {IMovieData} from "../../Interfaces";
import {movieService} from "../../services";
import usePagination from "../../hooks/usePagination";
import './movieList.styles.css'
import {PosterMovie} from "../PosterMovie";
import {StarsRating} from "../StarsRating";
import {useTheme} from "../../hooks";
const MoviesList:FC = () => {
    const [movieData, setMovieData] = useState<IMovieData | null>(null)
    const [queryPage, setQueryPage] = useSearchParams({page:'1'})
    const navigate = useNavigate();
    const {theme} = useTheme()
    const { currentPage, nextPage, prevPage } = usePagination(Number(queryPage.get('page') ?? '1'));

    useEffect(()=> {
        movieService.getAll(currentPage.toString()).then(({data})=> {
            setMovieData(data)
            queryPage.set('page', currentPage.toString());
            setQueryPage(queryPage);
        })
    }, [queryPage, currentPage])


    return (
        <div>
            <div className={'movieList'}>
                {movieData?.results.map(item=>
                    (<div key={item.id} onClick={()=>navigate(`${item.id}`, {state:item.id})} className={theme? 'movieResult' : 'movieResultDark'} >
                        <PosterMovie poster={item.backdrop_path} alt={item.original_title}/>
                        <div className={theme? 'ratingAndTitle' : 'ratingAndTitleDark'}>
                            <p>{item.original_title}</p>
                            <StarsRating rating={item.vote_average} size={15}/>
                        </div>


                    </div>))}
                <div className='buttonDiv'>
                    <button disabled={currentPage === 1} onClick={prevPage} className='buttonPagination'>Prev</button>
                    <p style={{ color: theme ? 'black' : '#d3d3d3' }}>{currentPage + '/' + movieData?.total_pages}</p>
                    <button disabled={currentPage === movieData?.total_pages} onClick={nextPage} className='buttonPagination'>Next</button>
                </div>

            </div>
        </div>
    );
};

export {MoviesList};