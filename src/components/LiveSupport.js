"use client";

import React, { useState, useEffect, useRef } from "react";
import { FaHeadset, FaPaperPlane, FaTimes, FaRobot, FaUser } from "react-icons/fa";
import "../css/liveSupport.css";

const LiveSupport = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "assistant", content: "¡Hola! Soy el asistente virtual de Casa Central. ¿En qué puedo ayudarte hoy?" }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!inputValue.trim() || isLoading) return;

    const userMessage = { role: "user", content: inputValue };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: [...messages, userMessage] }),
      });

      const data = await response.json();
      
      if (data.error) throw new Error(data.error);

      setMessages((prev) => [...prev, { role: "assistant", content: data.content }]);
    } catch (error) {
      setMessages((prev) => [...prev, { 
        role: "assistant", 
        content: "Lo siento, tuve un problema al procesar tu solicitud. Por favor intenta de nuevo más tarde." 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Support Bubble */}
      <div 
        className={`live-support-bubble ${isOpen ? "hidden" : ""}`} 
        onClick={() => setIsOpen(true)}
        title="Chat de Apoyo AI"
      >
        <div className="pulse-animation"></div>
        <FaHeadset className="support-icon" />
        <span className="support-text">Chat AI</span>
      </div>

      {/* Chat Window */}
      <div className={`chat-window ${isOpen ? "open" : ""}`}>
        <div className="chat-header">
          <div className="header-info">
            <FaRobot className="bot-icon" />
            <div>
              <h3>Asistente Casa Central</h3>
              <span className="status">En línea</span>
            </div>
          </div>
          <button className="close-btn" onClick={() => setIsOpen(false)}>
            <FaTimes />
          </button>
        </div>

        <div className="chat-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`message ${msg.role}`}>
              <div className="avatar">
                {msg.role === "assistant" ? <FaRobot /> : <FaUser />}
              </div>
              <div className="message-content">
                {msg.content}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="message assistant">
              <div className="avatar"><FaRobot /></div>
              <div className="message-content typing">
                <span>.</span><span>.</span><span>.</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        <form className="chat-input" onSubmit={handleSendMessage}>
          <input
            type="text"
            placeholder="Escribe tu duda aquí..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            disabled={isLoading}
          />
          <button type="submit" disabled={isLoading || !inputValue.trim()}>
            <FaPaperPlane />
          </button>
        </form>
      </div>
    </>
  );
};

export default LiveSupport;

