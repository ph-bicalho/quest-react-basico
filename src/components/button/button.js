import React from "react";
import "./button.css";
import { setAlert } from "../../events/events";

function ButtonFrustrante() {
  var label = "Clique aqui para se frustrar!";
  return (
    <div>
      <button className="btn" id="btn" onClick={setAlert} aria-label={label}>
        {label}
      </button>
    </div>
  );
}

export default ButtonFrustrante;
