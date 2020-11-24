import React from 'react';
import binksLogoBlack from '../assets/images/binkslogoblack.png';

function Footer() {
  return (
    <div>
      <div className="bg-athensGray pb-28 w-full">
        <div className="flex justify-between mx-auto max-w-6xl px-4 lg:px-0">
          <div className="pt-12 w-1/2">
            <div className="w-40 h-24">
              <img src={binksLogoBlack} alt="binkslogoblack" />
            </div>
            <div className="text-base font-light leading-7 tracking-wider text-suvaGray pt-5 px-5">
              Online boutique for busy independent women
            </div>
          </div>

          <div className="grid grid-cols-2 md:flex w-1/2 text-base">
            <div className="pt-14 w-1/3 space-y-4">
              <div className="font-semibold text-hibiscus-500">Menu</div>
              <div className="font-light text-eastbay">Home</div>
              <div className="font-light text-eastbay">FAQ</div>
              <div className="font-light text-eastbay">Reviews</div>
            </div>

            <div className="pt-14 w-1/3 space-y-4">
              <div className="font-semibold text-hibiscus-500">Company</div>
              <div className="font-light text-eastbay">About</div>
              <div className="font-light text-eastbay">Privacy Policy</div>
              <div className="font-light text-eastbay">Terms</div>
            </div>

            <div className="col-span-2 pt-14 w-1/3">
              <div className="mb-5 font-semibold text-hibiscus-500">
                Contact
              </div>
              <div className="mb-4 font-light text-eastbay">
                hello@getbinks.com
              </div>
              <div className="font-light text-eastbay">
                1st Floor, Sri Sai Sadan, #9, St. John's Road, Ulsoor, Bangalore
                - 42
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
