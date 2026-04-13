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
    { title: "Blog App", description: "MERN Blog Application with CRUD",  live: "https://blog-app-sand-sigma.vercel.app/" ,bg:"bg-pink-500"},
    { title: "Project 2", description: "React App", bg: "bg-green-500" },
    { title: "Project 3", description: "Portfolio", bg: "bg-purple-500" },
  ];

  return (
       <div data-aos="zoom-in" data-aos-duration="1500"
            className="max-w-5xl mx-auto mt-20 px-3 sm:px-6 scroll-mt-32 " id="projects">
  <Slider {...settings}>
    {slides.map((slide, index) => (

      <div key={index} className="px-2">

        <div className={`
          h-60 sm:h-80 md:h-100 
          flex flex-col justify-center items-center 
          ${slide.bg} 
          rounded-xl sm:rounded-2xl 
          text-white text-center 
          p-4 sm:p-6
          shadow-md
        `}>

          <h2 className="text-lg sm:text-2xl md:text-4xl font-bold">
            {slide.title}
          </h2>

          <p className="text-xs sm:text-sm md:text-lg mt-2 px-2">
            {slide.description}
          </p>

          <a
            href={slide.live}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 px-3 py-1.5 text-xs sm:text-sm 
            bg-white/20 border border-white/30 rounded-md 
            hover:bg-white/30 transition"
          >
            🌐 View
          </a>

        </div>

      </div>

    ))}
  </Slider>
</div>
  );
};

export default Projects;















 //   <div >Projects</div>
