import React from "react";

export default function AddPlayer({ addPlayer }) {
  const { img, name, battingStyle } = addPlayer;
  return (
    <div>
      <div className="flex border-2 rounded-xl border-slate-300 p-2 gap-4 items-center my-4">
        <div>
          <img className="h-20 rounded-xl" src={img} alt="" />
        </div>
        <div>
          <p className="text-2xl font-semibold">{name}</p>
          <p className="text-slate-400">{battingStyle}</p>
        </div>
      </div>
    </div>
  );
}
