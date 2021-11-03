const myKey = '82247949d6984757ff30e3696af16cf8'
const baseUrl = 'https://api.themoviedb.org/3'



async function fetchWithErrorHandling(url = '', config = {}) {
    const response = await fetch(url, config);
    return response.ok ? await response.json() : Promise.reject(new Error('Not found'));
}

export function fetchMovies() {
    return fetch(`${baseUrl}/trending/movie/week?api_key=${myKey}`).then(response =>
        response.json(),
    )
}



export function FetchSearchMovies(query) {
    return fetchWithErrorHandling(`${baseUrl}/search/movie?query=${query}&api_key=${myKey}`);
}

export function FetchMovieDetails(id) {
    return fetchWithErrorHandling(`${baseUrl}/movie/${id}?api_key=${myKey}`);
}

export function FetchMovieCast(id) {
    return fetchWithErrorHandling(`${baseUrl}/movie/${id}/credits?api_key=${myKey}`);
}

export function FetchMovieReviews(id) {
    return fetchWithErrorHandling(`${baseUrl}/movie/${id}/reviews?api_key=${myKey}`);
}