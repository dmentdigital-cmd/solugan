// SOLUGAN Landing Page - Latest optimization for Desktop
import React, { useState, useEffect } from 'react';
import {
  CheckCircle,
  ArrowRight,
  ShieldCheck,
  BarChart3,
  Microscope,
  Smartphone,
  Database,
  ChevronDown,
  ChevronUp,
  Award,
  Users,
  Target,
  Plane,
  Menu,
  X
} from 'lucide-react';

// Importación de imágenes locales
import janImage from './assets/products/Jan1.jpg';
import catalogoImg from './assets/products/Catalogo.png';
import logo from './assets/LOGOSOLUGAN.webp';

// Imágenes de productos
import basculaEW7i from './assets/products/Bascula EW7i.png';
import basculaJR5000 from './assets/products/Bascula JR-5000.png';
import basculaS3 from './assets/products/Bascula S3.png';
import basculaXR5000 from './assets/products/Bascula XR-5000.png';
import ecografoDawei from './assets/products/Ecografo Dawei Neo.png';
import ecografoL60 from './assets/products/Ecografo L60.png';
import ecografoMX5Go from './assets/products/Ecografo MX5 Go.png';
import ecografoMX5 from './assets/products/Ecografo MX5.png';
import ecografoS7Plus from './assets/products/Ecografo S7+.png';
import ecografoS7 from './assets/products/Ecografo S7.png';
import lectorSycreader from './assets/products/Lector SYCREADER.png';
import lectorXRS2i from './assets/products/Lector XRS2i.png';
import aplicadorMetalico from './assets/products/Aplicador metalico de Microchips.png';
import microchipIntradermico from './assets/products/Microchip intradermico con aguja.png';

// Icono de WhatsApp personalizado (SVG)
const WhatsAppIcon = ({ size = 24, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 1 1-7.6-11.7 8.38 8.38 0 0 1 3.8.9L21 3z" />
    <path d="M15.8 11.2a1.8 1.8 0 0 0-2.6 0l-.7.7a1.2 1.2 0 0 1-1.6 0l-1.5-1.5a1.2 1.2 0 0 1 0-1.6l.7-.7a1.8 1.8 0 0 0 0-2.6l-1.3-1.3a1.8 1.8 0 0 0-2.6 0L5.2 5.5a3 3 0 0 0 0 4.2l7.1 7.1a3 3 0 0 0 4.2 0l1.3-1.3a1.8 1.8 0 0 0 0-2.6z" />
  </svg>
);

const App = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeFaq, setActiveFaq] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const WHATSAPP_URL = "https://api.whatsapp.com/send?phone=573147084328&text=Quiero%20la%20asesoria%20de%20SOLUGAN%20SG";

  const products = [
    { id: 1, name: "Báscula EW7i", image: basculaEW7i, category: "Pesaje", desc: "Báscula de alta precisión para control de peso animal." },
    { id: 2, name: "Báscula JR-5000", image: basculaJR5000, category: "Pesaje", desc: "Indicador de pesaje avanzado con memoria y Bluetooth." },
    { id: 3, name: "Báscula S3", image: basculaS3, category: "Pesaje", desc: "Sistema de pesaje compacto y fácil de usar." },
    { id: 4, name: "Báscula XR-5000", image: basculaXR5000, category: "Pesaje", desc: "La báscula más completa para gestión de datos intensiva." },
    { id: 5, name: "Ecógrafo Dawei Neo", image: ecografoDawei, category: "Reproducción", desc: "Ecografía veterinaria de alta resolución." },
    { id: 6, name: "Ecógrafo L60", image: ecografoL60, category: "Reproducción", desc: "Equipo portátil para diagnóstico rápido en campo." },
    { id: 7, name: "Ecógrafo MX5 Go", image: ecografoMX5Go, category: "Reproducción", desc: "Tecnología inalámbrica para ecografía móvil." },
    { id: 8, name: "Ecógrafo MX5", image: ecografoMX5, category: "Reproducción", desc: "Ecógrafo de última generación para especialistas." },
    { id: 9, name: "Ecógrafo S7+", image: ecografoS7Plus, category: "Reproducción", desc: "Precisión diagnóstica superior en reproducción." },
    { id: 10, name: "Ecógrafo S7", image: ecografoS7, category: "Reproducción", desc: "Calidad de imagen excepcional para el hato." },
    { id: 11, name: "Lector SYCREADER", image: lectorSycreader, category: "Identificación", desc: "Lector de chips eficiente y ergonómico." },
    { id: 12, name: "Lector XRS2i", image: lectorXRS2i, category: "Identificación", desc: "Lector de alta gama con pantalla a color." },
    { id: 13, name: "Aplicador Metálico", image: aplicadorMetalico, category: "Accesorios", desc: "Herramienta duradera para aplicación de microchips." },
    { id: 14, name: "Microchip Intradérmico", image: microchipIntradermico, category: "Identificación", desc: "Identificación animal segura e inviolable." }
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const faqs = [
    {
      q: "¿La tecnificación con Solugan es solo para grandes fincas?",
      a: "Absolutamente no. La Estrategia ETGI se adapta a pequeños y medianos productores. El problema no es el tamaño, es la falta de un sistema. Empezamos con el diagnóstico y escalamos según su presupuesto."
    },
    {
      q: "¿Cómo accedo al servicio y a la cotización de los productos?",
      a: "Solo debe contactarnos por WhatsApp. Agendaremos una reunión virtual o presencial para conocer las características únicas de su ganadería y poder presentarle un presupuesto detallado y personalizado."
    },
    {
      q: "¿Solugan SG solo vende los productos o también capacita en su uso?",
      a: "Ofrecemos la solución completa. Vendemos equipos de alta calidad (Tru-Test, Ecógrafos, Chips) y Software, brindando la capacitación técnica continua para que su personal los use de manera eficiente."
    },
    {
      q: "¿Qué tipo de tecnología ofrecen para la gestión de mi hato?",
      a: "Ofrecemos tecnología de precisión incluyendo Básculas Ganaderas Tru-Test, Software de Gestión Pecuaria (Software Ganadero SG), Chips de Identificación Electrónica, Ecógrafos y Drones para la evaluación de potreros."
    }
  ];

  return (
    <div className="min-h-screen font-sans text-slate-900 bg-white selection:bg-red-100 selection:text-red-900">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md py-2' : 'bg-white/90 backdrop-blur-sm py-4 shadow-sm'}`}>
        <div className="container mx-auto max-w-7xl px-4 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <img
              src={logo}
              alt="Solugan SG Logo"
              className="h-10 md:h-12 w-auto object-contain"
            />
            <span className="font-bold text-xl tracking-tight text-slate-900">SOLUGAN SG</span>
          </div>

          <div className="hidden md:flex items-center gap-10">
            <a
              href="#tienda"
              className="font-bold text-sm uppercase tracking-widest text-slate-600 hover:text-red-700 transition-colors"
            >
              Nuestra Tienda
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center gap-3 bg-red-700 hover:bg-red-800 text-white px-8 py-3 rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-lg shadow-red-900/20 uppercase text-xs xl:text-sm"
            >
              <WhatsAppIcon size={20} />
              Agendar Diagnóstico
            </a>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} className="text-slate-900" /> : <Menu size={28} className="text-slate-900" />}
          </button>
        </div>

        {/* Mobile Menu Dropdown */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-slate-100 p-4 absolute top-full left-0 w-full shadow-xl animate-in slide-in-from-top duration-300">
            <a
              href="#tienda"
              className="block py-4 text-center font-bold uppercase text-slate-900 border-b border-slate-50 mb-4"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Nuestra Tienda
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank" rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-red-700 text-white p-4 rounded-xl font-bold uppercase"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <WhatsAppIcon size={24} />
              Solicitar Asesoría Ahora
            </a>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative min-h-[95vh] flex items-center pt-20 overflow-hidden text-white bg-slate-900">
        <div className="absolute inset-0 z-0 opacity-40">
          <img
            src={catalogoImg}
            alt="Fondo Tecnológico"
            className="w-full h-full object-cover grayscale"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/80 to-transparent z-10" />
        </div>

        <div className="container mx-auto max-w-[1400px] px-4 relative z-20">
          <div className="max-w-5xl">
            <div className="inline-flex items-center gap-2 bg-red-700/90 backdrop-blur-sm px-4 py-1.5 rounded-full mb-6 border border-red-500/30 shadow-lg animate-fade-in-up">
              <Award size={18} />
              <span className="text-xs md:text-sm font-bold uppercase tracking-wider">Jan Alexander González - 15+ años liderando el campo</span>
            </div>
            <h1 className="text-4xl md:text-7xl lg:text-8xl font-black leading-[1.1] mb-6 drop-shadow-sm uppercase tracking-tighter">
              Tecnifique su Finca, <br /><span className="text-red-600">Multiplique su Ganancia</span>
            </h1>
            <p className="text-lg md:text-2xl lg:text-3xl text-slate-200 mb-10 font-light leading-relaxed max-w-4xl">
              Descubra la <strong>Estrategia ETGI</strong>: El método de tecnificación inteligente que unifica genética, drones y software para maximizar su producción real.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <a
                href={WHATSAPP_URL}
                target="_blank" rel="noopener noreferrer"
                className="group flex items-center justify-center gap-3 bg-red-700 hover:bg-red-800 text-white px-10 py-5 rounded-2xl font-black text-xl transition-all shadow-2xl shadow-red-900/40 hover:scale-[1.03] active:scale-95 uppercase tracking-tighter"
              >
                AGENDAR CITA DE DIAGNÓSTICO
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md p-3 rounded-xl border border-white/10">
                <ShieldCheck size={20} className="text-red-500 shrink-0" />
                <span className="text-sm font-medium uppercase tracking-tighter">Asistencia 100% Integral</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md p-3 rounded-xl border border-white/10">
                <Target size={20} className="text-red-500 shrink-0" />
                <span className="text-sm font-medium uppercase tracking-tighter">Resultados Medibles</span>
              </div>
              <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md p-3 rounded-xl border border-white/10">
                <Database size={20} className="text-red-500 shrink-0" />
                <span className="text-sm font-medium uppercase tracking-tighter">Tecnología de Punta</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12 xl:gap-20">
            {[
              { label: "Años de Experiencia", val: "15+" },
              { label: "Resultados Comprobados", val: "SIEMPRE" },
              { label: "Clientes Satisfechos", val: "98%" },
              { label: "Soporte Técnico", val: "24/7" }
            ].map((stat, i) => (
              <div key={i} className="text-center group">
                <div className="text-4xl md:text-5xl font-black text-red-700 mb-2 group-hover:scale-110 transition-transform tracking-tighter">{stat.val}</div>
                <div className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI for Livestock Section */}
      <section className="py-24 xl:py-32 bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 z-0 opacity-30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl -mr-48 -mt-48" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-600/20 rounded-full blur-3xl -ml-48 -mb-48" />
          <div className="absolute inset-0 flex items-center justify-center z-5 opacity-20">
            <span className="text-9xl xl:text-[200px] font-black uppercase tracking-tighter text-white/30 text-center leading-none select-none pointer-events-none">Inteligencia Artificial Aplicada a la Ganadería</span>
          </div>
        </div>

        <div className="container mx-auto max-w-7xl px-4 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 bg-blue-600/90 backdrop-blur-sm px-4 py-1.5 rounded-full mb-6 border border-blue-400/30 shadow-lg">
              <Microscope size={18} />
              <span className="text-xs md:text-sm font-bold uppercase tracking-wider">Inteligencia Artificial en Ganadería</span>
            </div>
            <h2 className="text-4xl md:text-6xl xl:text-7xl font-black mb-6 uppercase tracking-tighter">
              Solugan: Referente de <span className="text-blue-400">IA Aplicada</span> en Ganadería
            </h2>
            <p className="text-slate-300 text-lg xl:text-2xl max-w-4xl mx-auto font-light leading-relaxed">
              Desarrollamos soluciones inteligentes utilizando los modelos de frontera más avanzados y la tecnología más reciente para optimizar cada aspecto de su operación ganadera.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-stretch">
            {/* IATF Pro App */}
            <a
              href="https://iatf-pro-by-solugan-sg.vercel.app/"
              target="_blank" rel="noopener noreferrer"
              className="group p-10 xl:p-12 rounded-3xl border border-blue-500/30 bg-gradient-to-br from-blue-900/40 via-slate-800/40 to-slate-900/60 hover:border-blue-400/60 transition-all hover:shadow-2xl hover:shadow-blue-500/20 flex flex-col h-full"
            >
              <div className="flex-grow">
                <div className="inline-block mb-6 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-400/50">
                  <span className="text-blue-300 text-sm font-bold uppercase tracking-wider">Reproducción Inteligente</span>
                </div>
                <h3 className="text-3xl xl:text-4xl font-black mb-5 uppercase tracking-tight group-hover:text-blue-300 transition-colors">
                  IATF Pro
                </h3>
                <p className="text-slate-300 text-lg leading-relaxed mb-6 font-light">
                  Plataforma IA para inseminación artificial a tiempo fijo. Predicción de ciclos, optimización de protocolos y resultados en tiempo real.
                </p>
              </div>
              <div className="flex items-center gap-3 text-blue-400 font-bold group-hover:gap-5 transition-all">
                <span>Acceder a IATF Pro</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </div>
            </a>

            {/* BovSal Control Pro App */}
            <a
              href="https://bovisal-control-pro.vercel.app/"
              target="_blank" rel="noopener noreferrer"
              className="group p-10 xl:p-12 rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-cyan-900/40 via-slate-800/40 to-slate-900/60 hover:border-cyan-400/60 transition-all hover:shadow-2xl hover:shadow-cyan-500/20 flex flex-col h-full"
            >
              <div className="flex-grow">
                <div className="inline-block mb-6 px-4 py-2 rounded-full bg-cyan-500/20 border border-cyan-400/50">
                  <span className="text-cyan-300 text-sm font-bold uppercase tracking-wider">Control Nutricional</span>
                </div>
                <h3 className="text-3xl xl:text-4xl font-black mb-5 uppercase tracking-tight group-hover:text-cyan-300 transition-colors">
                  BovSal Control Pro
                </h3>
                <p className="text-slate-300 text-lg leading-relaxed mb-6 font-light">
                  Gestión inteligente de nutrición bovina. Análisis de mineralizacion, salud ruminal y rendimiento productivo con IA predictiva.
                </p>
              </div>
              <div className="flex items-center gap-3 text-cyan-400 font-bold group-hover:gap-5 transition-all">
                <span>Acceder a BovSal Control Pro</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </div>
            </a>
          </div>

          <div className="mt-16 p-10 xl:p-12 rounded-3xl bg-gradient-to-r from-blue-900/30 via-slate-800/30 to-cyan-900/30 border border-blue-500/20 backdrop-blur-sm">
            <p className="text-center text-slate-200 text-lg xl:text-xl leading-relaxed">
              <span className="font-bold text-blue-300">Desarrollado con tecnología de vanguardia:</span> Nuestras aplicaciones utilizan modelos de inteligencia artificial de frontera y algoritmos avanzados para transformar datos en decisiones estratégicas que multiplican su rentabilidad ganadera.
            </p>
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-24 lg:py-32 bg-white text-slate-900">
        <div className="container mx-auto max-w-[1400px] px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16 lg:mb-24">
              <h2 className="text-3xl md:text-5xl lg:text-7xl font-black text-slate-900 mb-6 uppercase tracking-tight leading-tight">
                ¿Su finca es un negocio o <span className="text-red-700 font-black">un gasto constante?</span>
              </h2>
              <div className="w-24 h-2 bg-red-700 mx-auto rounded-full" />
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                {[
                  "Intervalos entre partos demasiado largos (Baja preñez).",
                  "Gasto excesivo en sales y suplementos sin control de peso real.",
                  "Falta de trazabilidad: No sabe qué animal es rentable y cuál no.",
                  "Miedo a que la tecnología sea 'complicada' o 'costosa'."
                ].map((item, i) => (
                  <div key={i} className="flex gap-4 p-5 bg-red-50/50 rounded-2xl border border-red-100 group hover:bg-red-50 transition-colors">
                    <div className="shrink-0 w-8 h-8 rounded-full bg-red-700 text-white flex items-center justify-center font-bold shadow-md">!</div>
                    <p className="text-slate-700 font-medium italic leading-relaxed">"{item}"</p>
                  </div>
                ))}
              </div>
              <div className="bg-slate-900 p-10 xl:p-16 rounded-[2.5rem] xl:rounded-[4rem] text-white shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-red-700/20 rounded-full blur-3xl -mr-24 -mt-24" />
                <h3 className="text-2xl xl:text-4xl font-bold mb-6 italic uppercase tracking-tighter leading-tight">La cruda realidad ganadera</h3>
                <p className="text-slate-300 leading-relaxed mb-8 text-lg xl:text-xl font-light">
                  Cada mes que pospone la tecnificación, está dejando dinero en la mesa. La ineficiencia biológica de su hato le está costando millones al año en terneros no nacidos y kilos no ganados.
                </p>
                <div className="bg-white/10 backdrop-blur-sm p-6 xl:p-10 rounded-2xl xl:rounded-3xl border border-white/10 text-center">
                  <p className="font-bold text-red-500 mb-1 tracking-wider uppercase text-xs xl:text-sm">EL DIAGNÓSTICO:</p>
                  <p className="text-white font-medium uppercase tracking-tighter xl:text-2xl">No es su ganado el problema. Es la falta de un sistema integral de precisión.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions / Products Grid */}
      <section className="py-24 xl:py-32 bg-slate-900 text-white">
        <div className="container mx-auto max-w-7xl px-4 text-center mb-20">
          <h2 className="text-4xl md:text-6xl xl:text-7xl font-black mb-6 italic uppercase tracking-tighter">Tecnología del Siglo XXI</h2>
          <p className="text-slate-400 text-xl xl:text-2xl max-w-3xl mx-auto font-light leading-relaxed">Nuestra artillería tecnológica para dominar el mercado ganadero con precisión absoluta.</p>
        </div>

        <div className="container mx-auto max-w-7xl px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-12">
          {[
            {
              icon: <Plane size={40} />,
              title: "Drones de Precisión",
              desc: "Evaluación aérea de potreros y aforo de pasturas para optimizar la carga animal sin adivinanzas."
            },
            {
              image: basculaEW7i,
              title: "Básculas Tru-Test",
              desc: "Control exacto de la Ganancia Diaria de Peso (GDP) con los equipos más resistentes del mundo, como la serie EW7i."
            },
            {
              icon: <Smartphone size={40} />,
              title: "Software Ganadero SG",
              desc: "Su finca en su bolsillo. Gestión total de datos reproductivos y financieros en tiempo real."
            },
            {
              image: ecografoMX5Go,
              title: "Reproducción de Élite",
              desc: "Protocolos de IATF, Transferencia de Embriones y ecografía para acelerar su genética."
            },
            {
              image: lectorXRS2i,
              title: "Identificación RFID",
              desc: "Chips electrónicos de alta seguridad para una trazabilidad individual e inviolable."
            },
            {
              icon: <Target size={40} />,
              title: "Nutrición Basada en Datos",
              desc: "Sales mineralizadas personalizadas según el análisis bromatológico de sus propios pastos."
            }
          ].map((item, i) => (
            <div key={i} className="group p-8 bg-slate-800/50 rounded-[2rem] border border-slate-700 hover:border-red-600 transition-all hover:-translate-y-2 flex flex-col h-full shadow-lg">
              <div className="mb-6 h-28 flex items-center justify-center relative overflow-hidden">
                {item.image ? (
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-h-full max-w-full object-contain drop-shadow-[0_0_15px_rgba(255,255,255,0.1)] transition-transform group-hover:scale-110"
                  />
                ) : (
                  <div className="text-red-600 group-hover:scale-110 transition-transform">{item.icon}</div>
                )}
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-tight leading-tight">{item.title}</h3>
              <p className="text-slate-400 leading-relaxed flex-grow text-sm font-light">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* New Tienda Section */}
        <div id="tienda" className="container mx-auto max-w-[1500px] px-4 mt-32 lg:mt-48">
          <div className="text-center mb-16 lg:mb-24">
            <h2 className="text-4xl md:text-5xl lg:text-8xl font-black mb-6 uppercase tracking-tighter italic">Nuestra Tienda</h2>
            <p className="text-slate-400 text-lg lg:text-2xl max-w-4xl mx-auto font-light">Explora nuestro catálogo completo de herramientas de precisión.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-6 gap-6 lg:gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-slate-800/30 border border-slate-700 rounded-2xl p-4 hover:border-red-600 transition-all cursor-pointer group flex flex-col items-center text-center"
                onClick={() => setSelectedProduct(product)}
              >
                <div className="h-40 w-full flex items-center justify-center mb-4 p-2">
                  <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain group-hover:scale-110 transition-transform" />
                </div>
                <h4 className="text-sm font-bold uppercase tracking-tight mb-2">{product.name}</h4>
                <span className="text-[10px] bg-red-700/20 text-red-500 px-2 py-0.5 rounded-full font-bold uppercase border border-red-500/20">{product.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expert Profile */}
      <section className="py-24 xl:py-32 bg-white overflow-hidden text-slate-900">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 xl:gap-24">
            <div className="w-full lg:w-1/2 relative group">
              <div className="absolute inset-0 bg-red-700 rounded-[3rem] rotate-3 group-hover:rotate-1 transition-transform shadow-xl" />
              <div className="relative aspect-[4/5] bg-slate-100 rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white flex flex-col items-center justify-center">
                <img
                  src={janImage}
                  alt="Jan Alexander González"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <h2 className="text-4xl md:text-5xl xl:text-7xl font-black mb-6 leading-tight uppercase tracking-tighter">
                Asesoría con <span className="text-red-700">Rigor Científico</span> y Experiencia de Campo
              </h2>
              <p className="text-xl xl:text-2xl text-slate-600 mb-8 font-light italic leading-relaxed">
                "Mi enfoque no es solo médico, es empresarial. Llevo 15 años demostrando que tecnificar es el único camino para que el ganadero deje de ser un esclavo de su finca y pase a ser un gerente de su negocio."
              </p>

              <div className="grid sm:grid-cols-2 gap-4 mb-10 text-slate-900 font-bold uppercase tracking-tight text-xs">
                {[
                  "Especialista en IATF",
                  "Gestión de Datos Pecuarios",
                  "Mapeo con Drones",
                  "Experto en Tru-Test"
                ].map((tag, i) => (
                  <div key={i} className="flex items-center gap-4 p-4 bg-slate-50 rounded-2xl border border-slate-100 hover:border-red-200 transition-colors shadow-sm">
                    <CheckCircle className="text-red-700 shrink-0" size={20} />
                    <span>{tag}</span>
                  </div>
                ))}
              </div>

              <a
                href={WHATSAPP_URL}
                target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-red-700 font-black text-lg hover:gap-5 transition-all uppercase tracking-tight italic"
              >
                HABLAR DIRECTAMENTE CON EL ASESOR <ArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Bonuses */}
      <section className="py-24 lg:py-40 bg-red-700 text-white relative overflow-hidden text-center">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[120px] -ml-64 -mt-64" />
        <div className="container mx-auto max-w-[1400px] px-4">
          <h2 className="text-4xl md:text-6xl lg:text-9xl font-black mb-16 lg:mb-32 italic uppercase tracking-tighter leading-none">3 Regalos Exclusivos para Usted</h2>

          <div className="grid md:grid-cols-3 gap-10 lg:gap-16 max-w-7xl mx-auto">
            <div className="bg-white/10 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/20 hover:bg-white/20 transition-all shadow-xl">
              <div className="text-red-200 text-xs font-black uppercase mb-4 tracking-widest">Bono de Sistematización</div>
              <h4 className="text-2xl font-black mb-4 uppercase tracking-tighter leading-tight">Software Ganadero SG</h4>
              <p className="text-red-50 mb-8 opacity-80 leading-relaxed italic font-light text-sm uppercase">Acompañamiento estratégico inicial para empezar a medir todo desde mañana mismo.</p>
              <div className="py-2 px-5 bg-white text-red-700 rounded-full font-black text-[10px] inline-block uppercase tracking-tight shadow-md">INCLUIDO EN ASISTENCIA</div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl p-10 rounded-[2.5rem] border-2 border-white/40 shadow-2xl relative md:-translate-y-4">
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-white text-red-700 px-4 py-1 rounded-full text-[10px] font-black shadow-md uppercase">LO MÁS SOLICITADO</div>
              <div className="text-red-200 text-xs font-black uppercase mb-4 tracking-widest">Bono Tecnológico</div>
              <h4 className="text-2xl font-black mb-4 uppercase tracking-tighter leading-tight">Descuento en Equipos</h4>
              <p className="text-red-50 mb-8 opacity-80 leading-relaxed italic font-light text-sm uppercase">Precio preferencial exclusivo en Básculas Tru-Test y Ecógrafos al iniciar asistencia.</p>
              <div className="py-2 px-5 bg-white text-red-700 rounded-full font-black text-[10px] inline-block uppercase tracking-tight shadow-md">AHORRO HASTA EL 15%</div>
            </div>

            <div className="bg-white/10 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white/20 hover:bg-white/20 transition-all shadow-xl">
              <div className="text-red-200 text-xs font-black uppercase mb-4 tracking-widest">Bono de Conocimiento</div>
              <h4 className="text-2xl font-black mb-4 uppercase tracking-tighter leading-tight">Masterclass Nutrición</h4>
              <p className="text-red-50 mb-8 opacity-80 leading-relaxed italic font-light text-sm uppercase">Guía estratégica sobre sales y pasturas basada en 15 años de análisis de campo.</p>
              <div className="py-2 px-5 bg-white text-red-700 rounded-full font-black text-[10px] inline-block uppercase tracking-tight shadow-md">RECURSO EXCLUSIVO</div>
            </div>
          </div>
        </div>
      </section>

      {/* Main CTA Block */}
      <section className="py-24 lg:py-40 bg-slate-50">
        <div className="container mx-auto max-w-[1400px] px-4">
          <div className="max-w-7xl mx-auto bg-white rounded-[3rem] lg:rounded-[6rem] shadow-2xl shadow-slate-200 border border-slate-100 overflow-hidden">
            <div className="p-8 md:p-20 lg:p-40 text-center">
              <h2 className="text-4xl md:text-5xl lg:text-9xl font-black mb-8 uppercase tracking-tighter italic leading-none text-slate-900">Su Finca, Su Futuro.</h2>
              <p className="text-xl lg:text-3xl text-slate-500 mb-12 lg:mb-24 max-w-4xl mx-auto font-light leading-relaxed">No agende una cita si no está dispuesto a cambiar su forma de producir. El éxito ganadero requiere decisión y tecnología.</p>

              <div className="grid md:grid-cols-2 gap-4 mb-16 text-left max-w-3xl mx-auto">
                {[
                  "Asesoría Nacional Experta",
                  "Equipos de Última Gama",
                  "Sistematización de Datos",
                  "Cita de Diagnóstico Inicial"
                ].map((feature, i) => (
                  <div key={i} className={`flex items-center gap-4 p-5 rounded-2xl ${i === 3 ? 'bg-red-700 text-white shadow-xl shadow-red-900/20' : 'bg-slate-50 border border-slate-100'}`}>
                    <CheckCircle className={i === 3 ? 'text-white' : 'text-red-700'} size={24} />
                    <span className="font-bold uppercase text-xs tracking-tight">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="mb-12">
                <div className="text-slate-400 font-bold uppercase tracking-[0.2em] text-[10px] mb-6 leading-none">FASE DE ADMISIONES ABIERTA PARA ESTE MES</div>
                <a
                  href={WHATSAPP_URL}
                  target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-5 bg-red-700 hover:bg-red-800 text-white px-8 md:px-12 py-6 md:py-8 rounded-[2rem] font-black text-xl md:text-4xl transition-all shadow-2xl shadow-red-900/40 w-full hover:scale-[1.02] active:scale-95 group tracking-tighter uppercase"
                >
                  <WhatsAppIcon size={44} className="group-hover:rotate-12 transition-transform hidden md:block" />
                  AGENDAR POR WHATSAPP
                </a>
                <p className="mt-8 text-red-700 font-black animate-pulse uppercase tracking-widest text-[10px] md:text-xs italic leading-none">⚠️ Cupos limitados para asesoría personalizada</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guarantee */}
      <section className="py-20 xl:py-32 bg-white">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="bg-slate-50 rounded-[3rem] xl:rounded-[5rem] p-10 md:p-16 xl:p-24 flex flex-col md:flex-row items-center gap-12 xl:gap-20 border border-slate-100 shadow-sm">
            <div className="shrink-0">
              <div className="w-40 h-40 md:w-56 md:h-56 rounded-full bg-white shadow-2xl flex flex-col items-center justify-center border-8 border-red-50 text-red-700 relative">
                <ShieldCheck size={80} strokeWidth={1.5} />
                <div className="font-black text-2xl uppercase mt-2 italic tracking-tighter leading-none">Garantía</div>
              </div>
            </div>
            <div>
              <h3 className="text-3xl font-black mb-4 italic uppercase tracking-tighter leading-tight text-slate-900">Compromiso Mutuo 6 Meses</h3>
              <p className="text-slate-600 text-lg leading-relaxed mb-6 italic font-light">
                "Nuestra garantía de resultados se basa en la disciplina. Si usted sigue al pie de la letra nuestros protocolos de tecnificación durante 6 meses y no ve una mejora en su productividad, trabajaremos hombro a hombro sin costo adicional."
              </p>
              <div className="bg-slate-900 text-white px-5 py-2 rounded-full text-[10px] font-black tracking-widest inline-block uppercase shadow-sm">Sujeto a Cumplimiento Técnico</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white border-t border-slate-100 text-slate-900">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-black italic uppercase tracking-tighter leading-none">Preguntas Frecuentes</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-slate-100 rounded-[2rem] overflow-hidden bg-white shadow-sm transition-all hover:shadow-md text-left">
                <button
                  className="w-full p-8 text-left flex justify-between items-center group"
                  onClick={() => setActiveFaq(activeFaq === index ? null : index)}
                >
                  <span className="font-black text-slate-800 text-base md:text-lg pr-4 uppercase tracking-tight leading-tight">{faq.q}</span>
                  <div className={`shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-all ${activeFaq === index ? 'bg-red-700 text-white rotate-180' : 'bg-slate-50 text-slate-400 group-hover:bg-red-50'}`}>
                    {activeFaq === index ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                  </div>
                </button>
                <div className={`transition-all duration-300 ${activeFaq === index ? 'max-h-96 opacity-100 p-8 pt-0' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                  <p className="text-slate-600 text-left leading-relaxed text-sm md:text-lg pt-6 border-t border-slate-50 italic font-light">
                    {faq.a}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-20 xl:py-32 bg-slate-900 text-white">
        <div className="container mx-auto max-w-7xl px-4">
          <div className="flex flex-col lg:flex-row justify-between items-center gap-12 pb-12 border-b border-slate-800">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-red-700 rounded-full flex items-center justify-center text-white font-black text-3xl shadow-xl">SG</div>
              <div className="text-left">
                <span className="font-black text-2xl tracking-tighter block leading-none uppercase tracking-tight">SOLUGAN SG</span>
                <span className="text-red-500 text-[10px] font-black uppercase tracking-[0.2em] mt-2 block opacity-80 uppercase leading-none">Tecnificación Ganadera de Precisión</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-10 font-black text-slate-500">
              {['Facebook', 'Instagram', 'TikTok', 'YouTube'].map((social) => (
                <a key={social} href="#" className="hover:text-red-500 transition-colors uppercase text-[10px] tracking-[0.25em]">{social}</a>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center text-slate-600 text-[10px] font-bold">
            <p className="mb-2 uppercase tracking-widest opacity-50">Solugan SG - Asesoría Profesional por Jan Alexander González</p>
            <p className="opacity-30 tracking-tight uppercase">© 2024 Todos los derechos reservados. Diseñado para Ganaderos de Resultados.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 md:bottom-10 md:right-10 z-[100] flex flex-col items-end gap-3">
        <div className="bg-white px-4 py-2 rounded-xl shadow-xl border border-slate-100 text-slate-900 text-xs font-bold uppercase tracking-wider animate-in fade-in slide-in-from-right-4 duration-500 hidden md:block">
          ¿Dudas? Chat Directo
        </div>
        <a
          href={WHATSAPP_URL}
          target="_blank" rel="noopener noreferrer"
          className="bg-[#25D366] text-white p-4 md:p-6 rounded-full shadow-[0_10px_40px_rgba(37,211,102,0.4)] border-2 border-white/20 hover:scale-110 active:scale-95 transition-all group relative overflow-hidden"
          title="Contactar por WhatsApp"
        >
          <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
          <WhatsAppIcon size={32} className="relative z-10" />
        </a>
      </div>

      {/* Product Modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div className="absolute inset-0 bg-slate-900/90 backdrop-blur-md" onClick={() => setSelectedProduct(null)}></div>
          <div className="relative bg-white text-slate-900 w-full max-w-4xl lg:max-w-5xl rounded-[2.5rem] lg:rounded-[4rem] overflow-hidden shadow-2xl animate-in zoom-in-95 duration-200">
            <button
              className="absolute top-6 right-6 lg:top-8 lg:right-8 p-3 bg-slate-100 hover:bg-slate-200 rounded-full transition-colors z-10"
              onClick={() => setSelectedProduct(null)}
            >
              <X size={28} />
            </button>
            <div className="flex flex-col md:flex-row h-full">
              <div className="w-full md:w-1/2 bg-slate-50 p-12 lg:p-20 flex items-center justify-center">
                <img src={selectedProduct.image} alt={selectedProduct.name} className="max-h-[300px] lg:max-h-[500px] w-auto object-contain drop-shadow-2xl" />
              </div>
              <div className="w-full md:w-1/2 p-10 lg:p-20 flex flex-col justify-center">
                <span className="text-red-700 font-bold uppercase tracking-widest text-[10px] lg:text-xs mb-2">{selectedProduct.category}</span>
                <h3 className="text-3xl lg:text-6xl font-black uppercase tracking-tighter mb-4 lg:mb-8 leading-none">{selectedProduct.name}</h3>
                <p className="text-slate-600 mb-8 lg:mb-12 font-light leading-relaxed italic text-lg lg:text-2xl">"{selectedProduct.desc}"</p>
                <a
                  href={`https://api.whatsapp.com/send?phone=573147084328&text=Hola,%20me%20interesa%20el%20producto:%20${encodeURIComponent(selectedProduct.name)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-red-700 hover:bg-red-800 text-white p-6 lg:p-8 rounded-2xl lg:rounded-[2rem] font-black uppercase transition-all hover:scale-105 active:scale-95 shadow-lg shadow-red-900/20 text-xl"
                >
                  <WhatsAppIcon size={24} />
                  Cotizar Ahora
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
