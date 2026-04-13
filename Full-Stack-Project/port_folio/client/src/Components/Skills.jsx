import React from 'react'

const Skills = () => {
  return (
    <div id='skills'className='bg-black font-bold text-white px-10 md:px-10 xl:px-16 py-2 md:py-10 xl:py-15 text-center flex flex-col items-center justify-center'>
      <h1 className='text-5xl md:text-6xl lg:text-8xl font-bold bg-gradient-to-r from-green-600 via-blue-600 to-blue-600 bg-clip-text text-transparent animate-pulse drop-shadow-2xl mb-4 md:mb-8 mt-[0] md:mt-4 '>SKILLS</h1>
      <div className="grid gap-10 lg:grid-cols-2 ">
  {/* FRONTEND */}
        <div >
         <h1 className="font-bold text-2xl md:text-3xl text-blue-500 py-5 mb-2 drop-shadow-[0_0_20px_rgba(59,130,246,0.6)]"> Frontend</h1>
         <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom"
     data-aos-duration="2000"
      className="border border-gray-500 rounded-xl bg-gradient-to-br from-gray-900 via-blue-900/20 to-green-900/10 grid grid-cols-2  lg:grid-cols-4
                         gap-6 px-10 md:px-14 py-8 shadow-[0_0_20px_rgba(59,130,246,0.6)]">
            <button className="bg-orange-500/20 border border-orange-600 hover:animate-pulse rounded-lg py-3 px-2">HTML</button>
            <button className="bg-yellow-400/20 border border-yellow-400 hover:animate-pulse rounded-lg py-3 px-2">JavaScript</button>
            <button className="bg-cyan-500/20 border border-cyan-400 hover:animate-pulse rounded-lg py-3 px-2">React</button>
            <button className="bg-sky-500/20 border border-sky-400 hover:animate-pulse rounded-lg py-3 px-2">Tailwind CSS</button>
         </div>
        </div>
  {/* BACKEND */}
        <div>
          <h1 className="font-bold text-2xl md:text-3xl text-green-300 py-5 mb-2 drop-shadow-[0_0_20px_rgba(34,197,94,0.6)]"> Backend</h1>
          <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom"
     data-aos-duration="2000"
      className="border rounded-xl border-gray-500 bg-gradient-to-l from-gray-900 via-blue-900/20 to-green-900/10 grid grid-cols-2  lg:grid-cols-4
                          gap-6 px-10 md:px-14 py-8 shadow-[0_0_20px_rgba(34,197,94,0.8)]">
            <button className="bg-yellow-300/20 border border-yellow-300 hover:animate-pulse rounded-lg py-3 px-2">Express.js</button>
            <button className="bg-green-500/20 border border-green-400 hover:animate-pulse rounded-lg py-3 px-2">Node.js</button>
            <button className="bg-purple-400/20 border border-purple-400 hover:animate-pulse rounded-lg py-3 px-2">REST API</button>
            <button className="bg-sky-400/20 border border-sky-400 hover:animate-pulse rounded-lg py-3 px-2">JWT Auth</button>
          </div>
        </div>
  {/* DATABASE */}
        <div>
          <h1 className="font-bold text-2xl md:text-3xl text-cyan-500 py-5 mb-2 drop-shadow-[0_0_20px_rgba(34,211,238,0.6)]"> Database</h1>
          <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" 
     data-aos-duration="2000"
     className="border border-gray-500 rounded-xl bg-gradient-to-br from-gray-900 via-blue-900/20 to-green-900/10 grid grid-cols-2 
                          gap-6 px-10 md:px-14 py-8 shadow-[0_0_20px_rgba(34,211,238,0.6)]">
            <button className="bg-green-900/20 border border-green-900 hover:animate-pulse rounded-lg py-3 px-2">MongoDB</button>
            <button className="bg-red-900/20 border border-red-900 hover:animate-pulse rounded-lg py-3 px-2">Mongoose</button>
          </div>
        </div>
  {/* TOOLS */}
        <div>
          <h1 className="font-bold text-2xl md:text-3xl text-lime-500 py-5 mb-2 drop-shadow-[0_0_20px_rgba(163,230,53,0.7)]"> Tools</h1>
          <div data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom" 
     data-aos-duration="2000"
     className="border rounded-xl border-gray-500 bg-gradient-to-l from-gray-900 via-blue-900/20 to-green-900/10 grid grid-cols-2  lg:grid-cols-4
                          gap-6 px-10 md:px-14 py-8 shadow-[0_0_20px_rgba(163,230,53,0.7)]">
              <button className="bg-green-500/20 border border-green-400 hover:animate-pulse rounded-lg py-3 px-2">GitHub</button>
              <button className="bg-orange-500/20 border border-orange-600 hover:animate-pulse rounded-lg py-3 px-2">Postman</button>
              <button className="bg-sky-500/20 border border-sky-400 hover:animate-pulse rounded-lg py-3 px-2">VS Code</button>
              <button className="bg-cyan-500/20 border border-cyan-400 hover:animate-pulse rounded-lg py-3 px-2">NPM</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Skills