# Landing Page - Solugan: Tecnología para el Campo

## Descripción General
Este proyecto es una Landing Page moderna e interactiva desarrollada para **Solugan**, enfocada en ofrecer soluciones tecnológicas y servicios para el campo. Está construida usando las últimas tecnologías de desarrollo web moderno para garantizar una carga rápida, optimización para motores de búsqueda (SEO) y una experiencia de usuario (UX) atractiva.

## Funcionalidades Principales
- **Diseño Responsivo:** Adaptación perfecta a dispositivos móviles, tablets y computadoras de escritorio.
- **Micro-interacciones y Animaciones:** Diseño atractivo con elementos interactivos, hover effects y transiciones fluidas.
- **Rendimiento Optimizado:** Velocidad de carga rápida asegurada por el empaquetador Vite.
- **Iconografía Moderna:** Uso de `lucide-react` para iconos livianos y consistentes.
- **Estilos Estilizados:** Interfaz construida íntegramente con `Tailwind CSS` para un mantenimiento ágil y estilos modulares.

## Tecnologías Utilizadas
- **Core:** JavaScript, HTML5
- **Framework UI:** React 19
- **Build Tool:** Vite
- **Estilos:** Tailwind CSS, PostCSS, Autoprefixer
- **Íconos:** Lucide React

## Requisitos Técnicos
Para ejecutar este proyecto de forma local, es necesario contar con:
- Node.js (v18.x o superior recomendado)
- npm o yarn como gestor de paquetes

## Estructura de Carpetas

```text
├── src/                  # Código fuente principal de la aplicación
│   ├── assets/           # Imágenes corporativas, recursos y multimedia estática
│   ├── App.jsx           # Componente principal que define la lógica y estructura de la Landing Page
│   ├── App.css           # Estilos específicos del componente App
│   ├── index.css         # Archivo raíz de TailwindCSS y estilos globales
│   └── main.jsx          # Punto de entrada de React en la aplicación
├── dist/                 # Carpeta generada para producción post-build (Lista para Netlify u otro hosting)
├── public/               # Archivos estáticos accesibles directamente o por dependencias globales
├── index.html            # Archivo base de la aplicación web
├── package.json          # Archivo de configuración que contiene las dependencias y scripts del proyecto
├── tailwind.config.cjs   # Configuración y extendibilidad del theme usando Tailwind
└── vite.config.js        # Configuración de Vite (incluye configuración de base router '/')
```

## Instalación y Ejecución en Local

Sigue los siguientes pasos para lanzar el entorno de desarrollo localmente:

1. **Instalar las dependencias del proyecto:**
   Abre una terminal en el directorio raíz del proyecto y ejecuta:
   ```bash
   npm install
   ```

2. **Iniciar el Servidor de Desarrollo:**
   Una vez instaladas las dependencias, lanza el servidor corriendo el siguiente comando:
   ```bash
   npm run dev
   ```

3. **Ver la Aplicación:**
   Por defecto, Vite abrirá tu navegador o te mostrará una dirección de tipo `http://localhost:5173/`. Abre ese enlace para interactuar con la página en tiempo real.

## Despliegue en Producción (Netlify)

La estructura está completamente automatizada para ser fácilmente empaquetada.
1. Ejecuta el empaquetado final:
   ```bash
   npm run build
   ```
2. Esto generará o actualizará automáticamente la carpeta `dist`.
3. Sube (o arrastra) la carpeta `dist` directamente a las credenciales de Netlify en la sección **Production Deploy**.
\* **Nota:** Asegúrate de que en `vite.config.js` la propiedad `base` esté designada como `'/'` para despliegues alojados en directorios raíz.

## Scripts Disponibles
- `npm run dev` - Inicia el entorno de desarrollo.
- `npm run build` - Genera una build estática para pasarlo a producción (carpeta `dist`).
- `npm run preview` - Pre-visualiza la build de producción de manera local en un servidor temporal.
- `npm run lint` - Ejecuta la verificación de errores del código fuente (ESLint).
