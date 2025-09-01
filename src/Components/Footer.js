import React, { useState, useRef, useEffect } from "react";
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
  const [messageType, setMessageType] = useState("success"); // "success" | "error"

  const timeoutRef = useRef(null);
  const abortRef = useRef(null);

  // Cambialo aquí si quieres usar un proxy (recomendado si tu frontend está en https)
  const WEBHOOK_URL = "/api/footer-newsletter";



  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      if (abortRef.current) abortRef.current.abort();
    };
  }, []);

  const clearMessageLater = (ms = 5000) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setMessage(""), ms);
  };

  const handleNewsletterSubmit = async (e) => {
    e.preventDefault();

    if (!email || !emailRegex.test(email)) {
      setMessageType("error");
      setMessage("Por favor ingresa un email válido");
      clearMessageLater(3000);
      return;
    }

    setIsLoading(true);
    setMessage("");
    setMessageType("success");

    // Timeout / AbortController para evitar requests colgados
    const controller = new AbortController();
    abortRef.current = controller;
    const abortTimer = setTimeout(() => controller.abort(), 10000); // 10s timeout

    try {
      const response = await fetch(WEBHOOK_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email.trim(),
          timestamp: new Date().toISOString(),
          source: "footer_newsletter",
          page: window.location.pathname,
        }),
        signal: controller.signal,
      });

      clearTimeout(abortTimer);

      if (!response.ok) {
        // intentar leer error del body si viene JSON
        let errorText = `Error HTTP ${response.status}`;
        try {
          const errJson = await response.json();
          errorText = errJson.message || JSON.stringify(errJson);
        } catch (err) {
          // no JSON, dejar errorText por defecto
        }
        setMessageType("error");
        setMessage(`Error al suscribirse: ${errorText}`);
        clearMessageLater();
        return;
      }

      // si devuelve JSON, lo usamos; si no, mostramos un mensaje por defecto
      let data = null;
      try {
        data = await response.json();
      } catch {
        data = null;
      }

      const successMsg =
        (data &&
          (data.message ||
            (data.success && "¡Gracias! Te has suscrito correctamente."))) ||
        "¡Gracias! Te has suscrito correctamente.";

      setMessageType("success");
      setMessage(successMsg);
      setEmail("");
      clearMessageLater(5000);
    } catch (error) {
      if (error.name === "AbortError") {
        setMessageType("error");
        setMessage("La solicitud tardó demasiado. Intenta nuevamente.");
      } else {
        console.error("Newsletter error:", error);
        setMessageType("error");
        setMessage(
          "Hubo un problema al enviar tu suscripción. Intenta nuevamente."
        );
      }
      clearMessageLater();
    } finally {
      setIsLoading(false);
    }
  };

  const isEmailValid = emailRegex.test(email);

  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-header">
          <img src={Logo} alt="Logo" className="footer-logo" />
          <div className="footer-top">
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
              <p>Términos &amp; Condiciones</p>
            </div>

            <div className="footer-newsletter">
              <h3>Suscribite a nuestro Newsletter</h3>
              <form onSubmit={handleNewsletterSubmit}>
                <div className="newsletter-input">
                  <input
                    type="email"
                    placeholder="Ingresa tu email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isLoading}
                    required
                  />
                  <button
                    type="submit"
                    disabled={isLoading || !isEmailValid}
                    style={{
                      opacity: isLoading ? 0.6 : 1,
                      cursor: isLoading ? "not-allowed" : "pointer",
                    }}
                  >
                    {isLoading ? "Enviando..." : "Suscribirse"}
                  </button>
                </div>

                {message && (
                  <div
                    className={`newsletter-message ${
                      messageType === "success" ? "success" : "error"
                    }`}
                    role="status"
                  >
                    {message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>

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

        <div className="footer-bottom">
          © 2025 Travel Connect. Todos los derechos reservados.
        </div>
      </div>
    </div>
  );
};

export default Footer;
