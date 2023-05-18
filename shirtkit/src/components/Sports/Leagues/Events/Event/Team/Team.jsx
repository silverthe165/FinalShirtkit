import React from "react";
import {sportsArray} from '../../../../../../sports'



export default function Team({ team,sn }) {


  const Sportss = sportsArray[sn];


  return (
    <div id="team">
      <div id={team[0].n} style={{position:"flex",gap:"10px"}}>Home{team[0].n }</div>
      <Sportss team={team[0]} home={1} ></Sportss>

      <div id={team[1].n}>Away{team[1].n}</div>
      <Sportss team={team[1]} home={0} ></Sportss>
    </div>
  );
}



