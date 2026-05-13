import React from "react";
import Image from "next/image";
import About from "@/components/about/About";
import Timeline from "@/components/about/Timeline";
import { FaChurch, FaHandHoldingHeart, FaUserFriends, FaMapMarkedAlt } from "react-icons/fa";
import mapaInstalaciones from "@/assets/images/Instalaciones.png";

export default function SobreNosotrosPage() {
  return (
    <div className="animate-fade-in-up">
      {/* Secciones Informativas Principales (About Component) */}
      <About />

      {/* Línea de Tiempo Interactiva */}
      <Timeline />

      {/* Detalles Adicionales: Arquitectura y Servicios */}
      <section style={{ padding: "80px 24px", background: "#f8fafc" }}>
        <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
          <h2
            style={{
              textAlign: "center",
              fontSize: "3rem",
              color: "#003a70",
              marginBottom: "60px",
              fontWeight: "800"
            }}
          >
            Más que una Institución
          </h2>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "40px",
              marginBottom: "80px"
            }}
          >
            {/* Arquitectura */}
            <div
              style={{
                background: "white",
                padding: "40px",
                borderRadius: "32px",
                boxShadow: "0 20px 40px rgba(0,0,0,0.05)",
                border: "1px solid rgba(0,58,112,0.05)"
              }}
            >
              <div
                style={{
                  color: "#003a70",
                  fontSize: "2.5rem",
                  marginBottom: "20px",
                }}
              >
                <FaChurch />
              </div>
              <h3 style={{ fontSize: "1.6rem", marginBottom: "15px", color: "#003a70", fontWeight: "700" }}>
                Arquitectura Neogótica
              </h3>
              <p style={{ color: "#4a5568", lineHeight: "1.8", fontSize: "1.1rem" }}>
                Nuestro edificio principal ocupa una manzana completa en la zona
                1. Su estilo neogótico y la capilla histórica son reconocidos
                como Patrimonio Cultural del Centro Histórico.
              </p>
            </div>

            {/* Servicios Sociales */}
            <div
              style={{
                background: "white",
                padding: "40px",
                borderRadius: "32px",
                boxShadow: "0 20px 40px rgba(0,0,0,0.05)",
                border: "1px solid rgba(0,58,112,0.05)"
              }}
            >
              <div
                style={{
                  color: "#003a70",
                  fontSize: "2.5rem",
                  marginBottom: "20px",
                }}
              >
                <FaHandHoldingHeart />
              </div>
              <h3 style={{ fontSize: "1.6rem", marginBottom: "15px", color: "#003a70", fontWeight: "700" }}>
                Asistencia Social
              </h3>
              <p style={{ color: "#4a5568", lineHeight: "1.8", fontSize: "1.1rem" }}>
                Contamos con un comedor para personas necesitadas, clínicas
                médicas con farmacia y laboratorio, brindando servicios a costos
                simbólicos para la comunidad.
              </p>
            </div>

            {/* Población Actual */}
            <div
              style={{
                background: "white",
                padding: "40px",
                borderRadius: "32px",
                boxShadow: "0 20px 40px rgba(0,0,0,0.05)",
                border: "1px solid rgba(0,58,112,0.05)"
              }}
            >
              <div
                style={{
                  color: "#003a70",
                  fontSize: "2.5rem",
                  marginBottom: "20px",
                }}
              >
                <FaUserFriends />
              </div>
              <h3 style={{ fontSize: "1.6rem", marginBottom: "15px", color: "#003a70", fontWeight: "700" }}>
                Impacto Educativo
              </h3>
              <p style={{ color: "#4a5568", lineHeight: "1.8", fontSize: "1.1rem" }}>
                Atendemos a una población estudiantil diversa en primaria e
                instituto normal, manteniendo la excelencia académica y moral
                que nos caracteriza desde 1945.
              </p>
            </div>
          </div>

          {/* Mapa de Instalaciones */}
          <div className="installations-map-section" style={{ marginTop: "100px" }}>
            <div style={{ textAlign: "center", marginBottom: "50px" }}>
              <FaMapMarkedAlt style={{ fontSize: "3rem", color: "#d4af37", marginBottom: "20px" }} />
              <h2 style={{ fontSize: "2.5rem", color: "#003a70", fontWeight: "800" }}>Nuestras Instalaciones</h2>
              <p style={{ color: "#4a5568", fontSize: "1.2rem" }}>Conoce la distribución de nuestro campus histórico</p>
            </div>
            
            <div style={{ 
              background: "white", 
              padding: "20px", 
              borderRadius: "40px", 
              boxShadow: "0 30px 60px rgba(0,0,0,0.1)",
              overflow: "hidden"
            }}>
              <Image 
                src={mapaInstalaciones} 
                alt="Mapa de Instalaciones Casa Central" 
                layout="responsive"
                placeholder="blur"
                className="map-image"
                style={{ borderRadius: "20px" }}
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

