import React from "react";
import "./Test.css"; // Add appropriate styles
import Footer from "../footer/Footer";
import WeekTopArticlesCard from "../weekTopArticles/WeekTopArticlesCard";

function Header() {
  return (
    <header className="header">
      <input type="text" placeholder="Search..." className="search-bar" />
      <button className="login-button">Login</button>
    </header>
  );
}

function FeaturedMovie() {
  return (
    <div className="featured-movie">
      <img src="featured-movie.jpg" alt="Featured Movie" />
      <h2>Movie Title</h2>
    </div>
  );
}

function RecommendedMovies() {
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

function BestOf2024() {
  const bestMovies = ["Movie A", "Movie B", "Movie C", "Movie D"];
  return (
    <div className="best-of-2024">
      <h3>Best of 2024</h3>
      {bestMovies.map((movie, index) => (
        <div className="best-movie" key={index}>
          <img src={`${movie}.jpg`} alt={movie} />
          <p>{movie}</p>
        </div>
      ))}
    </div>
  );
}

function Catalogue() {
  const categories = ["Action", "Comedy", "Drama", "Sci-Fi", "Horror"];
  const movies = Array(8).fill("Movie Title");
  return (
    <div className="catalogue">
      <h3>Catalogue</h3>
      <div className="tabs">
        {categories.map((category, index) => (
          <button className="tab" key={index}>
            {category}
          </button>
        ))}
      </div>
      <div className="movie-grid">
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

function RecentTrailers() {
  const trailers = ["Trailer 1", "Trailer 2", "Trailer 3", "Trailer 4"];
  return (
    <div className="recent-trailers">
      <h3>Recent Trailers</h3>
      <div className="trailer-list">
        {trailers.map((trailer, index) => (
          <div className="trailer-card" key={index}>
            <img src={`${trailer}.jpg`} alt={trailer} />
            <p>{trailer}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function NewMovieReleases() {
  const movies = ["New Movie 1", "New Movie 2", "New Movie 3", "New Movie 4"];
  return (
    <div className="new-movie-releases">
      <h3>New Movie Releases</h3>
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

function NewWebReleases() {
  const movies = ["New Web 1", "New Web 2", "New Web 3", "New Web 4"];
  return (
    <div className="new-web-releases">
      <h3>New Web Releases</h3>
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

function TopComments() {
  const comments = [
    { title: "Movie Title", comment: "Great movie!", user: "User1" },
    { title: "Movie Title", comment: "Loved it!", user: "User2" },
    { title: "Movie Title", comment: "Amazing!", user: "User3" },
    { title: "Movie Title", comment: "Fantastic!", user: "User4" },
  ];
  return (
    <div className="top-comments">
      <h3>Top Comments This Week</h3>
      {comments.map((comment, index) => (
        <div className="comment-card" key={index}>
          <h4>{comment.title}</h4>
          <p>{comment.comment}</p>
          <small>{comment.user}</small>
        </div>
      ))}
    </div>
  );
}

function PopularReviewers() {
  const reviewers = ["Reviewer 1", "Reviewer 2", "Reviewer 3", "Reviewer 4"];
  return (
    <div className="popular-reviewers">
      <h3>Popular Reviewers</h3>
      {reviewers.map((reviewer, index) => (
        <div className="reviewer-card" key={index}>
          <p>{reviewer}</p>
        </div>
      ))}
    </div>
  );
}

function TopReviewers() {
  const reviewers = [
    "Top Reviewer 1",
    "Top Reviewer 2",
    "Top Reviewer 3",
    "Top Reviewer 4",
  ];
  return (
    <div className="top-reviewers">
      <h3>Top Reviewers This Week</h3>
      {reviewers.map((reviewer, index) => (
        <div className="reviewer-card" key={index}>
          <p>{reviewer}</p>
        </div>
      ))}
    </div>
  );
}

function TopArticles() {
  const articles = Array(6).fill({
    title: "Article Title",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    author: "Author Name",
  });
  return (
    <div className="top-articles">
      <h3>Top Articles This Week</h3>
      <div className="article-list">
        {articles.map((article, index) => (
          <div className="article-card" key={index}>
            <h4>{article.title}</h4>
            <p>{article.description}</p>
            <small>{article.author}</small>
          </div>
        ))}
      </div>
    </div>
  );
}

function HomePage() {

  const images = ["Image Location", "Image 2", "Image 3"];
  const titles = ["Article Title", "AT 2", "AT 3"];
  const byPersons = ["By This Person", "BTP 2", "BTP 3"];
  const descriptions = [
    "Links to top social media platforms",
    "Desc 2",
    "Desc 3",
  ];
  const links = [
    "https://www.facebook.com",
    "https://www.twitter.com",
    "https://www.instagram.com",
  ];
  
  return (
    <div className="homepage">
      <Header />
      <FeaturedMovie />
      <div className="main-content">
        <RecommendedMovies />
        <BestOf2024 />
      </div>
      <Catalogue />
      <RecentTrailers />
      <NewMovieReleases />
      <NewWebReleases />
      <TopComments />
      <div className="reviewers-section">
        <PopularReviewers />
        <TopReviewers />
      </div>
      <TopArticles />
      <div className="flex flex-col p-20">
      <div>
        <h2>Top Articles This Week</h2>
      </div>
      <div className="flex flex-row justify-between">
          {titles.map((title, index) => (
            <WeekTopArticlesCard
              key={index}
              image={images[index]}
              title={title}
              byPerson={byPersons[index]}
              description={descriptions[index]}
              links={links[index]}
            />
          ))}
        </div>

      </div>

      <Footer />
    </div>
  );
}

export default HomePage;
