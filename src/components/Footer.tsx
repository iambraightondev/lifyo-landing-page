import { Mail, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          
          {/* Columna 1: Logo y Slogan */}
          <div>
            <h3 className="text-3xl font-bold mb-4 bg-gradient-to-r from-emerald-400 to-blue-400 bg-clip-text text-transparent">
              Lifyo
            </h3>
            <p className="text-slate-400 leading-relaxed">
              Redefiniendo el acceso financiero para la nueva generación
            </p>
          </div>

          {/* Columna 2: Contacto */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-slate-300">Contacto</h4>
            <div className="space-y-3">
              <a
                href="mailto:hola@lifyo.co"
                className="flex items-center gap-3 text-slate-400 hover:text-emerald-400 transition-colors group"
              >
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-emerald-500/10 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span>hola@lifyo.co</span>
              </a>
              <a
                href="mailto:carreras@lifyo.co"
                className="flex items-center gap-3 text-slate-400 hover:text-emerald-400 transition-colors group"
              >
                <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-emerald-500/10 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <span>carreras@lifyo.co</span>
              </a>
            </div>
          </div>

          {/* Columna 3: Síguenos */}
          <div>
            <h4 className="text-lg font-semibold mb-4 text-slate-300">Síguenos</h4>
            <a
              href="https://www.linkedin.com/company/lifyo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 text-slate-400 hover:text-blue-400 transition-colors group"
            >
              <div className="w-10 h-10 bg-slate-800 rounded-lg flex items-center justify-center group-hover:bg-blue-500/10 transition-colors">
                <Linkedin className="w-5 h-5" />
              </div>
              <span>LinkedIn</span>
            </a>
          </div>
        </div>

        {/* Sección de Nota Legal y Derechos de Autor*/}
        <div className="border-t border-slate-800 pt-8">
          
          {/* Nota Legal Temporal para Inversores */}
          <p className="text-center text-xs text-slate-500 mb-2 max-w-4xl mx-auto leading-relaxed">
            <strong>Nota Legal Temporal:</strong> Lifyo se encuentra en proceso de estructuración legal y regulatoria en Colombia. 
            Toda la información presentada en este sitio web es con fines informativos y de inversión, y no constituye 
            una oferta de venta o una solicitud de inversión formal.
          </p>

          {/* Derechos de Autor */}
          <p className="text-center text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} Lifyo. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}