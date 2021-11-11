import { useState, useEffect, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { FetchMovieDetails } from '../../servises/movieFetch';
import { NavLink } from 'react-router-dom';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews'

const IMAGE_URL = 'https://image.tmdb.org/t/p/w200';

export default function MoviesPageDetails({ match, history, location }) {
    const { movieId } = useParams();

    const [movieDetails, setMovieDetails] = useState(null)
    useEffect(() => {
        FetchMovieDetails(movieId).then(response => {
            setMovieDetails(response);
        })

    }, [movieId])


    const goBack = () => {
        history.push(location?.state?.from ?? '/');
    };

    return (
        <div>
            {movieDetails && <>
                {/* <Button handleClick={goBack} /> */}
                <button type="button" onClick={goBack}>
                    Go back
                </button>

                <img src={`${IMAGE_URL}${movieDetails.poster_path}`} alt={movieDetails.title} />
                <h1>{movieDetails.title}</h1>
                <p>
                    {movieDetails.overview}
                </p>
                <h2>Genres</h2>
                {movieDetails.genres.map(
                    genres => {
                        return (
                            <li key={movieDetails.genres.id}>{genres.name}</li>)
                    }
                )}

                <NavLink to={`${match.url}/cast`}>Cast </NavLink>
                <NavLink to={`${match.url}/reviews`}>Review </NavLink>


                <Suspense fallback={<h1>Загрузка дополнительной информации о фильме...</h1>}>
                    <Switch>
                        <Route path={`${match.path}/cast`} component={Cast}></Route>
                        <Route path={`${match.path}/reviews`} component={Reviews}></Route>
                    </Switch>
                </Suspense>
            </>}


        </div>


    )
}


 // (
    //     <div>
    //         {movieDetails && <>
    //             <img src={} alt={movieDetails.title} />

    //         </>}
    //     </div>
    // )