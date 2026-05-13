"use client";

import React, { useState } from "react";
import "../../css/about/timeline.css";

const Timeline = () => {
  const [activeEvent, setActiveEvent] = useState(null);

  const events = [
    {
      year: "1862",
      title: "Inicios de Labor Social",
      desc: "Se registran los inicios de la labor social cuando Sor Irma Broquedis pedía limosna para ayudar a los pobres.",
      category: "Antecedentes"
    },
    {
      year: "1945",
      title: "Fundación Formal",
      desc: "Sor Filomena Roch funda formalmente la 'Casa Central' y el Instituto Normal tras formarse en Francia.",
      category: "Hito"
    },
    {
      year: "1945-1949",
      title: "Construcción de la Capilla",
      desc: "Edificación de la capilla neogótica, declarada Patrimonio Cultural del Centro Histórico.",
      category: "Arquitectura"
    },
    {
      year: "1940-1970",
      title: "Época de Oro",
      desc: "Liderazgo de las hermanas Roch. Se introducen servicios de salud, farmacia y la Banda Estudiantil.",
      category: "Expansión"
    },
    {
      year: "1970",
      title: "Aniversario de Plata",
      desc: "Celebración de los 25 años bajo la dirección de Sor María Castro.",
      category: "Hito"
    },
    {
      year: "1973",
      title: "Legado de Sor Cecilia Charrín",
      desc: "Fallecimiento de la figura emblemática dedicada al servicio de los pobres. Inicia su proceso de beatificación.",
      category: "Legado"
    },
    {
      year: "1998",
      title: "Centro Infantil Divino Niño",
      desc: "Creado para apoyar a familias afectadas por el huracán Mitch.",
      category: "Social"
    },
    {
      year: "2005",
      title: "60 Aniversario",
      desc: "Creación de la Fundación Sor Cecilia Charrín y conmemoración de seis décadas de servicio.",
      category: "Hito"
    }
  ];

  return (
    <div className="timeline-wrapper">
      <h2 className="timeline-main-title">Nuestra Trayectoria Histórica</h2>
      <div className="timeline-container horizontal">
        <div className="timeline-line-horizontal"></div>
        <div className="events-scroll">
          {events.map((event, index) => (
            <div 
              key={index} 
              className={`timeline-event-h ${activeEvent === index ? 'active' : ''}`}
              onMouseEnter={() => setActiveEvent(index)}
              onMouseLeave={() => setActiveEvent(null)}
            >
              <div className="event-marker-h">
                <span className="event-year-h">{event.year}</span>
              </div>
              <div className="event-content-h">
                <span className="event-category-h">{event.category}</span>
                <h3>{event.title}</h3>
                <p>{event.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
