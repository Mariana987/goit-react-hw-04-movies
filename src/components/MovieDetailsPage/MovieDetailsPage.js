import { useState, useEffect, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import { FetchMovieDetails } from '../../servises/movieFetch';
import { NavLink } from 'react-router-dom';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';
import s from './MovieDetailsPage.module.css'

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
        <div >
            {movieDetails && <>
                {/* <Button handleClick={goBack} /> */}
                <button type="button" onClick={goBack} className={s.button}>
                    Go back
                </button>

                <div className={s.info}>
                    <img className={s.image} src={`${IMAGE_URL}${movieDetails.poster_path}`} alt={movieDetails.title} />
                    <div className={s.data}>   <h1 className={s.title}>{movieDetails.title}</h1>
                        <p className={s.overview}>
                            {movieDetails.overview}
                        </p>
                        <h2>Genres</h2>
                        {movieDetails.genres.map(
                            genres => {
                                return (
                                    <li key={movieDetails.genres.id}>{genres.name}</li>)
                            }
                        )}</div>

                </div>
                <hr className={s.shadow} />
                <h4>Additionnal Information</h4>
                <div className={s.addInfo}>
                    <NavLink className={s.infoLink} to={`${match.url}/cast`}>Cast </NavLink>
                    <NavLink className={s.infoLink} to={`${match.url}/reviews`}>Review </NavLink>
                </div>


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

