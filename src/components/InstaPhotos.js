import React from 'react';
import Instagram from '../assets/images/instagram1.svg';
import insta1 from '../assets/images/insta-1.jpg';
import insta2 from '../assets/images/insta-2.jpg';
import insta3 from '../assets/images/insta-3.jpg';
import insta4 from '../assets/images/insta_4.jpg';
import instaGrey from '../assets/images/instagram_grey-min.png';

function InstaPhotos() {
  return (
    <div>
      <div className="flex flex-col bg-white justify-center items-center max-w-6xl mx-auto text-center px-4 py-16">
        <div className="">
          <img className="w-10 h-10" src={Instagram} alt="instagram" />
        </div>
        <div className="mb-5 mt-3 font-light text-2xl sm:text-3xl text-gray-700">
          See what we're up to on Instagram
        </div>
        <button
          href="#"
          className="text-hibiscus-500 text-lg mb-12 text-center sm:text-lg font-medium tracking-wide"
        >
          @CraftedByBinks
        </button>
        <div className="flex justify-center cursor-pointer">
          <div className="flex group space-y-4 justify-center items-center">
            <img
              className="relative group-hover:opacity-20"
              src={insta1}
              alt="insta1"
            />
            <img
              className="h-12 w-12 opacity-0 group-hover:opacity-100 transition-opacity ease-in duration-400 absolute"
              src={instaGrey}
              alt="instagrey1"
            />
          </div>
          <div className="flex group space-y-4 justify-center items-center">
            <img
              className="relative group-hover:opacity-20"
              src={insta2}
              alt="insta2"
            />
            <img
              className="h-12 w-12 opacity-0 group-hover:opacity-100 transition-opacity ease-in duration-400 absolute"
              src={instaGrey}
              alt="instagrey2"
            />
          </div>
          <div className="flex group space-y-4 justify-center items-center">
            <img
              className="relative group-hover:opacity-20"
              src={insta3}
              alt="insta3"
            />
            <img
              className="h-12 w-12 opacity-0 group-hover:opacity-100 transition-opacity ease-in duration-400 absolute"
              src={instaGrey}
              alt="instagrey3"
            />
          </div>
          <div className="flex group space-y-4 justify-center items-center">
            <img
              className="relative group-hover:opacity-20"
              src={insta4}
              alt="insta4"
            />
            <img
              className="h-12 w-12 opacity-0 group-hover:opacity-100 transition-opacity ease-in duration-400 absolute"
              src={instaGrey}
              alt="instagrey4"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default InstaPhotos;
