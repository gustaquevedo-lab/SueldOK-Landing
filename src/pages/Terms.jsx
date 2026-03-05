import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export default function Terms() {
    return (
        <div className="max-w-4xl mx-auto px-4 py-32 bg-white">
            <Link to="/" className="inline-flex items-center text-primary hover:text-primary-dark mb-8 font-medium transition-colors">
                <ArrowLeft className="mr-2" size={20} /> Volver al Inicio
            </Link>
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 tracking-tight">Términos y Condiciones</h1>
            <div className="prose prose-lg prose-blue max-w-none text-gray-600">
                <p className="mb-4"><strong>Última actualización:</strong> {new Date().toLocaleDateString()}</p>
                <p className="mb-8">
                    SueldOK es un producto de Software as a Service (SaaS) propiedad exclusiva de <strong>IntelliHouse Soluciones E.A.S.</strong>, con RUC 80144114-5, domiciliada en la ciudad de Pedro Juan Caballero, Paraguay.
                    Email de contacto: <a href="mailto:contacto@sueldok.com" className="text-primary hover:underline font-medium">contacto@sueldok.com</a>
                </p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">1. Aceptación de los Términos</h2>
                <p className="mb-4">Al acceder y utilizar la plataforma SueldOK, usted acepta estar sujeto a estos Términos y Condiciones, los cuales se rigen bajo las leyes vigentes de la República del Paraguay. Si no está de acuerdo con alguna parte, no podrá acceder a nuestros servicios.</p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">2. Descripción del Servicio</h2>
                <p className="mb-4">SueldOK proporciona una plataforma en línea automatizada para la liquidación de salarios, gestión de recursos humanos y asistencia, diseñada de acuerdo a la legislación laboral paraguaya estandarizada por el Ministerio de Trabajo, Empleo y Seguridad Social (MTESS) y el Instituto de Previsión Social (IPS).</p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">3. Cuentas de Usuario y Seguridad</h2>
                <p className="mb-4">Para utilizar SueldOK, el usuario (empresa o empleador) debe registrarse proporcionando información veraz. El usuario es el único responsable de mantener la confidencialidad de sus credenciales de acceso y de cualquier actividad u operación que ocurra bajo su cuenta.</p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">4. Propiedad Intelectual</h2>
                <p className="mb-4">SueldOK, su código fuente, diseño, marca corporativa, eslogan y logo son propiedad intelectual estricta de <strong>IntelliHouse Soluciones E.A.S.</strong> Queda estrictamente prohibida la copia, reproducción, reventa o distribución sin nuestro consentimiento expreso por escrito.</p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">5. Limitación de Responsabilidad</h2>
                <p className="mb-4">SueldOK realiza los cálculos algorítmicos en base a la información introducida por el usuario y los parámetros legales vigentes. IntelliHouse Soluciones E.A.S. no se responsabiliza de forma directa ni solidaria por errores derivados de la carga incorrecta de datos por parte del usuario, omisiones, ni por multas laborales que pudieran surgir por mala fe u omisión de información ante entes reguladores (MTESS/IPS).</p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">6. Pagos, Tarifas y Suscripciones</h2>
                <p className="mb-4">El acceso completo o escalado a SueldOK requiere el pago de un plan de suscripción. Todos los montos expresados están en Guaraníes (Gs.) e incluyen los impuestos aplicables en Paraguay (IVA) conforme a las disposiciones de la Dirección Nacional de Ingresos Tributarios (DNIT).</p>

                <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-4">7. Jurisdicción y Disputas</h2>
                <p className="mb-4">Estos términos se rigen e interpretan según las leyes de la República del Paraguay. Cualquier disputa o reclamo legal será sometido de manera exclusiva a los tribunales ordinarios de la ciudad de Pedro Juan Caballero, renunciando expresamente el usuario a cualquier otro fuero o jurisdicción que pudiera corresponderle.</p>
            </div>
        </div>
    );
}
