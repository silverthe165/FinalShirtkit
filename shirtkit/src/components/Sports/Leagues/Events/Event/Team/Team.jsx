import React from "react";
import {sportsArray} from '../../../../../../sports'



export default function Team({ team,s }) {


// const Sports = sportsArray[sn.toString().replace(/\s+/g, '')];
const Sports=sportsArray[s] // sport id 

  return (
    <div id="team">
      <div id={team[0].n} style={{position:"flex",gap:"10px"}}><span style={{fontWeight:"BOLD"}}>Home {"_"+team[0].n }</span></div>
      {Sports&&<Sports team={team[0]} home={1} ></Sports>}

      <div id={team[1].n} style={{position:"flex",gap:"10px"}}><span style={{fontWeight:"BOLD"}}>Away {"_"+team[1].n}</span></div>
      {Sports &&<Sports team={team[1]} home={0} ></Sports>}
    </div>
  );
}



