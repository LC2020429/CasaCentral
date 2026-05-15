"use client";

import React, { useState } from "react";
import {
  FaChalkboardTeacher,
  FaMicrochip,
  FaBookReader,
  FaClock,
  FaBriefcase,
  FaUserGraduate,
  FaCheckCircle,
} from "react-icons/fa";
import "@/css/education.css";
import diversificadoImg from "@/assets/images/diversificado.jpeg";

const careers = [
  {
    id: "magisterio",
    title: "Magisterio de Educación Infantil Intercultural",
    badge: "Magisterio",
    icon: <FaChalkboardTeacher />,
    description:
      "Nuestra carrera emblemática dedicada a formar a las futuras docentes de Guatemala con un enfoque humano y metodologías innovadoras para la niñez.",
    profile: [
      "Capacidad para diseñar ambientes de aprendizaje creativos.",
      "Dominio de estrategias pedagógicas interculturales.",
      "Vocación de servicio y amor por la enseñanza.",
      "Sólida formación ética y valores cristianos.",
    ],
    duration: "3 Años",
    schedule: "7:30 AM - 1:00 PM",
    certification: "Docente de Educación Inicial y Preprimaria",
  },
  {
    id: "bach-educacion",
    title: "Bachillerato en Ciencias y Letras con Orientación en Educación",
    badge: "Bachillerato",
    icon: <FaBookReader />,
    description:
      "Preparación académica de alto nivel diseñada para estudiantes que desean continuar estudios universitarios en el área humanística y pedagógica.",
    profile: [
      "Habilidades de investigación y análisis crítico.",
      "Comprensión profunda de los procesos educativos.",
      "Excelente expresión oral y escrita.",
      "Preparación para exámenes de admisión universitaria.",
    ],
    duration: "2 Años",
    schedule: "7:30 AM - 1:00 PM",
    certification: "Bachiller en Ciencias y Letras",
  },
  {
    id: "bach-compu",
    title: "Perito contador",
    badge: "Perito",
    icon: <FaMicrochip />,
    description:
      "Formamos contadores con visión empresarial, ética profesional y capacidad de gestión financiera integral para el éxito empresarial moderno.",
    profile: [
      "Habilidad para llevar registros contables precisos y actualizados.",
      "Dominio de software contable y herramientas digitales de gestión financiera.",
      "Comprensión de las normativas tributarias y laborales guatemaltecas.",
      "Visión estratégica para el análisis de costos, presupuestos y rentabilidad.",
    ],
    duration: "3 Años",
    schedule: "7:30 AM - 1:00 PM",
    certification: "Perito Contador",
  },
];

export default function DiversificadoPage() {
  const [activeCareer, setActiveCareer] = useState(careers[0]);

  return (
    <div className="education-page">
      {/* Premium Hero Section */}
      <section
        className="edu-hero"
        style={{ backgroundImage: `url(${diversificadoImg.src})` }}
      >
        <div className="edu-hero-content">
          <span className="edu-hero-badge">Instituto Normal</span>
          <h1>
            Nivel <br /> Diversificado
          </h1>
          <p>
            Especialización profesional con valores para transformar la sociedad
            y liderar el cambio.
          </p>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="edu-section">
        <span className="section-tag">Carreras Profesionales</span>
        <h2 className="section-title">Elige tu Camino al Éxito</h2>

        <div className="career-container">
          <nav className="career-nav">
            {careers.map((career) => (
              <button
                key={career.id}
                className={`career-nav-item ${activeCareer.id === career.id ? "active" : ""}`}
                onClick={() => setActiveCareer(career)}
              >
                {career.badge}
              </button>
            ))}
          </nav>

          <div className="career-content animate-fade-in-up">
            <div className="career-layout">
              <div className="career-info-side">
                <div className="career-header">
                  <span className="career-badge-label">
                    {activeCareer.badge}
                  </span>
                  <h2>{activeCareer.title}</h2>
                  <p
                    className="career-desc-large"
                    style={{
                      fontSize: "1.2rem",
                      lineHeight: "1.8",
                      color: "#4a5568",
                      marginTop: "20px",
                    }}
                  >
                    {activeCareer.description}
                  </p>
                </div>

                <div className="profile-card">
                  <h3>Perfil del Egresado</h3>
                  <ul className="profile-list">
                    {activeCareer.profile.map((item, index) => (
                      <li key={index}>
                        <FaCheckCircle className="check-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="career-sidebar">
                <div className="sidebar-info">
                  <div className="info-tile">
                    <FaClock className="tile-icon" />
                    <div className="tile-text">
                      <label>Duración</label>
                      <p>{activeCareer.duration}</p>
                    </div>
                  </div>
                  <div className="info-tile">
                    <FaBriefcase className="tile-icon" />
                    <div className="tile-text">
                      <label>Horario</label>
                      <p>{activeCareer.schedule}</p>
                    </div>
                  </div>
                  <div className="info-tile">
                    <FaUserGraduate className="tile-icon" />
                    <div className="tile-text">
                      <label>Certificación</label>
                      <p>{activeCareer.certification}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
