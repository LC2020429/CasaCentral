"use client";

import React from 'react';
import { FaFlask, FaLaptopCode, FaPrayingHands, FaMicroscope, FaBrain, FaUsers } from 'react-icons/fa';
import '@/css/education.css';
import basicosImg from "@/assets/images/basicos.jpg";

export default function BasicosPage() {
  return (
    <div className="education-page animate-fade-in-up">
      {/* Premium Hero Section */}
      <section className="edu-hero" style={{ backgroundImage: `url(${basicosImg.src})` }}>
        <div className="edu-hero-content">
          <span className="edu-hero-badge">Ciclo Básico</span>
          <h1>Formación <br /> Crítica</h1>
          <p>Potenciando habilidades y forjando el carácter para los retos del futuro.</p>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="edu-section">
        <span className="section-tag">Competencias Clave</span>
        <h2 className="section-title">Pilares de Aprendizaje</h2>
        <div className="edu-grid">
          <div className="edu-card">
            <div className="card-icon-wrapper">
              <FaBrain className="card-icon" />
            </div>
            <h3>Pensamiento Crítico</h3>
            <p>Desarrollamos la capacidad de análisis y razonamiento lógico para la resolución de problemas complejos.</p>
          </div>
          <div className="edu-card">
            <div className="card-icon-wrapper">
              <FaLaptopCode className="card-icon" />
            </div>
            <h3>Competencia Digital</h3>
            <p>Integración de herramientas tecnológicas modernas en el proceso de enseñanza para la era digital.</p>
          </div>
          <div className="edu-card">
            <div className="card-icon-wrapper">
              <FaFlask className="card-icon" />
            </div>
            <h3>Ciencia Aplicada</h3>
            <p>Enfoque práctico en laboratorios que despierta la curiosidad científica y el método de investigación.</p>
          </div>
        </div>
      </section>

      {/* Vocational Prep */}
      <section className="edu-section" style={{ background: 'white', borderRadius: '60px 60px 0 0' }}>
        <span className="section-tag">Preparación Vocacional</span>
        <h2 className="section-title">Creciendo con Propósito</h2>
        <div className="edu-grid">
          <div className="edu-card" style={{ background: 'var(--bg-light)' }}>
            <div className="card-icon-wrapper" style={{ background: 'white' }}>
              <FaUsers className="card-icon" />
            </div>
            <h3>Liderazgo Juvenil</h3>
            <p>Programas diseñados para potenciar la autogestión, el trabajo colaborativo y la toma de decisiones.</p>
          </div>
          <div className="edu-card" style={{ background: 'var(--bg-light)' }}>
            <div className="card-icon-wrapper" style={{ background: 'white' }}>
              <FaMicroscope className="card-icon" />
            </div>
            <h3>Investigación</h3>
            <p>Fomentamos el espíritu indagador a través de proyectos interdisciplinarios que conectan con la realidad.</p>
          </div>
          <div className="edu-card" style={{ background: 'var(--bg-light)' }}>
            <div className="card-icon-wrapper" style={{ background: 'white' }}>
              <FaPrayingHands className="card-icon" />
            </div>
            <h3>Formación en Valores</h3>
            <p>Consolidamos la identidad cristiana y el compromiso social como parte esencial del crecimiento personal.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

