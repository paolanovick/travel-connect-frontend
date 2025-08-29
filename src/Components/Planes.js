import React from "react";
import { FaLaptopCode, FaGlobe, FaUsers } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";

const Planes = () => {
  // Reemplaza este número por tu número de WhatsApp (con código de país)
  const numeroWhatsApp = "5491151215750"; // Ejemplo: +54 9 11 2345-6789

  const planesData = [
    {
      icon: <FaLaptopCode size={50} color="#2e7d32" />,
      title: "SOCIO FULL",
      beneficios: [
        "Sitio web",
        "Motor reserva aéreos",
        "Contenidos dinámicos",
        "Acceso coworking",
        "Dominio propio",
        "Integración backoffice",
      ],
    },
    {
      icon: <FaGlobe size={50} color="#1565c0" />,
      title: "SOCIO BASIC",
      beneficios: [
        "Sitio web",
        "Motor reserva aéreos",
        "Contenidos dinámicos",
        "Acceso coworking",
        "Dominio propio",
      ],
    },
    {
      icon: <FaUsers size={50} color="#c62828" />,
      title: "SOCIO COMERCIAL",
      beneficios: [
        "Sitio web",
        "Motor reserva aéreos",
        "Contenidos dinámicos",
        "Acceso coworking",
        "Dominio propio",
        "Integración backoffice",
        "Gestión comercial",
      ],
    },
  ];

  // Función para abrir WhatsApp con mensaje personalizado
  const abrirWhatsApp = async (planTitle) => {
    try {
      // 1. Enviar datos a n8n con el formato que espera tu Switch
      await fetch("http://167.172.31.249:5678/webhook-test/form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          tipo: "consulta_plan", // Coincide con tu configuración del Switch
          plan: planTitle,
          numero: numeroWhatsApp,
          timestamp: new Date().toISOString(),
          mensaje: `Consulta sobre el plan ${planTitle}`,
        }),
      });

      console.log(`Datos enviados a n8n para el plan: ${planTitle}`);
    } catch (error) {
      console.log("Error enviando datos a n8n:", error);
    }

    // 2. Abrir WhatsApp como siempre (mantén tu lógica actual)
    const mensaje = `¡Hola! 👋

Me interesa conocer más sobre el plan *${planTitle}*.

¿Podrían brindarme más información sobre:
- Costos y formas de pago
- Proceso de implementación
- Tiempos de entrega
- Soporte técnico

¡Gracias!`;

    const mensajeCodificado = encodeURIComponent(mensaje);
    const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;
    window.open(urlWhatsApp, "_blank");
  };
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <h2 className="section-title-planes">Nuestros Planes</h2>
        <p className="primary-text">
          Elegí el plan que mejor se adapte a tus necesidades y hacé crecer tu
          negocio.
        </p>
      </div>

      <div className="work-section-bottom">
        {planesData.map((plan) => (
          <div className="work-section-info" key={plan.title}>
            <div className="info-boxes-img-container">{plan.icon}</div>
            <h2>{plan.title}</h2>
            <ul className="plan-benefits">
              {plan.beneficios.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
            <button
              className="btn-consultar"
              onClick={() => abrirWhatsApp(plan.title)}
            >
              <FaWhatsapp size={18} /> Consultar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Planes;
