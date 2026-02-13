// // import React from 'react'
// // import { Link } from 'react-router-dom'
// // import blobTwo from '../assets/blob-2.png'

// // const Intro = () => {
// //   return (
// //     <div className='bgContainerInner w-full min-h-screen flex-center' style={{ backgroundImage: `url(${blobTwo})` }} >
// //       <div className="px-6 py-8 flex flex-col items-center">
// //         <h2 className='text-primary font-bold text-4xl mb-2'>Rahul Quizzical</h2>
// //         <p className='text-primary mb-8'>Test yourself on pretty much anything</p>
// //         <Link to="/questions" className='bg-btnPrimary text-btnText text-center rounded-2xl px-7 py-3.5 w-full'>Start quiz</Link>
// //       </div>
// //     </div>
// //   )
// // }

// // export default Intro

// import React from "react";
// import { Link } from "react-router-dom";

// const Intro = () => {
//   return (
//     <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-900 to-pink-900 px-4">

//       {/* Floating Gradient Blobs (3D Depth Effect) */}
//       <div className="absolute top-[-100px] left-[-100px] w-[350px] h-[350px] bg-purple-600 rounded-full blur-[120px] opacity-40"></div>
//       <div className="absolute bottom-[-120px] right-[-120px] w-[400px] h-[400px] bg-pink-600 rounded-full blur-[140px] opacity-40"></div>

//       {/* Main Card */}
//       <div className="relative z-10 bg-slate-900/80 backdrop-blur-xl 
//       border border-slate-700 
//       rounded-3xl shadow-2xl 
//       px-10 py-14 
//       text-center 
//       max-w-xl w-full">

//         {/* Title */}
//         <h1 className="text-5xl font-extrabold text-white tracking-tight mb-4">
//           Rahul Quizzical
//         </h1>

//         {/* Tagline */}
//         <p className="text-slate-300 text-lg mb-6">
//           A smart quiz platform designed to test real knowledge —
//           not luck.
//         </p>

//         {/* Description */}
//         <p className="text-slate-400 text-base mb-10 leading-relaxed">
//           This quiz app pulls live questions from multiple categories 
//           including science, geography, general knowledge and more. 
//           Each session is unique. Track your performance instantly 
//           and challenge yourself to improve.
//         </p>

//         {/* Feature Highlights */}
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 text-sm text-slate-300">
//           <div className="bg-slate-800 rounded-xl py-3 px-4 border border-slate-700">
//             🎯 10 Random Questions
//           </div>
//           <div className="bg-slate-800 rounded-xl py-3 px-4 border border-slate-700">
//             ⚡ Instant Score Result
//           </div>
//           <div className="bg-slate-800 rounded-xl py-3 px-4 border border-slate-700">
//             🔄 Fresh Quiz Every Time
//           </div>
//         </div>

//         {/* Start Button */}
//         <Link
//           to="/questions"
//           className="inline-block bg-gradient-to-r from-indigo-600 to-purple-600 
//           text-white font-semibold text-lg 
//           rounded-full px-10 py-4 
//           shadow-lg shadow-purple-900/40
//           transform transition-all duration-300 
//           hover:scale-105 hover:shadow-2xl hover:shadow-purple-700/50
//           active:scale-95"
//         >
//           Start Quiz
//         </Link>

//       </div>
//     </div>
//   );
// };

// export default Intro;





// import React from "react";
// import { Link } from "react-router-dom";

// const Intro = () => {
//   return (
//     <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-indigo-950 via-purple-900 to-fuchsia-900 px-4">

//       {/* Soft Gradient Glow Background */}
//       <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-indigo-600 rounded-full blur-[150px] opacity-30"></div>
//       <div className="absolute bottom-[-120px] right-[-120px] w-[450px] h-[450px] bg-pink-600 rounded-full blur-[160px] opacity-30"></div>

//       {/* Main Card */}
//       <div className="relative z-10 
//         bg-gradient-to-br from-slate-800 to-slate-900
//         border border-white/10
//         rounded-3xl
//         shadow-[0_0_60px_rgba(0,0,0,0.6)]
//         px-10 py-14
//         text-center
//         max-w-xl w-full">

//         {/* Title */}
//         <h1 className="text-5xl font-extrabold text-white tracking-tight mb-4">
//           Rahul Quizzical
//         </h1>

//         {/* Tagline */}
//         <p className="text-gray-300 text-lg mb-6">
//           A modern quiz platform built to test real knowledge.
//         </p>

//         {/* Description */}
//         <p className="text-gray-400 text-base mb-10 leading-relaxed">
//           Each quiz session loads fresh questions from multiple
//           categories. Get instant results, track your score,
//           and challenge yourself to improve every time.
//         </p>

//         {/* Feature Highlights */}
//         <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 text-sm">

//           <div className="bg-slate-700/50 hover:bg-slate-700 
//             transition-all duration-300
//             rounded-xl py-3 px-4 
//             border border-white/10 
//             text-gray-200">
//             🎯 10 Random Questions
//           </div>

//           <div className="bg-slate-700/50 hover:bg-slate-700 
//             transition-all duration-300
//             rounded-xl py-3 px-4 
//             border border-white/10 
//             text-gray-200">
//             ⚡ Instant Results
//           </div>

//           <div className="bg-slate-700/50 hover:bg-slate-700 
//             transition-all duration-300
//             rounded-xl py-3 px-4 
//             border border-white/10 
//             text-gray-200">
//             🔄 Fresh Every Time
//           </div>

//         </div>

//         {/* CTA Button */}
//         <Link
//           to="/questions"
//           className="inline-block 
//             bg-gradient-to-r from-indigo-600 to-pink-600
//             text-white font-semibold text-lg
//             rounded-full px-10 py-4
//             shadow-lg shadow-pink-900/40
//             transition-all duration-300
//             hover:scale-105 hover:shadow-2xl hover:shadow-pink-700/50
//             active:scale-95"
//         >
//           Start Quiz
//         </Link>

//       </div>
//     </div>
//   );
// };

// export default Intro;



import React from "react";
import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 px-4">

      {/* Soft Blue Glow Effects */}
      <div className="absolute top-[-120px] left-[-120px] w-[400px] h-[400px] bg-cyan-500 rounded-full blur-[160px] opacity-20"></div>
      <div className="absolute bottom-[-120px] right-[-120px] w-[450px] h-[450px] bg-blue-600 rounded-full blur-[160px] opacity-20"></div>

      {/* Main Card */}
      <div className="relative z-10 
        bg-slate-900/90
        border border-slate-700
        rounded-3xl
        shadow-2xl
        px-10 py-14
        text-center
        max-w-xl w-full">

        {/* Title */}
        <h1 className="text-5xl font-extrabold text-white tracking-tight mb-4">
          Rahul Quizzical
        </h1>

        {/* Tagline */}
        <p className="text-slate-300 text-lg mb-6">
          A clean and modern quiz experience.
        </p>

        {/* Description */}
        <p className="text-slate-400 text-base mb-10 leading-relaxed">
          Take a quiz powered by live questions across multiple categories. 
          Get instant scoring and challenge yourself every time.
        </p>

        {/* Feature Section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10 text-sm">

          <div className="bg-slate-800 hover:bg-slate-700 
            transition-all duration-300
            rounded-xl py-3 px-4 
            border border-slate-700 
            text-slate-200">
            🎯 10 Random Questions
          </div>

          <div className="bg-slate-800 hover:bg-slate-700 
            transition-all duration-300
            rounded-xl py-3 px-4 
            border border-slate-700 
            text-slate-200">
            ⚡ Instant Results
          </div>

          <div className="bg-slate-800 hover:bg-slate-700 
            transition-all duration-300
            rounded-xl py-3 px-4 
            border border-slate-700 
            text-slate-200">
            🔄 New Quiz Each Time
          </div>

        </div>

        {/* Button */}
        <Link
          to="/questions"
          className="inline-block 
            bg-cyan-500 hover:bg-cyan-600
            text-slate-900 font-semibold text-lg
            rounded-full px-10 py-4
            shadow-lg shadow-cyan-900/40
            transition-all duration-300
            hover:scale-105
            active:scale-95"
        >
          Start Quiz
        </Link>

      </div>
    </div>
  );
};

export default Intro;
