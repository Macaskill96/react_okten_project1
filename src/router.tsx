import {createBrowserRouter, Navigate} from "react-router-dom";

import {MovieByGenre, MovieByTitle, MoviesList} from "./Components";
import {GenrePage, MovieInfoPage, MoviePage} from "./pages";
import {MainLayouts} from "./layouts";



const router = createBrowserRouter([
    { path: '', element: <MainLayouts/>, children: [
            {index:true, element:<Navigate to={'movie'}/>},
            {path:'movie', element: <MoviePage/>, children: [
                    {path:'', element:<MoviesList/>},
                    {path:':id', element: <MovieInfoPage/>},
                ]},
            {path:'discover/movie', element: <MovieByGenre/>},
            {path:'search/movie', element:<MovieByTitle/>},
            {path:'genres', element: <GenrePage/>}
        ]},
]);

export { router };