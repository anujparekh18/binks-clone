import React from 'react';
import BinksLogo from '../assets/images/Logo-Blue-min-p-500.png';
import BlouseImg from '../assets/images/hero_blouse-min.png';
import { Transition } from '@headlessui/react';

function Header({ isShowing }) {
  return (
    <div>
      <Transition
        show={true}
        appear={true}
        // enter="transition duration-700"
        // enterFrom="transform scale-y-0 opacity-0"
        // enterTo="transform scale-y-100 opacity-100"
        // enterFrom="transform translate-y-56 opacity-50"
        // enterTo="transform translate-y-0 opacity-100"
      >
        {/* <Transition.Child
          enter="transition duration-700 delay-150"
          enterFrom="transform scale-0 opacity-0"
          enterTo="transform scale-100 opacity-100"
        > */}
        <div className="py-28 lg:pt-0 px-4 lg:px-0 w-full bg-gradient-to-tr from-cupid to-karry">
          <div className="flex flex-col lg:flex-row justify-between items-center max-w-6xl mx-auto">
            <div className="text-eastbay text-center lg:text-left">
              <Transition.Child
                enter="transition duration-700 delay-300"
                enterFrom="transform translate-y-12 opacity-0"
                enterTo="transform translate-y-0 opacity-100"
              >
                <div className="w-full lg:justify-start flex justify-center items-center">
                  <img className="w-40" src={BinksLogo} alt="binksLogs" />
                </div>
              </Transition.Child>
              <Transition.Child
                enter="transition duration-700 delay-500"
                enterFrom="transform translate-y-12 opacity-0"
                enterTo="transform translate-y-0 opacity-100"
              >
                <h2 className="text-3xl font-extralight lg:font-normal mt-10 mb-3">
                  Don't go looking for the perfect fit.
                </h2>
                <h2 className="text-3xl mb-5">Let it come home to you.</h2>
              </Transition.Child>
              <Transition.Child
                enter="transition duration-700 delay-500"
                enterFrom="transform translate-y-12 opacity-0"
                enterTo="transform translate-y-0 opacity-100"
              >
                <h4 className="text-xl mb-7 font-light">
                  Great fit. Doorstep pickup &amp; delivery. Design
                  consultation.
                </h4>
              </Transition.Child>
              <Transition.Child
                enter="transition duration-700 delay-700"
                enterFrom="transform translate-y-12 opacity-0"
                enterTo="transform translate-y-0 opacity-100"
              >
                <div className="flex flex-col justify-center items-center lg:items-baseline">
                  <button className="w-80 h-10 mt-3 text-xl text-pink-200 rounded-full border bg-hibiscus-500">
                    Place an online stiching order.
                  </button>
                  <button className="w-80 h-10 mt-5 hover:bg-hibiscus-500 hover:text-pink-200 text-xl rounded-full bg-transparent border-2 text-hibiscus-500 border-hibiscus-500">
                    Check our pricing.
                  </button>
                </div>
              </Transition.Child>
            </div>
            <div>
              <Transition.Child
                enter="transition duration-200"
                enterFrom="transform opacity-0"
                enterTo="transform opacity-100"
              >
                <div>
                  <img src={BlouseImg} alt="blouseImg" />
                </div>
              </Transition.Child>
            </div>
          </div>
        </div>
        {/* </Transition.Child> */}
      </Transition>
    </div>
  );
}

export default Header;
