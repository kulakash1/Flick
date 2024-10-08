import React from 'react'
import { FaStar, FaRegStar, FaStarHalf } from 'react-icons/fa';
import imgA from '../../../images/img Test.png'

const BestOf2024 = (props) => {

  // console.log("2024  Best Data",props);
  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 10 - fullStars - (halfStar ? 1 : 0);

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
    <div className="flex flex-row mb-4 w-[300px] hover:scale-105 transform transition-transform duration-200">
      <div>
        {/* <img src={props.imageUrl} alt={props.title} className="w-24 h-24 object-cover" /> */}
        <img src={props.imageUrl} alt={props.title} className="w-[400px] h-40 object-cover" />
      </div>
      <div className="flex flex-col ml-4">
        <div>
          <h1 className="text-xl font-bold">{props.title}</h1>
        </div>
        <div>
          <p className="text-gray-500">{props.year}</p>
        </div>
        <div>
          <p className="text-gray-500">{props.category}</p>
        </div>
        <div className="flex items-center">
          {renderStars(props.rating)}
        </div>
      </div>
    </div>
  );
};

export default BestOf2024;
