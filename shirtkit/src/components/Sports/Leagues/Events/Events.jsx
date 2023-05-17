import { useState } from "react";
import Event from "./Event/Event";
export default function Events({ events }) {
  const [event, setEvent] = useState("");

  const handleClick = (event) => {
    setEvent(event);
  };

  return (
    <div
      id="Events"
      style={{ display: "flex", flexDirection: "row", gap: "10px" }}
    >
      {Object.values(events).map((event) => {
        return (
          <div id={event.id} key={event.id}>
            <button onClick={() => handleClick(event)}>{event.id}</button>
          </div>
        );
      })}

      <Event event={event}></Event>
    </div>
  );
}
