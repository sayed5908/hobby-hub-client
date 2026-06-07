import React from 'react';

const Banner = () => {
  return (
    <div className="carousel w-full rounded-xl overflow-hidden">

      {/* Slide 1 */}
      <div id="slide1" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co.com/sv3F2R0M/9b88fccc-44ed-4f73-8b1c-771dbc8f805e.png"
          className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[600px] object-cover"
          alt="Banner 1"
        />

        <div className="absolute left-2 right-2 md:left-5 md:right-5 top-1/2 flex -translate-y-1/2 justify-between">
          <a href="#slide3" className="btn btn-circle btn-sm md:btn-md">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle btn-sm md:btn-md">
            ❯
          </a>
        </div>
      </div>

      {/* Slide 2 */}
      <div id="slide2" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co.com/SwygSQN1/7ce89189-853d-4e8a-8623-e7f078d38995.png"
          className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[600px] object-cover"
          alt="Banner 2"
        />

        <div className="absolute left-2 right-2 md:left-5 md:right-5 top-1/2 flex -translate-y-1/2 justify-between">
          <a href="#slide1" className="btn btn-circle btn-sm md:btn-md">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle btn-sm md:btn-md">
            ❯
          </a>
        </div>
      </div>

      {/* Slide 3 */}
      <div id="slide3" className="carousel-item relative w-full">
        <img
          src="https://i.ibb.co.com/XxgGkRGy/a2f0defc-8df3-49f1-be1e-f19bbcb16d0f.png"
          className="w-full h-[250px] sm:h-[350px] md:h-[450px] lg:h-[600px] object-cover"
          alt="Banner 3"
        />

        <div className="absolute left-2 right-2 md:left-5 md:right-5 top-1/2 flex -translate-y-1/2 justify-between">
          <a href="#slide2" className="btn btn-circle btn-sm md:btn-md">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle btn-sm md:btn-md">
            ❯
          </a>
        </div>
      </div>

    </div>
  );
};

export default Banner;