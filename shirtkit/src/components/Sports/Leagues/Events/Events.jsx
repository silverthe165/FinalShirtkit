import React,{ useState } from "react";
import Event from "./Event/Event";
export default function Events({ events }) {

  // const [event, setEvent] = useState("");

  // const handleClick = (event) => {
  //   setEvent(event);
  // };

  return (
    <>
      {Object.values(events).map((event) => {
        return (
          <div id={event.id} key={event.id}  style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {/* <button onClick={() => handleClick(event)}>{event.id}</button> */}
            <Event event={event}></Event>
          </div>
        );
      })}


    </>
  );
}
