import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";
import AboutBackground from "../Assets/about-banner-image.jpg";
import AboutBannerImage from "../Assets/about-banner-image.jpg";

const Nosotros = () => {
  return (
    <section id="nosotros" className="nosotros-wrapper">
      {/* Primera sección - originalmente de Home */}
      <div className="home-banner-container first-section">
        <div className="home-bannerImage-container">
          <img src={BannerBackground} alt="Fondo del banner principal" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Soluciones Tecnológicas para Agencias de Viajes
          </h1>
          <p className="primary-text">
            Travel Connect es una plataforma tecnológica diseñada especialmente
            para agencias de viajes que desean modernizar su operación y
            aumentar su competitividad. Ofrecemos sitios web completamente
            funcionales e integrados con los principales mayoristas del turismo,
            permitiendo mostrar paquetes turísticos en tarjetas por destino y
            realizar búsquedas de hoteles en tiempo real. Nuestra solución
            también permite a las agencias cargar sus propios paquetes
            personalizados, gestionar reservas mediante un sistema intuitivo con
            formularios modales, y establecer contacto directo con los clientes
            a través de WhatsApp, integrando un chatbot con inteligencia
            artificial que responde de forma automática tanto desde la web como
            desde redes sociales.
          </p>
          <button className="secondary-button">
            Descubre Más <FiArrowRight />
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="Imagen ilustrativa de viajes" />
        </div>
      </div>

      {/* Segunda sección - sin background, imagen a la izquierda */}
      {/* Segunda sección - sin background, imagen a la izquierda */}
      <div className="home-banner-container second-section no-background">
        <div className="home-image-section">
          <img src={AboutBannerImage} alt="Automatización y CRM" />
        </div>
        <div className="home-text-section">
          <h1 className="primary-heading">
            Automatización, CRM y Chatbot Omnicanal
          </h1>
          <p className="primary-text">
            Además del sitio web, Travel Connect ofrece un CRM completamente
            integrado con el chatbot, que centraliza y gestiona todas las
            consultas recibidas desde la web, WhatsApp y redes sociales. Esto
            permite a las agencias tener una visión completa del cliente,
            mejorar el seguimiento de oportunidades y automatizar respuestas
            frecuentes. Con nuestras herramientas, las agencias pueden optimizar
            su tiempo, profesionalizar su atención al cliente y aumentar sus
            ventas. Travel Connect no solo brinda tecnología, sino una
            transformación completa del modelo de negocio para el ecosistema
            digital actual.
          </p>
          <button className="secondary-button">
            Descubre Más <FiArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Nosotros;
