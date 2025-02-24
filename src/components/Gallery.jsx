import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Gallery = () => {
  const sliderRef = useRef(null);

  const images = [
    "https://images.shiksha.com/mediadata/images/1489578044php5HrnrF.png",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3rHu-uj9gXKrzJPHzeMAFGqoMy2bgWTlXwg&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5h_5ZzDWLQ-NwOKXc5E3xPBSaXw07htHImQ&s",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS85I8hMxcO3v2RS03YHtk6sGS_SLGHAVZPqGTM26p-ef8nnrBxUwlp2iKPd9AaVvMVDOc&usqp=CAU",
    "https://www.cityairnews.com/uploads/images/image-750x-2022-04-03-06:00:21pm-6249935d92646.jpg",
  ];

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="bg-gray-200 py-16 text-center">
      <h2 className="text-gray-400 text-2xl font-bold mb-4">Gallery</h2>
      <div className="max-w-6xl mx-auto px-6">
        <Slider ref={sliderRef} {...settings}>
          {images.map((src, index) => (
            <div key={index} className="px-2 group relative">
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full h-64 object-cover rounded-md shadow-lg group-hover:opacity-80 transition duration-300"
              />
              <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-0 rounded-md transition duration-300"></div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Gallery;
