import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FetchMovieDetails } from '../../servises/movieFetch';
import { NavLink } from 'react-router-dom';



export default function MoviesPageDetails({ match, history, location }) {
    const { movieId } = useParams();
    // const movieId = match.params.url;
    console.log(movieId)
    const [movieDetails, setMovieDetails] = useState(null)
    useEffect(() => {
        FetchMovieDetails(movieId).then(response => {
            setMovieDetails(response);
        })
        return () => {

        }
    }, [movieId])

    return (
        <div>
            {movieDetails && <>
                <img src={movieDetails.poster_path} alt={movieDetails.title} />
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



            </>}
            <div>
                <NavLink to={`${match.url}/cast`}>Cast </NavLink>
                <NavLink to='/reviews'>Review </NavLink>
            </div>
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