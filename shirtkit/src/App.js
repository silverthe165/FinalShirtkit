import React,{useState, useEffect} from "react";
import axios from "axios";
import Sports from "./components/Sports/Sports";

function App() {
  console.log("renders app")
  const [sports, setSports] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://gw7.sysnex.app/sportsbetting/mocker/rpc"
        );
        setSports(()=>response.data);
  
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();

    const interval = setInterval(fetchData, 60 * 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);


  return (
    <div className="Sports" style={{ display: "flex", }}>
      {sports&&<Sports data={sports} />}
    </div>
  );
}

export default App;
