import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FetchMovieCast } from '../../servises/movieFetch';
import s from './Cast.module.css'

const IMAGE_URL = 'https://image.tmdb.org/t/p/w200';
export default function Cast() {
    const { url } = useParams();
    const [cast, setCast] = useState(null)
    const { movieId } = useParams();
    console.log(url)
    useEffect(() => {
        FetchMovieCast(movieId).then(response => {
            setCast(response.cast);
        })
        return () => {
        }
    }, [movieId])

    return (
        cast && (
            <div className={s.container}>
                <h2 className={s.castTitle}>Actors:</h2>
                <ul className={s.castList}>

                    {cast.map(e => {
                        return (
                            <li key={e.id} className={s.castItem}>
                                {
                                    e.profile_path ? (
                                        <img className={s.castImg} src={`${IMAGE_URL}${e.profile_path}`} alt={e.name} />
                                    ) : (
                                        <img
                                            src='../images/001-not-found.png'
                                            alt="Not found"
                                            width={200}
                                        />
                                    )}
                                <p className={s.castInfo}>{e.name}</p>
                                <p className={s.castInfo}>{e.character}</p>
                            </li>
                        );
                    })}
                </ul ></div>
        )
    );
}