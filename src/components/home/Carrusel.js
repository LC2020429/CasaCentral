"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import panel1 from "../../assets/images/panel1.jpg";
import panel2 from "../../assets/images/panel2.png";
import panel3 from "../../assets/images/panel3.png";
import panel4 from "../../assets/images/panel4.png";
import "../../css/home/carrusel.css";

export const Carrusel = () => {
  const panels = [
    {
      img: panel4,
      text: "Conoce nuestra historia",
      link: "/sobre-nosotros",
    },
    {
      img: panel2,
      text: "Nuestra banda musical",
      link: "/banda",
    },
    {
      img: panel3,
      text: "Únete a la comunidad normalista",
      link: "/#educacion",
    },
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % panels.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [panels.length]);

  const next = () => setIndex((index + 1) % panels.length);
  const prev = () => setIndex((index - 1 + panels.length) % panels.length);

  const handleLinkClick = (e, link) => {
    if (link.startsWith("/#")) {
      const id = link.substring(2);
      const element = document.getElementById(id);
      if (element) {
        e.preventDefault();
        element.scrollIntoView({ behavior: "smooth" });
        // Actualizamos la URL sin saltar
        window.history.pushState(null, "", link);
      }
    }
  };

  return (
    <div className="carrusel-container">
      {/* Flecha izquierda */}
      <div className="arrow left" onClick={prev}>
        &#10094;
      </div>

      {/* Paneles */}
      <div className="panels-wrapper">
        {panels.map((panel, i) => (
          <div
            key={i}
            className={`panel ${i === index ? "active" : ""}`}
            style={{
              position: i === index ? "relative" : "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              opacity: i === index ? 1 : 0,
              transition: "opacity 0.8s ease-in-out",
              zIndex: i === index ? 1 : 0,
            }}
          >
            <Image
              src={panel.img}
              alt={`panel-${i}`}
              fill
              style={{ objectFit: "cover" }}
              priority={i === 0}
              quality={100}
              sizes="100vw"
            />
            <Link
              href={panel.link}
              style={{ display: "contents" }}
              onClick={(e) => handleLinkClick(e, panel.link)}
            >
              <button>{panel.text}</button>
            </Link>
          </div>
        ))}
      </div>

      {/* Flecha derecha */}
      <div className="arrow right" onClick={next}>
        &#10095;
      </div>

      {/* Indicadores */}
      <div className="indicators">
        {panels.map((_, i) => (
          <div
            key={i}
            className={`dot ${i === index ? "active" : ""}`}
            onClick={() => setIndex(i)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Carrusel;
