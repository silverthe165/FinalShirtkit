import React from "react";

export default function Shirt({ team, home }) {
  console.log(team);
  const { cr, co, id } = team;

  console.log(id, cr, co);

  return <div id="Shirt"></div>;
}
