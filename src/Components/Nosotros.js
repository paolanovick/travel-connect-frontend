import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { FiArrowRight } from "react-icons/fi";// Verifica que el nombre sea correcto


const Nosotros = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-container">
        <img src={AboutBackground} alt="Fondo de la sección Sobre Nosotros" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <h1 className="primary-heading">
          Automatización, CRM y Chatbot Omnicanal
        </h1>
        <p className="primary-text">
          Además del sitio web, Travel Connect ofrece un CRM completamente
          integrado con el chatbot, que centraliza y gestiona todas las
          consultas recibidas desde la web, WhatsApp y redes sociales. Esto
          permite a las agencias tener una visión completa del cliente, mejorar
          el seguimiento de oportunidades y automatizar respuestas frecuentes.
          Con nuestras herramientas, las agencias pueden optimizar su tiempo,
          profesionalizar su atención al cliente y aumentar sus ventas. Travel
          Connect no solo brinda tecnología, sino una transformación completa
          del modelo de negocio para el ecosistema digital actual.
        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">
            Descubre Más <FiArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nosotros;
