"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/images/logoCCsf.png";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import "../css/principal/footer.css";

export const Footer = () => {
  return (
    <>
      <div className="footer-container">
        <div className="footer-column">
          <div className="footer-logo">
            <Image src={logo} alt="LogoCasaCentral" width={100} height={100} />
            <p>Hermanas de la caridad</p>
            <ul>
              <li>
                <a
                  href="https://www.instagram.com/incc.gt/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/profile.php?id=61552605550624&locale=es_LA"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaFacebook />
                </a>
              </li>
              <li>
                <a
                  href="https://youtu.be/BKpzFpTgnH4?si=kWFdIe5tyZCnarCM"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaYoutube />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="footer-column">
          <h2>Educacion</h2>
          <ul>
            <li>
              <Link
                href="/educacion/diversificado"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Diversificado
              </Link>
            </li>
            <li>
              <Link
                href="/educacion/basicos"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Basicos
              </Link>
            </li>
            <li>
              <Link
                href="/educacion/primaria"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Primaria
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h2>Sobre Nosotros</h2>
          <ul>
            <li>
              <Link
                href="/sobre-nosotros"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Casa Central
              </Link>
            </li>
            <li>
              <Link
                href="/banda"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Banda
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h2>Contacto</h2>
          <ul>
            <li>
              <Link
                href="/#contacto"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Direccion
              </Link>
            </li>
            <li>
              <Link
                href="/#contacto"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Telefono
              </Link>
            </li>
            <li>
              <Link
                href="/#contacto"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                Email
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="info">
        <p className="footer-bottom-text">Powered by Axiom</p>
      </div>
    </>
  );
};

export default Footer;
