import React from "react";
import AddPlayer from "../AddPlayer/AddPlayer";

export default function Selected({ newPlayer, setNewPlayer, setAvailable }) {
  return (
    <div>
      {newPlayer.map((addPlayer) => (
        <AddPlayer
          key={addPlayer.id}
          newPlayer={newPlayer}
          setNewPlayer={setNewPlayer}
          addPlayer={addPlayer}
        ></AddPlayer>
      ))}
      {newPlayer.length > 0 && (
        <button
          onClick={() => setAvailable("available")}
          className="border-lime-500 bg-lime-400 border-2 p-3 font-bold text-black rounded-xl transition hover:-translate-y-1 hover:scale-110 hover:not-focus:bg-lime-200 delay-150 duration-300 ease-in-out"
        >
          Add more players
        </button>
      )}
    </div>
  );
}
