import React from "react";
import "./Test.css"; // Add appropriate styles
import Footer from "../footer/Footer";
import WeekTopArticlesCard from "../weekTopArticles/WeekTopArticlesCard";
import { WeekTopCommentsCard } from "../weekTopComments/WeekTopCommentsCard";
import { WeekPopularReviewers } from "../weekTopComments/WeekPopularReviewers";
import { WeekTopReviewers } from "../weekTopComments/WeekTopReviewers";
import Carousel from "../carousel/Carousel";
import { FilterSelection } from "../catalogue/FilterSelection";

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

function HomePage() {
  const images = ["Image Location", "Image 2", "Image 3"];
  const titles = ["Article Title", "AT 2", "AT 3"];
  const byPersons = ["By This Person", "BTP 2", "BTP 3"];
  const articleDescription = [
    "Links to top social media platforms",
    "Desc 2",
    "Desc 3",
  ];
  const links = [
    "https://www.facebook.com",
    "https://www.twitter.com",
    "https://www.instagram.com",
  ];

  // For Top Comments of This Week
  const weekTopCommentUserImages = ["Image Location.jpg", "Image 2", "Image 3"];
  const movieTitles = ["Movie Title", "MT 2", "MT 3"];
  const movieYear = ["2024", "Year 2", "Year 3"];
  const movieRatings = ["5", "4", "2"];
  const criticName = ["Critic Name", "Name 2", "Name 3"];
  const userComment = [
    "Comment Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi numquam eum explicabo magnam quidem cumque laborum rerum commodi dicta vitae?",
    "Comment 2",
    "Comment 3",
  ];

  const seeMoreLinks = [
    "https://www.facebook.com",
    "https://www.twitter.com",
    "https://www.instagram.com",
  ];

  // For Popular Reviewers
  const criticNameReviewersPopular = ["Critic Name", "Name 2", "Name 3"];
  const imageReviewersPopular = ["Critic Image Popular", "CI 2", "CI 3"];
  const totalNumMoviesReviewersPopular = ["105", "5", "3"];
  const totalNumReviewsPopular = ["999", "20", "50"];

  // For Top Reviewers of this Week
  const criticNameReviewersTop = ["Critic Name", "Name 2", "Name 3"];
  const imageReviewersTop = ["Critic Image Popular", "CI 2", "CI 3"];
  const totalNumMoviesReviewersTop = ["1705", "65", "3"];
  const totalNumReviewsTop = ["35", "236", "567"];

  // For Carousel New Web Releases
  const webItems = [
    { imageUrl: "./images/img Test.png", title: "Movie Title 1", rating: 5 },
    { imageUrl: "path/to/image2.jpg", title: "Movie Title 2", rating: 3.5 },
    { imageUrl: "path/to/image3.jpg", title: "Movie Title 3", rating: 3 },
    { imageUrl: "path/to/image4.jpg", title: "Movie Title 4", rating: 4 },
    { imageUrl: "path/to/image5.jpg", title: "Movie Title 5", rating: 5 },
    { imageUrl: "path/to/image6.jpg", title: "Movie Title 6", rating: 3 },
    { imageUrl: "path/to/image1.jpg", title: "Movie Title 1", rating: 5 },
    { imageUrl: "path/to/image2.jpg", title: "Movie Title 2", rating: 4 },
    { imageUrl: "path/to/image3.jpg", title: "Movie Title 3", rating: 3 },
    { imageUrl: "path/to/image4.jpg", title: "Movie Title 4", rating: 4 },
    { imageUrl: "path/to/image5.jpg", title: "Movie Title 5", rating: 5 },
    { imageUrl: "path/to/image6.jpg", title: "Movie Title 6", rating: 3 },
  ];

  // For Carousel New Movie Releases
  const movieItems = [
    { imageUrl: "path/to/image2.jpg", title: "Movie Title 2", rating: 3.5 },
    { imageUrl: "path/to/image3.jpg", title: "Movie Title 3", rating: 3 },
    { imageUrl: "path/to/image4.jpg", title: "Movie Title 4", rating: 4 },
    { imageUrl: "./images/img Test.png", title: "Movie Title 1", rating: 5 },
    { imageUrl: "path/to/image5.jpg", title: "Movie Title 5", rating: 5 },
    { imageUrl: "path/to/image6.jpg", title: "Movie Title 6", rating: 3 },
    { imageUrl: "path/to/image1.jpg", title: "Movie Title 1", rating: 5 },
    { imageUrl: "path/to/image2.jpg", title: "Movie Title 2", rating: 4 },
    { imageUrl: "path/to/image3.jpg", title: "Movie Title 3", rating: 3 },
    { imageUrl: "path/to/image4.jpg", title: "Movie Title 4", rating: 4 },
    { imageUrl: "path/to/image5.jpg", title: "Movie Title 5", rating: 5 },
    { imageUrl: "path/to/image6.jpg", title: "Movie Title 6", rating: 3 },
  ];
  // For Carousel New Trailer Releases
  const trailerItems = [
    { imageUrl: "path/to/image2.jpg", title: "Trailer Title 2", rating: 3.5 },
    { imageUrl: "./images/img Test.png", title: "Trailer Title 1", rating: 5 },
    { imageUrl: "path/to/image3.jpg", title: "Trailer Title 3", rating: 3 },
    { imageUrl: "path/to/image4.jpg", title: "Trailer Title 4", rating: 4 },
    { imageUrl: "path/to/image5.jpg", title: "Trailer Title 5", rating: 5 },
    { imageUrl: "path/to/image6.jpg", title: "Trailer Title 6", rating: 3 },
    { imageUrl: "path/to/image1.jpg", title: "Trailer Title 1", rating: 5 },
    { imageUrl: "path/to/image2.jpg", title: "Trailer Title 2", rating: 4 },
    { imageUrl: "path/to/image3.jpg", title: "Trailer Title 3", rating: 3 },
    { imageUrl: "path/to/image4.jpg", title: "Trailer Title 4", rating: 4 },
    { imageUrl: "path/to/image5.jpg", title: "Trailer Title 5", rating: 5 },
    { imageUrl: "path/to/image6.jpg", title: "Trailer Title 6", rating: 3 },
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

      <div className="flex flex-col p-20">
        <div className="flex justify-center">
          <h2>Catalogue</h2>
        </div>
        <div>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-[#444]"></hr>
        </div>
        <div>
          <FilterSelection />
        </div>
        <div>
          <h2>Recent Trailers</h2>
        </div>
        <div>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-[#444]"></hr>
        </div>
        <div>
          <Carousel items={trailerItems} />
        </div>
        <div>
          <h2>New Movie Releases</h2>
        </div>
        <div>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-[#444]"></hr>
        </div>
        <div>
          <Carousel items={movieItems} />
        </div>

        <div>
          <h2>New Web Releases</h2>
        </div>
        <div>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-[#444]"></hr>
        </div>
        <div>
          <Carousel items={webItems} />
        </div>

        <div>
          <h2>Top Comments This Week</h2>
        </div>
        <div>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-[#444]"></hr>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            {userComment.map((userComment, index) => (
              <div>
                <div>
                  <WeekTopCommentsCard
                    key={index}
                    weekTopCommentUserImages={weekTopCommentUserImages[index]}
                    movieTitles={movieTitles[index]}
                    movieYear={movieYear[index]}
                    movieRatings={movieRatings[index]}
                    criticName={criticName[index]}
                    userComment={userComment[index]}
                    seeMoreLinks={seeMoreLinks[index]}
                  />
                </div>
                <div>
                  <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-[#444]"></hr>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col">
            <div>
              <div>
                <h1>Popular Reviewers</h1>
              </div>
              <div className="flex flex-col">
                {criticNameReviewersPopular.map(
                  (criticNameReviewersPopular, index) => (
                    <div>
                      <div>
                        <WeekPopularReviewers
                          key={index}
                          criticNameReviewersPopular={
                            criticNameReviewersPopular[index]
                          }
                          imageReviewersPopular={imageReviewersPopular[index]}
                          totalNumMoviesReviewersPopular={
                            totalNumMoviesReviewersPopular[index]
                          }
                          totalNumReviewsPopular={totalNumReviewsPopular[index]}
                        />
                      </div>
                      <div>
                        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-[#444]"></hr>
                      </div>
                    </div>
                  )
                )}
              </div>
            </div>
            <div className="mt-9">
              <div>
                <h1>Top Reviewers of This Week</h1>
              </div>
              <div className="flex flex-col">
                {criticNameReviewersTop.map((criticNameReviewersTop, index) => (
                  <div>
                    <div>
                      <WeekTopReviewers
                        key={index}
                        criticNameReviewersTop={criticNameReviewersTop[index]}
                        imageReviewersTop={imageReviewersTop[index]}
                        totalNumMoviesReviewersTop={
                          totalNumMoviesReviewersTop[index]
                        }
                        totalNumReviewsTop={totalNumReviewsTop[index]}
                      />
                    </div>
                    <div>
                      <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-[#444]"></hr>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col p-20">
        <div>
          <h2>Top Articles This Week</h2>
        </div>
        <div>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-[#444]"></hr>
        </div>
        <div className="flex flex-row justify-between">
          {titles.map((title, index) => (
            <WeekTopArticlesCard
              key={index}
              image={images[index]}
              title={title}
              byPerson={byPersons[index]}
              articleDescription={articleDescription[index]}
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
