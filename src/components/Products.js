import React from 'react';
import BlouseIcon from '../assets/images/blouse.png';
import BlouseBkg from '../assets/images/blouse-bg.png';
import Salwar from '../assets/images/salwar.png';
import SalwarBg from '../assets/images/salwar-bg.png';
import Lehenga from '../assets/images/lehenga.png';
import LehengaBg from '../assets/images/lehenga-bg.png';
import Saree from '../assets/images/saree.png';
import SareeBg from '../assets/images/sareebg.png';
import Dress from '../assets/images/dress.png';
import DressBg from '../assets/images/dressbg.png';
import Trousers from '../assets/images/trousers.png';
import TrousersBg from '../assets/images/trousersbg.png';

function Products() {
  return (
    <div>
      <div className="flex flex-col bg-white justify-center items-center max-w-6xl mx-auto text-center py-16">
        <div className="text-eastbay font-medium mb-1">
          Uncomplicated Pricing
        </div>
        <div className="mb-5 mt-3 font-light text-2xl sm:text-3xl text-gray-700">
          No hidden charges, no fuss.
        </div>
        <div className="font-light text-gray-700 text-lg mb-12 text-center sm:text-xl tracking-wide">
          We keep the prices of our tailoring services transparent, so your
          decision making is simpler.
        </div>

        <div className="grid sm:grid-cols-2 gap-y-8 ml-10 xl:-ml-10 lg:grid-cols-3 justify-items-center">
          <div className="flex flex-row mr-16 pb-12 md:justify-self-start">
            <div className="mr-6">
              <img
                className="w-28 h-20 relative"
                src={BlouseBkg}
                alt="blouseBkg"
              />
              <img
                className="w-28 h-16 -mt-16 ml-2 absolute"
                src={BlouseIcon}
                alt="blouseIcon"
              />
            </div>
            <div className="flex flex-col text-left">
              <div className="text-xl font-light text-gray-700 mb-2">
                Saree Blouse
              </div>
              <hr className="border-gray-600 border-2 w-12 bg-gray-600 mb-4" />
              <div className="text-base font-light leading-relaxed text-gray-400 tracking-wider">
                Rs. 899 onwards
              </div>
            </div>
          </div>

          <div className="flex flex-row mr-16 pb-12 md:justify-self-center">
            <div className="mr-6">
              <img
                className="w-28 h-20 relative"
                src={SalwarBg}
                alt="salwarBg"
              />
              <img
                className="w-24 h-24 -mt-20 ml-2 absolute"
                src={Salwar}
                alt="salwarIcon"
              />
            </div>
            <div className="flex flex-col text-left">
              <div className="text-xl font-light text-gray-700 mb-2">
                Salwar Kameez
              </div>
              <hr className="border-gray-600 border-2 w-12 bg-gray-600 mb-4" />
              <div className="text-base font-light leading-relaxed text-gray-400 tracking-wider">
                Rs. 999 onwards
              </div>
            </div>
          </div>

          <div className="flex flex-row mr-16 pb-12 md:justify-self-end">
            <div className="mr-6">
              <img
                className="w-28 h-20 relative"
                src={LehengaBg}
                alt="lehengaBg"
              />
              <img
                className="w-24 h-24 -mt-20 ml-2 absolute"
                src={Lehenga}
                alt="lehengaIcon"
              />
            </div>
            <div className="flex flex-col text-left">
              <div className="text-xl font-light text-gray-700 mb-2">
                Lehenga Set
              </div>
              <hr className="border-gray-600 border-2 w-12 bg-gray-600 mb-4" />
              <div className="text-base font-light leading-relaxed text-gray-400 tracking-wider">
                Rs. 1799 onwards
              </div>
            </div>
          </div>

          <div className="flex flex-row mr-16 pb-12 md:justify-self-start">
            <div className="mr-6">
              <img
                className="w-28 h-20 relative"
                src={SareeBg}
                alt="sareeBkg"
              />
              <img
                className="w-24 h-24 -mt-20 ml-2 absolute"
                src={Saree}
                alt="sareeIcon"
              />
            </div>
            <div className="flex flex-col text-left">
              <div className="text-xl font-light text-gray-700 mb-2">
                Saree Upcycling
              </div>
              <hr className="border-gray-600 border-2 w-12 bg-gray-600 mb-4" />
              <div className="text-base font-light leading-relaxed text-gray-400 tracking-wider">
                Depends on what
              </div>
              <div className="text-base font-light leading-relaxed text-gray-400 tracking-wider">
                you make
              </div>
            </div>
          </div>

          <div className="flex flex-row mr-16 pb-12 md:justify-self-center">
            <div className="mr-6">
              <img className="w-28 h-20 relative" src={DressBg} alt="dressBg" />
              <img
                className="w-24 h-24 -mt-20 ml-2 absolute"
                src={Dress}
                alt="dressIcon"
              />
            </div>
            <div className="flex flex-col text-left">
              <div className="text-xl font-light text-gray-700 mb-2">
                Dress/Gown
              </div>
              <hr className="border-gray-600 border-2 w-12 bg-gray-600 mb-4" />
              <div className="text-base font-light leading-relaxed text-gray-400 tracking-wider">
                Rs. 1199 onwards
              </div>
            </div>
          </div>

          <div className="flex flex-row mr-16 pb-12  md:justify-self-end">
            <div className="mr-6">
              <img
                className="w-28 h-20 relative"
                src={TrousersBg}
                alt="trouseresBg"
              />
              <img
                className="w-20 h-16 -mt-16 ml-4 absolute"
                src={Trousers}
                alt="trouseresIcon"
              />
            </div>
            <div className="flex flex-col text-left">
              <div className="text-xl font-light text-gray-700 mb-2">
                Formal Trousers
              </div>
              <hr className="border-gray-600 border-2 w-12 bg-gray-600 mb-4" />
              <div className="text-base font-light leading-relaxed text-gray-400 tracking-wider">
                Rs. 999 onwards
              </div>
            </div>
          </div>
        </div>
        <div className="mb-3 mt-3 font-light text-2xl sm:text-3xl text-gray-800">
          and more!
        </div>
        <div className="flex flex-col w-full justify-center items-center">
          <button className="px-6 lg:w-1/3 h-10 mt-5 hover:bg-hibiscus-500 hover:text-pink-200 text-xl rounded-full bg-transparent border-2 text-hibiscus-500 border-hibiscus-500">
            See Detailed Pricing
          </button>
          <button className="px-4 lg:w-1/3 h-10 mt-3 text-xl  text-pink-200 rounded-full border-2 bg-hibiscus-500">
            Place A Stiching Order.
          </button>
        </div>
      </div>
    </div>
  );
}

export default Products;
