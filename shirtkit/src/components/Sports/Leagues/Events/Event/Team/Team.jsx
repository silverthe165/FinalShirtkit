import React from "react";
import {sportsArray} from '../../../../../../sports'



export default function Team({ team,sn }) {


  const Sports = sportsArray[sn];


  return (
    <div id="team">
      <div id={team[0].n} style={{position:"flex",gap:"10px"}}>Home {"_"+team[0].n }</div>
      {Sports&&<Sports team={team[0]} home={1} ></Sports>}

      <div id={team[1].n} style={{position:"flex",gap:"10px"}}>Away {"_"+team[1].n}</div>
      {Sports &&<Sports team={team[1]} home={0} ></Sports>}
    </div>
  );
}



