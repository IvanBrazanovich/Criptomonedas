import React, { useEffect, useState } from "react";
import useSelectMonedas from "../hooks/useSelectMonedas";
import { monedas } from "../data";
import Mensaje from "./Mensaje";
import InfoMoneda from "./InfoMoneda";
import "./spinner.css";

const Formulario = () => {
  const [criptoArr, setCriptoArr] = useState([]);
  const [moneda, SelectMonedas] = useSelectMonedas("Elige tu Moneda", monedas);
  const [cripto, SelectCripto] = useSelectMonedas(
    "Elige tu Criptomoneda",
    criptoArr
  );
  const [infoArr, setInfoArr] = useState({});
  const [error, setError] = useState(false);
  const [cargando, setCargando] = useState(false);

  //API CALL
  useEffect(() => {
    const fetchApi = async () => {
      try {
        const url =
          "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD";

        const response = await fetch(url);
        const monedasArr = await response.json();
        const cleanArr = monedasArr.Data.map((moneda) => {
          const { FullName, Name } = moneda.CoinInfo;
          return {
            id: Name,
            nombre: FullName,
          };
        });

        setCriptoArr(cleanArr);
      } catch (err) {
        console.log(err);
      }
    };
    fetchApi();
  }, []);

  const fetchInfoCripto = async () => {
    setInfoArr({});
    setCargando(true);
    try {
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cripto}&tsyms=${moneda}`;

      const response = await fetch(url);
      const infoArr = await response.json();

      setInfoArr(infoArr.DISPLAY[cripto][moneda]);
      setCargando(false);
    } catch (err) {
      console.log(err);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if ([moneda, cripto].includes("")) {
      setError(true);

      setTimeout(() => {
        setError(false);
      }, 2000);
      return;
    }

    setError(false);
    fetchInfoCripto();
  };

  return (
    <div className="formulario container min-w-[32rem] text-center">
      <h1 className="text-3xl font-bold text-white leading-normal">
        Cotiza Criptomonedas al{" "}
        <span className="border-b-4 border-sky-500 py-2">Instante</span>
      </h1>

      {error && <Mensaje message="Todos los campos son obligatorios" />}
      <form className="px-5">
        <SelectMonedas />
        <SelectCripto />
        <button
          onClick={handleSubmit}
          className="container mx-auto py-3 bg-indigo-500 text-white uppercase  rounded-md mt-7 font-bold text-xl "
        >
          Cotizar
        </button>
      </form>

      {Object.keys(infoArr).length > 0 && <InfoMoneda infoArr={infoArr} />}
      {cargando && (
        <div className="container mt-36">
          <div className="sk-chase mx-auto">
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
            <div className="sk-chase-dot"></div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Formulario;
