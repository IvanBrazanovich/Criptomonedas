import React from "react";

const Mensaje = ({ message }) => {
  return (
    <div className="message my-8 container mx-auto py-3 px-8 bg-red-600">
      <h1 className="text-xl text-white font-bold uppercase">{message}</h1>
    </div>
  );
};

export default Mensaje;
