import React from 'react';
import { FaStar, FaRegStar, FaStarHalf } from 'react-icons/fa';

const MovieCatalogueCard = ({ item }) => {
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {Array(fullStars).fill().map((_, index) => (
          <FaStar key={index} className="text-yellow-500" />
        ))}
        {halfStar && <FaStarHalf className="text-yellow-500" />}
        {Array(emptyStars).fill().map((_, index) => (
          <FaRegStar key={index + fullStars} className="text-yellow-500" />
        ))}
      </>
    );
  };

  return (
    <div className="relative w-[1000px] h-[200px] bg-cover bg-center flex items-end p-4 hover:scale-105 transform transition-transform duration-200" style={{ backgroundImage: `url(${item.imageUrl})` }}>
      <div className="bg-black bg-opacity-50 p-2 rounded text-white">
        <div className="text-lg font-semibold">{item.title}</div>
        <div className="flex items-center">
          {renderStars(item.rating)}
        </div>
        <div className="text-sm">Year: {item.year}</div>
        <div className="text-sm">Genre: {item.genre}</div>
        <div className="text-sm">Country: {item.country}</div>
      </div>
    </div>
  );
};

export default MovieCatalogueCard;
