import React from "react";
import logo1 from "../Assets/logo1.png";
import logo2 from "../Assets/logo2.png";
import logo3 from "../Assets/logo3.png";
import logo4 from "../Assets/logo4.jpg";
import logo5 from "../Assets/logo5.jpg";
import logo6 from "../Assets/logo6.png";
import logo7 from "../Assets/logo7.png";
import logo8 from "../Assets/logo8.png";

const Marcas = () => {
  const logos = [logo1, logo2, logo3, logo4, logo5, logo6, logo7, logo8];
  const logosDuplicados = [...logos, ...logos, ...logos]; // Duplicamos para scroll suave

  return (
    <div
      style={{
        overflow: "hidden",
        padding: "2rem",
        backgroundColor: "#8cc63f",
      }}
    >
      <h2 className="section-title-marcas" style={{ textAlign: "center" }}>
        Nos acompañan
      </h2>
      <div style={{ overflow: "hidden" }}>
        <div
          style={{
            display: "flex",
            whiteSpace: "nowrap",
            animation: "scroll-left 20s linear infinite",
          }}
          className="scrolling"
        >
          {logosDuplicados.map((logo, index) => (
            <img
              key={index}
              src={logo}
              alt={`Logo ${index + 1}`}
              style={{ height: "50px", marginRight: "30px" }}
            />
          ))}
        </div>
      </div>
      <style>
        {`
          @keyframes scroll-left {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
        `}
      </style>
    </div>
  );
};

export default Marcas;
