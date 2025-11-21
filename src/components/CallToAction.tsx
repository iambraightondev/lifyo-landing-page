import { Linkedin } from 'lucide-react';
import { useState } from 'react';
import { createLead } from '../services/LeadService';

export default function CallToAction() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Validación básica de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if (!email || !emailRegex.test(email)) {
      setError('Por favor ingresa un email válido.');
      return;
    }

    setLoading(true);
    setError('');

    try {
      await createLead({ email });
      setSubmitted(true);
      setEmail('');
    } catch (err: any) {
      setError(err.message || 'Ocurrió un error al registrar tu email');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="cta" className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-2xl p-8 md:p-12 shadow-2xl">
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 leading-tight">
            ¡Únete a nuestra lista de espera y experimenta Lifyo primero!
          </h2>

          <p className="text-xl text-slate-200 mb-10 max-w-3xl mx-auto font-medium">
            Regístrate con tu email y sé de los primeros en acceder a nuestra plataforma.
          </p>

          {!submitted ? (
            <div className="flex flex-col items-center">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-2 w-full"
              >
                <input
                  type="email"
                  placeholder="example@lifyo.co"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full sm:w-1/2 px-6 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 text-gray-900"
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="px-8 py-3 bg-emerald-500 text-slate-900 font-bold text-base rounded-full shadow-xl transition duration-300 transform hover:scale-105 hover:bg-emerald-400 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Enviando...' : 'Unirse ahora'}
                </button>
              </form>
              {/* Mensaje de error debajo del form */}
              {error && <p className="text-red-400 mt-2 text-center">{error}</p>}
            </div>
          ) : (
            <p className="text-lg text-emerald-300 mb-6">
              <b>¡Gracias! Te hemos agregado a nuestra lista de espera.</b>
            </p>
          )}

          <p className="text-lg text-slate-200 mb-4">
            También puedes seguirnos en redes sociales:
          </p>
          <div className="flex justify-center">
            <a
              href="https://www.linkedin.com/company/lifyo"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-8 py-3 bg-emerald-500 text-slate-900 font-bold text-base rounded-full shadow-xl transition duration-300 transform hover:scale-105 hover:bg-emerald-400"
            >
              <Linkedin className="w-5 h-5" />
              Síguenos en LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
