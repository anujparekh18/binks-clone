import React from 'react';
import ImageSlider from './carousel/Carousel';
import QuoteCarousel from './carousel/QuoteCarousel';

function Slides() {
  return (
    <div>
      <div className="flex flex-col bg-white justify-center items-center max-w-6xl mx-auto pt-16">
        <p className="text-eastbay mb-2">Crafted By Binks</p>
        <h3 className="mx-3 mb-10 font-light text-lg sm:text-3xl text-gray-700">
          Pretty in themselves. Stunning on our customers.
        </h3>
      </div>

      <ImageSlider />

      <div className="bg-remy mt-16 pt-16 pb-12">
        <div className="flex flex-col justify-center items-center max-w-6xl mx-auto">
          <p className="text-eastbay text-2xl sm:text-3xl font-normal tracking-wide mb-3">
            Everybody Loves Binks
          </p>
          <div className="font-light text-gray-700 text-xl text-center sm:text-xl tracking-wide">
            Don't take our word for it, hear it from our customers!
          </div>
          <QuoteCarousel />
          <button className="px-6 lg:w-1/2 h-10 mt-4 hover:text-remy hover:bg-hibiscus-500 border border-hibiscus-500 rounded-full text-hibiscus-500 text-lg font-medium tracking-wide">
            Read More Reviews
          </button>
        </div>
      </div>
    </div>
  );
}

export default Slides;
