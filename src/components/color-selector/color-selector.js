import React from "react";
import { setColor } from "../../events/events";

function ColorSelector() {
  return (
    <>
      <input
        type="color"
        id="color-picker"
        name="color-picker"
        onChange={setColor}
      />
      <label htmlFor="color-picker"> Selecione a cor </label>
    </>
  );
}

export default ColorSelector;
