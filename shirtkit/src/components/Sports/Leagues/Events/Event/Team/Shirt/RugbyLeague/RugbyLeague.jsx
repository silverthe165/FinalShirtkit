import React from 'react'
import Shirt1 from './shirts/Shirt1';
import Shirt2 from './shirts/Shirt2';
import Shirt3 from './shirts/Shirt3';
import Shirt4 from './shirts/Shirt4';


import {DefaultShirt} from "./shirts/DefaultShirt"
import Shirt5 from './shirts/Shirt5';



const shirtComponents = [
  DefaultShirt,Shirt1,Shirt2,Shirt3,Shirt4,Shirt5];

export default  function RugbyLeague({team,home}) {

  const { id, co, cr, n } = team; //getting team that is passed id,colors,crest id,and the name team as n

  // checking if crest is 404 dosent have anything at least we want an empty crest and not error without crest
  const crest =
  cr.id !== ""
    ? `https://images.dsrvc.com/crest/small/${cr.id}.png`
    : "https://images.dsrvc.com/crest/small/0.png";

    const ShirtComponent = shirtComponents[parseInt(co.id)] || DefaultShirt;

 
    return (
     <div id="football-Shirt" style={{ display: "flex", marginBottom: "10px" }}>
       {ShirtComponent === DefaultShirt ? (
         <div
           key={`default_${id}`}
           style={{
             display: "inline-block",
             position: "relative",
             textAlign: "center",
             fontSize: "5px",
           }}
         >
           <ShirtComponent cr={crest} home={home} />
         </div>
       ) : (
         <div
           key={id}
           style={{
             display: "inline-block",
             position: "relative",
             textAlign: "center",
             fontSize: "5px",
           }}
         >
           <ShirtComponent color={co.si} so={co.so} />
         </div>
       )}
     </div>
   );
   




}