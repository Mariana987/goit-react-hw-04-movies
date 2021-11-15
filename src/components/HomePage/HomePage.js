import { useState, useEffect } from "react";
import { fetchMovies } from '../../servises/movieFetch';
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import s from './HomePage.module.css'

export default function HomePage() {
    const [popularMovies, setPopularMovies] = useState(null)
    useEffect(() => {
        fetchMovies().then(response => {
            setPopularMovies(response.results);
        });
    }, []);
    return (
        <div>
            <h1>Popular Today</h1>
            <ul>
                {popularMovies && popularMovies.map
                    (movies => <li key={movies.id} className={s.movieList}>
                        <Link to={`/${movies.id}`} className={s.movieItem}>{movies.title}</Link>
                    </li>)}
                <NavLink to='/details'> </NavLink>
            </ul>
        </div>
    )
}