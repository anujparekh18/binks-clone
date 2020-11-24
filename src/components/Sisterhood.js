import React from 'react';
import WomenIcon from '../assets/images/by_women_for_women_icon.png';

function Sisterhood() {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center items-center bg-white max-w-6xl mx-auto px-6 py-6">
        <div className="flex flex-col text-left justify-center items-start">
          <div className="text-eastbay font-medium mb-1">
            By Women, For Women
          </div>
          <div className="mb-5 mt-3 font-light text-2xl sm:text-3xl text-gray-700">
            Welcome to the Binks sisterhood
          </div>
          <hr className="border-gray-600 border-2 w-12 bg-gray-600 mb-12" />
          <div className="text-md font-light leading-7 tracking-wider text-gray-400 pb-20 md:-pb-20 pr-8">
            As women, we have many nuanced notions about our body type, fit, and
            fashion choices. We believe it takes a woman to fully appreciate
            this complexity. That’s why at Binks, we have an all-women team of
            designers and support staff. Everyone you interact with is a woman
            you can trust - someone who relates to the problems you’ve faced
            with clothing and knows how to fix them.
          </div>
        </div>
        <div className="flex justify-center items-center h-full w-full max-w-md md:mx-20">
          <div className="w-80 h-80">
            <img src={WomenIcon} alt="womenIcon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sisterhood;
