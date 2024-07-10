import React, { useState } from "react";
import "./Test.css"; // Add appropriate styles
import Footer from "../footer/Footer";
import WeekTopArticlesCard from "../weekTopArticles/WeekTopArticlesCard";
import { WeekTopCommentsCard } from "../weekTopComments/WeekTopCommentsCard";
import { WeekPopularReviewers } from "../weekTopComments/WeekPopularReviewers";
import { WeekTopReviewers } from "../weekTopComments/WeekTopReviewers";
import Carousel from "../carousel/Carousel";
import FilterSelection from "../catalogue/FilterSelection";
// import TetsFilt from "../catalogue/TestFilt";
import { IoSearchCircleOutline } from "react-icons/io5";
import { Pagination } from "antd";
import MovieCatalogueCard from "../catalogue/MovieCatalogueCard.js";
import HomepageTopCarousel from "../carousel/HomepageTopCarousel.js";
import RecommendedMovies from "../recommendedMovies/RecommendedMovies.js";
import imgA from "../carousel/images/img Test.png";
import BestOf2024 from "../bestOf2024/BestOf2024.js";

import TestNew, { bestOf2024Data, movieDropdownData, yearDropdownData, categoryDropdownData, reviewsDropdownData, countryDropdownData, languageDropdownData, movieCatalogueItems, trailerItems, movieItems, webItems, weekPopularReviewerData, weekTopArticlesData, weekTopReviewerData, weekTopCommentUserData } from '../data/Data'; // Adjust the path as needed
import TestCOmponent from "../test/TestCOmponent.js";

function Header() {
  return (
    <header className="header">
      <input type="text" placeholder="Search..." className="search-bar" />
      <button className="login-button">Login</button>
    </header>
  );
}

// function BestOf2024() {
//   const bestMovies = ["Movie A", "Movie B", "Movie C", "Movie D"];
//   return (
//     <div className="best-of-2024">
//       {bestMovies.map((movie, index) => (
//         <div className="best-movie" key={index}>
//           <img src={`${movie}.jpg`} alt={movie} />
//           <p>{movie}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

function HomePage() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 11;

  return (
    <div className="homepage">
      {/* <Header /> */}

      <div className="flex flex-col pl-20 pt-2 pr-5">
        {/* <div className="flex flex-row">
          <div className="flex flex-col">
            <div>
              <HomepageTopCarousel />
            </div>
            <div>
            <RecommendedMovies />
            </div>
          </div>
          <div>
            <BestOf2024 />
          </div>
        </div> */}
        <div className="flex flex-row gap-4">
          <div className="flex flex-col w-2/3">
            <div>
              <HomepageTopCarousel />
            </div>
            <div>
              <h2>Recommended</h2>
            </div>
            <div>
              <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-[#444]"></hr>
            </div>
            <div>
              {/* <Carousel items={trailerItems} /> */}
            </div>
            {/* <RecommendedMovies /> */}
          </div>
          <div className="flex flex-col w-1/3">
            <div>
              <h2>Best of 2024</h2>
            </div>
            <div>
              <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-[#444]"></hr>
            </div>
            <div className="">
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
        </div>

        <div className="flex justify-center">
          <h2>Catalogue</h2>
        </div>

        <div>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-[#444]"></hr>
        </div>
        <div className="flex flex-row justify-between">
          <div>
            <FilterSelection
              options={movieDropdownData}
              filterWidth="180px"
              filterHeight="50px"
              placeholderData="Movie"
            />
          </div>
          <div>
            <FilterSelection
              options={yearDropdownData}
              filterWidth="160px"
              filterHeight="50px"
              placeholderData="Year"
            />
          </div>
          <div>
            {/* <FilterSelection
              options={categoryDropdownData}
              filterWidth="200px"
              filterHeight="50px"
              placeholderData="Category"
            /> */}
          </div>
          <div>
            <FilterSelection
              options={reviewsDropdownData}
              filterWidth="200px"
              filterHeight="50px"
              placeholderData="Reviews"
            />
          </div>
          <div>
            {/* <FilterSelection
              options={countryDropdownData}
              filterWidth="200px"
              filterHeight="50px"
              placeholderData="Country"
            /> */}
          </div>
          <div>
            <FilterSelection
              options={languageDropdownData}
              filterWidth="200px"
              filterHeight="50px"
              placeholderData="Language"
            />
          </div>
          <div>
            <IoSearchCircleOutline className="text-[50px] w-[40px]" />
          </div>
        </div>
        <div className="flex flex-wrap justify-between">
          {movieCatalogueItems
            .slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage)
            .map((item, index) => (
              <div key={index} className="w-1/4 p-4">
                <MovieCatalogueCard item={item} />
          {/* <TestCOmponent items={item} /> */}
              </div>
            ))}
        </div>

        <div className="flex flex-row justify-center">
          <div>
            <Pagination
              // total={movieItems.length}
              total={movieCatalogueItems.length}
              current={currentPage}
              pageSize={itemsPerPage}
              onChange={setCurrentPage}
              showSizeChanger
              showQuickJumper
              showTotal={(total) => `Total ${total} items`}
            />

            {/* MovieCatalogueCard */}
          </div>
        </div>
        <div>
          {/* <FilterSelection options={movieDropdownData} filterWidth='500px' filterHeight='50px' /> */}
        </div>
        <div>
          <h2>Recent Trailers</h2>
        </div>
        <div>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-[#444]"></hr>
        </div>
        <div>
          {/* <Carousel items={trailerItems} /> */}
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
          {/* <TestNew /> */}
          {/* <Carousel items={webItemsLoaderData} /> */}
        </div>

        <div>
          <h2>Top Comments This Week</h2>
        </div>
        <div>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-[#444]"></hr>
        </div>
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            {weekTopCommentUserData.map((data, index) => (
              <div key={index}>
                <div>
                  <WeekTopCommentsCard
                    weekTopCommentUserImages={data.image}
                    movieTitles={data.movieTitle}
                    movieYear={data.movieYear}
                    movieRatings={data.movieRating}
                    criticName={data.criticName}
                    userComment={data.userComment}
                    seeMoreLinks={data.seeMoreLink}
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
                {weekPopularReviewerData.map((reviewerData, index) => (
                  <div key={index}>
                    <WeekPopularReviewers
                      criticNameReviewersPopular={reviewerData.criticName}
                      imageReviewersPopular={reviewerData.image}
                      totalNumMoviesReviewersPopular={
                        reviewerData.totalNumMovies
                      }
                      totalNumReviewsPopular={reviewerData.totalNumReviews}
                    />
                    <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-[#444]"></hr>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-9">
              <div>
                <h1>Top Reviewers of This Week</h1>
              </div>
              <div className="flex flex-col">
                {weekTopReviewerData.map((reviewer, index) => (
                  <div key={index}>
                    <div>
                      <WeekTopReviewers
                        criticNameReviewersTop={reviewer.criticName}
                        imageReviewersTop={reviewer.image}
                        totalNumMoviesReviewersTop={reviewer.totalNumMovies}
                        totalNumReviewsTop={reviewer.totalNumReviews}
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
          {weekTopArticlesData.map((article, index) => (
            <div key={index}>
              <WeekTopArticlesCard
                image={article.imageUrl}
                title={article.title}
                byPerson={article.byPerson}
                articleDescription={article.description}
                links={article.link}
              />
            </div>
          ))}
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
}

export default HomePage;
