import { useState, useEffect } from "react";
import { fetchMovies } from '../../servises/movieFetch';
import { Link, useRouteMatch } from 'react-router-dom'



export default function HomePage() {
    const { url } = useRouteMatch();


    const [popularMovies, setPopularMovies] = useState(null)


    useEffect(() => {
        fetchMovies().then(response => {
            setPopularMovies(response.results);
        });
    }, []);
    return (
        <div>
            {popularMovies && popularMovies.map
                (movies => <li key={movies.id}>
                    <Link to={`/${movies.id}`}>{movies.title}</Link>
                </li>)}
        </div>
    )
}