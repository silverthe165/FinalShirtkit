import React from "react";
import Shirt from "./Shirt/Shirt";
export default function Team({ team }) {
  return (
    <div id="team">
      <div id={team[0].n}>Home{team[0].n}</div>
      <Shirt team={team[0]} home={0}></Shirt>

      <div id={team[1].n}>Away{team[1].n}</div>
      <Shirt team={team[1]} home={1}></Shirt>
    </div>
  );
}
