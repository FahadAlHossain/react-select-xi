import React, { useEffect, useState } from "react";
import Player from "../Player/Player";
import Selected from "../Selected/Selected";

export default function Players({ coin, setCoin }) {
  //   const [players, setPlayers] = useState([]);
  const [available, setAvailable] = useState("available");
  // const [selected, setSelected] = useState([])
  const [players, setPlayers] = useState([]);
  const [newPlayer, setNewPlayer] = useState([]);
  useEffect(() => {
    fetch("/public/players.json")
      .then((res) => res.json())
      .then((data) => setPlayers(data));
    //   handleAvailable();
  }, []);

  return (
    <div>
      <div className="flex justify-between mt-[720px] mb-5">
        <div>
          <h2 className="text-3xl font-bold">Available Players</h2>
        </div>
        <div className="border-2 p-2 border-slate-100 font-semibold rounded-xl">
          <button
            onClick={() => setAvailable("available")}
            className={
              available === "available" && "bg-lime-300 p-4 rounded-xl"
            }
          >
            Available
          </button>
          <button
            onClick={() => setAvailable("selected")}
            className={
              available !== "available" && "bg-lime-300 p-4 rounded-xl"
            }
          >
            Selected
          </button>
        </div>
      </div>
      {available === "available" ? (
        <div className="grid grid-cols-3 gap-4">
          {players.map((player) => (
            <Player
              key={player.id}
              coin={coin}
              setCoin={setCoin}
              player={player}
              newPlayer={newPlayer}
              setNewPlayer={setNewPlayer}
            ></Player>
          ))}
        </div>
      ) : (
        <Selected newPlayer={newPlayer}></Selected>
      )}
    </div>
  );
}
