import React from 'react'

const RecommendedMovies = () => {
    const movies = ["Movie 1", "Movie 2", "Movie 3", "Movie 4", "Movie 5"];
    return (
      <div className="recommended-movies">
        <h3>Recommended</h3>
        <div className="movie-list">
          {movies.map((movie, index) => (
            <div className="movie-card" key={index}>
              <img src={`${movie}.jpg`} alt={movie} />
              <p>{movie}</p>
            </div>
          ))}
        </div>
      </div>
    );
}

export default RecommendedMovies
