import React from "react";
import logo from "../assets/logo.png";

export default function Navbar({coin}) {
  return (
    <div className="flex justify-between">
      <div>
        <img src={logo} alt="" />
      </div>
      <div className="flex gap-10 text-lg text-gray-500 items-center">
        <a href="/">Home</a>
        <a href="/">Fixture</a>
        <a href="/">Teams</a>
        <a href="/">Schedules</a>
        <div>
          <p className="border-2 border-gray-300 rounded-xl p-2 font-bold text-black">
            {coin} coin
          </p>
        </div>
      </div>
    </div>
  );
}
