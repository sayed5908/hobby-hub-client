import React from 'react';

const Banner = () => {
    return (
            <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img
      src="https://i.ibb.co.com/sv3F2R0M/9b88fccc-44ed-4f73-8b1c-771dbc8f805e.png"
      className="w-full h-[60vh] object-cover" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <img
      src="https://i.ibb.co.com/SwygSQN1/7ce89189-853d-4e8a-8623-e7f078d38995.png"
      className="h-[60vh] object-cover w-full" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
    <img
      src="https://i.ibb.co.com/XxgGkRGy/a2f0defc-8df3-49f1-be1e-f19bbcb16d0f.png"
      className="w-full h-[60vh] object-cover" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
 
        </div>
    );
};

export default Banner;