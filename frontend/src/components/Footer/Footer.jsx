import React from "react";
import fb from "../../assets/social/fb.png";
import inst from "../../assets/social/inst.png";
import tw from "../../assets/social/twitter.png";
import git from "../../assets/social/git.png";
import visa from "../../assets/payment/Badge.png";
import master from "../../assets/payment/Badge-1.png";
import paypal from "../../assets/payment/Badge-2.png";
import apay from "../../assets/payment/Badge-3.png";
import gpay from "../../assets/payment/Badge-4.png";

const Footer = () => {
  return (
    <footer className="w-full md:p-8 bg-gray-100">
      <div className="container mx-auto">
        {/* Flex-col on small, flex-row on medium and larger screens */}
        <div className="flex flex-col md:flex-row justify-between p-4 space-y-8 md:space-y-0 md:space-x-8">
          <div className="flex flex-col md:w-1/5 items-start">
            <div className="text-3xl font-extrabold">SHOP.CO</div>
            <p className="text-sm text-gray-500 mt-4">
              We know how large objects will act, but things on a small scale.
            </p>
            <div className="flex flex-row space-x-4 mt-10">
              <img src={tw} alt="tw" className="w-6 h-6" />
              <img src={fb} alt="fb" className="w-6 h-6" />
              <img src={inst} alt="inst" className="w-6 h-6" />
              <img src={git} alt="git" className="w-6 h-6" />
            </div>
          </div>

          {/* Wrap Company and Help sections into a row on small screens */}
          <div className="flex flex-row md:space-x-8 md:w-2/5">
            <div className="flex flex-col w-1/2 space-y-4">
              <div className="font-semibold">COMPANY</div>
              <div className="text-sm text-gray-500">About</div>
              <div className="text-sm text-gray-500">Features</div>
              <div className="text-sm text-gray-500">Works</div>
              <div className="text-sm text-gray-500">Career</div>
            </div>
            <div className="flex flex-col w-1/2 space-y-4">
              <div className="font-semibold">HELP</div>
              <div className="text-sm text-gray-500">Customer Support</div>
              <div className="text-sm text-gray-500">Delivery Details</div>
              <div className="text-sm text-gray-500">Terms & Conditions</div>
              <div className="text-sm text-gray-500">Privacy Policy</div>
            </div>
          </div>

          {/* Wrap FAQ and Resources sections into a row on small screens */}
          <div className="flex flex-row md:space-x-8 md:w-2/5">
            <div className="flex flex-col w-1/2 space-y-4">
              <div className="font-semibold">FAQ</div>
              <div className="text-sm text-gray-500">Account</div>
              <div className="text-sm text-gray-500">Manage Deliveries</div>
              <div className="text-sm text-gray-500">Orders</div>
              <div className="text-sm text-gray-500">Payments</div>
            </div>
            <div className="flex flex-col w-1/2 space-y-4">
              <div className="font-semibold">RESOURCES</div>
              <div className="text-sm text-gray-500">Free eBooks</div>
              <div className="text-sm text-gray-500">Development Tutorial</div>
              <div className="text-sm text-gray-500">How to - Blog</div>
              <div className="text-sm text-gray-500">Youtube Playlist</div>
            </div>
          </div>
        </div>

        {/* Adding the hr inside the container for limited width */}
        <hr className="my-2 border-gray-300" />

        {/* Footer bottom section */}
        <div className="flex flex-col md:flex-row justify-between items-center mt-4 space-y-4 md:space-y-0">
          <p className="text-sm text-gray-500">
            Shop.co &copy; 2000-2024 All Rights Reserved
          </p>
          <div className="flex flex-row space-x-2">
            <img src={visa} alt="visa" className="w-12 h-10" />
            <img src={master} alt="master" className="w-12 h-10" />
            <img src={paypal} alt="paypal" className="w-12 h-10" />
            <img src={apay} alt="apay" className="w-12 h-10" />
            <img src={gpay} alt="gpay" className="w-12 h-10" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
