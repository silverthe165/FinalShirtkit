import React, { useState } from "react";
import Team from "./Team/Team";
export default function Event({ event }) {
  return <div id="event">{event ? <Team team={event.t}></Team> : ""}</div>;
}
