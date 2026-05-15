"use client";

import { useEffect } from "react";

export default function SecurityGuard() {
  useEffect(() => {
    // Evitar clic derecho (menú contextual)
    const handleContextMenu = (e) => {
      e.preventDefault();
    };

    // Evitar atajos de teclado para desarrolladores y copiado
    const handleKeyDown = (e) => {
      if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "i" || e.key === "J" || e.key === "j" || e.key === "C" || e.key === "c")) ||
        (e.ctrlKey && (e.key === "U" || e.key === "u")) || // Ver código fuente
        (e.ctrlKey && (e.key === "C" || e.key === "c")) || // Copiar
        (e.metaKey && e.altKey && (e.key === "I" || e.key === "i" || e.key === "J" || e.key === "j")) || // Mac equivalents
        (e.metaKey && (e.key === "U" || e.key === "u" || e.key === "C" || e.key === "c"))
      ) {
        e.preventDefault();
      }
    };
    
    // Evitar arrastrar imágenes
    const handleDragStart = (e) => {
      if (e.target.tagName === 'IMG') {
        e.preventDefault();
      }
    };

    document.addEventListener("contextmenu", handleContextMenu);
    document.addEventListener("keydown", handleKeyDown);
    document.addEventListener("dragstart", handleDragStart);

    return () => {
      document.removeEventListener("contextmenu", handleContextMenu);
      document.removeEventListener("keydown", handleKeyDown);
      document.removeEventListener("dragstart", handleDragStart);
    };
  }, []);

  return null;
}
