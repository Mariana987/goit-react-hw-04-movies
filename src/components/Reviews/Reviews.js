import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FetchMovieReviews } from '../../servises/movieFetch';
import { NavLink } from 'react-router-dom';

export default function Rewiews() {
    const [reviews, setReviews] = useState(null);
    const { movieId } = useParams();

    useEffect(() => {
        FetchMovieReviews(movieId).then(response => {
            setReviews(response.results);
        });
    }, [movieId]);

    return reviews ? (
        <ul>
            {reviews.map(i => {
                return (
                    <li key={i.id}>
                        <h2>Author: {i.author_details.username}</h2>
                        <p>{i.content}</p>
                    </li>
                );
            })}
        </ul>
    ) : (
        <p>We don't have any reviews for this movie.</p>
    );
}