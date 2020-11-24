import React from 'react';
import Fabric1 from '../assets/images/fabric1.jpg';
import Fabric2 from '../assets/images/fabric2.jpg';

function FabricSource() {
  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center items-center bg-white max-w-6xl mx-auto px-6 py-6">
        <div className="flex flex-col text-left justify-center items-start">
          <div className="text-eastbay font-medium mb-1">Fabric Sourcing</div>
          <div className="mb-5 mt-3 font-light text-2xl sm:text-3xl text-gray-700">
            Let's go fabric shopping!
          </div>
          <hr className="border-gray-600 border-2 w-12 bg-gray-600 mb-4" />
          <div className="text-md font-light leading-7 tracking-wider text-gray-400 pb-24 md:-pb-24">
            Want something stitched but don’t have the time to shop for fabric?
            We have a gorgeous in-house range of fabrics. We also partner with
            popular fabric stores in Bengaluru to source options for you. Just
            sit back and decide what you like. We’ll do the rest!
          </div>
        </div>
        <div className="flex flex-col h-490px max-w-md md:mx-8">
          <div className="flex w-full h-1/2">
            <img
              className="border object-cover object-top mb-4 rounded-2xl"
              src={Fabric2}
              alt="fabric2"
            />
          </div>
          <div className="flex flex-row h-1/2 box-border space-x-4">
            <div className="flex w-1/2 h-full">
              <img
                className="border object-left object-cover rounded-2xl"
                src={Fabric1}
                alt="fabric1"
              />
            </div>
            <div className="flex w-1/2 h-full">
              <img className="border rounded-2xl" src={Fabric2} alt="fabric2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FabricSource;
