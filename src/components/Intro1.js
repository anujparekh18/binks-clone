import React from 'react';
import BlouseIcon from '../assets/images/blouse.png';
import BlouseBkg from '../assets/images/blouse-bg.png';
import heartIcon from '../assets/images/heart.png';
import heartbg from '../assets/images/heart-bg.png';
import houseIcon from '../assets/images/sofa.png';
import housebg from '../assets/images/sofa-bg.png';

function Intro1() {
  return (
    <div>
      <div className="flex flex-col rounded-t-xl bg-white -mt-16 justify-center items-center max-w-xs md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg mx-auto py-16">
        <p className="text-eastbay mb-2">Try Binks</p>
        <h3 className="mx-3 mb-10 font-light text-2xl text-center text-gray-700">
          Enjoy a delightful experience, every time.
        </h3>
        <div className="flex flex-col sm:flex-row sm:-mx-2">
          <div className="mt-4 sm:w-1/3">
            <div className="h-full px-8 flex flex-col items-center">
              <div className="p-2">
                <img
                  className="w-28 h-16 relative"
                  src={BlouseBkg}
                  alt="blouseBkg"
                />
                <img
                  className="w-16 h-12 -mt-16 ml-8 absolute"
                  src={BlouseIcon}
                  alt="blouseIcon"
                />
              </div>
              <div className="mt-7 text-base mb-3 text-gray-600">
                A great fit, that gets better
              </div>
              <div className="text-sm font-light leading-relaxed text-gray-400">
                Feel out of shape and out of sorts in your clothes? It’s not
                you, it’s them. A great fit is not just important, it’s
                everything. That’s why we pull out all the stops to get it
                right.
              </div>
            </div>
          </div>

          <div className="mt-4 sm:w-1/3">
            <div className="h-full px-8 flex flex-col items-center">
              <div className="p-2">
                <img
                  className="w-28 h-16 relative"
                  src={heartbg}
                  alt="heartBkg"
                />
                <img
                  className="w-16 h-12 -mt-16 ml-8 absolute"
                  src={heartIcon}
                  alt="heartIcon"
                />
              </div>
              <div className="mt-7 text-base mb-3 text-gray-600">
                Personal design consultant
              </div>
              <div className="text-sm font-light leading-relaxed text-gray-400">
                Work with a dedicated designer to bring your outfit to life. Our
                consultants are qualified, talented women with ideas who
                understand the intricacies of stitching for Indian body types.
              </div>
            </div>
          </div>

          <div className="mt-4 sm:w-1/3">
            <div className="h-full px-8 flex flex-col items-center">
              <div className="p-2">
                <img
                  className="w-28 h-16 relative"
                  src={housebg}
                  alt="houseBkg"
                />
                <img
                  className="w-16 h-12 -mt-16 ml-8 absolute"
                  src={houseIcon}
                  alt="houseIcon"
                />
              </div>
              <div className="mt-7 text-base mb-3 text-gray-600">
                Convenience all the way
              </div>
              <div className="text-sm font-light leading-relaxed text-gray-400">
                Have you stopped getting clothes tailored because it’s such a
                time-sink? We hear you! We offer a low effort, no-hiccups
                experience: pickup and delivery, regular updates, and easy
                alterations.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intro1;
