import React, { useState } from "react";
import deepai from "deepai";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  CircularProgress,
} from "@mui/material";

// Configuramos la API Key
deepai.setApiKey("84f93bd6-3c04-42f3-9b0e-f1edd718fd77");

const ChatBotModal = ({ open, handleClose }) => {
  const [messages, setMessages] = useState([
    { from: "bot", text: "¡Hola! ¿En qué puedo ayudarte?" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    setMessages((prev) => [...prev, { from: "user", text: input }]);
    setLoading(true);

    try {
      // Llamamos a DeepAI para generar imagen a partir del texto
      const response = await deepai.callStandardApi("text2img", {
        text: input,
      });

      const imageUrl = response.output_url;

      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: `Aquí está tu imagen:`,
          image: imageUrl, // Guardamos URL de imagen
        },
      ]);
    } catch (error) {
      console.error("Error DeepAI:", error);
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: "¡Ups! No pude generar la imagen, intenta de nuevo.",
        },
      ]);
    }

    setLoading(false);
    setInput("");
  };

  return (
    <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
      <DialogTitle>Asistente Virtual</DialogTitle>
      <DialogContent>
        <div className="chatbot-messages-box">
          {messages.map((msg, i) => (
            <div
              key={i}
              className={msg.from === "user" ? "user-message" : "bot-message"}
              style={{
                textAlign: msg.from === "user" ? "right" : "left",
                margin: "10px 0",
              }}
            >
              <div>{msg.text}</div>
              {msg.image && (
                <img
                  src={msg.image}
                  alt="Generada por IA"
                  style={{ maxWidth: "100%", marginTop: "5px" }}
                />
              )}
            </div>
          ))}
          {loading && <CircularProgress size={20} />}
        </div>
        <div
          className="chatbot-input-row"
          style={{ display: "flex", marginTop: "10px" }}
        >
          <TextField
            fullWidth
            variant="outlined"
            size="small"
            value={input}
            disabled={loading}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder="Escribe tu consulta..."
          />
          <Button
            variant="contained"
            onClick={handleSend}
            disabled={loading}
            style={{ marginLeft: "5px" }}
          >
            Enviar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ChatBotModal;
