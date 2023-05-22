import React, { useState, useMemo } from "react";
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
    <
    >
      {Object.values(data).map((sports) => (
        <div key={sports.m.n} id={sports.m.n}>
          <button
           onClick={() => handleClick(sports.d)}
           >{sports.m.n}</button>
          { league === sports.d && 
            <Leagues leagues={sports.d} />}
        </div>
      ))}
    </>
  );
}
