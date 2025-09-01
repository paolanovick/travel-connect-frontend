import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import Logo from "../Assets/Logo.png";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Tu webhook nuevo
  const WEBHOOK_URL = "http://167.172.31.249:5678/webhook/footer-newsletter";

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();

    // Validar email básico
    if (!email || !email.includes("@")) {
      setMessage("Por favor ingresa un email válido");
      setTimeout(() => setMessage(""), 3000);
      return;
    }

    setIsLoading(true);
    setMessage("");

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          timestamp: new Date().toISOString(),
          source: "footer_newsletter",
          page: window.location.pathname,
        }),
      });

      if (response.ok) {
        setMessage("¡Gracias! Te has suscrito correctamente.");
        setEmail(""); // Limpiar el input
      } else {
        setMessage("Error al suscribirse. Intenta nuevamente.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage(
        "Error de conexión. Verifica tu conexión e intenta nuevamente."
      );
    } finally {
      setIsLoading(false);
      // Limpiar mensaje después de 5 segundos
      setTimeout(() => setMessage(""), 5000);
    }
  };

  return (
    <div className="footer">
      {/* Contenedor principal centrado y con máximo ancho */}
      <div className="footer-container">
        {/* Logo y contenido principal */}
        <div className="footer-header">
          <img src={Logo} alt="Logo" className="footer-logo" />
          <div className="footer-top">
            {/* Columnas con enlaces */}
            <div className="footer-column">
              <h3>Secciones</h3>
              <p>Inicio</p>
              <p>Nosotros</p>
              <p>Productos</p>
              <p>Planes</p>
              <p>Contacto</p>
            </div>
            <div className="footer-column">
              <h3>Contáctenos</h3>
              <p>Contacto Comercial</p>
              <p>Política de Privacidad</p>
              <p>Legales</p>
              <p>Términos & Condiciones</p>
            </div>
            {/* Sección de Newsletter CON FUNCIONALIDAD */}
            <div className="footer-newsletter">
              <h3>Subscribe a nuestro Newsletter</h3>
              <form onSubmit={handleNewsletterSubmit}>
                <div className="newsletter-input">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading}
                    required
                  />
                  <button
                    type="submit"
                    disabled={isLoading || !email}
                    style={{
                      opacity: isLoading ? 0.6 : 1,
                      cursor: isLoading ? "not-allowed" : "pointer",
                    }}
                  >
                    {isLoading ? "..." : "Subscribe"}
                  </button>
                </div>
                {/* Mensaje de feedback */}
                {message && (
                  <div
                    className={`newsletter-message ${
                      message.includes("Gracias") ? "success" : "error"
                    }`}
                  >
                    {message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* Redes sociales */}
        <div className="footer-socials">
          <button aria-label="Facebook">
            <FaFacebookF />
          </button>
          <button aria-label="Twitter">
            <FaTwitter />
          </button>
          <button
            aria-label="Instagram"
            onClick={() =>
              window.open(
                "https://www.instagram.com/travelconnectar/",
                "_blank"
              )
            }
          >
            <FaInstagram />
          </button>
          <button aria-label="LinkedIn">
            <FaLinkedin />
          </button>
        </div>

        {/* Pie de página */}
        <div className="footer-bottom">
          © 2025 Travel Connect. Todos los derechos reservados.
        </div>
      </div>
    </div>
  );
};

export default Footer;
