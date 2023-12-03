import React, {FC, useEffect, useState} from 'react';
import {useNavigate} from "react-router";

import {genreService} from "../../services";
import {IGenreData} from "../../Interfaces";
import './genreBadge.styles.css'
import {useAppDispatch, useAppSelector, useTheme} from "../../hooks";
import {genreActions} from "../../redux/slices/genreSlice";

const GenreBadge:FC = () => {
    const {genres} = useAppSelector(state => state.genre)
    const dispatch = useAppDispatch()

    useEffect(()=> {
        dispatch(genreActions.getAll())
    }, [dispatch])


    const navigate = useNavigate();
    const {theme} = useTheme()


    return (
        <div className='genreBadge'>
            {genres.genres.map(item => (
                <div key={item.id} className={theme? 'genreTitle' : 'genreTitleDark'}
                     onClick={()=>navigate(`/discover/movie?with_genres=${item.id}`,{state:item.id})}>
                    {item.name}
                </div>
            ))}
        </div>
    );
};

export {GenreBadge};