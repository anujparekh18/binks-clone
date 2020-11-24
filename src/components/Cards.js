import React from 'react';
import location from '../assets/images/location.png';
import locationbg from '../assets/images/location-bg.png';
import dress from '../assets/images/designer.png';
import dressbg from '../assets/images/designer-bg.png';
import door from '../assets/images/doorstep.png';
import doorbg from '../assets/images/doorstep-bg.png';

function Cards() {
  return (
    <div>
      <div className="flex flex-col bg-white justify-center items-center max-w-6xl mx-auto py-16">
        <p className="text-eastbay mb-2">How it works</p>
        <h3 className="mx-3 mb-10 font-light text-lg sm:text-3xl text-gray-700">
          You relax. We do all the running around.
        </h3>
        <div className="flex flex-col mx-3 sm:flex-row sm:mx-auto">
          <div className="sm:mt-4 sm:w-1/3">
            <div className="h-full px-5 py-7 flex flex-row items-start border rounded-t-lg sm:rounded-none sm:rounded-l-lg border-gray-500 sm:border-hibiscus-500">
              <div className="pr-5">
                <img
                  className="w-72 h-16 relative"
                  src={locationbg}
                  alt="locationBkg"
                />
                <img
                  className="w-10 h-12 -mt-16 ml-3 absolute"
                  src={location}
                  alt="locationIcon"
                />
              </div>
              <div>
                <div className="text-xl font-light mb-2 text-gray-800">
                  Schedule a pickup
                </div>
                <div className="text-md font-light leading-7 text-gray-400">
                  Place an order online and we’ll swing by your home to pick up
                  your fabric and sample garment for measurements on the
                  scheduled date. No more gruelling visits to the tailor shop!
                </div>
              </div>
            </div>
          </div>

          <div className="sm:mt-4 sm:w-1/3">
            <div className="h-full px-5 py-7 flex flex-row items-start border sm:border-hibiscus-500 border-gray-500">
              <div className="pr-5">
                <img
                  className="w-72 h-16 relative"
                  src={dressbg}
                  alt="dressBkg"
                />
                <img
                  className="w-10 h-12 -mt-16 absolute"
                  src={dress}
                  alt="dressIcon"
                />
              </div>
              <div>
                <div className="text-xl font-light mb-2 text-gray-800">
                  Talk to your designer
                </div>
                <div className="text-md font-light leading-7 text-gray-400">
                  Our designer consultant will reach out to you over Whatsapp to
                  understand your preferences and discuss the look of your
                  outfit. Once you confirm the designs, we share the exact
                  quotes & start the stitching process.
                </div>
              </div>
            </div>
          </div>

          <div className="sm:mt-4 sm:w-1/3">
            <div className="h-full px-5 py-7 flex flex-row items-start border rounded-b-lg sm:rounded-none sm:rounded-r-lg border-gray-500 sm:border-hibiscus-500">
              <div className="pr-5">
                <img
                  className="w-72 h-16 relative"
                  src={doorbg}
                  alt="doorBkg"
                />
                <img
                  className="w-10 h-12 -mt-16 absolute"
                  src={door}
                  alt="doorIcon"
                />
              </div>
              <div>
                <div className="text-xl font-light mb-2 text-gray-800">
                  Breathe easy
                </div>
                <div className="text-md font-light leading-7 text-gray-400">
                  Sit back and relax while we turn your fabric into a stunning
                  outfit. We’ll deliver it in 5 to 15 working days, depending on
                  the timeline you select. Alterations, if any, are taken care
                  of at no extra cost.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
