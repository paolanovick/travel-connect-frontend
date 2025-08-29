import React from "react";
import NavBar from "./NavBar";
import BannerBackground from "../Assets/home-banner-background.png";
import BannerImage from "../Assets/home-banner-image.png";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <NavBar />
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
    </div>
  );
};

export default Home;
