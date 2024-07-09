// For Week Top Articles Data
export const weekTopArticlesData = [
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
  
  // For Week Top Comment User Data
  export const weekTopCommentUserData = [
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
  
  // For Week Popular Reviewer Data
  export const weekPopularReviewerData = [
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
  
  // For Week Top Reviewer Data
  export const weekTopReviewerData = [
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
  
  // For Web Items
  // export const webItems = [
  //   { imageUrl: "path/to/image2.jpg", title: "Web Title 2", rating: 3.5 },
  //   { imageUrl: "path/to/image3.jpg", title: "Web Title 3", rating: 3 },
  //   { imageUrl: "path/to/image4.jpg", title: "Web Title 4", rating: 4 },
  //   { imageUrl: "path/to/image5.jpg", title: "Web Title 5", rating: 5 },
  //   { imageUrl: "path/to/image6.jpg", title: "Web Title 6", rating: 3 },
  //   { imageUrl: "path/to/image1.jpg", title: "Web Title 7", rating: 5 },
  //   { imageUrl: "path/to/image2.jpg", title: "Web Title 8", rating: 4 },
  //   { imageUrl: "path/to/image3.jpg", title: "Web Title 9", rating: 3 },
  //   { imageUrl: "path/to/image4.jpg", title: "Web Title 10", rating: 4 },
  //   { imageUrl: "path/to/image5.jpg", title: "Web Title 11", rating: 5 },
  //   { imageUrl: "path/to/image6.jpg", title: "Web Title 12", rating: 3 },
  // ];
  let movies = [];
  export const webItems = [];
  
  fetch('http://localhost:3001/api/movies/popular')
      .then(response => {
          if (!response.ok) {
              throw new Error('Network response was not ok');
          }
          return response.json();
      })
      .then(data => {
          if (data && data.data && data.data.list && Array.isArray(data.data.list)) {
              movies = data.data.list;
              for (let index = 0; index < movies.length; index++) {
                  const movie = movies[index];
                  const element = {
                      imageUrl: movie.title?.primaryImage?.imageUrl || "",
                      title: movie.title?.originalTitleText?.text || "",
                      rating: movie.title?.ratingsSummary?.aggregateRating || 0
                  };
                  webItems.push(element);
              }
          } else {
              console.error('Invalid data format:', data);
          }
      })
      .catch(error => console.error('Error fetching data:', error));
  

  // export const webItems = [];

  
  // For Movie Items
  export const movieItems = [
    { imageUrl: "path/to/image2.jpg", title: "Movie Title 2", rating: 3.5 },
    { imageUrl: "path/to/image3.jpg", title: "Movie Title 3", rating: 3 },
    { imageUrl: "path/to/image4.jpg", title: "Movie Title 4", rating: 4 },
    { imageUrl: "path/to/image1.jpg", title: "Movie Title 1", rating: 5 },
    { imageUrl: "path/to/image5.jpg", title: "Movie Title 5", rating: 5 },
    { imageUrl: "path/to/image6.jpg", title: "Movie Title 6", rating: 3 },
    { imageUrl: "path/to/image1.jpg", title: "Movie Title 7", rating: 5 },
    { imageUrl: "path/to/image2.jpg", title: "Movie Title 8", rating: 4 },
    { imageUrl: "path/to/image3.jpg", title: "Movie Title 9", rating: 3 },
    { imageUrl: "path/to/image4.jpg", title: "Movie Title 10", rating: 4 },
    { imageUrl: "path/to/image5.jpg", title: "Movie Title 11", rating: 5 },
    { imageUrl: "path/to/image6.jpg", title: "Movie Title 12", rating: 3 },
  ];
  
  // For Trailer Items
  export const trailerItems = [
    { imageUrl: "path/to/image2.jpg", title: "Trailer Title 2", rating: 3.5 },
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
  
  // For Movie Catalogue Items
  export const movieCatalogueItems =  [
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
  
  // For Year Dropdown Data
  export const yearDropdownData = [
    ...new Set(movieCatalogueItems.map((item) => item.year)),
  ]
    .sort((a, b) => b - a)
    .map((year) => ({
      value: year,
      label: year,
    }));
  
  // For Category Dropdown Data
  export const categoryDropdownData = [
    ...new Set(movieCatalogueItems.map((item) => item.genre)),
  ]
    .sort()
    .map((genre) => ({
      value: genre,
      label: genre,
    }));
  
  // For Reviews Dropdown Data
  export const reviewsDropdownData = [
    ...new Set(movieCatalogueItems.map((item) => Math.round(item.rating))),
  ]
    .sort((a, b) => b - a)
    .map((rating) => ({
      value: rating.toString(),
      label: `${rating} Stars`,
    }));
  
  // For Country Dropdown Data
  export const countryDropdownData = [
    ...new Set(movieCatalogueItems.map((item) => item.country)),
  ]
    .sort()
    .map((country) => ({
      value: country,
      label: country,
    }));
  
  // For Language Dropdown Data
  export const languageDropdownData = [
    ...new Set(movieCatalogueItems.map((item) => item.language)),
  ]
    .sort()
    .map((language) => ({
      value: language,
      label: language,
    }));
  
  // For Best of 2024 Data
  export const bestOf2024Data = [
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
    {
      imageUrl: "path_to_image3.png",
      title: "Best Movie 3",
      year: "2024",
      category: "Comedy",
      rating: 4.2,
    },
  ];
  
  // For Movie Dropdown Data
export const movieDropdownData = movieCatalogueItems.map((item) => ({
    value: item.title,
    label: item.title,
  }));