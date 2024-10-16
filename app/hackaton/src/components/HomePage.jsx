import React, { useState } from 'react';
import "../assets/styleHome.css";

import { invoke } from "@tauri-apps/api/core";

async function enviarAccion(texto) {
  try {
    texto = document.getElementById('peticionInput').value;
    console.log(texto)
    const respuesta = await invoke("enviar_accion", { texto });
    const ele = document.getElementById("todo");
    const modifiedText = respuesta.replace(/(?<=\n|^)ai/g, '\nai');
    ele.innerHTML = modifiedText;

  } catch (error) {
    console.error("Error al enviar la acción:", error);
  }

}


const HomePage = () => {

  const [texto, setTexto] = useState("Que buen día no crees?");
  const handleClick = () => {
    enviarAccion(texto); // Llama a la función con el texto del estado
    console.log("AAAAA")
  };
  return (
    <div>
      <header>
        <nav>
          <div className="menu-icon"><i className="fas fa-bars"></i></div>
          <div className="user-icon"><i className="fas fa-user"></i></div>
        </nav>
      </header>

      <main>
        <div className="saludo">
          <h1>¡Hola Carlos, Buenos Días!</h1>
          <p>¿Qué operación necesitas realizar?</p>
        </div>

        <div id="todo">

          <div className="textRecom">
            <h2>¿Necesitas alguna recomendación?</h2>
          </div>

          <div id="icon-container" className="icon-container">
            <div className="icon-box">
              <img src="media/kac.png" alt="Transferencia a Leonardo" />
              <p>Transferencia a Leonardo</p>
            </div>
            <div className="icon-box">
              <img src="media/kac.png" alt="Compra en MacDonald's" />
              <p>Compra en MacDonald's</p>
            </div>
            <div className="icon-box">
              <img src="media/kac.png" alt="Recarga Tarjeta MI" />
              <p>Recarga Tarjeta MI</p>
            </div>
            <div className="icon-box">
              <img src="media/kac.png" alt="Compra en Amazon" />
              <p>Recarga Tarjeta MI</p>
            </div>
            <div className="icon-box">
              <img src="media/kac.png" alt="Paga en TicketMaster" />
              <p>Paga boletos en TicketMaster</p>
            </div>
            <div className="icon-box">
              <img src="media/kac.png" alt="Paga en TicketMaster" />
              <p>Paga boletos en TicketMaster</p>
            </div>
          </div>
        </div>

        <div className="input-container">
          <div className="circle"></div>
          <input type="text" id="peticionInput" placeholder="Escribe tu petición..." />
          <button id="enviarBtn" onClick={handleClick}>Enviar</button>
        </div>
      </main>
    </div>
  );
};

export default HomePage;
