import { useState } from 'react';

const usePagination = (initialPage = 1) => {
    const [currentPage, setCurrentPage] = useState(initialPage);

    const goToPage = (pageNumber:number) => {
        setCurrentPage(pageNumber);
    };

    const nextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const prevPage = () => {
        setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    };

    return {
        currentPage,
        goToPage,
        nextPage,

        prevPage,
    };
};

export default usePagination;