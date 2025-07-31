import React from "react";
import AddPlayer from "../AddPlayer/AddPlayer";

export default function Selected({ newPlayer }) {
  return (
    <div>
      {newPlayer.map((addPlayer) => (
        <AddPlayer key={addPlayer.id} addPlayer={addPlayer}></AddPlayer>
      ))}
    </div>
  );
}
