import { useState, useEffect } from "react";
import axios from "axios";

export const Guestlist = () => {
  const [dataList, setDataList] = useState([]);

  useEffect(() => {
    axios
      .get("https://saibdappapi-production.up.railway.app/api/guests")
      .then((res) => {
        setDataList(res.data);
      })
      .catch(console.log);
  }, [setDataList]);

  const dataTest = dataList.length;

  const clickHandlerDelete = (id) => {
    axios.delete(
      `https://saibdappapi-production.up.railway.app/api/guests/${id}`
    );
    const filteredData = dataList.filter((note) => note.id !== id);
    setDataList(filteredData);
  };

  return (
    <div className="div-guest">
      <h1>Tienes {dataTest} invitados!</h1>
      {dataList.map((item) => (
        <div key={item.id} className="map-item">
          <li>{item.content}</li>
          <button onClick={() => clickHandlerDelete(item.id)}>x</button>
        </div>
      ))}
    </div>
  );
};
