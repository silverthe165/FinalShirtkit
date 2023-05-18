import { useState, useEffect } from "react";
import axios from "axios";
import Sports from "./components/Sports/Sports";

function App() {
  const [sports, setSports] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://gw7.sysnex.app/sportsbetting/calendar"
        );
        setSports(response.data);
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
    <div className="Sports" style={{ display: "flex", backgroundColor: "#FFFDD0" }}>
      <Sports data={sports} />
    </div>
  );
}

export default App;
