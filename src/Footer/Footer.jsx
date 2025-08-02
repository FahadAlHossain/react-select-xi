import React from "react";
import footerLogo from "../assets/logo-footer.png";
import Subscribe from "./../Subscribe/Subscribe";

export default function Footer() {
  return (
    <div>
      <div className="bg-[#06091A] h-[800px] relative mt-96 text-white">
        <div className="w-2/3 mx-auto">
          <div className="absolute -top-45 left-1/2 transform -translate-x-1/2 w-2/3 mx-auto">
            <Subscribe></Subscribe>
          </div>
          <div className="flex justify-center pt-48">
            <img src={footerLogo} alt="" />
          </div>
          <div className="grid grid-cols-3 gap-56 pt-16">
            <div>
              <h2 className="text-3xl font-semibold mb-3">About Us</h2>
              <p className="text-lg">
                We are a passionate team dedicated to providing the best
                services to our customers.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-semibold mb-3">Quick Links</h2>
              <ul className="text-lg ml-4 text-gray-400">
                <li>
                  •
                  <a className="ml-3" href="/">
                    Home
                  </a>
                </li>
                <li>
                  •
                  <a className="ml-3" href="/">
                    Services
                  </a>
                </li>
                <li>
                  •
                  <a className="ml-3" href="/">
                    About
                  </a>
                </li>
                <li>
                  •
                  <a className="ml-3" href="/">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-semibold mb-3">Subscribe</h2>
              <p className="text-lg">
                Subscribe to our newsletter for the latest updates.
              </p>
              <input
                className="border-2 p-3 bg-white text-black border-slate-300 rounded-s-xl mt-3 w-56"
                type="email"
                name=""
                placeholder="Enter Your Email"
                id=""
              />
              <button className="border-2 p-3 bg-lime-400 font-semibold rounded-e-2xl border-lime-300 text-black px-5">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        <div className="border-b-2 mt-40 border-b-slate-400"></div>
        <div className="w-2/3 mx-auto text-center text-lg pt-5 text-slate-400">
            <footer>@2025 FahadAlHossain All Rights Reserved.</footer>
        </div>
      </div>
    </div>
  );
}
