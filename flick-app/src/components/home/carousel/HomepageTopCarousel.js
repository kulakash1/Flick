import React from 'react';
import { Carousel } from 'antd';

const HomepageTopCarousel = () => {
  return (
    <Carousel arrows={true} infinite={false}>
      <div>
        <h3 className="m-0 h-40 text-white leading-40 text-center bg-blue-900">1</h3>
      </div>
      <div>
        <h3 className="m-0 h-40 text-white leading-40 text-center bg-blue-900">2</h3>
      </div>
      <div>
        <h3 className="m-0 h-40 text-white leading-40 text-center bg-blue-900">3</h3>
      </div>
      <div>
        <h3 className="m-0 h-40 text-white leading-40 text-center bg-blue-900">4</h3>
      </div>
    </Carousel>
  );
};

export default HomepageTopCarousel;
