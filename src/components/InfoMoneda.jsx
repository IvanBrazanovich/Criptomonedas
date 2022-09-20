import React from "react";

const InfoMoneda = ({ infoArr }) => {
  console.log(infoArr);
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCTDAY, LASTUPDATE, IMAGEURL } =
    infoArr;
  return (
    <div className="infoMoneda mt-10 flex">
      <img
        src={`https://www.cryptocompare.com/${IMAGEURL}`}
        className="h-36"
        alt=""
      />
      <div className="wrapper">
        <p className="text-white my-4 text-2xl ">
          El precio es de: {"  "}
          <span className="font-bold">{PRICE}</span>
        </p>
        <p className="text-white  my-4 ">
          Precio más alto del día: {"  "}{" "}
          <span className="font-bold">{HIGHDAY}</span>
        </p>

        <p className="text-white my-4  ">
          Precio más bajo del día: {"  "}{" "}
          <span className="font-bold">{LOWDAY}</span>
        </p>

        <p className="text-white my-4  ">
          Variación últimas 24 horas: {"  "}
          <span className="font-bold">{CHANGEPCTDAY}</span>
        </p>

        <p className="text-white my-4  ">
          Última actualización: {"  "}
          <span className="font-bold">{LASTUPDATE}</span>
        </p>
      </div>
    </div>
  );
};

export default InfoMoneda;
