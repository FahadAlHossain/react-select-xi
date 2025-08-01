import React from "react";
import AddPlayer from "../AddPlayer/AddPlayer";

export default function Selected({ newPlayer, setNewPlayer }) {
    
  return (
    <div>
      {newPlayer.map((addPlayer) => (
        <AddPlayer key={addPlayer.id} newPlayer={newPlayer} setNewPlayer={setNewPlayer} addPlayer={addPlayer}></AddPlayer>
      ))}
    </div>
  );
}
