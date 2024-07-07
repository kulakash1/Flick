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
  const weekTopArticlesData = [
    {
      imageUrl: "Image Location",
      title: "Article Title",
      byPerson: "By This Person",
      description: "Links to top social media platforms",
      link: "https://www.facebook.com",
    },
    {
      imageUrl: "Image 2",
      title: "AT 2",
      byPerson: "BTP 2",
      description: "Descrip 2",
      link: "https://www.twitter.com",
    },
    {
      imageUrl: "Image 3",
      title: "AT 3",
      byPerson: "BTP 3",
      description: "Desc 3",
      link: "https://www.instagram.com",
    },
  ];

  // For Top Comments of This Week
  const weekTopCommentUserData = [
    {
      image: "Image Location.jpg",
      movieTitle: "Movie Title",
      movieYear: "2024",
      movieRating: "5",
      criticName: "Critic Name",
      userComment:
        "Comment Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sequi numquam eum explicabo magnam quidem cumque laborum rerum commodi dicta vitae?",
      seeMoreLink: "https://www.facebook.com",
    },
    {
      image: "Image 2",
      movieTitle: "MT 2",
      movieYear: "Year 2",
      movieRating: "4",
      criticName: "Name 2",
      userComment: "Comment 2",
      seeMoreLink: "https://www.twitter.com",
    },
    {
      image: "Image 3",
      movieTitle: "MT 3",
      movieYear: "Year 3",
      movieRating: "2",
      criticName: "Name 3",
      userComment: "Comment 3",
      seeMoreLink: "https://www.instagram.com",
    },
  ];

  // For Popular Reviewers
  const weekPopularReviewerData = [
    {
      criticName: "Critic Name",
      image: "Critic Image Popular",
      totalNumMovies: 105,
      totalNumReviews: 999,
    },
    {
      criticName: "Name 2",
      image: "CI 2",
      totalNumMovies: 5,
      totalNumReviews: 20,
    },
    {
      criticName: "Name 3",
      image: "CI 3",
      totalNumMovies: 3,
      totalNumReviews: 50,
    },
  ];

  // For Top Reviewers of this Week
  const weekTopReviewerData = [
    {
      criticName: "Critic Name",
      image: "Critic Image Popular",
      totalNumMovies: "1705",
      totalNumReviews: "35",
    },
    {
      criticName: "Name 2",
      image: "CI 2",
      totalNumMovies: "65",
      totalNumReviews: "236",
    },
    {
      criticName: "Name 3",
      image: "CI 3",
      totalNumMovies: "3",
      totalNumReviews: "567",
    },
  ];

  //d
  // useEffect(() => {
  //   const images = importAll(require.context('../assets/images', false, /\.(png|jpe?g|svg)$/));
  //   // const imageItems = images.map((image, index) => ({ imageUrl: image.default, id: index }));
  //   // setItems(imageItems);
  // }, []);

  // For Carousel New Web Releases
  const webItems = [
    // { imageUrl: "./images/img Test.png", title: "Web Title 1", rating: 5 },
    { imageUrl: imgA, title: "Web Title 1", rating: 5 },
    { imageUrl: "path/to/image2.jpg", title: "Web Title 2", rating: 3.5 },
    { imageUrl: "path/to/image3.jpg", title: "Web Title 3", rating: 3 },
    { imageUrl: "path/to/image4.jpg", title: "Web Title 4", rating: 4 },
    { imageUrl: "path/to/image5.jpg", title: "Web Title 5", rating: 5 },
    { imageUrl: "path/to/image6.jpg", title: "Web Title 6", rating: 3 },
    { imageUrl: "path/to/image1.jpg", title: "Web Title 7", rating: 5 },
    { imageUrl: "path/to/image2.jpg", title: "Web Title 8", rating: 4 },
    { imageUrl: "path/to/image3.jpg", title: "Web Title 9", rating: 3 },
    { imageUrl: "path/to/image4.jpg", title: "Web Title 10", rating: 4 },
    { imageUrl: "path/to/image5.jpg", title: "Web Title 11", rating: 5 },
    { imageUrl: "path/to/image6.jpg", title: "Web Title 12", rating: 3 },
  ];

  // For Carousel New Movie Releases
  const movieItems = [
    { imageUrl: "path/to/image2.jpg", title: "Movie Title 2", rating: 3.5 },
    { imageUrl: "path/to/image3.jpg", title: "Movie Title 3", rating: 3 },
    { imageUrl: "path/to/image4.jpg", title: "Movie Title 4", rating: 4 },
    { imageUrl: "./images/img Test.png", title: "Movie Title 1", rating: 5 },
    { imageUrl: "path/to/image5.jpg", title: "Movie Title 5", rating: 5 },
    { imageUrl: "path/to/image6.jpg", title: "Movie Title 6", rating: 3 },
    { imageUrl: "path/to/image1.jpg", title: "Movie Title 7", rating: 5 },
    { imageUrl: "path/to/image2.jpg", title: "Movie Title 8", rating: 4 },
    { imageUrl: "path/to/image3.jpg", title: "Movie Title 9", rating: 3 },
    { imageUrl: "path/to/image4.jpg", title: "Movie Title 10", rating: 4 },
    { imageUrl: "path/to/image5.jpg", title: "Movie Title 11", rating: 5 },
    { imageUrl: "path/to/image6.jpg", title: "Movie Title 12", rating: 3 },
  ];

  // For Carousel New Trailer Releases
  const trailerItems = [
    { imageUrl: "path/to/image2.jpg", title: "Trailer Title 2", rating: 3.5 },
    { imageUrl: "./images/img Test.png", title: "Trailer Title 1", rating: 5 },
    { imageUrl: "path/to/image3.jpg", title: "Trailer Title 3", rating: 3 },
    { imageUrl: "path/to/image4.jpg", title: "Trailer Title 4", rating: 4 },
    { imageUrl: "path/to/image5.jpg", title: "Trailer Title 5", rating: 5 },
    { imageUrl: "path/to/image6.jpg", title: "Trailer Title 6", rating: 3 },
    { imageUrl: "path/to/image1.jpg", title: "Trailer Title 7", rating: 5 },
    { imageUrl: "path/to/image2.jpg", title: "Trailer Title 8", rating: 4 },
    { imageUrl: "path/to/image3.jpg", title: "Trailer Title 9", rating: 3 },
    { imageUrl: "path/to/image4.jpg", title: "Trailer Title 10", rating: 4 },
    { imageUrl: "path/to/image5.jpg", title: "Trailer Title 11", rating: 5 },
    { imageUrl: "path/to/image6.jpg", title: "Trailer Title 12", rating: 3 },
  ];

  // For Catalogue
  const movieCatalogueItems = [
    {
      imageUrl: "path_to_image1.png",
      title: "Movie Title 1",
      rating: 3.5,
      year: "2024",
      genre: "Drama",
      country: "India",
      language: "Hindi",
    },
    {
      imageUrl: "path_to_image2.png",
      title: "Movie Title 2",
      rating: 4.0,
      year: "2023",
      genre: "Action",
      country: "USA",
      language: "English",
    },
    {
      imageUrl: "path_to_image3.png",
      title: "Movie Title 3",
      rating: 4.2,
      year: "2022",
      genre: "Comedy",
      country: "UK",
      language: "English",
    },
    {
      imageUrl: "path_to_image4.png",
      title: "Movie Title 4",
      rating: 3.8,
      year: "2023",
      genre: "Romance",
      country: "France",
      language: "French",
    },
    {
      imageUrl: "path_to_image5.png",
      title: "Movie Title 5",
      rating: 4.5,
      year: "2021",
      genre: "Thriller",
      country: "Canada",
      language: "English",
    },
    {
      imageUrl: "path_to_image6.png",
      title: "Movie Title 6",
      rating: 3.9,
      year: "1980",
      genre: "Science Fiction",
      country: "Australia",
      language: "English",
    },
    {
      imageUrl: "path_to_image7.png",
      title: "Movie Title 7",
      rating: 4.1,
      year: "2023",
      genre: "Fantasy",
      country: "Brazil",
      language: "Portuguese",
    },
    {
      imageUrl: "path_to_image8.png",
      title: "Movie Title 8",
      rating: 3.7,
      year: "2022",
      genre: "Mystery",
      country: "Germany",
      language: "German",
    },
    {
      imageUrl: "path_to_image9.png",
      title: "Movie Title 9",
      rating: 1.3,
      year: "2021",
      genre: "Animation",
      country: "South Korea",
      language: "Korean",
    },
    {
      imageUrl: "path_to_image10.png",
      title: "Movie Title 10",
      rating: 2.6,
      year: "2023",
      genre: "Action",
      country: "Mexico",
      language: "Spanish",
    },
    {
      imageUrl: "path_to_image11.png",
      title: "Movie Title 11",
      rating: 2.4,
      year: "2022",
      genre: "Drama",
      country: "Spain",
      language: "Spanish",
    },
    {
      imageUrl: "path_to_image12.png",
      title: "Movie Title 12",
      rating: 3.8,
      year: "2021",
      genre: "Comedy",
      country: "Italy",
      language: "Italian",
    },
    {
      imageUrl: "path_to_image13.png",
      title: "Movie Title 13",
      rating: 3.0,
      year: "2024",
      genre: "Romance",
      country: "Netherlands",
      language: "Dutch",
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 11;

  //For Catalogue Dropdown
  const movieDropdownData = movieCatalogueItems.map((item) => ({
    value: item.title,
    label: item.title,
  }));

  // For Year Dropdown
  // const currentYear = new Date().getFullYear();
  // const yearDropdownData = Array.from(
  //   { length: currentYear - 1849 + 1 },
  //   (_, index) => ({
  //     value: (currentYear - index).toString(),
  //     label: (currentYear - index).toString(),
  //   })
  // );
  const yearDropdownData = [
    ...new Set(movieCatalogueItems.map((item) => item.year)),
  ]
    .sort((a, b) => b - a)
    .map((year) => ({
      value: year,
      label: year,
    }));

  // For Category Dropdown
  const categoryDropdownData = [
    ...new Set(movieCatalogueItems.map((item) => item.genre)),
  ]
    .sort()
    .map((genre) => ({
      value: genre,
      label: genre,
    }));

  // For Reviews Dropdown
  const reviewsDropdownData = [
    ...new Set(movieCatalogueItems.map((item) => Math.round(item.rating))),
  ]
    .sort((a, b) => b - a)
    .map((rating) => ({
      value: rating.toString(),
      label: `${rating} Stars`,
    }));

  console.log(reviewsDropdownData);

  // For Country Dropdown
  const countryDropdownData = [
    ...new Set(movieCatalogueItems.map((item) => item.country)),
  ]
    .sort()
    .map((country) => ({
      value: country,
      label: country,
    }));

  // For Country Dropdown
  const languageDropdownData = [
    ...new Set(movieCatalogueItems.map((item) => item.language)),
  ]
    .sort()
    .map((language) => ({
      value: language,
      label: language,
    }));

  //For Best Of 2024
  const bestOf2024Data = [
    {
      imageUrl: "path_to_image1.png",
      title: "Best Movie 1",
      year: "2024",
      category: "Drama",
      rating: 4.5,
    },
    {
      imageUrl: "path_to_image2.png",
      title: "Best Movie 2",
      year: "2024",
      category: "Action",
      rating: 4.0,
    },
    // Add more items as needed
  ];

  return (
    <div className="homepage">
      <Header />

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
              <Carousel items={trailerItems} />
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
            <FilterSelection
              options={categoryDropdownData}
              filterWidth="200px"
              filterHeight="50px"
              placeholderData="Category"
            />
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
            <FilterSelection
              options={countryDropdownData}
              filterWidth="200px"
              filterHeight="50px"
              placeholderData="Country"
            />
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

      <Footer />
    </div>
  );
}

export default HomePage;
