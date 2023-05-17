import { useState, useEffect } from "react";
import axios from "axios";
import Sports from "./components/Sports/Sports";

function App() {
  const [sports, setSports] = useState("");

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
  }, []);

  return (
    <div className="Sports" style={{ display: "flex" }}>
      <Sports data={sports}></Sports>
    </div>
  );
}

export default App;
