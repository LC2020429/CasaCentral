"use client";

import React from "react";
import { FaHeart, FaUtensils, FaStethoscope, FaGraduationCap, FaHandsHelping, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "@/css/donations.css";

export default function DonacionesPage() {
  return (
    <div className="donations-page animate-fade-in-up">
      {/* Impactful Hero */}
      <section className="donations-hero">
        <div className="donations-hero-content">
          <FaHeart style={{ fontSize: "3rem", color: "#ffd166", marginBottom: "20px" }} />
          <h1>Tu Generosidad <br /> Transforma Vidas</h1>
          <p>
            Cada donación es un puente hacia un futuro con más oportunidades y dignidad para quienes más lo necesitan.
          </p>
        </div>
      </section>

      {/* Impact Areas */}
      <section className="don-section">
        <div className="don-section-header">
          <span className="don-tag">Tu impacto</span>
          <h2>¿A dónde va tu ayuda?</h2>
        </div>

        <div className="impact-grid">
          <div className="impact-card">
            <FaUtensils className="impact-icon" />
            <h3>Comedor Solidario</h3>
            <p>Brindamos alimentación diaria y nutritiva a personas de la tercera edad y familias en situación de vulnerabilidad.</p>
          </div>
          <div className="impact-card">
            <FaStethoscope className="impact-icon" />
            <h3>Salud para Todos</h3>
            <p>Sostenemos nuestras clínicas médicas, farmacia y laboratorio con servicios a costos simbólicos para la comunidad.</p>
          </div>
          <div className="impact-card">
            <FaGraduationCap className="impact-icon" />
            <h3>Becas de Futuro</h3>
            <p>Apoyamos la formación de niñas y jóvenes en nuestros niveles educativos para que alcancen sus sueños profesionales.</p>
          </div>
        </div>
      </section>

      {/* Donation Methods */}
      <section className="donation-ways">
        <div className="way-card">
          <FaHandsHelping style={{ fontSize: "3rem", marginBottom: "20px", color: "#ffd166" }} />
          <h3>Formas de Apoyar</h3>
          <p style={{ fontSize: "1.2rem", opacity: 0.9, lineHeight: "1.6" }}>
            Puedes realizar tus aportaciones a través de transferencias bancarias o donaciones en especie en nuestras instalaciones.
          </p>
        </div>

        <div className="way-card">
          <div className="bank-info">
            <div className="bank-item">
              <label>Banco Industrial</label>
              <span>Cuenta de Cheques: 000-000000-0</span>
            </div>
            <div className="bank-item">
              <label>Nombre de la Cuenta</label>
              <span>Hijas de la Caridad de San Vicente de Paúl</span>
            </div>
            <div className="bank-item">
              <label>Referencia</label>
              <span>Donación Casa Central</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Callout */}
      <section className="contact-callout">
        <div className="contact-box">
          <span className="don-tag">¿Tienes dudas?</span>
          <h2>Contáctanos</h2>
          <p>Para coordinar donaciones en especie (alimentos, medicinas, útiles escolares) o solicitar recibos contables, estamos a tu disposición.</p>
          
          <div style={{ display: "flex", justifyContent: "center", gap: "40px", marginBottom: "40px", flexWrap: "wrap" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "1.2rem", color: "#003a70" }}>
              <FaPhoneAlt /> <span>+502 2232-4684</span>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "1.2rem", color: "#003a70" }}>
              <FaEnvelope /> <span>info@casacentral.org.gt</span>
            </div>
          </div>

          <a href="https://wa.me/50222384684" className="btn-donar" target="_blank" rel="noopener noreferrer">
            Hablar por WhatsApp
          </a>
        </div>
      </section>
    </div>
  );
}

