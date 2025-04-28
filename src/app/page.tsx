'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";
import "./login.css";

//Los datos que solo estan guardados, debido a no tener base de datos,siendo esta la lista
const visitors = [
  { username: "alejandra.m", password: "verde123", fullname: "Alejandra Morales", numberofticket: "00123"},
  { username: "david.p", password: "bosque456", fullname: "David Pérez", numberofticket: "00124"},
  { username: "lucia.r", password: "eco789", fullname: "Lucía Ramírez", numberofticket: "00125"}
];

//Crea las funciones para ademas del router hacia otra pagina, el usuario y contraseña y el error
export default function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  //Mueve los datos puestos al username y password de variables
  const handleLogin = () => {
    const user = visitors.find(
      (visitor) => visitor.username === username && visitor.password === password
    ); //Si un username puesto es igual a uno guardado al igual de contraseña con contraseña, 
    //dara un true o false, dependiendo si le va bien al user

    if (user) { //Si da, hara en localstorage al fullname y ticket para enviarse de forma local
      localStorage.setItem("fullname", user.fullname);
      localStorage.setItem("ticket", user.numberofticket)
      router.push("/bienvenido");  //Te envia a esta pagina
      setError("");
    } else {
      setError("Los datos son incorrectos, intente de nuevo");
    }//Sino, pos solo te da error
  };

  return (
    <div className="container">
      <h2>Registro de Visitantes</h2>
      <input
        type="text"
        placeholder="Nombre de Usuario"
        value={username}
        onChange={(e) => setUsername(e.target.value)} //Obtiene la variable del password
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)} //Obtiene la variable del password
      />
      <button onClick={handleLogin}>Ingresar</button>
      {error && <p className="error">{error}</p>}
    </div>
  );
}
