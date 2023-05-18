
import Shirt1 from "./shirts/Shirt1";
import Shirt2 from "./shirts/Shirt2";
import Shirt3 from "./shirts/Shirt3";
import Shirt4 from "./shirts/Shirt4";
import Shirt5 from "./shirts/Shirt5";
import Shirt6 from "./shirts/Shirt6";
import { DefaultShirt } from "./shirts/DefaultShirt";


const shirtComponents = [
  DefaultShirt,
  Shirt1,
  Shirt2,
  Shirt3,
  Shirt4,
  Shirt5,
  Shirt6,
];

export default function Basketball({ team, home }) {

  const { id, co, cr, n } = team; //getting team that is passed id,colors,crest id,and the name team as n

   // checking if crest is 404 dosent have anything at least we want an empty crest and not error without crest
   const crest =
   cr.id !== ""
     ? `https://images.dsrvc.com/crest/small/${cr.id}.png`
     : "https://images.dsrvc.com/crest/small/0.png";

     const ShirtComponent = shirtComponents[parseInt(co.id)] || DefaultTshirt;

  
  return (
    <div id="basketball" style={{ display: "flex", marginBottom: "10px" }}>
      
    </div>
  );
}
