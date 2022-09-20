import { useState } from "react";
import imgCripto from "./img/imagen-criptos.png";
import Formulario from "./components/Formulario";

function App() {
  return (
    <div className="app grid grid-cols-2 w-3/5 mx-auto gap-5 my-14">
      <img className="max-w-[25rem]" src={imgCripto} alt="" />
      <Formulario />
    </div>
  );
}

export default App;
