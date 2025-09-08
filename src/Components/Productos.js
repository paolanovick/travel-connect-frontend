import React from "react";
import BannerBackground from "../Assets/home-banner-background.png"; // tu fondo
/*import BannerImage from "../Assets/home-banner-image1-01.png"; */// tu banner principal
import crmImage from "../Assets/crm.png";
import webImage from "../Assets/web.png";
import chatImage from "../Assets/chat.png";
import backofficeImage from "../Assets/bo.png";




const ProductsSection = () => {
  const products = [
    {
      name: "CRM",
      description: `Centraliza la gestión de tus clientes y oportunidades en un solo lugar. Nuestro CRM te permite registrar interacciones, hacer seguimiento de consultas provenientes de tu web, WhatsApp, Instagram y Facebook, y automatizar tareas repetitivas. Optimiza tu proceso de ventas y mantén a tu equipo siempre informado para brindar una atención personalizada y eficiente.`,
      image: crmImage,
    },
    {
      name: "Web",
      description: `Presenta tu agencia de viajes de manera profesional con un sitio web moderno y adaptable. Ofrece a tus clientes información actualizada, paquetes personalizados y un motor de reservas integrado. Diferénciate de la competencia y aumenta tu visibilidad online con una web diseñada para convertir visitantes en clientes.`,
      image: webImage,
    },
    {
      name: "Chatbot",
      description: `Atiende a tus clientes 24/7 con un asistente virtual inteligente integrado en tu sitio web y redes sociales. Responde consultas frecuentes, asesora sobre productos y canaliza oportunidades comerciales automáticamente. Mejora la experiencia de tus usuarios y ahorra tiempo en atención al cliente.`,
      image: chatImage,
    },
    {
      name: "Backoffice",
      description: `Gestiona toda la operación de tu agencia desde un entorno centralizado. Controla reservas, pagos, facturación y reportes comerciales de manera sencilla y segura. Integra todos tus procesos para que tu negocio funcione de forma ágil, ordenada y profesional.`,
      image: backofficeImage,
    },
  ];

  return (
    <div
      className="products-section"
      style={{
        backgroundImage: `url(${BannerBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",

        color: "#fff",
      }}
    >
      <h2 className="section-title">Nuestros Productos</h2>
      <div className="products-grid">
        {products.map((product, index) => (
          <div key={index} className="product-card">
            <img
              src={product.image}
              alt={product.name}
              className="product-image"
            />
            <p>{product.description}</p>
          </div>
        ))}
      </div>
      {/* Puedes agregar una sección con la imagen principal similar a tu banner */}
    </div>
  );
};

export default ProductsSection;
