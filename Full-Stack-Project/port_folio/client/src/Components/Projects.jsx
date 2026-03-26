import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const Projects = () => {

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,   // slides visible
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
  };

  const slides = [
    { title: "Project 1", description: "MERN App", bg: "bg-blue-500" },
    { title: "Project 2", description: "React App", bg: "bg-green-500" },
    { title: "Project 3", description: "Portfolio", bg: "bg-purple-500" },
  ];

  return (
    <div className="max-w-5xl mx-auto mt-10"id='projects'>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className={`h-64 md:h-80 flex items-center justify-center ${slide.bg} rounded-2xl text-white text-center`}>
            <div>
              <h2 className="text-2xl md:text-4xl font-bold">{slide.title}</h2>
              <p className="text-sm md:text-lg mt-2">{slide.description}</p>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Projects;















 //   <div >Projects</div>
