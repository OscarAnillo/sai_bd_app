import { Link } from "react-router-dom";
import "animate.css";

export const TitleComponent = () => {
  return (
    <div className="title-div animate__animated animate__backInDown">
      <p>Te invitamos a festejar el cumple de</p>
      <Link to="invitados">
        <h1>Saray</h1>
      </Link>
      <p>8 de abril • 7pm</p>
      <p>Calle 44 #7g-05, Alboraya (Por la troja de la 8)</p>
    </div>
  );
};
