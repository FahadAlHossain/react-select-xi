import React from "react";
import banner from "../assets/banner-main.png";
import bg from "../assets/bg-shadow.png";

export default function Banner({ handleCoin }) {
  return (
    <div className="mt-5">
      <div className="relative bg-center bg-cover">
        <img
          className="rounded-xl bg-gray-900 absolute w-full h-[600px]"
          src={bg}
          alt=""
        />
        <div className="flex justify-center text-white">
          <img className="absolute mt-[65px] w-fit" src={banner} alt="" />
          <p className="absolute mt-[285px] text-3xl font-bold">
            Assemble Your Ultimate Dream 11 Cricket Team
          </p>
          <p className="absolute mt-[335px] text-2xl">
            Beyond Boundaries Beyond Limits
          </p>
          <button
            onClick={handleCoin}
            className="absolute mt-[390px] border-lime-500 bg-lime-400 border-2 p-3 font-bold text-black rounded-xl transition hover:-translate-y-1 hover:scale-110 hover:not-focus:bg-lime-200 delay-150 duration-300 ease-in-out"
          >
            Claim Free
          </button>
        </div>
      </div>
    </div>
  );
}
