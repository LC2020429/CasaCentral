"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../assets/images/logoCCsf.png";
import "../css/principal/navbar.css";

export const Navbar = () => {
  const [hidden, setHidden] = useState(false);
  const [navHeight, setNavHeight] = useState(0);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const navRef = useRef(null);
  const lastScroll = useRef(typeof window !== "undefined" ? window.scrollY : 0);
  const ticking = useRef(false);

  const toggleSubMenu = (menuName) => {
    setOpenSubMenu(openSubMenu === menuName ? null : menuName);
  };

  useEffect(() => {
    const setHeight = () => {
      if (navRef.current) setNavHeight(navRef.current.offsetHeight);
    };
    setHeight();
    window.addEventListener("resize", setHeight);
    return () => window.removeEventListener("resize", setHeight);
  }, []);

  useEffect(() => {
    const handle = () => {
      const current = window.scrollY;
      if (Math.abs(current - lastScroll.current) < 5) {
        ticking.current = false;
        return;
      }
      if (current > lastScroll.current && current > 80) {
        setHidden(true);
      } else {
        setHidden(false);
      }
      lastScroll.current = current;
      ticking.current = false;
    };

    const onScroll = () => {
      if (!ticking.current) {
        requestAnimationFrame(handle);
        ticking.current = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div
        ref={navRef}
        className={`navBar-container ${hidden ? "nav-hidden" : ""}`}
      >
        <Link href="/" className="img-logo" style={{ textDecoration: "none" }}>
          <Image src={logo} alt="Logo Casa Central" width={56} height={56} priority />
          <h1>Casa Central</h1>
        </Link>
        <div className="info-container">
          <ul>
            <li
              onMouseEnter={() => setOpenSubMenu("educacion")}
              onMouseLeave={() => setOpenSubMenu(null)}
            >
              <button
                className="nav-btn link-anim"
                onClick={() => toggleSubMenu("educacion")}
                aria-expanded={openSubMenu === "educacion"}
              >
                Educacion
              </button>
              <ul
                className={`sub-menu ${openSubMenu === "educacion" ? "open" : ""}`}
              >
                <li>
                  <Link
                    href="/educacion/primaria"
                    className="sub-link link-anim"
                    onClick={() => setOpenSubMenu(null)}
                  >
                    Primaria
                  </Link>
                </li>
                <li>
                  <Link
                    href="/educacion/basicos"
                    className="sub-link link-anim"
                    onClick={() => setOpenSubMenu(null)}
                  >
                    Basicos
                  </Link>
                </li>
                <li>
                  <Link
                    href="/educacion/diversificado"
                    className="sub-link link-anim"
                    onClick={() => setOpenSubMenu(null)}
                  >
                    Diversificado
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link
                href="/banda"
                className="nav-link link-anim"
                style={{ textDecoration: "none" }}
                onClick={() => setOpenSubMenu(null)}
              >
                Banda
              </Link>
            </li>
            <li>
              <Link
                href="/sobre-nosotros"
                className="nav-link link-anim"
                style={{ textDecoration: "none" }}
                onClick={() => setOpenSubMenu(null)}
              >
                Sobre Nosotros
              </Link>
            </li>
            <li>
              <Link
                href="/donaciones"
                className="nav-link link-anim"
                style={{ textDecoration: "none" }}
                onClick={() => setOpenSubMenu(null)}
              >
                Donaciones
              </Link>
            </li>
            <li>
              <Link
                href="/#contacto"
                className="nav-link link-anim"
                style={{ textDecoration: "none" }}
                onClick={() => setOpenSubMenu(null)}
              >
                Contacto
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div aria-hidden="true" style={{ height: navHeight }} />
    </>
  );
};

export default Navbar;
