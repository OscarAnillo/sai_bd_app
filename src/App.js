import { useState } from "react";
import { TitleComponent } from "./Components/Title-component";

import axios from "axios";
import "animate.css";

import "./App.css";

function App() {
  const [userInput, setUserInput] = useState("");
  const [data, setData] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
    if (!userInput) {
      alert("Dame tu nombre!");
      return;
    }
    axios
      .post("http://localhost:3500/api/guests", {
        content: userInput,
      })
      .then((res) => {
        setData(data.concat(res.data));
      })
      .catch(console.log);
    setUserInput("");
    setSubmitted(true);
  };

  return (
    <div className="App">
      {!submitted ? (
        <>
          <TitleComponent />
          <form
            onSubmit={submitHandler}
            className="animate__animated animate__fadeIn"
          >
            <input
              type="text"
              placeholder="Escribe tu nombre aqui"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
            <button>Confirmar</button>
          </form>
        </>
      ) : (
        <h1 className="thanks animate__animated animate__fadeInLeft">
          Gracias! <br />
          Nos vemos allá!
        </h1>
      )}
    </div>
  );
}

export default App;
