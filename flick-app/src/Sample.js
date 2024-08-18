import React, { useEffect, useState } from 'react';

const Sample = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch(`${process.env.REACT_APP_API_URL}/api/movies/popular`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                if (data && data.data && data.data.list && Array.isArray(data.data.list)) {
                    setMovies(data.data.list); // Assuming 'list' contains the array of movies
                } else {
                    console.error('Invalid data format:', data);
                }
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    // console.log("MOVIES DATA : ", movies);

    return (
        <div>
            <h1>Popular Movies</h1>
            <ul>
                {movies.map((movie, index) => (
                    <li key={index}>
                        <h2>{movie.title.originalTitleText.text}</h2>
                        <img src={movie.title.primaryImage.imageUrl} alt={movie.title.originalTitleText.text} width="200" />
                        <p>Release Year: {movie.title.releaseYear.year}</p>
                        <p>Rating: {movie.title.ratingsSummary.aggregateRating}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sample;
