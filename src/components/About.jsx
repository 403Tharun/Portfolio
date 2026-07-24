import React from 'react';
import stackImage from '../assets/about/tharun-avatar.png';
import { aboutContent } from '../data/portfolioData';

// Tech stack SVG icons rendered inline for crisp rendering
const ReactIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-14 h-14 md:w-16 md:h-16" viewBox="0 0 128 128">
      <g stroke="#00d8ff" strokeWidth="6" fill="none" transform="translate(10, 10)">
        <ellipse cx="54" cy="54" rx="16" ry="48" transform="rotate(30 54 54)" />
        <ellipse cx="54" cy="54" rx="16" ry="48" transform="rotate(90 54 54)" />
        <ellipse cx="54" cy="54" rx="16" ry="48" transform="rotate(150 54 54)" />
        <circle cx="54" cy="54" r="8" fill="#00d8ff" />
      </g>
    </svg>
    <span className="text-xs font-bold text-white/90 uppercase tracking-wider">React.js</span>
  </div>
);

const PythonIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-14 h-14 md:w-16 md:h-16" viewBox="0 0 128 128">
      <path fill="#3776AB" d="M63.38 0c-16.81 0-15.75 7.29-15.75 7.29l.02 7.55h15.98v2.26H21.57s-7.46-.85-7.46 16.58c0 17.43 6.5 16.7 6.5 16.7h3.88v-8.08s-.36-9.66 9.66-9.66h16.43s9.2.14 9.2-8.87V7.55S70.96 0 63.38 0zm-8.87 5.05a2.69 2.69 0 1 1 0 5.38 2.69 2.69 0 0 1 0-5.38z"/>
      <path fill="#FFD43B" d="M64.62 90.72c16.81 0 15.75-7.29 15.75-7.29l-.02-7.55H64.37v-2.26h42.06s7.46.85 7.46-16.58c0-17.43-6.5-16.7-6.5-16.7h-3.88v8.08s.36 9.66-9.66 9.66H77.42s-9.2-.14-9.2 8.87v16.22s-1.18 7.55 6.4 7.55zm8.87-5.05a2.69 2.69 0 1 1 0-5.38 2.69 2.69 0 0 1 0 5.38z"/>
    </svg>
    <span className="text-xs font-bold text-white/90 uppercase tracking-wider">Python</span>
  </div>
);

const FastApiIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-14 h-14 md:w-16 md:h-16" viewBox="0 0 128 128">
      <circle cx="64" cy="64" r="56" fill="#059669" />
      <path fill="#FFFFFF" d="M68 20L32 72h28l-4 36 36-52H64l4-36z" />
    </svg>
    <span className="text-xs font-bold text-white/90 uppercase tracking-wider">FastAPI</span>
  </div>
);

const MongoDbIcon = () => (
  <div className="flex flex-col items-center gap-2">
    <svg className="w-14 h-14 md:w-16 md:h-16" viewBox="0 0 128 128">
      <path fill="#47A248" d="M63.666 4.717c-2.316 2.016-33.003 31.026-33.003 62.463 0 20.916 14.52 35.807 33.003 39.816 18.577-4.009 32.998-18.9 32.998-39.816 0-31.437-30.682-60.447-32.998-62.463zm.005 87.525c-11.83 0-21.417-8.23-21.417-18.384 0-14.73 13.917-29.544 21.417-36.438 7.502 6.894 21.413 21.708 21.413 36.438 0 10.154-9.587 18.384-21.413 18.384z"/>
    </svg>
    <span className="text-xs font-bold text-white/90 uppercase tracking-wider">MongoDB</span>
  </div>
);

const About = () => {
  return (
    <section id="about" className="bg-[#2563eb] pt-20 pb-40 px-6 md:px-12 w-full relative overflow-hidden font-sans">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-start">
        
        {/* Left Side: ID Badge */}
        <div className="flex flex-col items-center w-full md:w-[350px] shrink-0 mt-12 md:mt-0">
          
          <div data-aos="drop-bounce" className="relative flex justify-center w-full">
            {/* Lanyard string */}
            <div className="absolute -top-32 left-1/2 w-3 h-40 bg-black transform -translate-x-1/2 shadow-inner z-0"></div>
            {/* Lanyard clip */}
            <div className="absolute -top-6 left-1/2 w-6 h-12 bg-gray-300 rounded border border-gray-400 transform -translate-x-1/2 z-10 shadow-[0_2px_10px_rgba(0,0,0,0.3)]"></div>
            
            {/* Badge Card */}
            <div className="bg-gray-900 w-full max-w-[280px] rounded-2xl p-3 shadow-[0_20px_40px_rgba(0,0,0,0.4)] relative z-20 transform -rotate-3 hover:rotate-0 transition-transform duration-500">
              {/* Cutout Hole */}
              <div className="absolute -top-3 left-1/2 w-16 h-6 bg-gray-900 rounded-t-xl transform -translate-x-1/2 flex justify-center items-center">
                <div className="w-8 h-2 bg-black/30 rounded-full shadow-inner"></div>
              </div>
              {/* Image Container */}
              <div className="w-full aspect-[3/4] overflow-hidden rounded-xl bg-gray-800 border-2 border-transparent">
                <img 
                  src={stackImage} 
                  alt="Tharun Kumar S — AI & Full-Stack Software Developer" 
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>
          </div>

        </div>

        {/* Right Side: Info Content */}
        <div data-aos="fade-left" data-aos-delay="200" className="flex-1 text-white mt-8 md:mt-0 relative z-20">
          
          <h2 className="text-4xl md:text-5xl font-black text-black mb-4">{aboutContent.heading}</h2>
          <p 
            className="text-lg font-bold mb-10 leading-relaxed max-w-3xl text-blue-50"
            dangerouslySetInnerHTML={{ __html: aboutContent.bio }}
          />

          {/* Horizontal Skills Row */}
          <div className="flex flex-wrap items-center gap-8 md:gap-10 mb-12">
            <div data-aos="zoom-in" data-aos-delay="300" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <ReactIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="400" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <PythonIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="500" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <FastApiIcon />
            </div>
            <div data-aos="zoom-in" data-aos-delay="600" className="hover:scale-110 transition-transform duration-300 cursor-pointer drop-shadow-2xl">
              <MongoDbIcon />
            </div>
          </div>

          {/* Key Achievements Callout Banner */}
          {aboutContent.achievementsHighlights && (
            <div data-aos="fade-up" data-aos-delay="700" className="bg-black/25 backdrop-blur-md border border-white/20 rounded-2xl p-6 max-w-3xl">
              <h3 className="text-xs font-black uppercase tracking-widest text-blue-200 mb-3">Key Honors & Achievements</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {aboutContent.achievementsHighlights.map((item, idx) => (
                  <div key={idx} className="bg-white/10 p-4 rounded-xl border border-white/10">
                    <span className="text-xs font-bold text-blue-300 uppercase block mb-1">{item.organization}</span>
                    <h4 className="text-sm font-black text-white mb-1">{item.title}</h4>
                    <p className="text-xs text-white/80 font-medium leading-normal">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>

      {/* Torn paper divider at bottom */}
      <div className="absolute bottom-0 left-0 w-full pointer-events-none z-30 transform translate-y-1">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-12 md:h-20 fill-white">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C59.71,118.08,130.83,119.62,189.5,99.8,242.79,81.82,282.88,63.6,321.39,56.44Z"></path>
        </svg>
      </div>

      {/* Decorative stars */}
      <div className="absolute top-10 right-10 md:right-20 text-black opacity-30 animate-pulse">
        <svg className="w-16 h-16" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
      <div className="absolute bottom-32 left-4 md:left-20 text-black opacity-30 animate-pulse" style={{ animationDelay: '1s' }}>
        <svg className="w-20 h-20" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0l2.5 8.5L23 12l-8.5 2.5L12 23l-2.5-8.5L1 12l8.5-2.5z"/></svg>
      </div>
    </section>
  );
};

export default About;
