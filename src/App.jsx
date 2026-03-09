import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Shield, Clock, Calculator, CheckCircle2, ArrowRight, Building,
  Users, Menu, X, Check, LayoutDashboard, Calendar, Star,
  MessageCircle, Smartphone, Zap, HelpCircle, ChevronDown
} from 'lucide-react';

import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import WhatsAppWidget from './components/WhatsAppWidget';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.3
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
};

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-[100] transition-all duration-500 ${isScrolled ? 'py-4 glass-premium' : 'py-8 bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className="flex-shrink-0 flex items-center group">
            <img src="/logo.png" alt="SueldOK" className="h-10 md:h-12 w-auto transition-transform duration-500 group-hover:scale-105" />
          </Link>

          <div className="hidden md:flex items-center space-x-10">
            {['Características', 'Funciona', 'Beneficios', 'Planes'].map((item) => (
              <a key={item} href={`/#${item.toLowerCase()}`} className="text-gray-600 hover:text-primary font-bold transition-all text-xs uppercase tracking-[0.2em]">{item}</a>
            ))}
            <div className="flex items-center gap-6 ml-4 border-l border-gray-100 pl-8">
              <a href="https://sueldok.vercel.app" className="text-gray-900 font-bold hover:text-primary transition-colors text-sm">Login</a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="https://sueldok.vercel.app"
                className="btn-premium py-3 px-8 text-xs !rounded-xl"
              >
                Empieza Gratis
              </motion.a>
            </div>
          </div>

          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-gray-900 hover:text-primary transition-colors">
              <Menu size={28} />
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="md:hidden glass-dark text-white fixed inset-0 z-[110] flex flex-col p-8"
          >
            <div className="flex justify-end mb-8">
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 hover:rotate-90 transition-transform"
              >
                <X size={40} />
              </button>
            </div>
            <div className="flex flex-col gap-8 text-4xl font-black">
              {['Características', 'Funciona', 'Beneficios', 'Planes'].map((item, idx) => (
                <motion.a
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 * idx }}
                  key={item}
                  href={`/#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="hover:text-primary transition-colors"
                >
                  {item}
                </motion.a>
              ))}
              <motion.a
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                href="https://sueldok.vercel.app"
                className="text-primary mt-4"
              >
                Iniciar Sesión
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}

function LandingHome() {
  return (
    <div className="bg-mesh overflow-hidden">
      {/* Hero Section */}
      <section className="relative pt-52 pb-20 lg:pt-64 lg:pb-32">
        <div className="absolute top-20 right-[5%] w-[600px] h-[600px] bg-primary/10 rounded-full blur-[140px] animate-drift -z-10"></div>
        <div className="absolute top-[30%] left-[-5%] w-[500px] h-[500px] bg-secondary/10 rounded-full blur-[120px] animate-float -z-10" style={{ animationDelay: '-2s' }}></div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="max-w-7xl mx-auto px-6 lg:px-8 text-center relative z-10"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/40 glass-premium text-primary font-black text-xs uppercase tracking-widest mb-12"
          >
            <Zap size={14} className="fill-current" />
            EL SOFTWARE RRHH #1 DE PARAGUAY
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black text-gray-900 tracking-tighter mb-10 leading-[0.95]"
          >
            Sueldos <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary inline-block">
              Sin Estrés.
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-xl md:text-2xl text-gray-500 max-w-3xl mx-auto leading-relaxed mb-16 font-medium"
          >
            Automatiza IPS, MTESS y Aguinaldos en segundos. La solución definitiva para empresas paraguayas que valoran su tiempo.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <motion.a
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              href="https://sueldok.vercel.app"
              className="btn-premium text-xl px-12 py-6 w-full sm:w-auto shadow-2xl"
            >
              Probar SueldOK Gratis <ArrowRight size={24} />
            </motion.a>
            <a href="#features" className="px-10 py-6 glass-premium font-black text-xl rounded-2xl hover:bg-white transition-all">
              Ver beneficios
            </a>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-16 flex items-center justify-center gap-10 text-gray-400 font-black uppercase tracking-widest text-xs"
          >
            <div className="flex items-center gap-3"><CheckCircle2 size={18} className="text-secondary" /> Sin Tarjeta</div>
            <div className="flex items-center gap-3"><CheckCircle2 size={18} className="text-secondary" /> Setup en 2m</div>
          </motion.div>
        </motion.div>

        {/* Hero Mockup */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 50 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-32 max-w-6xl mx-auto px-6 lg:px-8 relative"
        >
          <div className="absolute -inset-10 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-[4rem] blur-[100px] -z-10 animate-pulse-soft"></div>
          <div className="relative rounded-[3rem] bg-gray-900 p-2 md:p-4 shadow-[0_100px_150px_-30px_rgba(0,0,0,0.3)] overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
            <img
              src="/sueldok_hero_demo_final.webp"
              alt="Dashboard SueldOK"
              className="w-full h-auto rounded-[2.2rem] shadow-inner transition-transform duration-1000 group-hover:scale-[1.03]"
            />
          </div>
        </motion.div>
      </section>

      {/* Trusted By */}
      <section className="py-24 bg-white/30 border-y border-gray-100 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <p className="text-[10px] font-black text-gray-400 uppercase tracking-[0.4em] mb-16">EMPRESAS QUE YA CONFIAN</p>
          <div className="flex flex-wrap justify-center gap-16 md:gap-32 opacity-30 grayscale hover:grayscale-0 transition-all duration-1000">
            {['CONSULTORAS', 'RETAIL S.A.', 'GRUPO EMPRESARIAL', 'AGROPY'].map(brand => (
              <span key={brand} className="text-2xl md:text-3xl font-black tracking-tighter italic">{brand}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section id="funciona" className="py-40 relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-32"
          >
            <h2 className="text-primary font-black uppercase text-xs tracking-[0.3em] mb-6">Tu camino al éxito</h2>
            <h3 className="text-5xl md:text-7xl font-black text-gray-900 mb-10 tracking-tight">Potencia tus RRHH <br />en 3 pasos</h3>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-16">
            {[
              { i: <Smartphone />, t: 'Registra tu Empresa', d: 'Carga tus datos legales y logo para configurar tu razón social en segundos.' },
              { i: <Users />, t: 'Sincroniza Personal', d: 'Importa tus empleados masivamente. Nosotros nos encargamos de los cálculos.' },
              { i: <Zap />, t: 'Liquida y Exporta', d: 'Obtén tus recibos, IPS y MTESS listos para presentar con un solo clic.' }
            ].map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="relative group pt-10"
              >
                <div className="absolute -top-10 left-0 text-[12rem] font-black text-gray-100 group-hover:text-primary/5 transition-colors -z-10">{idx + 1}</div>
                <div className="w-24 h-24 glass-premium rounded-[2rem] flex items-center justify-center text-primary mb-10 group-hover:scale-110 group-hover:rotate-6 transition-all duration-500 shadow-2xl">{React.cloneElement(step.i, { size: 40 })}</div>
                <h4 className="text-3xl font-black mb-6 group-hover:text-primary transition-colors">{step.t}</h4>
                <p className="text-gray-500 leading-relaxed text-lg font-medium">{step.d}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-40 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-32"
          >
            <h2 className="text-secondary font-black uppercase text-xs tracking-[0.3em] mb-6">Poder Ilimitado</h2>
            <h3 className="text-5xl md:text-7xl font-black text-gray-900 mb-10 tracking-tight">El motor contable más preciso</h3>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            <FeatureCard icon={<Calculator />} title="Liquidaciones" description="Cálculo automático de IPS, Bonificación Familiar y Horas Extras legalmente exacto." delay={0.1} />
            <FeatureCard icon={<Building />} title="Multisucursal" description="Controla múltiples centros de costo y sucursales desde un solo tablero central." delay={0.2} />
            <FeatureCard icon={<Clock />} title="Biometría Web" description="Control de asistencia geolocalizado para que tu equipo marque desde su celular." delay={0.3} />
            <FeatureCard icon={<Shield />} title="Finiquitos" description="Generador inteligente de preavisos e indemnizaciones por despido o renuncia." delay={0.4} />
            <FeatureCard icon={<Smartphone />} title="Portal Empleado" description="Cada colaborador tiene su app para descargar recibos y ver sus vacaciones." delay={0.5} />
            <FeatureCard icon={<LayoutDashboard />} title="Reportes REI" description="Genera el archivo TXT para el IPS y las planillas del MTESS con un solo clic." delay={0.6} />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-40 bg-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(0,166,81,0.03),transparent)] -z-10"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-32"
          >
            <h2 className="text-orange-500 font-black uppercase text-xs tracking-[0.3em] mb-6">Expertos Hablando</h2>
            <h3 className="text-5xl md:text-7xl font-black text-gray-900 mb-10 tracking-tight">Lo que dicen <br />los contadores</h3>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[
              { n: 'Ana Rodriguez', c: 'Contadora Senior', r: 'SueldOK me ahorró 20 horas de trabajo mensual. El cálculo de IPS es perfecto.' },
              { n: 'Carlos Benítez', c: 'Gerente HR', r: 'La mejor inversión que hicimos para nuestras 5 sucursales. El soporte es impecable.' },
              { n: 'Laura Martínez', c: 'Consultante RRHH', r: 'Por fin un sistema que entiende la ley de Paraguay y es visualmente hermoso.' }
            ].map((t, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className="card-premium group"
              >
                <div className="flex gap-1 mb-8">
                  {[...Array(5)].map((_, i) => <Star key={i} size={20} className="fill-orange-400 text-orange-400" />)}
                </div>
                <p className="text-gray-700 font-medium italic text-2xl mb-10 leading-relaxed group-hover:text-gray-900 transition-colors">"{t.r}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 bg-gradient-to-br from-gray-100 to-gray-200 rounded-full shadow-inner"></div>
                  <div>
                    <p className="font-black text-gray-900 text-lg">{t.n}</p>
                    <p className="text-sm text-gray-400 font-bold uppercase tracking-widest">{t.c}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="planes" className="py-40 bg-gray-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-primary/20 rounded-full blur-[160px] animate-pulse-soft -z-0"></div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto mb-32"
          >
            <h3 className="text-5xl md:text-7xl font-black text-white mb-8 tracking-tighter">Inversión para tu tranquilidad</h3>
            <p className="text-white/60 text-xl font-medium">Planes que crecen con tu empresa.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-10 max-w-6xl mx-auto items-end">
            <PricingCard
              title="Semilla"
              price="GRATIS"
              features={["Hasta 5 Empleados", "Liquidaciones Básicas", "Soporte Comunitario"]}
              delay={0.1}
            />
            <PricingCard
              title="Crecimiento"
              price="Gs. 150.000"
              period="/mes"
              highlight
              features={["Hasta 50 Empleados", "Portal del Empleado", "Control de Asistencia", "Soporte Prioritario"]}
              delay={0}
            />
            <PricingCard
              title="Corporativo"
              price="Gs. 450.000"
              period="/mes"
              features={["Empleados Ilimitados", "Multitenancy", "API Access", "Acceso Contadores"]}
              delay={0.2}
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-40 bg-white">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-24"
          >
            <h2 className="text-accent font-black uppercase text-xs tracking-[0.3em] mb-6">Dudas Comunes</h2>
            <h3 className="text-5xl md:text-7xl font-black text-gray-900 tracking-tight">FAQ</h3>
          </motion.div>
          <div className="space-y-6">
            <FAQItem q="¿Es compatible con el REI del IPS?" a="Sí, SueldOK genera el archivo TXT oficial listo para subir a la plataforma del IPS sin errores." />
            <FAQItem q="¿Puedo usarlo si tengo menos de 5 empleados?" a="¡Claro! El plan Semilla es perpetuamente gratuito para fomentar el crecimiento de las PyMEs." />
            <FAQItem q="¿Los datos cumplen con la ley paraguaya?" a="Absolutamente. Todos los cálculos siguen estrictamente el código laboral y reglamentaciones vigentes del MTESS." />
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-40 px-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto glass-dark rounded-[4rem] p-16 md:p-32 relative overflow-hidden text-center"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary opacity-30 -z-10 animate-pulse-soft"></div>
          <h2 className="text-5xl md:text-8xl font-black text-white mb-12 leading-[0.9] tracking-tighter">¿Liquidadas hoy? <br />Hazlo con SueldOK.</h2>
          <p className="text-white/70 text-xl md:text-2xl mb-16 max-w-2xl mx-auto font-medium">Únete a cientos de empresas que ya transformaron sus RRHH.</p>
          <motion.a
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            href="https://sueldok.vercel.app"
            className="btn-premium text-2xl px-16 py-8 inline-flex shadow-[0_20px_60px_-15px_rgba(0,166,81,0.5)]"
          >
            Crear Cuenta Gratis
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}

const FeatureCard = ({ icon, title, description, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className="card-premium group"
  >
    <div className="w-16 h-16 bg-primary/5 text-primary rounded-[1.5rem] flex items-center justify-center mb-10 group-hover:bg-primary group-hover:text-white group-hover:rotate-6 transition-all duration-500 shadow-inner">
      {React.cloneElement(icon, { size: 28 })}
    </div>
    <h4 className="text-2xl font-black mb-6 group-hover:text-primary transition-colors tracking-tight">{title}</h4>
    <p className="text-gray-500 leading-relaxed text-lg font-medium">{description}</p>
  </motion.div>
);

const PricingCard = ({ title, price, period, features, highlight, delay }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay }}
    className={`p-10 rounded-[3rem] transition-all duration-700 ${highlight ? 'bg-white shadow-[0_40px_100px_-20px_rgba(0,166,81,0.2)] scale-110 z-10 border-4 border-primary/20' : 'bg-white/5 border border-white/10 text-white hover:border-white/20'}`}
  >
    {highlight && <div className="bg-primary text-white text-[10px] font-black uppercase tracking-[0.2em] py-1.5 px-6 rounded-full inline-block mb-8 animate-pulse">RECOMENDADO</div>}
    <h4 className={`text-2xl font-black mb-4 ${highlight ? 'text-gray-900' : 'text-white'}`}>{title}</h4>
    <div className="mb-10">
      <span className={`text-5xl font-black tracking-tighter ${highlight ? 'text-primary' : 'text-white'}`}>{price}</span>
      {period && <span className={`${highlight ? 'text-gray-400' : 'text-white/40'} text-lg`}>{period}</span>}
    </div>
    <ul className="space-y-6 mb-12">
      {features.map((f, i) => (
        <li key={i} className={`flex items-center gap-4 font-bold text-sm ${highlight ? 'text-gray-600' : 'text-white/70'}`}>
          <div className="bg-primary/10 p-1 rounded-full"><Check size={16} className="text-primary" strokeWidth={4} /></div>
          {f}
        </li>
      ))}
    </ul>
    <motion.a
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      href="https://app.sueldok.com"
      className={`w-full py-5 rounded-2xl font-black text-center block transition-all ${highlight ? 'btn-premium' : 'bg-white/10 text-white hover:bg-white/20'}`}
    >
      Seleccionar Plan
    </motion.a>
  </motion.div>
);

const FAQItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={false}
      className={`card-premium !p-0 overflow-hidden transition-all duration-500 ${open ? 'ring-2 ring-primary/20 shadow-2xl' : ''}`}
    >
      <button onClick={() => setOpen(!open)} className="w-full p-10 flex justify-between items-center text-left hover:bg-gray-50/50 transition-colors">
        <span className="text-2xl font-black text-gray-900 tracking-tight">{q}</span>
        <motion.div animate={{ rotate: open ? 180 : 0 }} className="p-2 glass-premium rounded-xl text-primary"><ChevronDown size={24} /></motion.div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <div className="p-10 pt-0 text-gray-500 text-xl leading-relaxed font-medium">{a}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

function App() {
  return (
    <Router>
      <div className="min-h-screen selection:bg-primary/20 selection:text-primary font-sans antialiased text-gray-900">
        <ScrollToTop />
        <Navigation />
        <main>
          <Routes>
            <Route path="/" element={<LandingHome />} />
            <Route path="/terminos" element={<Terms />} />
            <Route path="/privacidad" element={<Privacy />} />
          </Routes>
        </main>
        <WhatsAppWidget />
        <footer className="py-32 bg-mesh border-t border-gray-100 overflow-hidden relative">
          <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent"></div>
          <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <img src="/logo.png" className="h-16 mx-auto mb-10 opacity-90" alt="SueldOK" />
              <p className="text-gray-500 text-xl font-bold mb-2">La tranquilidad de pagar bien</p>
              <p className="text-gray-400 text-sm font-medium mb-16 italic">© 2024 SueldOK - IntelliHouse Soluciones E.A.S.</p>
              <div className="flex flex-wrap justify-center gap-10 text-xs font-black text-gray-400 uppercase tracking-[0.3em]">
                <Link to="/terminos" className="hover:text-primary transition-colors">Términos</Link>
                <Link to="/privacidad" className="hover:text-primary transition-colors">Privacidad</Link>
                <a href="mailto:hola@sueldok.com" className="hover:text-primary transition-colors">Soporte</a>
                <a href="https://app.sueldok.com" className="hover:text-primary transition-colors text-primary">App Login</a>
              </div>
            </motion.div>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;
