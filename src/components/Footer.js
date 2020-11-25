import React from 'react';
import binksLogoBlack from '../assets/images/binkslogoblack.png';
import { ReactComponent as Pinterest } from '../assets/images/pinterest.svg';
import { ReactComponent as Instagram } from '../assets/images/insta.svg';
import { ReactComponent as Facebook } from '../assets/images/facebook.svg';
import { ReactComponent as LinkedIn } from '../assets/images/linkedin.svg';
import { ReactComponent as Twitter } from '../assets/images/twitter.svg';

function Footer() {
  return (
    <div>
      <div className="bg-athensGray pb-28 w-full">
        <div className="flex flex-col md:flex-row justify-between mx-auto max-w-6xl px-2 md:px-4 lg:px-0">
          <div className="pt-12 w-full md:w-1/2">
            <div className="w-40 h-24">
              <img src={binksLogoBlack} alt="binkslogoblack" />
            </div>
            <div className="text-base font-light leading-7 tracking-wider text-suvaGray pt-5 px-5">
              Online boutique for busy independent women
            </div>
            <div class="p-4 flex justify-start space-x-3">
              <div class="rounded-md box-border cursor-pointer bg-gradient-to-tr from-insta1 to-insta2 group w-10 h-10 space-y-4 overflow-hidden">
                <Instagram className="w-4 h-10 mx-3 transform group-hover:-translate-y-16 duration-700" />
                <Instagram className="w-4 h-10 mx-3 transform group-hover:-translate-y-14 duration-700" />
              </div>
              <div class="rounded-md box-border cursor-pointer bg-red-600 group w-10 h-10 space-y-4 overflow-hidden">
                <Pinterest className="w-4 h-10 mx-3 transform group-hover:-translate-y-16 duration-700" />
                <Pinterest className="w-4 h-10 mx-3 transform group-hover:-translate-y-14 duration-700" />
              </div>
              <div class="rounded-md box-border cursor-pointer bg-fb group w-10 h-10 space-y-4 overflow-hidden">
                <Facebook className="w-4 h-10 mx-3 transform group-hover:-translate-y-16 duration-700" />
                <Facebook className="w-4 h-10 mx-3 transform group-hover:-translate-y-14 duration-700" />
              </div>
              <div class="rounded-md box-border cursor-pointer bg-in group w-10 h-10 space-y-4 overflow-hidden">
                <LinkedIn className="w-4 h-10 mx-3 transform group-hover:-translate-y-16 duration-700" />
                <LinkedIn className="w-4 h-10 mx-3 transform group-hover:-translate-y-14 duration-700" />
              </div>
              <div class="rounded-md box-border cursor-pointer bg-twitter group w-10 h-10 space-y-4 overflow-hidden">
                <Twitter className="w-4 h-10 mx-3 transform group-hover:-translate-y-16 duration-700" />
                <Twitter className="w-4 h-10 mx-3 transform group-hover:-translate-y-14 duration-700" />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 w-full md:flex md:w-1/2 text-base">
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
