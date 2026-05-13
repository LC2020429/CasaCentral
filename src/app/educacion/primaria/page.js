"use client";

import React from "react";
import {
  FaGraduationCap,
  FaAppleAlt,
  FaHeart,
  FaPalette,
  FaRunning,
  FaBook,
} from "react-icons/fa";
import "@/css/education.css";
import primariaImg from "@/assets/images/primaria.jpg";

export default function PrimariaPage() {
  return (
    <div className="education-page animate-fade-in-up">
      {/* Premium Hero Section */}
      <section
        className="edu-hero"
        style={{ backgroundImage: `url(${primariaImg.src})` }}
      >
        <div className="edu-hero-content">
          <span className="edu-hero-badge">Educación Inicial</span>
          <h1>
            Primaria <br /> Integral
          </h1>
          <p>
            Cimentando las bases de un futuro brillante con valores, alegría y
            excelencia académica.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="edu-section">
        <span className="section-tag">Nuestra Identidad</span>
        <h2 className="section-title">Propuesta Educativa</h2>
        <div className="edu-grid">
          <div className="edu-card">
            <div className="card-icon-wrapper">
              <FaGraduationCap className="card-icon" />
            </div>
            <h3>Formación Integral</h3>
            <p>
              Buscamos el desarrollo equilibrado de todas las capacidades del
              niño: intelectuales, afectivas, sociales y espirituales.
            </p>
          </div>
          <div className="edu-card">
            <div className="card-icon-wrapper">
              <FaHeart className="card-icon" />
            </div>
            <h3>Valores Vicentinos</h3>
            <p>
              Educamos en la caridad, la humildad y el servicio, siguiendo el
              legado de San Vicente de Paúl.
            </p>
          </div>
          <div className="edu-card">
            <div className="card-icon-wrapper">
              <FaBook className="card-icon" />
            </div>
            <h3>Excelencia Académica</h3>
            <p>
              Implementamos metodologías activas que fomentan la curiosidad y el
              amor por el aprendizaje en cada estudiante.
            </p>
          </div>
        </div>
      </section>

      {/* Areas of Development */}
      <section
        className="edu-section"
        style={{ background: "white", borderRadius: "60px 60px 0 0" }}
      >
        <span className="section-tag">Crecimiento Holístico</span>
        <h2 className="section-title">Áreas de Desarrollo</h2>
        <div className="edu-grid">
          <div className="edu-card" style={{ background: "var(--bg-light)" }}>
            <div className="card-icon-wrapper" style={{ background: "white" }}>
              <FaPalette className="card-icon" />
            </div>
            <h3>Expresión Artística</h3>
            <p>
              Fomentamos la creatividad a través de la música, la pintura y el
              teatro como medios de expresión personal.
            </p>
          </div>
          <div className="edu-card" style={{ background: "var(--bg-light)" }}>
            <div className="card-icon-wrapper" style={{ background: "white" }}>
              <FaRunning className="card-icon" />
            </div>
            <h3>Educación Física</h3>
            <p>
              Promovemos hábitos de vida saludable y el trabajo en equipo a
              través del deporte y la recreación.
            </p>
          </div>
          <div className="edu-card" style={{ background: "var(--bg-light)" }}>
            <div className="card-icon-wrapper" style={{ background: "white" }}>
              <FaAppleAlt className="card-icon" />
            </div>
            <h3>Vida y Salud</h3>
            <p>
              Conciencia ambiental y cuidado de la salud integral como pilares
              fundamentales de nuestra comunidad.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
