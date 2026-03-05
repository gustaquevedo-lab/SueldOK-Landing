import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Shield, Clock, Calculator, CheckCircle2, ArrowRight, Building, Users, Menu, X, Check, LayoutDashboard, Calendar } from 'lucide-react';

import Terms from './pages/Terms';
import Privacy from './pages/Privacy';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0 flex items-center">
            <img src="/logo_transparent.png" alt="SueldOK - La tranquilidad de pagar bien" className="h-16 md:h-20 w-auto object-contain hover:scale-105 transition-transform" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="/#features" className="text-gray-600 hover:text-primary font-medium transition-colors">Características</a>
            <a href="/#benefits" className="text-gray-600 hover:text-primary font-medium transition-colors">Beneficios</a>
            <a href="/#pricing" className="text-gray-600 hover:text-primary font-medium transition-colors">Planes</a>
            <div className="flex items-center gap-4 border-l border-gray-200 pl-8">
              <a href="https://app.sueldok.com" className="text-gray-600 hover:text-primary font-medium transition-colors">Iniciar sesión</a>
              <a href="https://app.sueldok.com" className="px-5 py-2.5 bg-primary text-white font-medium rounded-lg hover:bg-primary-dark transition-colors shadow-md hover:shadow-lg shadow-secondary/30">
                Empieza Gratis
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none"
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-b border-gray-100 shadow-xl absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-1">
            <a href="/#features" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-blue-50">Características</a>
            <a href="/#benefits" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-blue-50">Beneficios</a>
            <a href="/#pricing" onClick={() => setIsMenuOpen(false)} className="block px-3 py-3 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-blue-50">Planes</a>
            <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col gap-3 px-3">
              <a href="https://app.sueldok.com" className="block text-center w-full px-5 py-3 border border-gray-200 text-gray-700 font-medium rounded-lg hover:bg-gray-50">
                Iniciar sesión
              </a>
              <a href="https://app.sueldok.com" className="block text-center w-full px-5 py-3 bg-primary text-white font-medium rounded-lg shadow-md hover:bg-primary-dark shadow-secondary/30">
                Crear cuenta gratis
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

function Footer() {
  return (
    <footer className="bg-blue-50/50 text-gray-600 py-16 border-t border-blue-100 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="inline-block mb-6">
              <img src="/logo_transparent.png" alt="SueldOK - La tranquilidad de pagar bien" className="h-16 md:h-20 w-auto object-contain hover:scale-105 transition-transform mix-blend-multiply" />
            </Link>
            <p className="text-gray-500 text-sm max-w-sm mb-4">La plataforma SaaS líder en Paraguay para gestión de Recursos Humanos, liquidaciones y control de asistencia.</p>
            <p className="text-gray-500 text-xs max-w-sm mb-6">SueldOK es un producto de SaaS propiedad de IntelliHouse Soluciones E.A.S., RUC 80144114-5, ciudad de Pedro Juan Caballero.</p>
            <div className="text-sm text-gray-400">© {new Date().getFullYear()} SueldOK. Todos los derechos reservados.</div>
          </div>

          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Producto</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="/#features" className="hover:text-primary font-medium transition-colors">Características</a></li>
              <li><a href="/#pricing" className="hover:text-primary font-medium transition-colors">Precios</a></li>
              <li><a href="#" className="hover:text-primary font-medium transition-colors">Casos de Éxito</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-semibold mb-4">Legal</h4>
            <ul className="space-y-3 text-sm">
              <li><Link to="/terminos" className="hover:text-primary font-medium transition-colors">Términos y Condiciones</Link></li>
              <li><Link to="/privacidad" className="hover:text-primary font-medium transition-colors">Política de Privacidad</Link></li>
              <li><a href="mailto:contacto@sueldok.com" className="hover:text-primary font-medium transition-colors">contacto@sueldok.com</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

function LandingHome() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-white to-white -z-10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-700 font-medium text-sm mb-8 animate-fade-in-up">
            <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
            100% Adaptado a la Ley Laboral Paraguaya
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 tracking-tight mb-8">
            La Liquidación de Sueldos,<br className="hidden md:block" /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-dark to-primary">Automatizada.</span>
          </h1>
          <p className="mt-6 text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-10">
            Simplifica tu gestión de recursos humanos. Calcula nóminas, aguinaldos y finiquitos cumpliendo con el MTESS en minutos, no en horas.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="https://app.sueldok.com" className="w-full sm:w-auto px-8 py-4 bg-primary text-white font-semibold text-lg rounded-xl shadow-[0_8px_30px_rgba(0,166,81,0.3)] hover:shadow-[0_8px_30px_rgba(0,166,81,0.5)] hover:bg-primary-dark hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2">
              Empezar tu prueba gratis <ArrowRight size={20} />
            </a>
            <a href="#features" className="w-full sm:w-auto px-8 py-4 bg-white text-gray-700 border border-gray-200 font-semibold text-lg rounded-xl hover:bg-gray-50 transition-colors flex items-center justify-center">
              Ver características
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-500">No se requiere tarjeta de crédito • Configuración en 2 minutos</p>
        </div>

        {/* Mockup Image */}
        <div className="mt-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-primary to-blue-300 rounded-[2rem] blur opacity-20"></div>
          <div className="relative rounded-[2rem] bg-white ring-1 ring-gray-900/5 shadow-2xl overflow-hidden aspect-[16/9] bg-gray-100 flex items-center justify-center">
            <img
              src="/sueldok_hero_demo_final.webp"
              alt="Demostración de la plataforma SueldOK"
              className="w-full h-full object-cover object-top"
              style={{ minHeight: '100%' }}
            />
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section id="benefits" className="border-y border-gray-100 bg-gray-50 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-semibold text-gray-500 uppercase tracking-widest mb-6">Confiado por empresas y contadores en todo Paraguay</p>
          <div className="flex flex-wrap justify-center gap-12 sm:gap-20 opacity-50 grayscale">
            <h4 className="text-2xl font-bold font-serif">Empresa A</h4>
            <h4 className="text-2xl font-bold font-serif">Consultora B</h4>
            <h4 className="text-2xl font-bold font-serif">Grupo C</h4>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">Características Completas</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Todo lo que necesitas para tu RRHH</h3>
            <p className="text-lg text-gray-600">SueldOK centraliza la información de tus colaboradores y automatiza cálculos complejos para evitar errores contables.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={<Calculator />}
              title="Liquidaciones Automáticas"
              description="Calcula salarios, horas extras, IPS, y bonificaciones familiares automáticamente mes a mes."
            />
            <FeatureCard
              icon={<Shield />}
              title="Finiquitos y Aguinaldos"
              description="Generación exacta de finiquitos respetando preavisos e indemnizaciones. Cálculo de aguinaldo proporcional al instante."
            />
            <FeatureCard
              icon={<Calendar />}
              title="Gestión de Vacaciones"
              description="Lleva el control exacto de días correspondientes según antigüedad y los días ya usufructuados."
            />
            <FeatureCard
              icon={<Clock />}
              title="Biometría y Asistencia web"
              description="Control de entrada y salida con geolocalización. Entérate al instante de ausencias o llegadas tardías."
            />
            <FeatureCard
              icon={<Building />}
              title="Multisucursal"
              description="Organiza a tu personal por sucursales y centros de costo. Ideal para empresas en expansión."
            />
            <FeatureCard
              icon={<Users />}
              title="Portal del Empleado"
              description="Acceso privado para que tu equipo descargue recibos de sueldo y solicite permisos desde su celular."
            />
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">Planes y Precios</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Escala con Nosotros</h3>
            <p className="text-lg text-gray-600">Precios transparentes que se adaptan al tamaño de tu empresa.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Plan 1 */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow relative flex flex-col">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Emprendedor</h4>
              <p className="text-gray-500 text-sm mb-6">Para pequeñas empresas iniciando.</p>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-gray-900">Gs. 0</span>
                <span className="text-gray-500">/mes</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <PricingFeature text="Hasta 5 Empleados" />
                <PricingFeature text="Liquidaciones Básicas" />
                <PricingFeature text="1 Sucursal" />
                <PricingFeature text="Soporte por Email" />
              </ul>
              <a href="https://app.sueldok.com" className="w-full py-3 px-4 bg-gray-50 text-gray-900 font-semibold rounded-xl border border-gray-200 text-center hover:bg-gray-100 transition-colors">Empezar Gratis</a>
            </div>

            {/* Plan 2 */}
            <div className="bg-gray-900 rounded-3xl p-8 border border-gray-800 shadow-2xl relative transform md:-translate-y-4 flex flex-col">
              <div className="absolute top-0 right-6 transform -translate-y-1/2">
                <span className="bg-gradient-to-r from-primary to-secondary text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">Más Popular</span>
              </div>
              <h4 className="text-xl font-semibold text-white mb-2">Pymes</h4>
              <p className="text-gray-400 text-sm mb-6">El balance perfecto para crecimiento.</p>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-white">Gs. 150.000</span>
                <span className="text-gray-400">/mes</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <PricingFeature text="Hasta 50 Empleados" dark />
                <PricingFeature text="Multisucursal Incluida" dark />
                <PricingFeature text="Portal del Empleado Activo" dark />
                <PricingFeature text="Control Biométrico Web" dark />
                <PricingFeature text="Soporte Prioritario" dark />
              </ul>
              <a href="https://app.sueldok.com" className="w-full py-3 px-4 bg-primary text-white font-semibold rounded-xl text-center hover:bg-primary-dark transition-colors shadow-lg shadow-secondary/40">Iniciar Prueba de 14 Días</a>
            </div>

            {/* Plan 3 */}
            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-xl transition-shadow relative flex flex-col">
              <h4 className="text-xl font-semibold text-gray-900 mb-2">Corporativo</h4>
              <p className="text-gray-500 text-sm mb-6">Para empresas grandes y contadores.</p>
              <div className="mb-6">
                <span className="text-4xl font-extrabold text-gray-900">Gs. 450.000</span>
                <span className="text-gray-500">/mes</span>
              </div>
              <ul className="space-y-4 mb-8 flex-1">
                <PricingFeature text="Empleados Ilimitados" />
                <PricingFeature text="Múltiples Empresas (Multitenancy)" />
                <PricingFeature text="Exportación REI IPS" />
                <PricingFeature text="API y Webhooks (Próximamente)" />
              </ul>
              <a href="https://app.sueldok.com" className="w-full py-3 px-4 bg-gray-50 text-gray-900 font-semibold rounded-xl border border-gray-200 text-center hover:bg-gray-100 transition-colors">Contactar Ventas</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-primary py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">¿Listo para modernizar tu nómina?</h2>
          <p className="text-blue-100 text-xl mb-10">Únete a cientos de empresas que ya automatizan sus recursos humanos con SueldOK.</p>
          <a href="https://app.sueldok.com" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-primary font-bold text-lg rounded-xl shadow-[0_8px_30px_rgba(0,166,81,0.4)] hover:bg-gray-50 hover:scale-105 transition-all">
            Crear mi cuenta gratis
          </a>
        </div>
      </section>
    </>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen font-sans selection:bg-blue-100 selection:text-blue-900 scroll-smooth flex flex-col">
        <ScrollToTop />
        <Navigation />
        <main className="flex-grow pt-20">
          <Routes>
            <Route path="/" element={<LandingHome />} />
            <Route path="/terminos" element={<Terms />} />
            <Route path="/privacidad" element={<Privacy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

// Helper Components
function FeatureCard({ icon, title, description }) {
  return (
    <div className="p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:shadow-xl hover:bg-white transition-all duration-300 group">
      <div className="w-14 h-14 bg-blue-100 text-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-inner">
        {React.cloneElement(icon, { size: 28 })}
      </div>
      <h4 className="text-xl font-bold text-gray-900 mb-3">{title}</h4>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
}

function PricingFeature({ text, dark = false }) {
  return (
    <li className="flex items-start gap-3">
      <div className={`mt-0.5 rounded-full p-1 flex-shrink-0 ${dark ? 'bg-secondary/20 text-secondary-light' : 'bg-green-50 text-secondary'}`}>
        <Check size={14} className={dark ? 'text-secondary-light' : 'text-secondary'} />
      </div>
      <span className={dark ? 'text-gray-300' : 'text-gray-600'}>{text}</span>
    </li>
  );
}

export default App;
