import React from "react";
import useSelectMonedas from "../hooks/useSelectMonedas";
import { monedas } from "../data";

const Formulario = () => {
  const [moneda, SelectMonedas] = useSelectMonedas("Elige tu Moneda", monedas);

  return (
    <div className="formulario container min-w-[30rem] text-center">
      <h1 className="text-3xl font-bold text-white leading-normal">
        Cotiza Criptomonedas al{" "}
        <span className="border-b-4 border-sky-500 py-2">Instante</span>
      </h1>

      <form>
        <SelectMonedas />
      </form>
    </div>
  );
};

export default Formulario;
