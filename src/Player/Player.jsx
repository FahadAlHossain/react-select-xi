import React, { useEffect } from "react";
import { FaUserCircle } from "react-icons/fa";
import { FaFlag } from "react-icons/fa6";

export default function Player({ player, setCoin, coin }) {
  useEffect(() => {}, []);

  
  const { img, name, country, expertise, price, battingStyle } = player;

  const handlePlayer = () => {
    if (coin >= price) {
      alert("player added");
       setCoin(coin - price);
    } else {
      alert("not enough coin");
    }
  };
  return (
    <div className="border-2 p-6 rounded-xl border-slate-300">
      <div className="">
        <img className="h-72 mx-auto rounded-xl" src={img} alt="" />
      </div>
      <h3 className="text-2xl font-semibold my-4 flex items-center gap-2">
        <FaUserCircle className="text-3xl" />
        {name}
      </h3>
      <div className="flex justify-between items-center mb-3">
        <p className="mb-2 flex items-center gap-2">
          <FaFlag className="text-slate-400 text-lg" />
          {country}
        </p>
        <p className="font-semibold border-2 border-stone-200 p-2 bg-slate-200 rounded-xl">
          {expertise}
        </p>
      </div>
      <p className="border-b-2 border-slate-400 mb-2"></p>
      <p className="font-semibold">Rating</p>
      <div className="flex justify-between my-3">
        <p className="font-semibold">{battingStyle}</p>
        <p className="text-slate-400">{battingStyle}</p>
      </div>
      <div className="flex justify-between items-center">
        <p className="font-semibold">Price: ${price}</p>
        <button
          onClick={handlePlayer}
          className="border-2 p-2 border-slate-300"
        >
          Choose Player
        </button>
      </div>
    </div>
  );
}
