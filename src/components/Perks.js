import React, { useState } from 'react';
import Fabric1 from '../assets/images/fabric1.jpg';
import Pocket from '../assets/images/pocket.jpg';
import Cloth2 from '../assets/images/cloth3.jpg';

function Perks() {
  const [perks, setPerks] = useState([
    {
      id: 1,
      open: false,
      title: 'Seam allowances you will love',
      des:
        'Our outfits will see you through thick and thin, quite literally! Every piece we craft has ample seam allowance to enable alterations in future.',
    },
    {
      id: 2,
      open: false,
      title: 'Roomy pockets',
      des:
        'How unfair is it that men get sensible, roomy pockets, while women’s pockets seem like an afterthought! We design pockets that can actually hold stuff. And we make them as big as you want them. Oh, the joys of custom made clothing!',
    },
    {
      id: 3,
      open: false,
      title: 'Pre-washed lining',
      des:
        'Lining material has a will of its own. It usually shrinks after the first wash, and messes with the look and fit of your dress. We avoid this by washing our lining material before stitching it in.',
    },
    {
      id: 4,
      open: false,
      title: 'Quirky specifications',
      des:
        'A dress with detachable sleeves. A blouse with two avatars - high-necked and low-necked. A trouser with one leg a tad bit shorter than the other. We’ve taken pride in catering to our customers’ unique requirements. Got one yourself? Bring it on!',
    },
  ]);

  const handleOpenChange = (id) => {
    const updatedPerks = perks.map((item) => {
      if (item.id === id) {
        const newItem = { ...item, open: !item.open };
        return newItem;
      } else {
        return item;
      }
    });
    setPerks(updatedPerks);
  };

  return (
    <div>
      <div className="flex flex-col md:flex-row justify-center items-center bg-white max-w-6xl mx-auto px-6 py-16">
        <div className="flex flex-col text-left justify-center items-start">
          <div className="text-eastbay font-medium mb-1">Thoughtful Design</div>
          <div className="mb-5 mt-3 font-light text-2xl sm:text-3xl text-gray-700">
            Little details, big difference
          </div>
          <hr className="border-gray-600 border-2 w-12 bg-gray-600 mb-14" />

          {perks.map((perk, index) => (
            <div className="pb-10" key={index}>
              <button
                className="flex items-center justify-between focus:outline-none w-full px-12 leading-loose text-lg sm:text-xl tracking-wide"
                onClick={() => handleOpenChange(perk.id)}
              >
                <div className="font-light text-gray-800 leading-loose text-lg sm:text-xl tracking-wide">
                  {perk.title}
                </div>
                <div className="flex items-center justify-center">
                  <hr className="border-hibiscus-500 border-2 bg-hibiscus-500 w-4 relative" />
                  {!perk.open && (
                    <hr className="border-hibiscus-500 transform rotate-90 border-2 bg-hibiscus-500 w-4 absolute" />
                  )}
                </div>
              </button>
              <div
                className={
                  perk.open
                    ? 'text-base font-light leading-7 tracking-wider text-gray-400 pt-10 px-12 transition-transform ease-in duration-700'
                    : 'text-base font-light leading-7 tracking-wider text-gray-400 px-12 h-0 overflow-hidden transition-transform ease-out duration-700'
                }
              >
                {perk.des}
              </div>
              <hr className="border-gray-600 -h-2 bg-gray-200 mt-6 mx-8" />
            </div>
          ))}
        </div>
        <div className="flex flex-col h-490px max-w-md md:mx-8">
          <div className="flex w-full h-1/2">
            <img
              className="border object-cover object-bottom mb-4 rounded-2xl"
              src={Cloth2}
              alt="cloth2"
            />
          </div>
          <div className="flex flex-row h-1/2 box-border space-x-4">
            <div className="flex w-1/2 h-full">
              <img
                className="border object-left object-cover rounded-2xl"
                src={Fabric1}
                alt="cloth1"
              />
            </div>
            <div className="flex w-1/2 h-full">
              <img className="border rounded-2xl" src={Pocket} alt="pocket" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Perks;
