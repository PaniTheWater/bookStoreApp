import React from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Cards from "./cards";

import list from "../../public/list.json";
function FreeBook() {
  const filterData = list.filter((data) => data.Price === "Free");

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-16 ">
        <div>
          <h1 className="font-semibold text-xxl pb-2">Free Offered Books</h1>
          <p>
            Enjoy a collection of free books across various genres—download,
            read, and discover your next favorite story at no cost!
          </p>
        </div>

        <div>
          <div>
            <Slider {...settings}>
              {filterData.map((item) => (
                <Cards item={item} key={item.id} />
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FreeBook;
