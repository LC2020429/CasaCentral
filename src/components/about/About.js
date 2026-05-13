"use client";

import React from "react";
import Image from "next/image";
import medalla from "../../assets/images/info.jpg";
import { FaEye, FaBullseye, FaQuoteLeft } from "react-icons/fa";
import "../../css/home/about.css";

export const About = () => {
  return (
    <div className="about-page-container">
      {/* Section: Who We Are */}
      <section className="about-hero">
        <div className="about-hero-content">
          <span className="about-subtitle">Nuestra Identidad</span>
          <h1 className="about-title">¿Qué es Casa Central?</h1>
          <div className="about-description">
            <p>
              Casa Central es una organización sin fines de lucro dedicada a
              brindar apoyo y recursos a personas en situación de vulnerabilidad.
              Nuestra misión es crear un entorno seguro y acogedor donde cada
              individuo pueda encontrar las herramientas necesarias para mejorar
              su calidad de vida.
            </p>
            <p>
              Fundada en 1995, Casa Central ha trabajado incansablemente para
              ofrecer programas de educación, capacitación laboral, asistencia
              social y servicios de salud a comunidades desfavorecidas. A lo
              largo de los años, hemos colaborado con diversas organizaciones y
              voluntarios comprometidos con nuestra causa.
            </p>
          </div>
        </div>
        <div className="about-hero-image">
          <div className="image-decoration"></div>
          <Image
            src={medalla}
            alt="Casa Central Institución"
            className="about-img"
            priority
            quality={100}
          />
        </div>
      </section>

      {/* Section: Vision & Mission */}
      <section className="vision-mission-section">
        <div className="card-container">
          <div className="info-card vision-card">
            <div className="card-icon">
              <FaEye />
            </div>
            <h2>Nuestra Visión</h2>
            <p>
              Consolidarnos como el referente nacional en formación humana y asistencia social, 
              siendo reconocidos por nuestra innovación educativa y el impacto profundo en la 
              construcción de una comunidad resiliente, inclusiva y movida por los valores del Evangelio.
            </p>
          </div>

          <div className="info-card mission-card">
            <div className="card-icon">
              <FaBullseye />
            </div>
            <h2>Nuestra Misión</h2>
            <p>
              Brindar una formación integral a la niñez y juventud, fundamentada en la fe y la caridad. 
              Proporcionamos recursos educativos, servicios de salud y apoyo social que empoderen 
              a cada individuo para alcanzar su máximo potencial.
            </p>
          </div>
        </div>
      </section>

      {/* Section: Inspirational Quote */}
      <section className="quote-section">
        <div className="quote-container">
          <FaQuoteLeft className="quote-bg-icon" />
          <div className="quote-content">
            <p className="quote-text">
              "La caridad es el lazo que une a los corazones y la luz que guía nuestras acciones."
            </p>
            <div className="quote-author-container">
              <div className="author-line"></div>
              <span className="quote-author">San Vicente de Paúl</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;

