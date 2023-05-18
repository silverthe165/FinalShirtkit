import React, { useState } from "react";
import Leagues from "./Leagues/Leagues";

export default function Sports({ data }) {
  const [league, setLeague] = useState("");
  
  const handleClick = (selectedLeague) => {
    if (league === selectedLeague) {
      setLeague("");
    } else {
      setLeague(selectedLeague);
    }
  };

  return (
    <div
      id="Sports"
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        padding: "10px",
      }}
    >
      {Object.values(data).map((sports) => (
        <div key={sports.m.n}>
          <button onClick={() => handleClick(sports.d)}>{sports.m.n}</button>
          {league === sports.d && <Leagues leagues={sports.d} />}
        </div>
      ))}
    </div>
  );
}
