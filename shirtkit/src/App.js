import { useState, useEffect } from "react";
import axios from "axios";
import Sports from "./components/Sports/Sports";

function App() {
  const [sports, setSports] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://gw7.sysnex.app/sportsbetting/calendar"
        );
        setSports(response.data);
        localStorage.setItem("cachedSportsData", JSON.stringify(response.data));
      } catch (error) {
        console.log(error);
      }
    };

    const cachedData = localStorage.getItem("cachedSportsData");

    if (cachedData) {
      setSports(JSON.parse(cachedData));
    } else {
      fetchData();
    }

    const interval = setInterval(fetchData, 60 * 10 * 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="Sports" style={{ display: "flex" }}>
      <Sports data={sports}></Sports>
    </div>
  );
}

export default App;
