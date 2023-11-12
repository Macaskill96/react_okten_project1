import React, {useEffect, useState} from 'react';
import {movieService} from "../../services";
import {useSearchParams} from "react-router-dom";

import usePagination from "../../hooks/usePagination";
import {IMovieData} from "../../Interfaces";
import {PosterMovie} from "../PosterMovie";
import {StarsRating} from "../StarsRating";
import {useNavigate} from "react-router";
import {useTheme} from "../../hooks";

const MovieByTitle = () => {

    const [state, setState] = useState<IMovieData | null>(null)
    const [query, setQuery] = useSearchParams({query:''})
    const [queryPage, setQueryPage] = useSearchParams({page:'1'})

    const { currentPage, nextPage, prevPage } = usePagination(Number(queryPage.get('page') ?? '1'));

    useEffect(()=> {
        movieService.searchMovieByTitle(query.get('query') ?? '', currentPage.toString()).then(({data})=> {
                setState(data)
            queryPage.set('page', currentPage.toString());
            setQueryPage(queryPage);
            }
        )
    }, [query, currentPage])
    const navigate = useNavigate()
    const {theme} = useTheme()



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

export {MovieByTitle};