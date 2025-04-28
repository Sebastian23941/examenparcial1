'use client';

import { useEffect, useState } from "react";

export default function Bienvenido() {
  const [fullname, setFullname] = useState("");
  const [ticket, setTicket] = useState("");

  useEffect(() => {
    const storedFullname = localStorage.getItem("fullname"); //Recibe la info del nombre de usuario
    const storedTicket = localStorage.getItem("ticket"); //Recibe la info del numero de ticket

    if (storedFullname) setFullname(storedFullname); //Se mueven los datos
    if (storedTicket) setTicket(storedTicket); 
  }, []);

  return (
    <div className="container">
      <div style={{ textAlign: "center"}}>
        <h2>Bienvenido, <strong>{fullname}</strong>, disfruta tu experiencia en GreenPark!</h2>
        <p>Tu número de boleto es: <strong>{ticket}</strong></p>
      </div>
    </div>
  );
}
