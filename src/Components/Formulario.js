import React, { useState } from "react";

function Formulario() {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [mensajeFormulario, setMensajeFormulario] = useState("");
  const [tipoMensaje, setTipoMensaje] = useState(""); // éxito o error

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Cambiar esta línea:
    const backendUrl =
      process.env.REACT_APP_N8N_WEBHOOK_URL ||
      "http://167.172.31.249:5678/webhook-test/form";

    console.log("Enviando datos:", { nombre, email, mensaje });

    try {
      const response = await fetch(backendUrl, {
        // Sin /api/webhook
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nombre, email, mensaje }),
        mode: "cors",
      });
      // resto del código igual...
      const data = await response.json();
      console.log("Respuesta JSON:", data);

      setMensajeFormulario(data.message || "Mensaje enviado");
      setTipoMensaje("success");
      setNombre("");
      setEmail("");
      setMensaje("");
    } catch (error) {
      console.error("Error en fetch:", error);
      setMensajeFormulario("Error en la red o en el servidor");
      setTipoMensaje("error");
    }
  };

  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h2 className="section-title-formulario" style={{ marginTop: "0px" }}>
          Formulario de contacto
        </h2>
        <p className="primary-text">
          Completa el siguiente formulario para ponerte en contacto con
          nosotros.
        </p>
      </div>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <input
            className="input-field"
            type="text"
            placeholder="Nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
          <input
            className="input-field"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            className="input-field"
            placeholder="Mensaje"
            value={mensaje}
            onChange={(e) => setMensaje(e.target.value)}
            required
          />
          <button className="submit-button" type="submit">
            Enviar
          </button>
        </form>
        {mensajeFormulario && (
          <p
            className={`mensaje ${
              tipoMensaje === "success"
                ? "success"
                : tipoMensaje === "error"
                ? "error"
                : ""
            }`}
          >
            {mensajeFormulario}
          </p>
        )}
      </div>
    </div>
  );
}

export default Formulario;
