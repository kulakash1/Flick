import React, { useState, useEffect } from "react";
import "./Test.css"; // Add appropriate styles
import Footer from "../footer/Footer";
import WeekTopArticlesCard from "../weekTopArticles/WeekTopArticlesCard";
import { WeekTopCommentsCard } from "../weekTopComments/WeekTopCommentsCard";
import { WeekPopularReviewers } from "../weekTopComments/WeekPopularReviewers";
import { WeekTopReviewers } from "../weekTopComments/WeekTopReviewers";
import Carousel from "../carousel/Carousel";
import FilterSelection from "../catalogue/FilterSelection";
import { IoSearchCircleOutline } from "react-icons/io5";
import { Pagination } from "antd";
import MovieCatalogueCard from "../catalogue/MovieCatalogueCard";
import HomepageTopCarousel from "../carousel/HomepageTopCarousel";
import RecommendedMovies from "../recommendedMovies/RecommendedMovies";
import BestOf2024 from "../bestOf2024/BestOf2024";
import {
  bestOf2024Data,
  movieDropdownData,
  yearDropdownData,
  reviewsDropdownData,
  languageDropdownData,
  trailerItems,
  movieItems,
  webItems,
  weekPopularReviewerData,
  weekTopArticlesData,
  weekTopReviewerData,
  weekTopCommentUserData,
} from "../data/Data";

function Header() {
  return (
    <header className="header">
      <input type="text" placeholder="Search..." className="search-bar" />
      <button className="login-button">Login</button>
    </header>
  );
}

function HomePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 11;

  // States for filters and search
  const [selectedMovie, setSelectedMovie] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [selectedReview, setSelectedReview] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  // State for filtered items
  const [filteredItems, setFilteredItems] = useState(movieCatalogueItems);

  useEffect(() => {
    // Filter items whenever the search term or any filter changes
    const result = movieCatalogueItems.filter((item) => {
      return (
        (selectedMovie === "" || item.movie.toLowerCase().includes(selectedMovie.toLowerCase())) &&
        (selectedYear === "" || item.year === selectedYear) &&
        (selectedReview === "" || item.review === selectedReview) &&
        (selectedLanguage === "" || item.language === selectedLanguage) &&
        (searchTerm === "" || item.title.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    });
    setFilteredItems(result);
  }, [selectedMovie, selectedYear, selectedReview, selectedLanguage, searchTerm]);

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="homepage bg-[#1c1c1e] text-[#fff]">
      {/* <Header /> */}

      <div className="flex flex-col pl-20 pt-2 pr-5">
        <div className="flex flex-row gap-4">
          <div className="flex flex-col w-2/3">
            <HomepageTopCarousel />
            <h2>Recommended</h2>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-[#444]"></hr>
            <Carousel items={trailerItems} />
          </div>
          <div className="flex flex-col w-1/3">
            <h2>Best of 2024</h2>
            <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-[#444]"></hr>
            {bestOf2024Data.map((movie, index) => (
              <BestOf2024
                key={index}
                imageUrl={movie.imageUrl}
                title={movie.title}
                year={movie.year}
                category={movie.category}
                rating={movie.rating}
              />
            ))}
          </div>
        </div>

        <div className="flex justify-center">
          <h2>Catalogue</h2>
        </div>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-[#444]"></hr>
        <div className="flex flex-row justify-between">
          <FilterSelection
            options={movieDropdownData}
            filterWidth="180px"
            filterHeight="50px"
            placeholderData="Movie"
            onChange={(e) => setSelectedMovie(e.target.value)}
          />
          <FilterSelection
            options={yearDropdownData}
            filterWidth="160px"
            filterHeight="50px"
            placeholderData="Year"
            onChange={(e) => setSelectedYear(e.target.value)}
          />
          <FilterSelection
            options={reviewsDropdownData}
            filterWidth="200px"
            filterHeight="50px"
            placeholderData="Reviews"
            onChange={(e) => setSelectedReview(e.target.value)}
          />
          <FilterSelection
            options={languageDropdownData}
            filterWidth="200px"
            filterHeight="50px"
            placeholderData="Language"
            onChange={(e) => setSelectedLanguage(e.target.value)}
          />
          <IoSearchCircleOutline
            className="text-[50px] w-[40px] cursor-pointer"
            onClick={() => {}}
          />
        </div>

        <div className="flex flex-wrap justify-between">
          {filteredItems
            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
            .map((item, index) => (
              <div key={index} className="w-1/4 mb-4">
                <MovieCatalogueCard item={item} />
              </div>
            ))}
        </div>

        <div className="flex flex-row justify-center">
          <Pagination
            total={filteredItems.length}
            current={currentPage}
            pageSize={itemsPerPage}
            onChange={setCurrentPage}
            showSizeChanger
            showQuickJumper
            showTotal={(total) => `Total ${total} items`}
          />
        </div>

        <h2>Recent Trailers</h2>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-[#444]"></hr>
        <Carousel items={trailerItems} />

        <h2>New Movie Releases</h2>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-[#444]"></hr>
        <Carousel items={movieItems} />

        <h2>New Web Releases</h2>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-[#444]"></hr>
        <Carousel items={webItems} />

        <h2>Top Comments This Week</h2>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-[#444]"></hr>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            {weekTopCommentUserData.map((data, index) => (
              <div key={index}>
                <WeekTopCommentsCard
                  weekTopCommentUserImages={data.profileImage}
                  weekTopCommentMoovieImages={data.movieImage}
                  movieTitles={data.movieTitle}
                  movieYear={data.movieYear}
                  movieRatings={data.movieRating}
                  criticName={data.criticName}
                  userComment={data.userComment}
                  seeMoreLinks={data.seeMoreLink}
                />
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-[#444]"></hr>
              </div>
            ))}
          </div>

          <div className="flex flex-col">
            <h1>Popular Reviewers</h1>
            <div className="flex flex-col">
              {weekPopularReviewerData.map((reviewerData, index) => (
                <div key={index}>
                  <WeekPopularReviewers
                    criticNameReviewersPopular={reviewerData.criticName}
                    imageReviewersPopular={reviewerData.image}
                    totalNumMoviesReviewersPopular={reviewerData.totalNumMovies}
                    totalNumReviewsPopular={reviewerData.totalNumReviews}
                  />
                  <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-[#444]"></hr>
                </div>
              ))}
            </div>

            <div className="mt-9">
              <h1>Top Reviewers of This Week</h1>
              <div className="flex flex-col">
                {weekTopReviewerData.map((reviewer, index) => (
                  <div key={index}>
                    <WeekTopReviewers
                      criticNameReviewersTop={reviewer.criticName}
                      imageReviewersTop={reviewer.image}
                      totalNumMoviesReviewersTop={reviewer.totalNumMovies}
                      totalNumReviewsTop={reviewer.totalNumReviews}
                    />
                    <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-[#444]"></hr>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <h2>Top Articles This Week</h2>
        <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-[#444]"></hr>
        <div className="flex flex-wrap gap-4">
          {weekTopArticlesData.map((article, index) => (
            <WeekTopArticlesCard
              key={index}
              imageUrl={article.imageUrl}
              title={article.title}
              summary={article.summary}
              articleLink={article.articleLink}
            />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default HomePage;
