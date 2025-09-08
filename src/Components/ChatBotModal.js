// src/components/ChatBotModal.js
import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  TextField,
  Button,
  Box,
  CircularProgress,
} from "@mui/material";

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
      // Cambia la URL por la de tu webhook de n8n
   const resp = await fetch(
     "https://9d6709dbc3de.ngrok-free.app/webhook/chat-ia",
     {
       method: "POST",
       headers: { "Content-Type": "application/json" },
       body: JSON.stringify({ message: input }),
     }
   );

      const data = await resp.json();
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text:
            data.reply ||
            data.respuesta ||
            "¡Ups! No pude responder, intenta de nuevo.",
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: "¡Ups! Ocurrió un error al conectar con el asistente.",
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
              style={{ textAlign: msg.from === "user" ? "right" : "left" }}
            >
              {msg.text}
            </div>
          ))}
          {loading && (
            <span className="chatbot-loader">
              <CircularProgress size={20} />
            </span>
          )}
        </div>
        <div className="chatbot-input-row">
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
          <Button variant="contained" onClick={handleSend} disabled={loading}>
            Enviar
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ChatBotModal;
