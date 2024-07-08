import React, { useEffect, useState } from 'react';

const Sample = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/api/movies/upcoming')
            .then(response => response.json())
            .then(data => setMovies(data.results)) // Accessing results directly
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    console.log("MOVIES DATA : ", movies);

    return (
        <div>
            <h1>Upcoming Movies</h1>
            <ul>
                {movies.map((movie, index) => (
                    <li key={index}>
                        <h2>{movie.titleText.text}</h2>
                        <img src={movie.primaryImage.url} alt={movie.titleText.text} width="200" />
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sample;
