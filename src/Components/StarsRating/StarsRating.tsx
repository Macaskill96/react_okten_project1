import React, {FC} from 'react';
import {FaRegStar, FaStar, FaStarHalfAlt} from "react-icons/fa";

interface StarsProps {
    rating: number;
    size: number
}

const StarsRating:FC<StarsProps> = ({ rating, size }) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
        stars.push(<FaStar key={i} color={'darkgoldenrod'} size={size}/>);
    }

    if (hasHalfStar) {
        stars.push(<FaStarHalfAlt key="half" color={'darkgoldenrod'} size={size}/>);
    }

    while (stars.length < 10) {
        stars.push(<FaRegStar key={stars.length} color={'darkgoldenrod'} size={size}/>);
    }

    return <div>{stars}</div>;
};

export { StarsRating };