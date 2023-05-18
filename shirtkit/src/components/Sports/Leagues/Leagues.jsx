import { useState } from "react";
import Events from "./Events/Events";

export default function Leagues({ leagues }) {
  const [events, setEvents] = useState("");

  const handleClick = (selectedEvents) => {
    setEvents(selectedEvents);
  };

  return (
    <div
      id="Leagues"
      style={{ display: "flex", flexDirection: "row", gap: "10px" }}
    >
      {Object.values(leagues).map((league,index) => (
        <div id={league.id} key={`${league.id}_${index}`}>
          <button
            onClick={() => {
              handleClick(league.d);
            }}
          >
            {league.m.n}
          </button>
        </div>
      ))}
      <Events events={events} />
    </div>
  );
}
