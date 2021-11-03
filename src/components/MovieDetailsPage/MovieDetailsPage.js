import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FetchMovieDetails } from '../../servises/movieFetch';




export default function MoviesPageDetails({ match, history, location }) {
    // const { movieId } = useParams();
    const movieId = match.params.url;
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

            </>}
        </div>
    )
}