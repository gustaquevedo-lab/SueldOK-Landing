import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Privacy() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-32 bg-white">
            <Link to="/" className="inline-flex items-center text-primary hover:text-primary-dark mb-8 font-medium transition-colors">
                <ArrowLeft className="mr-2" size={20} /> Volver al Inicio
            </Link>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Política de Privacidad</h1>
            <div className="prose prose-lg prose-blue max-w-none text-gray-600">
                <p className="mb-4"><strong>Última actualización:</strong> {new Date().toLocaleDateString()}</p>
                <p className="mb-8">
                    En SueldOK, un servicio provisto y gestionado por la firma <strong>IntelliHouse Soluciones E.A.S.</strong> (RUC 80144114-5), con sede corporativa en la ciudad de Pedro Juan Caballero, Paraguay, nos tomamos con absoluta rigurosidad la privacidad y seguridad de los datos corporativos de nuestros clientes y los de sus respectivos colaboradores.
                    Para consultas: <a href="mailto:contacto@sueldok.com" className="text-primary hover:underline font-medium">contacto@sueldok.com</a>
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">1. Recopilación de Información</h2>
                <p className="mb-4">Recopilamos exclusivamente la información necesaria y pertinente para brindar el servicio de liquidación de salarios y gestión de RR.HH, la cual incluye:</p>
                <ul className="list-disc pl-6 mb-4 space-y-2">
                    <li>Datos de la empresa titular (Razón social, RUC, MTESS, y número patronal IPS).</li>
                    <li>Datos de los colaboradores provistos voluntariamente por la empresa dueña de los mismos (Nombres, número de cédula, salario, cargas familiares, historial de asistencia, reposos).</li>
                    <li>Datos estadísticos de uso general y cookies funcionales para mejorar la experiencia de navegación en nuestra plataforma.</li>
                </ul>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">2. Uso Sensible de la Información</h2>
                <p className="mb-4">SueldOK y sus operadores utilizan estos datos de forma estrictamente confidencial bajo acuerdos de No Divulgación (NDA) y exclusivamente para el propósito algorítmico y central del software: la gestión automatizada de recursos humanos, cálculos de salarios, IPS e impuestos.</p>
                <p className="mb-4">Bajo ninguna circunstancia, ni excepción alguna, IntelliHouse Soluciones E.A.S. venderá, alquilará, cederá ni comercializará los datos personales, salariales o de desempeño de las empresas o sus empleados a terceros u otras corporaciones.</p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">3. Alojamiento y Seguridad (Soberanía de Datos)</h2>
                <p className="mb-4">Todos los datos son procesados siguiendo elevados estándares informáticos de encriptación en reposo y en tránsito. Cumplimos con lineamientos internacionales y garantizamos que el acceso está protegido mediante estrictos controles de sesiones y control de acceso basado en roles (Role-Based Access Control, RBAC).</p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">4. Retención de Datos Contractuales</h2>
                <p className="mb-4">Retendremos la información de los usuarios únicamente mientras su cuenta o suscripción se mantenga activa y al día. Si un usuario (empresa) decide rescindir su contrato, podrá solicitar adicionalmente la purga o eliminación permanente de sus bases de datos en los servidores a través del canal de soporte.</p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">5. Actualizaciones y Modificaciones</h2>
                <p className="mb-4">IntelliHouse Soluciones E.A.S. se reserva la potestad de actualizar o expandir esta Política de Privacidad de acuerdo a nuevas leyes o implementaciones técnicas. Le notificaremos activamente sobre cambios sustanciales mediante alertas dentro del mismo software o vía el correo electrónico comercial registrado.</p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">6. Derechos del Usuario (Habeas Data)</h2>
                <p className="mb-4">En cumplimiento irrestricto de la Constitución Nacional y las leyes de la República del Paraguay, los clientes y titulares legítimos de los perfiles tienen pleno derecho a solicitar acceder, rectificar o eliminar íntegramente los datos personales almacenados en SueldOK, ejerciendo su derecho inalienable de Habeas Data mediante nuestros canales oficiales de contacto y validación de identidad.</p>
            </div>
        </div>
    );
}
