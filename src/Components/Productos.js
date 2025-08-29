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
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      image: crmImage,
    },
    {
      name: "Web",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      image: webImage,
    },
    {
      name: "Chatbot",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
      image: chatImage,
    },
    {
      name: "Backoffice",
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`,
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
