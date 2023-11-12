import React, {FC, useEffect, useState} from 'react';
import {useNavigate} from "react-router";

import {genreService} from "../../services";
import {IGenreData} from "../../Interfaces";
import './genreBadge.styles.css'
import {useTheme} from "../../hooks";

const GenreBadge:FC = () => {
    const [data, setData] = useState<IGenreData | null>(null);
    useEffect(()=> {
        genreService.getAll().then(({data})=> setData(data))
    }, []);
    const navigate = useNavigate();
    const {theme} = useTheme()


    return (
        <div className='genreBadge'>
            {data?.genres.map(item=> (<div key={item.id} className={theme? 'genreTitle' : 'genreTitleDark'}
                                           onClick={()=>navigate(`/discover/movie?with_genres=${item.id}`,{state:item.id})}>
                {item.name}
            </div>))}
        </div>
    );
};

export {GenreBadge};