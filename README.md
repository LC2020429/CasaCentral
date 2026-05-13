# Casa Central - Portal Institucional 🏫

Este es el repositorio oficial del sitio web moderno del **Instituto Normal Casa Central**. Un portal diseñado para centralizar la información académica, histórica y de obra social de la institución, ofreciendo una experiencia de usuario premium y herramientas interactivas de vanguardia.

---

## ✨ Características Principales

- **Diseño Premium & Responsive**: Interfaz moderna con animaciones fluidas, glassmorphism y una paleta de colores institucional (Azul Marino y Dorado).
- **Gestión Educativa Interactiva**:
  - Sección de **Diversificado** con menú dinámico para explorar carreras (Magisterio, Bachilleratos).
  - Páginas detalladas para **Primaria** y **Básico** con enfoque en pilares de aprendizaje.
- **Asistente Virtual con IA**: Chat en vivo integrado con la API de **Groq**, proporcionando respuestas precisas basadas en el contexto histórico y académico de la institución.
- **Historia y Patrimonio**: Línea de tiempo interactiva que recorre el legado de Casa Central desde 1945.
- **Sección de Banda Consolidada**: Espacio unificado para la historia, logros (Pentacampeonas) y metodología de la Banda Escolar.
- **Portal de Donaciones**: Diseño visual enfocado en el impacto social (Comedor Solidario, Clínicas Médicas).

---

## 🚀 Tecnologías Utilizadas

- **Framework**: [Next.js 15+](https://nextjs.org/) (App Router)
- **Biblioteca UI**: [React 19](https://reactjs.org/)
- **Estilos**: CSS3 Personalizado (Vanilla CSS) para máxima flexibilidad.
- **Iconografía**: [React Icons](https://react-icons.github.io/react-icons/) (Font Awesome / Material Design)
- **IA**: [Groq API](https://groq.com/) (Llama 3.3 70B) para el soporte en vivo.

---

## 🛠️ Instalación y Configuración

Sigue estos pasos para ejecutar el proyecto localmente:

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/LC2020429/CasaCentral.git
   ```

2. **Instalar dependencias:**
   ```bash
   npm install
   ```

3. **Configurar variables de entorno:**
   Crea un archivo `.env` en la raíz del proyecto y añade tu API Key de Groq:
   ```env
   ApiIa=tu_api_key_de_groq_aqui
   ```

4. **Ejecutar en modo desarrollo:**
   ```bash
   npm run dev
   ```

5. **Abrir en el navegador:**
   Visita [http://localhost:3000](http://localhost:3000)

---

## 📂 Estructura del Proyecto

- `src/app/`: Rutas y páginas principales del App Router.
- `src/components/`: Componentes reutilizables (Navbar, Footer, LiveSupport, etc.).
- `src/assets/`: Imágenes, logotipos y recursos visuales.
- `src/css/`: Hojas de estilo modulares para cada sección.
- `src/app/api/`: Endpoints de backend (Chat AI).

---

## 💙 Contribuciones

Este proyecto fue desarrollado para modernizar la presencia digital de Casa Central. Si deseas contribuir con mejoras visuales o funcionales, por favor abre un *Pull Request* o reporta un *Issue*.

---

## 📜 Licencia

© 2026 Instituto Normal Casa Central. Todos los derechos reservados.
