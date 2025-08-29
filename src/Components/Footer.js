import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";

// Asegúrate de que la ruta sea correcta respecto a tu estructura de carpetas
import Logo from "../Assets/Logo.png";

const Footer = () => {
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
              <p>CContacto</p>
            </div>
            <div className="footer-column">
              <h3>Contáctenos</h3>
              <p>Contacto Comercial</p>
              <p>Política de Privacidad</p>
              <p>Legales</p>
              <p>Términos & Condiciones</p>
            </div>
            {/* Sección de Newsletter */}
            <div className="footer-newsletter">
              <h3>Subscribe a nuestro Newsletter</h3>
              <div className="newsletter-input">
                <input type="email" placeholder="Enter your email" />
                <button>Subscribe</button>
              </div>
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
