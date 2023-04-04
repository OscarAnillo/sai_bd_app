import { useState, useEffect } from "react";
import axios from "axios";

export const Guestlist = () => {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    axios
      .get("https://saibdappapi-production.up.railway.app/api/guests")
      .then((res) => {
        console.log(res.data);
        setDataList(res.data);
      })
      .catch(console.log);
  }, []);

  const dataTest = dataList.length;

  return (
    <div className="div-guest">
      <h1>Tienes {dataTest} invitados!</h1>
      {dataList.map((item) => (
        <div key={item.id} className="map-item">
          <li>{item.content}</li>
        </div>
      ))}
    </div>
  );
};
