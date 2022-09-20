import React, { useState } from "react";

const useSelectMonedas = (label, monedas) => {
  const [state, setState] = useState("");

  const SelectMonedas = () => (
    <div className="px-5">
      <label className=" block mt-14 mb-5 text-left text-2xl text-white font-bold ">
        {label}
      </label>
      <select
        onChange={(e) => setState(e.target.value)}
        value={state}
        className="container px-4 py-3 rounded-md"
      >
        {monedas.map((moneda) => {
          return (
            <option key={moneda.id} value={moneda.id}>
              {moneda.nombre}
            </option>
          );
        })}
      </select>
    </div>
  );
  return [state, SelectMonedas];
};

export default useSelectMonedas;
