import React from "react";
import { Carousel } from "antd";
import HomepageTopCarouselCard from "./HomepageTopCarouselCard";

const HomepageTopCarousel = (props) => {
  return (
    <Carousel arrows={true} infinite={false}>
      {props.movieCarouselItem.map((item, index) => (
        <HomepageTopCarouselCard key={index} item={item} />
      ))}
    </Carousel>
  );
};

export default HomepageTopCarousel;
