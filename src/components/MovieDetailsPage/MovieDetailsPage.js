import { useState, useEffect, Suspense } from 'react';
import { Switch, Route, useRouteMatch, useLocation, useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { FetchMovieDetails } from '../../servises/movieFetch';
import { NavLink } from 'react-router-dom';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';
import s from './MovieDetailsPage.module.css'

const imageUrl = 'https://image.tmdb.org/t/p/w200';

export default function MoviesPageDetails({ match }) {
    const { movieId } = useParams();
    const { url } = useRouteMatch();
    const [movieDetails, setMovieDetails] = useState(null);
    const location = useLocation();
    const history = useHistory();
    console.log(location)

    useEffect(() => {
        FetchMovieDetails(movieId).then(response => {
            setMovieDetails(response);
        })
    }, [movieId])

    const goBack = () => {

        history.push(location?.state?.from ?? "/");
    };

    return (
        movieDetails && <>
            <button type="button" onClick={goBack} className={s.button}>
                Go back
            </button>
            <div className={s.info}>
                <img className={s.image} src={`${imageUrl}${movieDetails.poster_path}`} alt={movieDetails.title} />
                <div className={s.data}>   <h1 className={s.title}>{movieDetails.title}</h1>
                    <p>User score: {movieDetails.vote_average}</p>
                    <p className={s.overview}>
                        {movieDetails.overview}
                    </p>
                    <h2>Genres:</h2>
                    {movieDetails.genres.map(
                        genres => {
                            return (
                                <li key={genres.id}>{genres.name}</li>)
                        }
                    )}</div>
            </div>
            <hr className={s.shadow} />
            <h4>Additionnal Information:</h4>
            <div className={s.addInfo}>
                <NavLink className={s.infoLink} to={{
                    pathname: `${url}/cast`,
                    state: { from: location },
                }}
                >Cast </NavLink>
                <NavLink className={s.infoLink} to={{
                    pathname: `${url}/reviews`,
                    state: { from: location }
                }}
                >Review </NavLink>
            </div>
            <Suspense fallback={<h1>Loading more information about this movie...</h1>}>
                <Switch>
                    <Route path={`${match.path}/cast`} >
                        <Cast />
                    </Route>
                    <Route path={`${match.path}/reviews`}>
                        <Reviews />
                    </Route>
                </Switch>
            </Suspense>
        </>
    )
}




