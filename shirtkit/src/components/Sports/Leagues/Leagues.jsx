import { useState } from "react";
import Events from "./Events/Events";

export default function Leagues({ leagues }) {
  // const [events, setEvents] = useState("");

  // const handleClick = (selectedEvents) => {
  //   setEvents(selectedEvents);
  // };

  return (
    <div
      id="Leagues"
      style={{ display: "flex", flexDirection: "column", gap: "10px" }}
    >
      {Object.values(leagues).map((league,index) => (
    
        <div id={league.m.n} key={`${league.id}_${index}`}>
          <button
            // onClick={() => {
            //   handleClick(league.d);
            // }}
          >
              
           <span style={{color:"black",fontSize:'30px',fontWeight:"bold"}}> {league.m.n}</span>
            
          </button>
          <Events events={league.d} />
        </div>
      ))}
    {/* <Events events={events} /> */}
    </div>
  );
}
