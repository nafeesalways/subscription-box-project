import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold mb-5">Find Us on</h2>
      <div>
        <div className="join join-vertical w-full">
          <a
            href="https://facebook.com"
            target="_blank"
            className="btn bg-base-100 hover:bg-secondary hover:text-white  join-item"
          >
            <FaFacebook></FaFacebook> Facebook
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            className="btn bg-base-100 hover:bg-secondary hover:text-white  join-item"
          >
            <FaTwitter></FaTwitter> Twitter
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            className="btn bg-base-100 hover:bg-secondary hover:text-white  join-item"
          >
            <FaInstagram></FaInstagram> Instagram
          </a>
        </div>
      </div>
    </div>
  );
};

export default FindUs;
