

import { useState, useEffect } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { FetchSearchMovies } from '../../servises/movieFetch';
import s from './MoviesPage.module.css'
import { toast } from 'react-toastify';
import PropTypes from "prop-types";
import 'react-toastify/dist/ReactToastify.css';

export default function MoviesPage() {
    const history = useHistory();
    const location = useLocation();
    const [search, setSearch] = useState(null);

    const searchOrder = new URLSearchParams(location.search).get('query');
    console.log(toast.error)
    useEffect(() => {
        if (!searchOrder) {
            toast.error("Enter something!");
            setSearch(null);
            return;
        }

        FetchSearchMovies(searchOrder).then((response) => {
            setSearch(response.results);
        });
    }, [searchOrder]);

    const searchMovies = event => {
        event.preventDefault();
        // if (searchOrder === "") {
        //     return alert("not so fast :)");
        // }

        history.push({
            ...location.pathname,
            search: `query=${event.target[0].value}`,
        });

        FetchSearchMovies(event.target[0].value)
            .then(({ results }) => {
                setSearch(results);
            })
            .finally((event.target[0].value = ''));
    };

    return (
        <div>
            <form onSubmit={searchMovies}>
                <label>
                    <input className={s.search} type="text" placeholder="Search movies" />
                </label>
                <button className={s.searchButton} type="submit">Search</button>
            </form>
            {search && (
                <ol >
                    {search.map(data => {
                        console.log(data.id)
                        return (
                            <li key={data.id} className={s.movieList}>
                                <Link
                                    to={{
                                        pathname: `/movies/${data.id}`,
                                        state: { from: location },
                                    }} className={s.movieItem}>

                                    {data.title}
                                </Link>
                            </li>
                        );

                    })}
                </ol>
            )}
        </div>
    );
}


MoviesPage.propTypes = {
    onSubmit: PropTypes.func,
};



















// export default function MoviesPage() {
//     return (
//         <div>
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem nobis iure, at corrupti eius repellat maxime aperiam illum nemo voluptatem facilis architecto rem labore. Veniam sapiente dolores hic provident laborum!Lorem
//             Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis, tenetur cumque beatae obcaecati dolorum deleniti cum fugit quas ab sunt pariatur iure ipsa facilis ex, quisquam eveniet quidem cupiditate praesentium.
//         </div>
//     )
// }