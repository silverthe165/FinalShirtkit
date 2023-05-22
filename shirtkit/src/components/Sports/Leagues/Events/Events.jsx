import React,{ useState } from "react";
import Event from "./Event/Event";
export default function Events({ events }) {

  // const [event, setEvent] = useState("");

  // const handleClick = (event) => {
  //   setEvent(event);
  // };

  return (
    <div
      id="Events"
      style={{ display: "flex", flexDirection: "column", gap: "10px" }}
    >
      {Object.values(events).map((event) => {
        return (
          <div id={event.id} key={event.id}>
            {/* <button onClick={() => handleClick(event)}>{event.id}</button> */}
            <Event event={event}></Event>
          </div>
        );
      })}


    </div>
  );
}
