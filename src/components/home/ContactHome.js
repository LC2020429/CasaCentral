"use client";

import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock } from "react-icons/fa";
import "../../css/home/contactHome.css";

export const ContactHome = () => {
  return (
    <section id="contacto" className="contact-home-section">
      <div className="contact-home-container">
        <h2 className="contact-home-title">Contacto</h2>
        <p className="contact-home-subtitle">
          ¿Tienes mas dudas? Escribenos, llamanos o visitanos.
        </p>

        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-icon-wrapper">
              <FaPhone className="contact-icon" />
            </div>
            <h3>Teléfono</h3>
            <p>+502 2238 4684</p>
          </div>

          <div className="contact-card">
            <div className="contact-icon-wrapper">
              <FaEnvelope className="contact-icon" />
            </div>
            <h3>Correo Electrónico</h3>
            <p>informacionincc@gmail.com</p>
          </div>

          <div className="contact-card">
            <div className="contact-icon-wrapper">
              <FaMapMarkerAlt className="contact-icon" />
            </div>
            <h3>Dirección</h3>
            <p>1 ave. 13-63 zona 1</p>
            <p>Ciudad de Guatemala, Guatemala</p>
          </div>

          <div className="contact-card">
            <div className="contact-icon-wrapper">
              <FaClock className="contact-icon" />
            </div>
            <h3>Horario de Atención</h3>
            <p>Lunes a Viernes: 9:00 AM - 1:00 PM</p>
            <p>Sábado: 9:00 AM - 12:00 PM</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHome;
