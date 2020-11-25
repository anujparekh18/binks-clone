import React, { useState } from 'react';
import Cheveron from '../assets/images/chevron_right.png';

function FAQ() {
  const [list, setList] = useState([
    {
      id: 1,
      open: false,
      que: 'How does online tailoring with Binks work?',
      ans:
        'When you place an order, we will schedule a pickup for your fabric and sample garment from your home. Next, a dedicated personal designer will help you style your fabric. Once the design is confirmed, we will stitch the garment & ship it to your home in 5-15 working days. Alterations if any, are taken care of free of charge.',
    },
    {
      id: 2,
      open: false,
      que: 'How will you take my measurements?',
      ans:
        'A sample garment works just fine. It needn not fit you perfectly. As long as we know what is wrong with the sample garment (too tight, too loose, wrinkles etc), we can make a new garment that fits well.',
    },
    {
      id: 3,
      open: false,
      que: 'I do not have fabric but I want something tailored. Can you help?',
      ans: 'Yes! We help source fabric, matching or otherwise.        ',
    },
    {
      id: 4,
      open: false,
      que: 'How do I make the payment?',
      ans:
        'Once your design is confirmed, we will share a payment link with you. You can make the payment using any online modes like UPI, card, net banking etc. We only accept online payments.',
    },
    {
      id: 5,
      open: false,
      que: 'Do you do only alterations?',
      ans:
        'Nope, unfortunately we do not. In case you have a stitching order, we can take alterations as well.',
    },
    {
      id: 6,
      open: false,
      que: 'How do I make the payment?',
      ans:
        'Once your design is confirmed, we will share a payment link with you. You can make the payment using any online modes like UPI, card, net banking etc. We only accept online payments.',
    },
    {
      id: 7,
      open: false,
      que: 'Where is your shop?',
      ans:
        'Binks is an online boutique & the customer experience is entirely online & at-home. We do not have a physical store where customers can walk in. We operate out of our office in Ulsoor.',
    },
  ]);

  const handleOpenChange = (id) => {
    const updatedList = list.map((item) => {
      if (item.id === id) {
        const newItem = { ...item, open: !item.open };
        return newItem;
      } else {
        return item;
      }
    });
    setList(updatedList);
  };

  return (
    <div>
      <div className="flex flex-col bg-athensGray justify-center rounded-2xl items-center max-w-6xl mx-4 lg:mx-auto py-16 my-16">
        <p className="text-eastbay font-medium mb-6">FAQ</p>
        <h3 className="mx-3 mb-14 font-light text-lg sm:text-3xl text-gray-700">
          In case you're wondering...
        </h3>

        {list.map((que, index) => (
          <div className="px-2 md:px-10 lg:px-16 w-full" key={index}>
            <button
              className="flex items-center justify-between focus:outline-none w-full px-5 leading-loose text-lg sm:text-xl tracking-wide"
              onClick={() => handleOpenChange(que.id)}
            >
              <div className="font-light text-eastbay leading-loose text-base text-left tracking-wider">
                {que.que}
              </div>
              <div>
                {!que.open ? (
                  <img className="w-4 h-4" src={Cheveron} alt="right" />
                ) : (
                  <img
                    className="w-4 h-4 transform rotate-90"
                    src={Cheveron}
                    alt="right"
                  />
                )}
              </div>
            </button>
            <div
              className={
                que.open
                  ? 'text-sm font-light leading-7 tracking-wider text-gray-400 pt-5 px-5 transition-transform ease-in duration-700'
                  : 'text-base font-light leading-7 tracking-wider text-gray-400 px-3 h-0 overflow-hidden transition-transform ease-out duration-700'
              }
            >
              {que.ans}
            </div>
            <hr className="border-cascade -h-2 bg-gray-200 my-6" />
          </div>
        ))}
        <button className="px-6 lg:w-1/2 h-10 mt-4 hover:text-remy hover:bg-hibiscus-500 border border-hibiscus-500 rounded-full text-hibiscus-500 text-lg font-medium tracking-wide">
          Read More FAQ's
        </button>
      </div>
    </div>
  );
}

export default FAQ;
