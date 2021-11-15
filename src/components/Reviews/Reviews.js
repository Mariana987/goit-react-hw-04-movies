import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FetchMovieReviews } from '../../servises/movieFetch';
import s from './Reviews.module.css';

export default function Reviews() {
    const [reviews, setReviews] = useState(null);
    const { movieId } = useParams();

    useEffect(() => {
        FetchMovieReviews(movieId).then(response => {
            setReviews(response.results);
        });
    }, [movieId]);
    return (
        <ul className={s.reviewsList}>
            {reviews && reviews.length === 0 ? (
                <p>Sorry, there are no reviews for this movie.</p>)
                : (
                    reviews && (
                        reviews.map(i => {
                            return (
                                <li key={i.id}>
                                    <h2>Author: {i.author_details.username}</h2>
                                    <p>{i.content}</p>
                                </li>
                            )
                        })
                    )
                )
            }
        </ul>
    )
}


