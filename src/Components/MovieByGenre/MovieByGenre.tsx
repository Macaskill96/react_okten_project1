import React, {useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";
import {useNavigate} from "react-router";

import {movieService} from "../../services";
import {IMovieData} from "../../Interfaces";
import usePagination from "../../hooks/usePagination";
import {PosterMovie} from "../PosterMovie";
import {StarsRating} from "../StarsRating";
import {useTheme} from "../../hooks";


const MovieByGenre = () => {
    const [query, setQuery] = useSearchParams('with_genres')
    const [queryPage, setQueryPage] = useSearchParams({page:'1'})
    const [state, setState] = useState<IMovieData | null>(null)
    const navigate = useNavigate()

    const genreId = Number(query.get('with_genres'));
    const { currentPage, nextPage, prevPage } = usePagination(Number(queryPage.get('page') ?? '1'));
    const {theme}=useTheme()



    useEffect(()=> {
        movieService.getMovieByGenre(genreId, currentPage.toString()).then(({data})=> {
            setState(data)
            queryPage.set('page', currentPage.toString());
            setQueryPage(queryPage);
        })
    }, [genreId, currentPage])


    return (
        <div>
            <div className={'movieList'}>
                {state?.results.map(item=>
                    (<div key={item.id} onClick={()=>navigate(`/movie/${item.id}`, {state:item.id})} className={theme? 'movieResult' : 'movieResultDark'} >
                        <PosterMovie poster={item.backdrop_path} alt={item.original_title}/>
                        <div className={theme? 'ratingAndTitle' : 'ratingAndTitleDark'}>
                            <p>{item.original_title}</p>
                            <StarsRating rating={item.vote_average} size={15}/>
                        </div>


                    </div>))}
                <div className='buttonDiv'>
                    <button disabled={currentPage === 1} onClick={prevPage} className='buttonPagination'>Prev</button>
                    <p style={{ color: theme ? 'black' : '#d3d3d3' }}>{currentPage + '/' + state?.total_pages}</p>
                    <button disabled={currentPage === state?.total_pages} onClick={nextPage} className='buttonPagination'>Next</button>
                </div>

            </div>
        </div>
    );
};

export {MovieByGenre};