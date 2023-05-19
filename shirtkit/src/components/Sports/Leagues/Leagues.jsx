import { useState } from "react";
import Events from "./Events/Events";

export default function Leagues({ leagues }) {
  // const [events, setEvents] = useState("");

  // const handleClick = (selectedEvents) => {
  //   setEvents(selectedEvents);
  // };

  // Sort the leagues based on league name
  const sortedLeagues = Object.values(leagues).sort((a, b) =>
    a.m.n.localeCompare(b.m.n)
  );

  return (
    <div
      id="Leagues"
      style={{ display: "flex", flexDirection: "column", gap: "10px" }}
    >
      
      {sortedLeagues.map((league, index) => (
        <div id={league.m.n} key={`${league.id}_${index}`}>
          <button 
          // onClick={() => handleClick(league.d)}
          >
            <span style={{ color: "Green", fontSize: "20px", fontWeight: "bold" }}>
              {league.m.n}
            </span>
          </button>
          <Events events={league.d} />
        </div>
      ))}
      {/* <Events events={events} /> */}
      
    </div>
  );
}
