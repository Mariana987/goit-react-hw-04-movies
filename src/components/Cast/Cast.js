import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FetchMovieCast } from '../../servises/movieFetch';
import { NavLink } from 'react-router-dom';

const IMAGE_URL = 'https://image.tmdb.org/t/p/w200';
export default function Cast({ match }) {
    const { url } = useParams();
    // const movieId = match.params.url;
    const [cast, setCast] = useState(null)
    // const { credits } = useParams();


    const { movieId } = useParams();
    console.log(url)
    useEffect(() => {
        FetchMovieCast(movieId).then(response => {
            setCast(response.cast);
            console.log(response.cast.map(i => { return (i.id) }))
        })
        return () => {
        }
    }, [movieId])


    return (
        cast && (
            <ul >
                {cast.map(i => {
                    return (
                        <li key={i.id}>
                            {
                                i.profile_path ? (
                                    <img src={`${IMAGE_URL}${i.profile_path}`} alt={i.name} />
                                ) : (
                                    <img
                                        src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png"
                                        alt="Not found"
                                        width={200}
                                    />
                                )}
                            <p>{i.name}</p>
                            <p>{i.character}</p>
                        </li>
                    );
                })}
            </ul >
        )
    );
}