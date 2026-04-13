import React from 'react'

const About = () => {
  const slides = [
    { title: "HTML",},
    { title: "CSS",  },
    { title: "Javascript",  },
    { title: "React",  },
    { title: "Express.js",  },
    { title: "Tailwind CSS", },
    { title: "Node.js", },
    { title: "REST API",  },
    { title: "MongoDB", },
    { title: "REST API", },
    
  ];
  
    // Duplicate slides for seamless loop
  const loopedSlides = [...slides, ...slides];
  return (
  <div id='about' data-aos="zoom-out-down" data-aos-duration="1500"
       className='bg-black font-bold text-white px-10 md:px-10 xl:px-16 py-20 md:py-20 xl:py-16 text-center min-h-[100vh] flex flex-col items-center justify-center overflow-hidden w-full'>
    <div data-aos="zoom-in-up" className='bg-cyan-300/20 border border-cyan-400 rounded-2xl  px-10 md:px-24 lg:px-40  py-10 text-center max-w-5xl mx-auto '>
      <div>
       <h2 className='text-5xl md:text-6xl lg:text-8xl font-bold bg-gradient-to-r from-blue-500 via-blue-600 to-green-600 bg-clip-text text-transparent animate-pulse drop-shadow-2xl mb-4 md:mb-8 md:mt-4 '>ABOUT ME</h2>
       <h2 className='text-sm md:text-lg lg:text-2xl bg-gradient-to-r from-white via-blue-200 to-purple-400 bg-clip-text text-transparent '>Hi, I’m Dibyajyoti Rout, an aspiring MERN stack developer.</h2>
       <h2 className='text-sm md:text-lg lg:text-2xl bg-gradient-to-r from-blue-500 via-purple-200 to-blue-400 bg-clip-text text-transparent'>Fueled by curiosity and powered by JavaScript.</h2>
       <h2 className='text-sm md:text-lg lg:text-2xl bg-gradient-to-r from-purple-300 via-blue-200 to-blue-400 bg-clip-text text-transparent'>I build responsive and scalable web applications with modern technologies.</h2>
      </div>
      <div className='mt-7 flex grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3  gap-12  justify-center place-items-center  flex-wrap'>
        <a href="#skills" className='border bg-cyan-300/20 border-cyan-500 px-6 py-3 rounded-xl w-full max-w-[180px] text-center hover:bg-cyan-400/20 active:scale-95 active:bg-cyan-500/30 
               transition duration-200'>Core</a>
        <a href="https://github.com/DibyajyotiR" target="_blank" className='border bg-cyan-300/20 border-cyan-500 px-6 py-3 rounded-xl w-full max-w-[180px] text-center hover:bg-cyan-400/20 active:scale-95 active:bg-cyan-500/30 
               transition duration-200'>DevHub</a>
        <a href="https://www.linkedin.com/in/dibyajyoti--rout/" target="_blank" className='border bg-cyan-300/20 border-cyan-500 px-6 py-3 rounded-xl w-full max-w-[180px] text-center hover:bg-cyan-400/20 active:scale-95 active:bg-cyan-500/30 
               transition duration-200' >Channel</a>
      </div> 
      
    </div>


    {/* ------------------------------------------------------ */}
  <div className='mt-10 overflow-hidden relative'>

  {/* 🔥 Gradient fade edges */}
  <div className="absolute left-0 top-0 h-full w-20 bg-gradient-to-r from-black to-transparent z-10"></div>
  <div className="absolute right-0 top-0 h-full w-20 bg-gradient-to-l from-black to-transparent z-10"></div>

  <div className="flex animate-scroll gap-8 mt-4">
    {loopedSlides.map((slide, index) => (
      <div
        key={index}
        className="flex-shrink-0 w-36 h-10 md:w-40 md:h-20 rounded-lg md:rounded-2xl flex items-center justify-center font-bold text-lg md:text-2xl border border-pink-300 backdrop-blur-md bg-blue-400/20
        transform transition duration-500 hover:scale-110 hover:-translate-y-2 hover:shadow-2xl"
      >
        <span className='bg-gradient-to-r from-indigo-700 via-green-500 to-blue-400 bg-clip-text text-transparent'>
                 {slide.title}
        </span>
        
      </div>
    ))}
  </div>

  <style jsx>{`
    @keyframes scroll {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }

    .animate-scroll {
      animation: scroll 18s linear infinite;
    }

    .animate-scroll:hover {
      animation-play-state: paused;
    }
  `}</style>
</div>


      
  </div>
  )
}

export default About