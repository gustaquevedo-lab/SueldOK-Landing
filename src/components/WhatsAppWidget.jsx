import React, { useState } from 'react';
import { MessageCircle, X, Send, CheckCircle2 } from 'lucide-react';

const WhatsAppWidget = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const message = encodeURIComponent(`Hola SueldOK! Soy ${name} (${phone}). Me gustaría recibir una asesoría sobre el sistema.`);
        window.open(`https://wa.me/595994516360?text=${message}`, '_blank');
        setIsOpen(false);
        setName('');
        setPhone('');
    };

    return (
        <div className="fixed bottom-10 right-10 z-[100] flex flex-col items-end pointer-events-none">
            {/* Chat Window */}
            <div
                className={`mb-6 w-[360px] glass rounded-[2.5rem] shadow-[0_25px_70px_-15px_rgba(0,0,0,0.2)] overflow-hidden transition-all duration-700 cubic-bezier(0.16, 1, 0.3, 1) transform origin-bottom-right pointer-events-auto ${isOpen ? 'scale-100 opacity-100 translate-y-0' : 'scale-75 opacity-0 translate-y-20 pointer-events-none'
                    }`}
            >
                {/* Header with Glassmorphism */}
                <div className="relative p-8 bg-gradient-to-br from-primary via-primary-dark to-primary/80 overflow-hidden">
                    {/* Abstract circles decoration */}
                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16"></div>
                    <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full blur-2xl -ml-12 -mb-12"></div>

                    <button
                        onClick={() => setIsOpen(false)}
                        className="absolute top-6 right-6 w-8 h-8 rounded-full flex items-center justify-center bg-black/10 text-white/80 hover:bg-black/20 hover:text-white transition-all"
                    >
                        <X size={18} />
                    </button>

                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg transform -rotate-6">
                                <MessageCircle size={30} className="text-primary" />
                            </div>
                            <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#25D366] border-2 border-white rounded-full"></div>
                        </div>
                        <div>
                            <h3 className="font-bold text-xl text-white font-display">SueldOK Support</h3>
                            <div className="flex items-center gap-1.5 text-white/80 text-sm">
                                <div className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse"></div>
                                En línea para ayudarte
                            </div>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="p-8 space-y-5 bg-white/40">
                    <p className="text-gray-500 text-sm leading-relaxed mb-2">
                        Hola 👋, déjanos tu contacto para que un especialista te asesore sobre cómo automatizar tus pagos.
                    </p>

                    <div className="space-y-4">
                        <div className="relative">
                            <input
                                type="text"
                                required
                                placeholder="Tu nombre completo"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full pl-4 pr-4 py-4 bg-white/80 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all text-gray-800 shadow-sm"
                            />
                        </div>

                        <div className="relative">
                            <input
                                type="tel"
                                required
                                placeholder="Tu WhatsApp (Nro de Celular)"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                className="w-full pl-4 pr-4 py-4 bg-white/80 border border-gray-100 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all text-gray-800 shadow-sm"
                            />
                        </div>
                    </div>

                    <button
                        type="submit"
                        className="btn-premium w-full py-4 text-lg mt-2"
                    >
                        <Send size={18} />
                        Iniciar Conversación
                    </button>

                    <div className="flex justify-center items-center gap-2 text-[10px] text-gray-400 font-medium uppercase tracking-[0.1em]">
                        <CheckCircle2 size={12} className="text-primary/50" />
                        Privacidad Garantizada
                    </div>
                </form>
            </div>

            {/* Premium Bubble Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className={`w-20 h-20 rounded-[2rem] flex items-center justify-center text-white shadow-[0_20px_50px_-10px_rgba(0,166,81,0.5)] transition-all duration-500 transform hover:scale-110 active:scale-95 pointer-events-auto ${isOpen ? 'bg-gray-900 rotate-90 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.3)]' : 'bg-[#25D366] hover:rotate-[360deg]'
                    }`}
                style={{
                    animation: !isOpen ? 'pulse-soft 2.5s infinite' : 'none',
                    borderRadius: isOpen ? '50%' : '1.7rem'
                }}
            >
                {isOpen ? <X size={36} /> : (
                    <div className="relative">
                        <svg viewBox="0 0 24 24" className="w-10 h-10 fill-current">
                            <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.174.346-.217.462-.217s.231.001.332.005c.109.004.253-.04.398.308.145.347.491 1.2.534 1.288.044.087.072.188.014.303-.058.116-.087.188-.174.289l-.26.303c-.087.101-.177.211-.077.382.1.171.444.732.953 1.186.656.584 1.21.766 1.383.852s.303.058.419-.072c.116-.13.506-.593.641-.796.135-.203.27-.171.456-.101.186.071 1.176.554 1.379.656.202.101.337.151.387.236.05.084.05.491-.094.896z" />
                        </svg>
                    </div>
                )}
            </button>
        </div>
    );
};

export default WhatsAppWidget;
