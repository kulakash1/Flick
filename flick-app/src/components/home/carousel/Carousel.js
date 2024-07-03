import React, { useRef, useState, useEffect } from 'react';
import { FaRegStar, FaStar, FaStarHalf } from "react-icons/fa";
import imgA from './images/img Test.png';

const Carousel = ({items}) => {
  const productRef = useRef(null);
  const boxRef = useRef(null);
  const [isPrevDisabled, setIsPrevDisabled] = useState(true);
  const [isNextDisabled, setIsNextDisabled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (boxRef.current) {
        setIsPrevDisabled(boxRef.current.scrollLeft <= 0);
        setIsNextDisabled(boxRef.current.scrollLeft >= (boxRef.current.scrollWidth - boxRef.current.clientWidth - 1));
      }
    };

    if (boxRef.current) {
      boxRef.current.addEventListener('scroll', handleScroll);
    }

    // Initial check for disabled state
    handleScroll();

    return () => {
      if (boxRef.current) {
        boxRef.current.removeEventListener('scroll', handleScroll);
      }
    };
  }, []);

  const handlePrev = () => {
    if (boxRef.current && productRef.current) {
      let width = productRef.current.clientWidth;
      boxRef.current.scrollLeft = boxRef.current.scrollLeft - width;
    }
  };

  const handleNext = () => {
    if (boxRef.current && productRef.current) {
      let width = productRef.current.clientWidth;
      boxRef.current.scrollLeft = boxRef.current.scrollLeft + width;
    }
  };

  // Function to render star icons based on rating
  const renderRatingStars = (rating) => {
    const filledStars = Math.floor(rating); // Number of filled stars
    const hasHalfStar = rating % 1 !== 0; // Check if there is a half star

    // Array to hold star elements
    let stars = [];

    // Adding filled stars
    for (let i = 0; i < filledStars; i++) {
      stars.push(<FaStar key={`star-filled-${i}`} style={{ color: '#FFD700' }} />);
    }

    // Adding half star if applicable
    if (hasHalfStar) {
      stars.push(<FaStarHalf key="star-half" style={{ color: '#FFD700' }} />);
    }

    // Adding empty stars
    const emptyStars = 5 - filledStars - (hasHalfStar ? 1 : 0); // Calculate remaining empty stars
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`star-empty-${i}`} style={{ color: '#D1D5DB' }} />);
    }

    return stars;
  };

  return (
    <div className="relative w-full overflow-hidden py-6">
      <button
        onClick={handlePrev}
        disabled={isPrevDisabled}
        className={`absolute top-1/2 left-4 transform -translate-y-1/2 bg-white text-black rounded-full p-2 shadow-lg hover:bg-gray-200 transition duration-300 ease-in-out z-10 ${isPrevDisabled ? 'cursor-not-allowed opacity-50' : 'hover:opacity-100'}`}
        style={{ zIndex: 10 }}
      >
        &#8249;
      </button>
      <div ref={boxRef} className="flex overflow-hidden scroll-smooth space-x-4 px-4 relative z-0">
        {items.map((item, index) => (
          <div
            key={index}
            ref={index === 0 ? productRef : null}
            className="min-w-[300px] flex-shrink-0 box-border rounded-lg shadow-lg transform transition duration-300 ease-in-out hover:scale-105 relative z-0"
            style={{
              backgroundImage: `url(${item.imageUrl})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="rounded-lg overflow-hidden text-white bg-gradient-to-b from-transparent to-black h-64 relative z-0">
              <div className="p-4 flex flex-col justify-end h-full relative z-0">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <div className="flex items-center mt-2">
                  {/* Render star icons based on rating */}
                  {renderRatingStars(item.rating)}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={handleNext}
        disabled={isNextDisabled}
        className={`absolute top-1/2 right-4 transform -translate-y-1/2 bg-white text-black rounded-full p-2 shadow-lg hover:bg-gray-200 transition duration-300 ease-in-out z-10 ${isNextDisabled ? 'cursor-not-allowed opacity-50' : 'hover:opacity-100'}`}
        style={{ zIndex: 10 }}
      >
        &#8250;
      </button>
    </div>
  );
};

export default Carousel;
