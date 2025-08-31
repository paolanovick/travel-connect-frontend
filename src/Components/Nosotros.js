import React from "react";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/about-background-image.png";
import { FiArrowRight } from "react-icons/fi";

const Nosotros = () => {
  return (
    <>
      {/* Primera sección - originalmente de Home */}
      <div className="home-banner-container">
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

      {/* Segunda sección - original de Nosotros */}
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
            permite a las agencias tener una visión completa del cliente,
            mejorar el seguimiento de oportunidades y automatizar respuestas
            frecuentes. Con nuestras herramientas, las agencias pueden optimizar
            su tiempo, profesionalizar su atención al cliente y aumentar sus
            ventas. Travel Connect no solo brinda tecnología, sino una
            transformación completa del modelo de negocio para el ecosistema
            digital actual.
          </p>
          <div className="about-buttons-container">
            <button className="secondary-button">
              Descubre Más <FiArrowRight />
            </button>
          </div>
        </div>
      </div>

      {/* Tercera sección - igual al div 1 pero con background del div 2 y orden invertido */}
      <div className="home-banner-container">
        <div className="about-background-container">
          <img src={AboutBackground} alt="Fondo de la sección" />
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="Imagen ilustrativa de viajes" />
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
      </div>
    </>
  );
};

export default Nosotros;
