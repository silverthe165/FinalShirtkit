import { Unique } from "./shirts/Unique";
import { Shirt1 } from "./shirts/Shirt1";
import { Shirt2 } from "./shirts/Shirt2";
import { Shirt3 } from "./shirts/Shirt3";
import { Shirt4 } from "./shirts/Shirt4";
import { Shirt5 } from "./shirts/Shirt5";
import { Shirt6 } from "./shirts/Shirt6";
import { Shirt7 } from "./shirts/Shirt7";
import { Shirt8 } from "./shirts/Shirt8";
import { Shirt9 } from "./shirts/Shirt9";
import { Shirt10 } from "./shirts/Shirt10";
import { Shirt11 } from "./shirts/Shirt11";
import { Shirt12 } from "./shirts/Shirt12";
import { Shirt13 } from "./shirts/Shirt13";
import { Shirt14 } from "./shirts/Shirt14";
import { Shirt15 } from "./shirts/Shirt15";
import { Shirt16 } from "./shirts/Shirt16";
import { Shirt17 } from "./shirts/Shirt17";
import { Shirt18 } from "./shirts/Shirt18";
import { Shirt19 } from "./shirts/Shirt19";
import { Shirt20 } from "./shirts/Shirt20";
import axios from "axios";
import { DefaultTshirt } from "./shirts/DefaultTshirt";
import { useEffect, useState } from "react";

const shirtComponents = [
,
  Shirt1,
  Shirt2,
  Shirt3,
  Shirt4,
  Shirt5,
  Shirt6,
  Shirt7,
  Shirt8,
  Shirt9,
  Shirt10,
  Shirt11,
  Shirt12,
  Shirt13,
  Shirt14,
  Shirt15,
  Shirt16,
  Shirt17,
  Shirt18,
  Shirt19,
  Shirt20,

];

export default function Football({ team, home }) {
  const [unique, setUnique] = useState(null);

  const { id, co, cr, n } = team; //getting team that is passed id,colors,crest id,and the name team as n

  //regex to make team names to be as clear as possible
  let t = n.replace(/\s+/g, "_").replace(/\(.*/, "");
  let tt = t.substring(0, t.length - 1);
  let ttt = tt.replace(/-/g, "_and_");
  let name = ttt.replace(/_U.*/, "");


  // checking if crest is 404 dosent have anything at least we want an empty crest and not error without crest
  const crest =
    cr.id !== ""
      ? `https://images.dsrvc.com/crest/small/${cr.id}.png`
      : "https://images.dsrvc.com/crest/small/0.png";


  // fetching from our own server api the unique teams from mongodatabase
  useEffect(() => {
    const Fetchdata = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/uniqueteams/${name}/${home}`
        );
        setUnique(response.data);
        console.log(unique)
      } catch (error) {
     
      }
    };

    Fetchdata();
  }, []);

 

 
  //if nothing happens means it is not unique team and it has a id to be dynamically generated so we checking with id shirt needs to be rendered and saving it to a shirtcomponent 
  const ShirtComponent = shirtComponents[parseInt(co.id)] || DefaultTshirt;

  return (
    <div id="football-Shirt" style={{ display: "flex", marginBottom: "10px"}}>
      {unique!==null? (
        <div key={`unique_${id}`}>
          <Unique data={unique[0].svg} />
        </div>
      ) : ShirtComponent !== DefaultTshirt ? (
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
      ) : (
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
      )}
    </div>
  );
        }