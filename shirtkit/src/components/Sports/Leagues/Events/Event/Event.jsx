import React, { useState } from "react";
import Team from "./Team/Team";

export default function Event({ event }) {

  

  return <div id="event">
    <span style={{fontWeight:"bold",fontSize:'25px'}}>{event.id}</span> {event && <Team teams={event.t} s={event.s} />}
    </div>;
}
