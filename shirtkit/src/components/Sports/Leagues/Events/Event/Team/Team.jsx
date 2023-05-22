import React from "react";
import {sportsArray} from '../../../../../../sports'



export default function Team({ teams,s }) {



const Sports=sportsArray[s] // sport id 



  return (
    <div id="team">
     
        <span style={{fontWeight:"BOLD"}}>Home {"_"+teams[0].n }</span>
       
      {Sports&&<Sports team={teams[0]} home={1} ></Sports>}

        <span style={{fontWeight:"BOLD"}}>Away {"_"+teams[1].n}</span>
     
      {Sports &&<Sports team={teams[1]} home={0} ></Sports>}
    </div>
  );
}



