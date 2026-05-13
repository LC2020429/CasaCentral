"use client";

import React from "react";
import Image from "next/image";
import bandaNew from "@/assets/images/bandaNew.jpg";
import bandaOld from "@/assets/images/bandaOld.jpeg";
import { FaHistory, FaUsers, FaMusic, FaTrophy, FaStar, FaAward } from "react-icons/fa";
import "@/css/banda.css";

export default function BandaPage() {
  return (
    <div className="banda-page-container animate-fade-in-up">
      {/* Hero Section */}
      <section className="banda-hero">
        <div className="banda-hero-overlay"></div>
        <div className="banda-hero-content">
          <h1>Banda Escolar</h1>
          <p>Instituto Normal Casa Central</p>
        </div>
      </section>

      {/* History & Foundation */}
      <section className="banda-section history-section">
        <div className="section-grid">
          <div className="text-content">
            <div className="section-header">
              <FaHistory className="section-icon" />
              <h2>Historia y Surgimiento</h2>
            </div>
            <div className="info-block">
              <h3>¿En qué año surgió la Banda?</h3>
              <p>
                El Instituto Normal Casa Central sale a desfilar un 15 de septiembre de 1955, 
                en esa oportunidad sale únicamente escuadrones de alumnas y un redoblante. 
                La alumna que lo ejecutó fue Ángela Panameño. Al graduarse se incorpora a la 
                Compañía de las Hijas de la Caridad de San Vicente de Paúl. Sor Ángela Panameño 
                es recordada por su entrega al Proyecto de Banda.
              </p>
            </div>
            <div className="info-block">
              <h3>¿Cómo se formó la Banda?</h3>
              <p>
                Por iniciativa de la Directora del Instituto Normal Casa Central, Sor Filomena Roch, 
                en 1958 compra instrumentos que utiliza una Banda de Guerra, de los cuales hay 
                varios que usan las presentes generaciones. La primera Comandante de la Banda fue 
                la alumna Hilda Salazar.
              </p>
            </div>
          </div>
          <div className="image-content">
            <div className="image-wrapper">
              <Image src={bandaOld} alt="Banda Antigua" className="banda-img" priority />
              <span className="image-caption">Nuestros Inicios</span>
            </div>
          </div>
        </div>
      </section>

      {/* Current State & Composition */}
      <section className="banda-section stats-section">
        <div className="section-grid reverse">
          <div className="text-content">
            <div className="section-header">
              <FaUsers className="section-icon" />
              <h2>Actualidad y Composición</h2>
            </div>
            <div className="info-block">
              <h3>Estudiantes y Participación</h3>
              <p>
                Actualmente son 85 alumnas que conforman la Banda. Para poder pertenecer deben 
                estar inscritas en el presente ciclo escolar y la conforman alumnas de la Escuela 
                Virgen Poderosa y del Instituto Normal Casa Central.
              </p>
            </div>
            <div className="info-block">
              <h3>Instrumentación</h3>
              <p>
                En la actualidad la Banda cuenta con las siguientes líneas: 
                <strong> Clarines, Xilófonos, Liras, Cajas de Golpe Seco, Resonancia, Cuádruples, Redoblantes, Bombines y Bombos.</strong>
              </p>
            </div>
          </div>
          <div className="image-content">
            <div className="image-wrapper">
              <Image src={bandaNew} alt="Banda Actual" className="banda-img" />
              <span className="image-caption">Generación Actual</span>
            </div>
          </div>
        </div>
      </section>

      {/* Methodology & Challenges */}
      <section className="banda-section cards-section">
        <div className="cards-grid">
          <div className="info-card">
            <FaMusic className="card-icon" />
            <h3>Metodología de Ensayo</h3>
            <p>
              Las alumnas encargadas de las distintas líneas son las responsables de enseñar 
              la ejecución del instrumento y las marchas que conforman el repertorio. 
              Instructor y encargado realizan la evaluación constante.
            </p>
          </div>
          <div className="info-card">
            <FaStar className="card-icon" />
            <h3>Actividades Anuales</h3>
            <p>
              La Banda participa activamente en festivales y desfiles de los principales 
              colegios de Guatemala, manteniendo viva la tradición y el prestigio institucional.
            </p>
          </div>
          <div className="info-card highlight">
            <div className="card-badge">El Gran Reto</div>
            <h3>Dedicación y Esfuerzo</h3>
            <p>
              A diferencia de otras bandas, nosotros únicamente contamos con tres horas de ensayo 
              a la semana, lo que hace que cada logro sea un testimonio del talento y compromiso de nuestras alumnas.
            </p>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="banda-section achievements-section">
        <div className="section-header centered">
          <FaTrophy className="section-icon gold" />
          <h2>Trayectoria de Logros</h2>
          <p>Nuestra excelencia musical reconocida en múltiples certámenes</p>
        </div>

        <div className="achievements-container">
          <div className="achievement-group">
            <h3><FaAward /> Títulos de Pentacampeonas</h3>
            <div className="achievement-list">
              <div className="achievement-item">
                <span className="achievement-year">2009 - 2013</span>
                <p><strong>Concurso "Por la Paz":</strong> Primer Lugar durante 5 años consecutivos.</p>
              </div>
              <div className="achievement-item">
                <span className="achievement-year">2014 - 2019</span>
                <p><strong>"Metal que Canta":</strong> Primer Lugar (2014, 2015, 2016, 2018, 2019).</p>
              </div>
              <div className="achievement-item">
                <span className="achievement-year">2012 - 2018</span>
                <p><strong>Alianza Nacional:</strong> Primer Lugar en Clasificación (5 ocasiones).</p>
              </div>
            </div>
          </div>

          <div className="achievement-group">
            <h3><FaTrophy /> Logros Históricos y Finales</h3>
            <div className="achievement-list">
              <div className="achievement-item">
                <span className="achievement-year">Histórico</span>
                <p><strong>Primer Lugar:</strong> Desfiles de 15 de Septiembre en 1965, 1967 y 1992.</p>
              </div>
              <div className="achievement-item">
                <span className="achievement-year">2012 - 2014</span>
                <p><strong>Tricampeonas:</strong> Final de la Alianza Nacional de Bandas Escolares.</p>
              </div>
              <div className="achievement-item">
                <span className="achievement-year">Mención</span>
                <p><strong>Segundo Lugar:</strong> Comunidad de Bandas (2008, 2009) y Alianza Nacional (2015, 2018).</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
