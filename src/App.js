import React, { useState } from "react";
import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Nosotros from "./Components/Nosotros";
import Planes from "./Components/Planes";
import Productos from "./Components/Productos";
import Marcas from "./Components/Marcas";
import Formulario from "./Components/Formulario";
import Footer from "./Components/Footer";
import ChatBotModal from "./Components/ChatBotModal";

function App() {
  // 1. Estado para mostrar/ocultar el chatbot
  const [showChatbot, setShowChatbot] = useState(false);

  // 2. Función para abrir el chatbot (se la vas a pasar a Nosotros)
  const handleOpenChatbot = () => setShowChatbot(true);
  const handleCloseChatbot = () => setShowChatbot(false);

  return (
    <div className="App">
      <Home />
      <NavBar />
      {/* 3. Pasar la función como prop a Nosotros */}
      <Nosotros onOpenChatbot={handleOpenChatbot} />
      <Productos />
      <Planes />
      <Marcas />
      <Formulario />
      <Footer />
      {/* 4. Mostrar el chatbot si showChatbot es true */}
      <ChatBotModal open={showChatbot} onClose={handleCloseChatbot} />
    </div>
  );
}

export default App;
