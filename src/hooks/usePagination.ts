import {useEffect, useState} from 'react';
import {useSearchParams} from "react-router-dom";

const usePagination = (initialPage: number = 1) => {
    const [queryPage, setQueryPage] = useSearchParams({page:"1"})
    const [currentPage, setCurrentPage] = useState(Number(queryPage.get('page') ?? '1'));

    const goToPage = (pageNumber:number) => {
        setCurrentPage(pageNumber);
    };

    const updateQuery = (page: number) => {
        queryPage.set('page', page.toString());
        setQueryPage(queryPage);
    }

    const nextPage = () => {
        updateQuery(currentPage + 1)
    };

    const prevPage = () => {
        updateQuery(Math.max(currentPage - 1, 1))
    };

    useEffect(() => {
        setCurrentPage( Number(queryPage.get('page') ?? '1'));
    }, [queryPage])

    return {
        currentPage,
        goToPage,
        nextPage,
        prevPage,
    };
};

export default usePagination;