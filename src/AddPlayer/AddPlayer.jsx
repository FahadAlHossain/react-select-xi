import React from "react";
import { ImBin } from "react-icons/im";

export default function AddPlayer({ addPlayer, setNewPlayer, newPlayer }) {
  const { id, img, name, battingStyle } = addPlayer;

  const handleRemove = (id) => {
    const removePlayer = newPlayer.filter((item) => item.id !== id);
    setNewPlayer(removePlayer);
    console.log(removePlayer);
  };

  return (
    <div>
      <div className="flex border-2 rounded-xl border-slate-300 p-2 justify-between items-center my-4">
        <div className="flex items-center gap-4">
          <div>
            <img className="h-20 rounded-xl" src={img} alt="" />
          </div>
          <div>
            <p className="text-2xl font-semibold">{name}</p>
            <p className="text-slate-400">{battingStyle}</p>
          </div>
        </div>
        <div>
          <button
            onClick={() => handleRemove(id)}
            className="text-red-500 text-lg"
          >
            <ImBin />
          </button>
        </div>
      </div>
    </div>
  );
}
