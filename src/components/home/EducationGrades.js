"use client";

import React from "react";
import Link from "next/link";
import {
  FaGraduationCap,
  FaBookReader,
  FaChalkboardTeacher,
} from "react-icons/fa";
import "../../css/home/educationGrades.css";

const EducationGrades = () => {
  const levels = [
    {
      title: "Primaria Mixta",
      icon: <FaBookReader />,
      link: "/educacion/primaria",
      description:
        "Formación integral basada en valores, enfocada en desarrollar las habilidades fundamentales en niños y niñas.",
      careers: [
        "1ro a 6to Primaria",
        "Refuerzo Escolar",
        "Educación en Valores",
      ],
    },
    {
      title: "Ciclo Básico ",
      icon: <FaChalkboardTeacher />,
      link: "/educacion/basicos",
      description:
        "Preparación académica sólida para señoritas, fomentando el pensamiento crítico y la responsabilidad.",
      careers: [
        "1ro a 3ro Básico",
        "Laboratorios de Computación",
        "Orientación Vocacional",
      ],
    },
    {
      title: "Diversificado",
      icon: <FaGraduationCap />,
      link: "/educacion/diversificado",
      description:
        "Programas especializados para señoritas, diseñados para una inserción laboral exitosa o estudios superiores.",
      careers: ["Bachiller", "Perito", "Magisterio"],
    },
  ];

  return (
    <section id="educacion" className="edu-grades-section">
      <div className="edu-grades-container">
        <h2 className="edu-grades-main-title">Nuestra Oferta Académica</h2>
        <p className="edu-grades-subtitle">
          La educación es la base para construir un futuro mejor
        </p>

        <div className="edu-grades-grid">
          {levels.map((level, index) => (
            <div key={index} className="edu-grade-card">
              <div className="edu-grade-icon-box">{level.icon}</div>
              <h3>{level.title}</h3>
              <p className="edu-grade-desc">{level.description}</p>
              <div className="edu-grade-careers">
                <h4>Grados y Especialidades:</h4>
                <ul>
                  {level.careers.map((career, i) => (
                    <li key={i}>{career}</li>
                  ))}
                </ul>
              </div>
              <Link href={level.link} className="edu-grade-link">
                <button className="edu-grade-btn">Ver más detalles</button>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationGrades;
