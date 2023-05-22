import React, { useState, useMemo } from "react";
import Leagues from "./Leagues/Leagues";

export default function Sports({ data }) {

  // const [league, setLeague] = useState("");

  // const memoizedLeague = useMemo(() => league, [league]);

  // const handleClick = (selectedLeague) => {
  //   if (memoizedLeague === selectedLeague) {
  //     setLeague("");
  //   } else {
  //     setLeague(selectedLeague);
  //   }
  // };

  return (
    <div
      id="Leauges"
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "10px",
        padding: "10px",
      }}
    >
      {Object.values(data).map((sports) => (
        <div key={sports.m.n} id={sports.m.n}>
          <button
          //  onClick={() => handleClick(sports.d)}
           >{sports.m.n}</button>
          {/* {memoizedLeague === sports.d && */}
            <Leagues leagues={sports.d} />
        </div>
      ))}
    </div>
  );
}
